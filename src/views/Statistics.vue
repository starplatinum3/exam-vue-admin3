<template>
  <!-- D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\ExamRecord.vue -->
  <!-- record/index -->
  <!-- D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\Statistics.vue -->
  <div style="margin-top: 10px" class="app-contain">
    createUserName
    <el-input v-model="query.createUserName"></el-input>
    <el-button type="" @click="selectPageByCreateUserName"
      >selectPageByCreateUserName</el-button
    >
    <el-button type="" @click="search">search</el-button>

    <div>systemScoreSum 计算的分数 {{ systemScoreSum }}</div>
    <!-- <div>userScoreSum {{ userScoreSum }}</div> -->
    <div>userScoreSum 得到的成绩 {{ userScoreSum }}</div>
    <div>paperScoreSum 试卷的满分 {{ paperScoreSum }}</div>
    <div>questionCorrectSum 作对的题目数量 {{ questionCorrectSum }}</div>
    <div>questionCountSum 一共有多少题目 {{ questionCountSum }}</div>
    <div>doTimeSum 花了时间 {{ doTimeSum }} 秒</div>
    <!-- <div> user {{ user }}}</div> -->
    <div>user.userName {{ user.userName }}</div>
    <div>user.realName {{ user.realName }}</div>
    <div>user.age {{ user.age }}</div>
    <div>user.lastActiveTime {{ user.lastActiveTime }}</div>

    showStuEchartsByType
    <div id="showStuEchartsByType" style="width: 100%; height: 400px"></div>

    <!-- <div id="showStuEchartsByType" style="width: 100%; height: 400px"></div> -->
    <div
      id="system_score_percent_avg_of_user_score"
      style="width: 100%; height: 400px"
    ></div>
    <div id="system_score_percent_avg" style="width: 100%; height: 400px"></div>
    <!-- <div id="getScoreAndAutoScore" style="width: 100%; height: 400px"></div> -->
    <div id="muchLines" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Pagination from "@/components/Pagination";
import examPaperAnswerApi from "@/api/examPaperAnswer";
import userApi from "@/api/user";
// selectUser: id => post('/api/admin/user/select/' + id),

import { scrollTo } from "@/utils/scroll-to";
import ExcelUtil from "@/utils/ExcelUtil";
// import { showEchartsById } from "@/utils/EchartsUtil";
import { groupBy } from "@/utils/SqlLike";
// DateUtil
// formatDateTime
import { formatDateTime } from "@/utils/DateUtil";
import ListUtil from "@/utils/ListUtil";
//
import {
  showEchartsByConf,
  showEchartsByConfSeries,
  showEchartsById,
} from "@/utils/EchartsUtil";
// import DateUtil from '@/utils/DateUtil'
export default {
  components: { Pagination },
  data() {
    return {
      userScoreSum: 0,
      paperScoreSum: 0,
      questionCorrectSum: 0,
      questionCountSum: 0,
      doTimeSum: 0,
      query: {
        id: null,
        examPaperId: null,
        paperName: null,
        paperType: null,
        subjectId: null,
        systemScore: null,
        userScore: null,
        paperScore: null,
        questionCorrect: null,
        questionCount: null,
        doTime: null,
        status: null,
        createUser: null,
        createTime: null,
        taskExamId: null,
        tenantId: null,
      },
      queryParam: {
        pageIndex: 1,
        pageSize: 10,
      },
      listLoading: false,
      tableData: [],
      total: 0,
      selectItem: {
        systemScore: "0",
        userScore: "0",
        doTime: "0",
        paperScore: "0",
        questionCorrect: 0,
        questionCount: 0,
      },
      systemScoreSum: 0,
      user: {},
    };
  },
  created() {
    this.search();
    scrollTo(0, 800);
  },
  methods: {
    // http://localhost:8002/#/test/Statistics?createUserId=19
    search() {
      let createUserId = this.$route.query.createUserId || null;
      this.listLoading = true;
      let _this = this;
      console.log("search examPaperAnswerApi");
      // ex
      // examPaperAnswerApi.
      let dataPost = {
        id: null,
        examPaperId: null,
        paperName: null,
        paperType: null,
        subjectId: null,
        systemScore: null,
        userScore: null,
        paperScore: null,
        questionCorrect: null,
        questionCount: null,
        doTime: null,
        status: null,
        createUser: createUserId,
        //  createUser
        createTime: null,
        taskExamId: null,
        tenantId: null,
      };
      // StatisticsPaperScoreOfUser

      examPaperAnswerApi
        .StatisticsPaperScoreOfUser({}, dataPost)
        .then((res) => {
          console.log("res");
          console.log(res);
          // _this.setDataMybatisPls(data);

          let paper_name_list = ListUtil.getListOfProp(
            res.response,
            "paper_name"
          );
          let user_score_percent_avg_list = ListUtil.getListOfProp(
            res.response,
            "user_score_percent_avg"
          );
          let system_score_percent_avg_list = ListUtil.getListOfProp(
            res.response,
            "system_score_percent_avg"
          );
          let user_score_max_list = ListUtil.getListOfProp(
            res.response,
            "user_score_max"
          );
          let user_score_avg_list = ListUtil.getListOfProp(
            res.response,
            "user_score_avg"
          );
          let user_score_min_list = ListUtil.getListOfProp(
            res.response,
            "user_score_min"
          );
          
          // user_score_avg
          // user_score_max

          let confs = [
            {
              echartsId: "showStuEchartsByType",
              title: "试卷成绩统计",
              legend: ["获得成绩 百分之"],
              valName: "获得成绩 百分之",
              names: paper_name_list,
              datas: user_score_percent_avg_list,
            },
            {
              echartsId: "system_score_percent_avg",
              title: "试卷成绩统计 系统判定得分/试卷总分",
              legend: ["获得成绩 百分之"],
              valName: "获得成绩 百分之",
              names: paper_name_list,
              datas: system_score_percent_avg_list,
              series: [
                {
                  name: "system_score",
                  type: "bar",
                  data: system_score_percent_avg_list,
                },
              ],
            },
            {
              echartsId: "system_score_percent_avg_of_user_score",
              title: "试卷成绩统计 系统判定得分/最终得分",
              legend: ["获得成绩 百分之"],
              valName: "获得成绩 百分之",
              names: paper_name_list,
              datas: ListUtil.getListOfProp(
                res.response,
                "system_score_percent_avg_of_user_score"
              ),
            },
          ];

          let itemStyle = {
            normal: {
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: {
                  //数值样式
                  color: "black",
                  fontSize: 16,
                },
              },
              // color: function (d) {
              //   return (
              //     "#" +
              //     Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16)
              //   );
              // },
            },
          };

          let confsSeries = [
            // {
            //   echartsId: "showStuEchartsByType",
            //   title: "试卷成绩统计",
            //   legend: ["获得成绩 百分之"],
            //   valName: "获得成绩 百分之",
            //   names: paper_name_list,
            //   datas: user_score_percent_avg_list,
            // },
            // {
            //   echartsId: "system_score_percent_avg",
            //   title: "试卷成绩统计 系统判定得分/试卷总分",
            //   legend: ["获得成绩 百分之"],
            //   valName: "获得成绩 百分之",
            //   names: paper_name_list,
            //   datas: system_score_percent_avg_list,
            //   series: [
            //     {
            //       name: "system_score",
            //       type: "bar",
            //       data: system_score_percent_avg_list,
            //     },
            //   ],
            // },
            // {
            //   echartsId: "system_score_percent_avg_of_user_score",
            //   title: "试卷成绩统计 系统判定得分/最终得分",
            //   legend: ["获得成绩 百分之"],
            //   valName: "获得成绩 百分之",
            //   names: paper_name_list,
            //   datas: ListUtil.getListOfProp(
            //     res.response,
            //     "system_score_percent_avg_of_user_score"
            //   ),
            // },
            {
              echartsId: "muchLines",
              title: "试卷成绩统计 最高 /平均",
              legend: ["获得成绩 百分之"],
              valName: "获得成绩 百分之",
              names: paper_name_list,
              datas: user_score_max_list,
              // user_score_percent_avg_list
              series: [
                // {
                //   name: "system_score_avg",
                //   type: "bar",
                //   data: system_score_percent_avg_list,
                // },
                // {
                //   name: "system_score_avg",
                //   type: "bar",
                //   data: user_score_percent_avg_list,
                // },
                {
                  name: "user_score_max",
                  type: "bar",
                  data: user_score_max_list,
                  // itemStyle: itemStyle,
                  // ————————————————
                  // 版权声明：本文为CSDN博主「thomas.he」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
                  // 原文链接：https://blog.csdn.net/elvishehai/article/details/120687900
                },
                {
                  name: "user_score_avg",
                  type: "bar",
                  data: user_score_avg_list,
                  itemStyle: itemStyle,
                },
                {
                  name: "user_score_min_list",
                  type: "bar",
                  data: user_score_min_list,
                  // itemStyle: itemStyle,
                },
                
              ],
            },
          ];

          for (let conf of confs) {
            showEchartsByConf(conf);
          }
          for (let conf of confsSeries) {
            showEchartsByConfSeries(conf);
          }
        });
      examPaperAnswerApi
        // selectPage
        .selectByCreateUserId({ pageNumber: 1, pageSize: 10 }, dataPost)
        // examPaperAnswerApi.pageList(this.queryParam)
        .then((data) => {
          console.log("data");
          console.log(data);
          //  data.response
          _this.setDataMybatisPls(data);
          // response.records
          // const re = data.response
          // _this.tableData = re.list
          // _this.total = re.total
          // _this.queryParam.pageIndex = re.pageNum
          // _this.listLoading = false
        });

      userApi.selectUser(createUserId).then((data) => {
        console.log("data");
        console.log(data);
        // data.
        let userDemo = {
          id: 6,
          userUuid: "53378913-87eb-413a-8d46-76e3d02b3c37",
          userName: "student1",
          realName: "张三",
          age: 19,
          role: 1,
          sex: 1,
          birthDay: "",
          phone: null,
          lastActiveTime: "2021-04-17 22:31:18",
          createTime: "2021-04-17 22:31:18",
          modifyTime: "2022-12-29 10:07:16",
          status: 1,
          userLevel: 1,
          imagePath: null,
          tenantId: null,
        };
        this.user = data.response;
      });

      // userApi
    },
    selectPageByCreateUserName() {
      let createUserId = this.$route.query.createUserId || null;
      // this.listLoading = true
      let _this = this;
      console.log("search examPaperAnswerApi");
      // ex
      // examPaperAnswerApi.
      let dataPost = {
        id: null,
        examPaperId: null,
        paperName: null,
        paperType: null,
        subjectId: null,
        systemScore: null,
        userScore: null,
        paperScore: null,
        questionCorrect: null,
        questionCount: null,
        doTime: null,
        status: null,
        createUser: createUserId,
        createUserName: this.query.createUserName,
        //  createUser
        createTime: null,
        taskExamId: null,
        tenantId: null,
      };
      examPaperAnswerApi
        .selectPageByCreateUserName({ pageNumber: 1, pageSize: 10 }, this.query)
        // examPaperAnswerApi.pageList(this.queryParam)
        .then((data) => {
          console.log("data");
          console.log(data);
          _this.setDataMybatisPls(data);
          // response.records
          // const re = data.response
          // _this.tableData = re.list
          // _this.total = re.total
          // _this.queryParam.pageIndex = re.pageNum
          // _this.listLoading = false
        });
    },

    exportTableDataToXlsx() {
      // openDownloadDialog

      // var sheet = XLSX.utils.json_to_sheet(this.tableData);
      // ExcelUtil.openDownloadDialog(ExcelUtil.sheet2blob(sheet), 'exportdata.xlsx');
      // openDownloadDialog(sheet2blob(sheet), 'exportdata.xlsx');

      ExcelUtil.openDownloadDialogOfData(this.tableData, "exportdata.xlsx");
    },
    changeDate(records) {
      // DateUtil
      // TimeUtil
      // DateUtil
      for (let o of records) {
        // DateUtil.
        // formatDateTime
        o.createTimeStr = formatDateTime(o.createTime);
        // o.createTime = this.$moment(o.createTime).format('YYYY-MM-DD HH:mm:ss')
      }
    },

    groupByEchartsShow(list) {
      console.log("this.paperTypeEnum");
      console.log(this.paperTypeEnum);
      let groupBy_paperName = groupBy(list, (link) => {
        return link.paperName;
      });

      let groupBy_paperType = groupBy(list, (link) => {
        return link.paperType;
      });

      // paperType

      let systemScoreSumListByType = [];
      let paperScoreSumListByType = [];
      let avgScoreGotListByType = [];
      let questionCountListByType = [];

      let typeNameList = [];
      let types = [];
      console.log("groupBy_paperType");
      console.log(groupBy_paperType);
      for (let i in groupBy_paperType) {
        let o = groupBy_paperType[i];
        // let  typeName=Common.paperTypeMap[i]
        // let  typeName=   this.subjectFormatter(null,null,i,null)
        let typeName = this.getPaperTypeName(i);
        if (!typeName) {
          console.log("typeName not found");
          console.log("i");
          console.log(i);
        }

        console.log("o");
        console.log(o);
        // this.subjects.
        typeNameList.push(typeName);
        types.push(i);
        let sum = 0;
        let systemScoreSum = 0;
        let paperScoreSum = 0;
        let count = 0;
        let questionCountSum = 0;
        for (let oo of o) {
          // sum+=oo.userScore;
          // sum+=oo.userScore;
          // sum += parseFloat(oo.userScore);

          // systemScoreSum += parseFloat(oo.systemScore);

          // paperScoreSum += parseFloat(oo.paperScore);
          // questionCount
          questionCountSum += parseFloat(oo.questionCount);

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
        questionCountListByType.push(questionCountSum);
      }

      console.log("groupBy_paperName");
      console.log(groupBy_paperName);
      // userScore
      // js 数据分析

      let names = [];
      let systemScoreSumList = [];
      let paperScoreSumList = [];
      let avgScoreGotList = [];
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
        o.avgScoreGot = systemScoreSum / paperScoreSum;
        paperScoreSumList.push(paperScoreSum);
        systemScoreSumList.push(systemScoreSum);
        avgScoreGotList.push(o.avgScoreGot);
      }

      console.log("groupBy_paperName");
      console.log(groupBy_paperName);

      // this.showStuEcharts(names, systemScoreSumList);
      // this.showStuEcharts(names, paperScoreSumList);
      // this.showStuEcharts(names, avgScoreGotList);
      // this.showStuEchartsById(types, systemScoreSumListByType,"showStuEchartsByType");
      // this.
      // questionCountListByType;
      showEchartsById(
        typeNameList,
        questionCountListByType,
        "showStuEchartsByType"
      );
      // showEchartsById(typeNameList, systemScoreSumListByType,"showStuEchartsByType");
      // showEchartsById
      // questionCountListByType
    },

    setDataMybatisPls(data) {
      let _this = this;
      if (data.code == 2) {
        this.$message.error(data.message);
        _this.listLoading = false;
        return;
      }

      const re = data.response;
      let resMyPls = {
        // D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\resSet\resMyPls.js
        records: [
          {
            id: 1,
            examPaperId: 12,
            paperName: "java基础知识测试（一）",
            paperType: 1,
            subjectId: 4,
            systemScore: 100,
            userScore: 100,
            paperScore: 180,
            questionCorrect: 3,
            questionCount: 6,
            doTime: 64,
            status: 2,
            createUser: 6,
            createTime: 1619406787000,
            taskExamId: null,
          },
        ],
        total: 204,
        size: 10,
        current: 1,
        orders: [],
        optimizeCountSql: true,
        hitCount: false,
        countId: null,
        maxLimit: null,
        searchCount: true,
        pages: 21,
      };

      // _this.tableData = re.list
      _this.tableData = data.response.records || data.response;
      // _this.tableData = data.response
      console.log("_this.tableData");
      console.log(_this.tableData);
      // _this.changeDate(_this.tableData);
      _this.calAll(_this.tableData);
      // _this.  groupByEchartsShow( _this.tableData)
      _this.total = re.total;
      // _this.queryParam.pageIndex = re.pageNum
      _this.queryParam.pageIndex = re.current;
      _this.listLoading = false;
    },
    setData(data) {
      let _this = this;
      const re = data.response;
      _this.tableData = re.list;
      _this.total = re.total;
      _this.queryParam.pageIndex = re.pageNum;
      _this.listLoading = false;
    },
    calAll(records) {
      let res = {
        subjectName: "Java",
        createUserName: "student1",
        id: 1,
        examPaperId: 12,
        paperName: "java基础知识测试（一）",
        paperType: 1,
        subjectId: 4,
        systemScore: 100,
        userScore: 100,
        paperScore: 180,
        questionCorrect: 3,
        questionCount: 6,
        doTime: 64,
        status: 2,
        createUser: 6,
        createTime: 1619406787000,
        createTimeStr: "2021-04-26 11:13:07",
        taskExamId: null,
        systemScoreSum: 0,
        paperScoreSum: 0,
        avgScoreGot: 0,
      };
      // js map list sum
      let systemScoreSum = ListUtil.sum(records, "systemScore");
      this.systemScoreSum = systemScoreSum;
      this.userScoreSum = ListUtil.sum(records, "userScore");
      this.paperScoreSum = ListUtil.sum(records, "paperScore");
      this.questionCorrectSum = ListUtil.sum(records, "questionCorrect");
      this.questionCountSum = ListUtil.sum(records, "questionCount");
      this.doTimeSum = ListUtil.sum(records, "doTime");

      // let  systemScoreList=  records.map(o=>{
      //   return  o.systemScore
      //     // =0
      //     // o.paperScoreSum=0
      //     // o.avgScoreGot=0
      //   }).sum()
    },
    itemSelect(row, column, event) {
      this.selectItem = row;
    },
    statusTagFormatter(status) {
      return this.enumFormat(this.statusTag, status);
    },
    statusTextFormatter(status) {
      return this.enumFormat(this.statusEnum, status);
    },
  },
  computed: {
    ...mapGetters("enumItem", ["enumFormat"]),
    ...mapState("enumItem", {
      statusEnum: (state) => state.exam.examPaperAnswer.statusEnum,
      statusTag: (state) => state.exam.examPaperAnswer.statusTag,
    }),
  },
};
</script>

<style lang="scss" scoped>
.searchForm {
  height: 100px;
}
</style>
