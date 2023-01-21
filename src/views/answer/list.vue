<template>
  <div class="app-container">
    <el-form :model="queryParam" ref="queryForm" :inline="true">
      <el-form-item label="学科：">
        <el-select v-model="queryParam.subjectId" clearable>
          <el-option
            v-for="item in subjects"
            :key="item.id"
            :value="item.id"
            :label="item.name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table
      v-loading="listLoading"
      :data="tableData"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column prop="id" label="Id" width="100" />
      <el-table-column prop="paperName" label="试卷名称" />
      <el-table-column prop="userName" label="用户名称" />
      <el-table-column label="得分" width="100px">
        <template slot-scope="{ row }">
          {{ row.userScore }} / {{ row.paperScore }}
        </template>
      </el-table-column>
      <el-table-column label="题目对错" width="80px">
        <template slot-scope="{ row }">
          {{ row.questionCorrect }} / {{ row.questionCount }}
        </template>
      </el-table-column>
      <el-table-column prop="doTime" label="耗时" width="100px" />
      <el-table-column prop="createTime" label="提交时间" width="160px" />
    </el-table>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="queryParam.pageIndex"
      :limit.sync="queryParam.pageSize"
      @pagination="search"
    />
    showStuEcharts
    <div id="showStuEcharts"   style="width: 100%;height:400px;"></div>
    showStuEchartsByType
    <div id="showStuEchartsByType"   style="width: 100%;height:400px;"></div>
    <!-- "showStuEcharts") -->
   
  </div>
</template>

<script>
// groupBy
import { groupBy } from "@/utils/SqlLike";
import { mapGetters, mapState, mapActions } from "vuex";
import Pagination from "@/components/Pagination";
import examPaperAnswerApi from "@/api/examPaperAnwser";
import   Common from "@/utils/Common";
export default {
  components: { Pagination },
  data() {
    return {
      queryParam: {
        subjectId: null,
        pageIndex: 1,
        pageSize: 10,
      },
      listLoading: false,
      tableData: [],
      total: 0,
    };
  },
  created() {
    this.initSubject();
    this.search();
  },
  methods: {
    search() {
      this.listLoading = true;
      examPaperAnswerApi.page(this.queryParam).then((data) => {
        const re = data.response;
        this.tableData = re.list;
        let groupBy_paperName = groupBy(re.list, (link) => {
          return link.paperName;
        });

        let groupBy_paperType = groupBy(re.list, (link) => {
          return link.paperType;
        });

        let systemScoreSumListByType = [];
        let  paperScoreSumListByType =[]
        let  avgScoreGotListByType =[]
 let typeNameList=[]
        let  types=[]
        console.log("groupBy_paperType");
        console.log(groupBy_paperType);
        for (let i in groupBy_paperType) {
          let o = groupBy_paperType[i];
          let  typeName=Common.paperTypeMap[i]
          typeNameList.push(typeName)
          types.push(i);
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
          paperScoreSumListByType.push(paperScoreSum);
          systemScoreSumListByType.push(systemScoreSum);
          avgScoreGotListByType.push(o.avgScoreGot);
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

        // this.showStuEcharts(names, systemScoreSumList);
        // this.showStuEcharts(names, paperScoreSumList);
        this.showStuEcharts(names, avgScoreGotList);
        // this.showStuEchartsById(types, systemScoreSumListByType,"showStuEchartsByType");
        this.showStuEchartsById(typeNameList, systemScoreSumListByType,"showStuEchartsByType");
        
        this.total = re.total;
        this.queryParam.pageIndex = re.pageNum;
        this.listLoading = false;
      });
    },

    showStuEchartsById(names, datas,showStuEchartsId) {
      console.log("names");
      console.log(names);
      console.log("datas");
      console.log(datas);
      // 基于准备好的dom，初始化echarts实例
      // var myChart = echarts.init(document.getElementById("showStuEcharts"));
      var myChart = echarts.init(document.getElementById(showStuEchartsId));
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "学生成绩统计",
        },
        tooltip: {},
        legend: {
          data: ["成绩"],
        },
        // TODO:待补充修改代码，定义x轴数据,并让数据正确显示
        xAxis: {
          // data: ["张三", "李四", "王五", "贺八", "杨七", "陈九"],
          data: names,
        },
        // y轴
        yAxis: {},
        series: [
          {
            name: "成绩",
            type: "bar",
            // data: [55, 90, 65, 70, 80, 63],
            data: datas,
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },

    showStuEcharts(names, datas) {
      console.log("names");
      console.log(names);
      console.log("datas");
      console.log(datas);
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("showStuEcharts"));
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "学生成绩统计",
        },
        tooltip: {},
        legend: {
          data: ["成绩"],
        },
        // TODO:待补充修改代码，定义x轴数据,并让数据正确显示
        xAxis: {
          // data: ["张三", "李四", "王五", "贺八", "杨七", "陈九"],
          data: names,
        },
        // y轴
        yAxis: {},
        series: [
          {
            name: "成绩",
            type: "bar",
            // data: [55, 90, 65, 70, 80, 63],
            data: datas,
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    submitForm() {
      this.queryParam.pageIndex = 1;
      this.search();
    },
    ...mapActions("exam", { initSubject: "initSubject" }),
  },
  computed: {
    ...mapGetters("enumItem", ["enumFormat"]),
    ...mapGetters("exam", ["subjectEnumFormat"]),
    ...mapState("exam", { subjects: (state) => state.subjects }),
  },
};
</script>
