<template>
  <!-- am/paper/list -->
  <!-- exam/paper/list -->
  <!-- D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\exam\paper\list.vue -->
  <div class="app-container">
    <!-- <div :key="item.id" v-for="item in this.subjects">
      {{item}}
    </div> -->
    <el-form :model="queryParam" ref="queryForm" :inline="true">
      <el-form-item class="inputLabel" label="题目ID：">
        <el-input v-model="queryParam.id" clearable></el-input>
      </el-form-item>
      <!-- 查询不了 题干 -->
      <!-- <el-form-item label="题干">
        <el-input v-model="queryParam.content" clearable></el-input>
      </el-form-item> -->
      <el-form-item label="年级：">
        <el-select v-model="queryParam.level" placeholder="年级" @change="levelChange" clearable>
          <el-option v-for="item in levelEnum" :key="item.key" :value="item.key" :label="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学科：" >
        <el-select v-model="queryParam.subjectId"  clearable>
          <el-option v-for="item in subjectFilter" :key="item.id" 
          :value="item.id" :label="item.name+' ( '+item.levelName+' )'"></el-option>
        </el-select>
      </el-form-item>

       <el-form-item label="名字">
          <el-input v-model="queryParam.name" clearable  placeholder="名字"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">查询</el-button>
        <router-link :to="{path:'/exam/paper/edit'}" class="link-left">
          <el-button type="primary">添加</el-button>
        </router-link>
        <el-button type="primary" @click="autoPaper">自动组卷</el-button>
      </el-form-item>
        
    </el-form>





    <!-- <div class="frostedGlassPlace">
            <div class="frostedGlassCard">
                <span class="titleName">GOAT</span>
                <P class="cardContentText">2021_2_15/bilibili</P>
            </div>
            <div class="orangeBall"></div>
            <div class="blueBall"></div>
        </div> -->

        <!-- paper/list.vue -->
    <el-table
    @cell-click="handleCellClick"
     v-loading="listLoading" :data="tableData" border fit highlight-current-row style="width: 100%">
      <!-- <el-table-column prop="id" label="Id" width="90px"/> -->
      <el-table-column prop="subjectId" label="学科" :formatter="subjectFormatter" width="120px" />
      <el-table-column prop="name" label="名称"  />
      <el-table-column prop="createTime" label="创建时间" width="160px"/>
      <!-- paperType -->
      <el-table-column prop="paperType"  :formatter="paperTypeFormatter" label="试卷类型" width="160px"/>
      <!-- questionCount -->
      <!-- questionCount -->
      <el-table-column prop="questionCount"  label="问题个数" width="160px"/>
      <el-table-column  label="操作" align="center"  width="160px">
        <template slot-scope="{row}">
          <!-- Statistics -->
          <el-button size="mini" 
          @click="$router.push({path:'/exam/paper/Statistics',query:{examPaperId:row.id}})" >统计</el-button>
          <!-- D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\exam\paper\Statistics.vue -->
          <el-button size="mini" @click="$router.push({path:'/exam/paper/edit',query:{id:row.id}})" >编辑</el-button>
          <el-button size="mini" type="danger"  @click="deletePaper(row)" class="link-left">删除</el-button>
          <!-- examPaperId -->
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="queryParam.pageIndex" :limit.sync="queryParam.pageSize"
                @pagination="search"/>

                <!-- showStuEchartsByType -->
    <div id="showStuEchartsByType"   style="width: 100%;height:400px;"></div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import Pagination from '@/components/Pagination'
import examPaperApi from '@/api/examPaper'
// questionApi
import questionApi from '@/api/question'
// D:\proj\bishe\exam-vue-admin3\src\api\question.js
import { groupBy } from '@/utils/SqlLike'
import {showEchartsById,showEchartsByConf} from '@/utils/EchartsUtil'
import Common  from '@/utils/Common'
export default {
  components: { Pagination },
  data () {
    return {
      queryParam: {
        id: null,
        // level: null,
        level: 1,
        // 这里没有默认的1  就不显示下拉 
        subjectId: null,
        pageIndex: 1,
        pageSize: 10
      },
      subjectFilter: null,
      listLoading: true,
      tableData: [],
      total: 0
    }
  },
  created () {
    this.initSubject()
    this.search()

    

    console.log("this.subjectFilter");
    console.log(this.subjectFilter);
    console.log("this.exam");
    console.log(this.exam);
  },
  mounted () {
    this.subjectFilter = this.subjects.filter(data => data.level === this.queryParam.level)
    console.log("this.subjects");
    console.log(this.subjects);
  },
  methods: {
 // 点击判断显示
 handleCellClick(row, column, cell, event) {
  console.log("row");
  console.log(row);
  console.log("column");
  console.log(column);

  console.log("cell");
  console.log(cell);
  console.log("event");
  console.log(event);
      //判断表头，根据不同的表头展示不同的input
      if (column.label == "佣金") {
        row.show1 = true;
        // 需要注意row是什么
        this.$set(this.dataList, row.index, row);
        console.log(row);
        return false;
      }
    },


// ————————————————
// 版权声明：本文为CSDN博主「Y4258」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/Y4258/article/details/113243876

     // status字段映射
     paperTypeFormatter(row, column) {
      return  this.getPaperTypeName(row.paperType)
        // if (row.status === 1) {
        //   return '状态1'
        // } else  if (row.status === 2) {
        //   return '状态2'
        // } else  if (row.status === 3) {
        //   return '状态3'
        // } else  if (row.status === 4) {
        //   return '状态4'
        // } else  if (row.status === 5) {
        //   return '状态5'
        // } else {
        //   return '未知状态'
        // }
      },
//     getPaperTypeName(key){
//  for(let  i in this.paperTypeEnum){
//   if(i==key){
//     return this.paperTypeEnum[i]
//   }
//  }
//     },

    getPaperTypeName(key){
 for(let  o of this.paperTypeEnum){
  if(o.key==key){
    return o.value

  }
 }
    },
    // http://localhost:8002/#/exam/paper/list
    groupByEchartsShow(list){

      console.log(  "this.paperTypeEnum");
      console.log(  this.paperTypeEnum);
      let groupBy_paperName = groupBy(list, (link) => {
          return link.paperName;
        });

        let groupBy_paperType = groupBy(list, (link) => {
          return link.paperType;
        });

        // paperType

        let systemScoreSumListByType = [];
        let  paperScoreSumListByType =[]
        let  avgScoreGotListByType =[]
              let  questionCountListByType =[]
        
 let typeNameList=[]
        let  types=[]
        console.log("groupBy_paperType");
        console.log(groupBy_paperType);
        for (let i in groupBy_paperType) {
          let o = groupBy_paperType[i];
          // let  typeName=Common.paperTypeMap[i]
          // let  typeName=   this.subjectFormatter(null,null,i,null)
          let  typeName=    this.getPaperTypeName(i)
          if(!typeName){
            console.log("typeName not found");
            console.log("i");
            console.log(i);
          }
        
          console.log("o");
          console.log(o);
          // this.subjects. 
          typeNameList.push(typeName)
          types.push(i);
          let sum = 0;
          let systemScoreSum = 0;
          let paperScoreSum = 0;
          let count = 0;
          let questionCountSum =0
          for (let oo of o) {
            // sum+=oo.userScore;
            // sum+=oo.userScore;
            // sum += parseFloat(oo.userScore);

            // systemScoreSum += parseFloat(oo.systemScore);

            // paperScoreSum += parseFloat(oo.paperScore);
            // questionCount
            questionCountSum += parseFloat(oo.  questionCount);
       
            count++;
          }
          // console.log("sum");
          // console.log(sum);
          // console.log("count");
          // console.log(count);
          // console.log("sum/count");
          // console.log(sum / count);
          // o.sum = sum;
          // o.count = count;
          // o.avg = sum / count;
          // o.systemScoreSum = systemScoreSum;
          // o.paperScoreSum = paperScoreSum;
          // // echarts 统计 总分
          // o.avgScoreGot=systemScoreSum/paperScoreSum
          // paperScoreSumListByType.push(paperScoreSum);
          // systemScoreSumListByType.push(systemScoreSum);
          // avgScoreGotListByType.push(o.avgScoreGot);
          questionCountListByType.push(questionCountSum)
        }

       
        
        console.log("groupBy_paperName");
        console.log(groupBy_paperName);
        // userScore
        // js 数据分析

        let names = [];
        let systemScoreSumList = [];
        let  paperScoreSumList=[]
        let  avgScoreGotList=[]
        for (let i in groupBy_paperName) {
          let o = groupBy_paperName[i];
          names.push(i);
          let sum = 0;
          let systemScoreSum = 0;
          let paperScoreSum = 0;
          let count = 0;
          for (let oo of o) {
            // sum+=oo.userScore;
            // sum+=oo.userScore;
            sum += parseFloat(oo.userScore);

            systemScoreSum += parseFloat(oo.systemScore);

            paperScoreSum += parseFloat(oo.paperScore);

       
            count++;
          }
          // console.log("sum");
          // console.log(sum);
          // console.log("count");
          // console.log(count);
          // console.log("sum/count");
          // console.log(sum / count);
          o.sum = sum;
          o.count = count;
          o.avg = sum / count;
          o.systemScoreSum = systemScoreSum;
          o.paperScoreSum = paperScoreSum;
          // echarts 统计 总分
          o.avgScoreGot=systemScoreSum/paperScoreSum
          paperScoreSumList.push(paperScoreSum);
          systemScoreSumList.push(systemScoreSum);
          avgScoreGotList.push(o.avgScoreGot);
        }

        console.log("groupBy_paperName");
        console.log(groupBy_paperName);

        // console.log("systemScoreSumList");
        //         console.log(systemScoreSumList);

        // this.showStuEcharts(names, systemScoreSumList);
        // this.showStuEcharts(names, paperScoreSumList);
        // this.showStuEcharts(names, avgScoreGotList);
        // this.showStuEchartsById(types, systemScoreSumListByType,"showStuEchartsByType");
        // this.
        // questionCountListByType
        // showEchartsById(typeNameList, questionCountListByType,"showStuEchartsByType");
//         names=conf.names;
//   datas=conf.datas;
//   let  echartsId=conf.echartsId;
// conf.title,
//  conf.valName,
// showStuEchartsByType
// showStuEchartsByConf
let conf={
  names:typeNameList,
  datas:questionCountListByType,
  echartsId:"showStuEchartsByType",
  title:"题目统计 试卷类型",
  valName:"个数",
}
// 试卷统计 
// 文档：export function  showEchartsByConf(c...
// 链接：http://note.youdao.com/noteshare?id=ad4db5738cf075076b42f53b804c8f8f&sub=F7BBCFDE71154E47A5C4869CDFEA841D
        showEchartsByConf(conf);
        // showEchartsById(typeNameList, systemScoreSumListByType,"showStuEchartsByType");
        // showEchartsById
        // questionCountListByType
    },
    submitForm () {
      this.queryParam.pageIndex = 1
      this.search()
    },
    autoPaperGo(){

      this.$router.push('/exam/paper/AutoPaper')
    },
    autoPaper(){
      this.autoPaperGo()
      return

      questionApi.autoPaper({
  "analyze": "String",
  "title": "String",
  "difficultLow": 0,
  "difficultHigh": 0,
  "items": [],
  "id": 0,
  "quesContent": "String",
  "questionType": 0,
  "subjectId": 0,
  "score": 0,
  "gradeLevel": 0,
  "difficult": 3,
  "correct": "String",
  "infoTextContentId": 0,
  "createUser": 0,
  "status": 0,
  "createTime":null,
  "deleted": false,
  "pageNumber": 0,
  "pageSize": 0
}).then(re => {
        if (re.code === 1) {
          this.$message.success(re.message)
        } else {
          this.$message.error(re.message)
        }
      })
    },
    search () {
      this.listLoading = true
      examPaperApi.pageList(this.queryParam).then(data => {
        const re = data.response
        this.tableData = re.list
        this.groupByEchartsShow(re.list)
        this.total = re.total
        this.queryParam.pageIndex = re.pageNum
        this.listLoading = false
      })
    },
    deletePaper (row) {
      let _this = this
      examPaperApi.deletePaper(row.id).then(re => {
        if (re.code === 1) {
          _this.search()
          _this.$message.success(re.message)
        } else {
          _this.$message.error(re.message)
        }
      })
    },
    levelChange () {
      this.queryParam.subjectId = null
    
      this.subjectFilter = this.subjects.filter(data => data.level === this.queryParam.level)

      console.log( "this.subjectFilter");
      console.log( this.subjectFilter);
      this.search()
    },
    subjectFormatter  (row, column, cellValue, index) {
      // console.log("cellValue");
      // console.log(cellValue);
      return this.subjectEnumFormat(cellValue)
    },
    // vuex  跳转 
    ...mapActions('exam', { initSubject: 'initSubject' })
  },
  computed: {
    ...mapGetters('enumItem', ['enumFormat']),
    ...mapState('enumItem', {
      levelEnum: state => state.user.levelEnum
    }),
    ...mapGetters('exam', ['subjectEnumFormat']),
    ...mapState('enumItem', {
      questionTypeEnum: state => state.exam.question.typeEnum,
      paperTypeEnum: state => {
        console.log("state.exam.examPaper paperTypeEnum");
        console.log(state.exam.examPaper);
        return state.exam.examPaper.paperTypeEnum},
      levelEnum: state => state.user.levelEnum
    }),

    // ...mapState('exam', { subjects: state =>{
    //   console.log("state.subjects");
    //   console.log(state.subjects);
    //   return state.subjects }})
      ...mapState('exam', { subjects: state =>state.subjects })
  }
}
</script>

<style scoped>
  /* 给背景一个渐变 */
        /* body{
            display: flex;
            justify-content: center;
            
            background:linear-gradient(
                to left,
                rgb(238, 92, 92),
                rgb(154, 127, 250)) ;
        } */
        .Gradient{
        /* z-index: -10; */
        /* z-index: -100; */
        z-index: -1010;
            display: flex;
            justify-content: center;
            /* 给背景一个渐变 */
            background:linear-gradient(
                to left,
                rgb(238, 92, 92),
                rgb(154, 127, 250)) ;
                /* height: 1000px; */
                height: 500px;
        }
        /* *{
            padding: 0;
            margin: 0;
        } */
        .frostedGlassPlace{
            position: relative;
            width: 400px;
            height: 250px;
            top: 150px;
        }
        /* frosted glass */
        /* frostedGlassCard */
        .frostedGlassCard{
            position: absolute;
            width: 400px;
            height: 250px;
            border-radius: 20px;
            /* 设置渐变 */
            background: linear-gradient(
                to right bottom,
                rgba(255,255,255,.6),
                rgba(255,255,255,.3),
                rgba(255,255,255,.2)
            );
            /* 重点：使元素背景模糊化 */
            backdrop-filter: blur(11px);
            /* 设置上高光和左高光，使其看起来更加逼真 */
            border-top: 1px solid rgba(255,255,255,.8);
            border-left: 1px solid rgba(255,255,255,.8);
        }
        .frostedGlassCard span{
            /* 设置文字的大小和粗细 */
            font: 900 50px '';
            position: absolute;
            top: 10px;
            left: 20px;
            color: rgba(0,0,0,.5);
            /* 设置文字阴影 */
            text-shadow: 1px 1px 3px rgba(255,255,255,.7);
        }
        .titleName{
              /* 设置文字的大小和粗细 */
              font: 900 50px '';
            position: absolute;
            top: 10px;
            left: 20px;
            color: rgba(0,0,0,.5);
            /* 设置文字阴影 */
            text-shadow: 1px 1px 3px rgba(255,255,255,.7);
        }

        .cardContentText{
            font: 900 25px '';
            position: absolute;
            bottom: 20px;
            right: 20px;
            color: rgba(255,255,255,.3);
            /* 设置字体间距 */
            letter-spacing: 3px;
        }
        /* 毛玻璃  frosted glass */
        .frostedGlassCard p{
            font: 900 25px '';
            position: absolute;
            bottom: 20px;
            right: 20px;
            color: rgba(255,255,255,.3);
            /* 设置字体间距 */
            letter-spacing: 3px;
        }
        /* 接下来设置两个球 */
        .orangeBall{
            width: 160px;
            height: 160px;
            border-radius: 50%;
            background-color: rgb(240,160,0);
            position: absolute;
            top: 140px;
            left: -40px;
            z-index: -99;
        }
        .blueBall{
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background-color: #77fdd7;
            position: absolute;
            top: -50px;
            left: 260px;
            z-index: -99;
        }

        /* label */
        .inputLabel .el-form-item__label{
          color: black;
        }
        .inputLabel label{
          color: black;
        }
</style>