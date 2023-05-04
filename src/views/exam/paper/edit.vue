<template>
  <div class="app-container">
    <el-form :model="form" ref="form" label-width="100px" v-loading="formLoading" :rules="rules">
      <el-form-item label="年级：" prop="level" required>
        <el-select v-model="form.level" placeholder="年级"  @change="levelChange">
          <el-option v-for="item in levelEnum" :key="item.key" :value="item.key" :label="item.value"></el-option>
        </el-select>
      </el-form-item>
      <!-- required  el-form-item -->
      <el-form-item label="学科：" prop="subjectId" >
        <el-select v-model="form.subjectId" placeholder="学科">
          <el-option v-for="item in subjectFilter" :key="item.id" :value="item.id"
                     :label="item.name+' ( '+item.levelName+' )'"></el-option>
        </el-select>
      </el-form-item>
      <!-- required -->
      <el-form-item label="试卷类型：" prop="paperType" >
        <el-select v-model="form.paperType" placeholder="试卷类型">
          <el-option v-for="item in paperTypeEnum" :key="item.key" :value="item.key" :label="item.value"></el-option>
        </el-select>
      </el-form-item>
      <!-- v-show="form.paperType===4" -->
      <!-- required  -->
      <el-form-item label="时间限制："
      v-if="form.paperType===4"
   >
        <el-date-picker v-model="form.limitDateTime" 
        value-format="yyyy-MM-dd HH:mm:ss" type="datetimerange"
                        range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <!-- required -->
      <el-form-item label="试卷名称："  prop="name" >
        <el-input v-model="form.name"/>
      </el-form-item>
      <!-- required -->
      <el-form-item :key="index" :label="'标题'+(index+1)+'：'" 
       v-for="(titleItem,index) in form.titleItems">
        <el-input v-model="titleItem.name" style="width: 80%"/>
        <el-button type="text" class="link-left" style="margin-left: 20px" size="mini"
         @click="addQuestion(titleItem)">
          添加题目
        </el-button>
        <el-button type="text" class="link-left" size="mini" 
        @click="form.titleItems.splice(index,1)">删除</el-button>
        <el-card class="exampaper-item-box" v-if="titleItem.questionItems.length!==0">
          <el-form-item :key="questionIndex" :label="'题目'+(questionIndex+1)+'：'"
                        v-for="(questionItem,questionIndex) in titleItem.questionItems" 
                        style="margin-bottom: 15px">
            <el-row>
              <el-col :span="23">
                <QuestionShow :qType="questionItem.questionType" :question="questionItem"/>
              </el-col>
              <!-- type="text" -->
               <el-col :span="20">
              <el-button  size="mini" 
                @click="editQuestion(questionItem)">editQuestion
                </el-button>
              </el-col>
              <el-col :span="1">
                <el-button type="text" size="mini" 
                @click="titleItem.questionItems.splice(questionIndex,1)">删除
                </el-button>
              </el-col>
            </el-row>
          </el-form-item>
        </el-card>
      </el-form-item>
      <!-- required -->
      <el-form-item label="建议时长：" prop="suggestTime" >
        <el-input v-model="form.suggestTime" placeholder="分钟"/>  分钟
      </el-form-item> 
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
        <el-button type="success" @click="addTitle">添加标题</el-button>
      </el-form-item>
    </el-form>
    <el-dialog :visible.sync="questionPage.showDialog"  width="70%">
      <el-form :model="questionPage.queryParam" ref="queryForm" :inline="true">
        <el-form-item label="ID：">
          <el-input v-model="questionPage.queryParam.id"  clearable></el-input>
        </el-form-item>
        <el-form-item label="题型：">
          <el-select v-model="questionPage.queryParam.questionType" clearable>
            <el-option v-for="item in questionTypeEnum" :key="item.key" 
            :value="item.key" :label="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="queryForm">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table v-loading="questionPage.listLoading" :data="questionPage.tableData"
                @selection-change="handleSelectionChange" border fit highlight-current-row style="width: 100%">
        <el-table-column type="selection" width="35"></el-table-column>
        <el-table-column prop="id" label="Id" width="60px"/>
        <el-table-column prop="questionType" label="题型" :formatter="questionTypeFormatter" width="70px"/>
        <el-table-column prop="shortTitle" label="题干" show-overflow-tooltip/>
      </el-table>
      <pagination v-show="questionPage.total>0" :total="questionPage.total"
                  :page.sync="questionPage.queryParam.pageIndex" :limit.sync="questionPage.queryParam.pageSize"
                  @pagination="search"/>
      <span slot="footer" class="dialog-footer">
          <el-button @click="questionPage.showDialog = false">取 消</el-button>
          <el-button type="primary" @click="confirmQuestionSelect">确定</el-button>
     </span>
    </el-dialog>
  </div>
</template>

<script>

import { mapGetters, mapState, mapActions } from 'vuex'
import Pagination from '@/components/Pagination'
import QuestionShow from '../question/components/Show'
import examPaperApi from '@/api/examPaper'
import questionApi from '@/api/question'
import {isNum} from '@/utils/validate'
// D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\utils
// isNum
export default {
  components: { Pagination, QuestionShow },
  data () {
    let paperName="数据结构"
    return {
      // id: null, level: 2, subjectId: 5, paperType: 1, 
      form: {
        id: null,
        // level: null,
        level: 2, 
        // 大二
        subjectId: 5,
        // 数据结构 
        paperType: 1,
        // 固定试卷 
        limitDateTime: [],
        // name: '',
        name:paperName,
        // suggestTime: null,
        suggestTime: 60,
        titleItems: [{
        name: paperName,
        questionItems: []
      }]
      },
      subjectFilter: null,
      formLoading: false,
      // rules: { 数字
      rules: {
        level: [
          { required: false, message: '请选择年级', trigger: 'change' }
        ],
        subjectId: [
          { required: false, message: '请选择学科', trigger: 'change' }
        ],
        paperType: [
          { required: false, message: '请选择试卷类型', trigger: 'change' }
        ],
        name: [
          { required: false, message: '请输入试卷名称', trigger: 'blur' }
        ],
        suggestTime: [
          { required: false, message: '请输入建议时长', trigger: 'blur' },
          { validator: isNum, trigger: 'blur' }

        ]
      },
      questionPage: {
        multipleSelection: [],
        showDialog: false,
        queryParam: {
          id: null,
          questionType: null,
          subjectId: 1,
          pageIndex: 1,
          pageSize: 5
        },
        listLoading: true,
        tableData: [],
        total: 0
      },
      currentTitleItem: null
    }
  },
  created () {
    let id = this.$route.query.id
    let _this = this
    this.initSubject(function () {
      _this.subjectFilter = _this.subjects
    })
    console.log("id");
     console.log(id);
    if (id && parseInt(id) !== 0) {
      _this.formLoading = true
      console.log("还在load");
      examPaperApi.select(id).then(re => {
        console.log("examPaperApi ");
        console.log(re);
        _this.form = re.response||{}
        // if()
        // console.log(' _this.form');
        // console.log( _this.form);
        _this.formLoading = false
        console.log("_this.formLoading");
        console.log(_this.formLoading);

        console.log("_this.form");
        console.log(_this.form);
        if(!_this.form.titleItems){
          _this.form.titleItems=[]
        }
      }).catch(e=>{
        console.log(e);
      })
    }
  },
  methods: {
    routerPushQuestion(row){
      let url = this.enumFormat(this.editUrlEnum, row.questionType);
      this.$router.push({
        // path: "/exam/question/edit/" + url,
        path:  url,
        query: {
          id: row.id,
        },
      });

    },
    editQuestion(row){
     this. routerPushQuestion(row)
    },
    submitForm () {
      let _this = this
      console.log("submitForm");
      if(! this.$refs.form.validate){
        console.log("no validate");
        return;
      }
     
      this.$refs.form.validate((valid) => {
        console.log("valid");
        console.log(valid);
        if (valid) {
          this.formLoading = true
          console.log("this.form edit");
          examPaperApi.edit(this.form).then(re => {
            console.log("re");
            console.log(re);

            if (re.code === 1) {
              _this.$message.success(re.message)
              _this.delCurrentView(_this).then(() => {
                _this.$router.push('/exam/paper/list')
              })
            } else {
              _this.$message.error(re.message)
              this.formLoading = false
            }
          }).catch(e => {
            console.log(e);
            this.formLoading = false
          })
        } else {
          console.log('error submit!! 不合格');
          _this.$message.error("不合格")
          return false
        }
      })
    },
    // xam/paper/edit
    addTitle () {
      this.form.titleItems.push({
        name: '',
        questionItems: []
      })
    },
    addQuestion (titleItem) {
      this.currentTitleItem = titleItem
      this.questionPage.showDialog = true
      this.search()
    },
    removeTitleItem (titleItem) {
      this.form.titleItems.remove(titleItem)
    },
    removeQuestion (titleItem, questionItem) {
      titleItem.questionItems.remove(questionItem)
    },
    queryForm () {
      this.questionPage.queryParam.pageIndex = 1
      this.search()
    },

    findThisId(questionItems,id){

      for(let i=0;i<questionItems.length;i++){
        if(questionItems[i].id==id){
          return true;
        }
      }
      return false;
    },
    confirmQuestionSelect () {
      let _this = this

      for(let i=0;i<this.questionPage.multipleSelection.length;i++){
       
       let   q= this.questionPage.multipleSelection[i]
        if(this.findThisId(_this.currentTitleItem.questionItems,q.id)){
        _this.$message.error("已经存在该题目  "+q.title);
        continue
      }

      questionApi.select(q.id).then(re => {
          _this.currentTitleItem.questionItems.push(re.response)
        })
      }
      
      // _this.currentTitleItem.questionItems.filter(o=>)
      // this.questionPage.multipleSelection.forEach(q => {
      //   if(findThisId(_this.currentTitleItem.questionItems,q.id)){
      //   _this.$message.error("已经存在该题目");
      //   continue
      // }

      //   questionApi.select(q.id).then(re => {
      //     _this.currentTitleItem.questionItems.push(re.response)
      //   })
      // })
      this.questionPage.showDialog = false
    },
    levelChange () {
      this.form.subjectId = null
      this.subjectFilter = this.subjects.filter(data => data.level === this.form.level)
    },
    search () {
      this.questionPage.queryParam.subjectId = this.form.subjectId
      this.questionPage.listLoading = true
      questionApi.pageList(this.questionPage.queryParam).then(data => {
        const re = data.response
        this.questionPage.tableData = re.list
        this.questionPage.total = re.total
        this.questionPage.queryParam.pageIndex = re.pageNum
        this.questionPage.listLoading = false
      })
    },
    handleSelectionChange (val) {
      this.questionPage.multipleSelection = val
    },
    questionTypeFormatter (row, column, cellValue, index) {
      console.log("this.questionTypeEnum");
      console.log(this.questionTypeEnum);
      return this.enumFormat(this.questionTypeEnum, cellValue)
    },
    subjectFormatter (row, column, cellValue, index) {
      return this.subjectEnumFormat(cellValue)
    },
    resetForm () {
      let lastId = this.form.id
      this.$refs['form'].resetFields()
      this.form = {
        id: null,
        level: null,
        subjectId: null,
        paperType: 1,
        limitDateTime: [],
        name: '',
        suggestTime: null,
        titleItems: []
      }
      this.form.id = lastId
    },
    ...mapActions('exam', { initSubject: 'initSubject' }),
    ...mapActions('tagsView', { delCurrentView: 'delCurrentView' })
  },
  computed: {
    ...mapGetters('enumItem', ['enumFormat']),
    ...mapState('enumItem', {
      questionTypeEnum: state => state.exam.question.typeEnum,
      paperTypeEnum: state => {
        console.log("state.exam.examPaper paperTypeEnum");
        console.log(state.exam.examPaper);
        return state.exam.examPaper.paperTypeEnum},
        editUrlEnum: (state) => state.exam.question.editUrlEnum,
      levelEnum: state => state.user.levelEnum
    }),
    ...mapState('exam', { subjects: state => state.subjects }),
    // ...mapState("enumItem", {
    //   questionType: (state) => state.exam.question.typeEnum,
    //   editUrlEnum: (state) => state.exam.question.editUrlEnum,
    //   levelEnum: (state) => state.user.levelEnum,
    // }),
  }

}
</script>

<style lang="scss">
  .exampaper-item-box {
    .q-title {
      margin: 0px 5px 0px 5px;
    }
    .q-item-content {
    }
  }
</style>
