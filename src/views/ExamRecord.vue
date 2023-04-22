<template>
  <!-- D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\ExamRecord.vue -->
  <!-- record/index -->
  <div style="margin-top: 10px" class="app-contain">
    createUserName
    <el-input style="width: 200px" v-model="query.createUserName"></el-input>
    <el-button type="" @click="selectPageByCreateUserName"
      >selectPageByCreateUserName</el-button
    >

    <!-- <el-input v-model="query.id"></el-input>
<el-input v-model="query.exam_paper_id"></el-input>
<el-input v-model="query.paper_name"></el-input>
<el-input v-model="query.paper_type"></el-input>
<el-input v-model="query.subject_id"></el-input>
<el-input v-model="query.system_score"></el-input>
<el-input v-model="query.user_score"></el-input>
<el-input v-model="query.paper_score"></el-input>
<el-input v-model="query.question_correct"></el-input>
<el-input v-model="query.question_count"></el-input>
<el-input v-model="query.do_time"></el-input>
<el-input v-model="query.status"></el-input>
<el-input v-model="query.create_user"></el-input>
<el-input v-model="query.create_time"></el-input>
<el-input v-model="query.task_exam_id"></el-input>
<el-input v-model="query.tenant_id"></el-input> -->

    <div></div>
    <div></div>

    <el-form>
      <el-form-item label="id">
        <el-input
          placeholder="请输入内容"
          :maxlength="10"
          size="small"
          clearable
          style="width: 200px"
          v-model="query.id"
        ></el-input>
      </el-form-item>
      <el-form-item label="题目Id">
        <el-input
          placeholder="请输入内容"
          :maxlength="10"
          size="small"
          clearable
          style="width: 200px"
          v-model="query.questionId"
        ></el-input>
      </el-form-item>
      <el-form-item label="答案Id">
        <el-input
          placeholder="请输入内容"
          :maxlength="10"
          size="small"
          clearable
          style="width: 200px"
          v-model="query.examPaperId"
        ></el-input>
      </el-form-item>
      <el-form-item label="考试卷答案id">
        <el-input
          placeholder="请输入内容"
          :maxlength="10"
          size="small"
          clearable
          style="width: 200px"
          v-model="query.examPaperAnswerId"
        ></el-input>
      </el-form-item>
      <el-form-item label="题型">
        <el-input
          placeholder="请输入内容"
          :maxlength="10"
          size="small"
          clearable
          style="width: 200px"
          v-model="query.questionType"
        ></el-input>
      </el-form-item>
      <el-form-item label="学科">
        <el-input
          placeholder="请输入内容"
          :maxlength="10"
          size="small"
          clearable
          style="width: 200px"
          v-model="query.subjectId"
        ></el-input>
      </el-form-item>
      <el-form-item label="得分">
        <el-input
          placeholder="请输入内容"
          :maxlength="10"
          size="small"
          clearable
          style="width: 200px"
          v-model="query.customerScore"
        ></el-input>
      </el-form-item>
      <el-form-item label="题目原始分数">
        <el-input
          placeholder="请输入内容"
          :maxlength="10"
          size="small"
          clearable
          style="width: 200px"
          v-model="query.questionScore"
        ></el-input>
      </el-form-item>
      <el-form-item label="问题内容">
        <el-input
          placeholder="请输入内容"
          :maxlength="10"
          size="small"
          clearable
          style="width: 200px"
          v-model="query.questionTextContentId"
        ></el-input>
      </el-form-item>
      <el-form-item label="做题答案">
        <el-input
          placeholder="请输入内容"
          :maxlength="10"
          size="small"
          clearable
          style="width: 200px"
          v-model="query.answer"
        ></el-input>
      </el-form-item>
      <el-form-item label="做题内容">
        <el-input
          placeholder="请输入内容"
          :maxlength="10"
          size="small"
          clearable
          style="width: 200px"
          v-model="query.textContentId"
        ></el-input>
      </el-form-item>
      <el-form-item label="是否正确">
        <el-input
          placeholder="请输入内容"
          :maxlength="10"
          size="small"
          clearable
          style="width: 200px"
          v-model="query.doRight"
        ></el-input>
      </el-form-item>
      <el-form-item label="做题人">
        <el-input
          placeholder="请输入内容"
          :maxlength="10"
          size="small"
          clearable
          style="width: 200px"
          v-model="query.createUser"
        ></el-input>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-input
          placeholder="请输入内容"
          :maxlength="10"
          size="small"
          clearable
          style="width: 200px"
          v-model="query.createTime"
        ></el-input>
      </el-form-item>
      <el-form-item label="题目顺序">
        <el-input
          placeholder="请输入内容"
          :maxlength="10"
          size="small"
          clearable
          style="width: 200px"
          v-model="query.itemOrder"
        ></el-input>
      </el-form-item>
      <el-form-item label="租户">
        <el-input
          placeholder="请输入内容"
          :maxlength="10"
          size="small"
          clearable
          style="width: 200px"
          v-model="query.tenantId"
        ></el-input>
      </el-form-item>
      <el-form-item label="图画">
        <el-input
          placeholder="请输入内容"
          :maxlength="10"
          size="small"
          clearable
          style="width: 200px"
          v-model="query.drawIo"
        ></el-input>
      </el-form-item>
    </el-form>
    id
    <el-input width="200" v-model="query.id" style="width: 200px"></el-input>
    examPaperId
    <el-input
      width="200"
      style="width: 200px"
      v-model="query.examPaperId"
    ></el-input>

    paperName
    <el-input style="width: 200px" v-model="query.paperName"></el-input>
    paperType
    <el-input style="width: 200px" v-model="query.paperType"></el-input>
    subjectId
    <el-input style="width: 200px" v-model="query.subjectId"></el-input>
    systemScore
    <el-input
      placeholder="请输入内容"
      :maxlength="10"
      size="small"
      clearable
      style="width: 200px"
      v-model="query.systemScore"
    ></el-input>
    userScore
    <el-input
      placeholder="请输入内容"
      :maxlength="10"
      size="small"
      clearable
      style="width: 200px"
      v-model="query.userScore"
    ></el-input>
    paperScore
    <el-input
      placeholder="请输入内容"
      :maxlength="10"
      size="small"
      clearable
      style="width: 200px"
      v-model="query.paperScore"
    ></el-input>
    questionCorrect
    <el-input
      placeholder="请输入内容"
      :maxlength="10"
      size="small"
      clearable
      style="width: 200px"
      v-model="query.questionCorrect"
    ></el-input>
    questionCount
    <el-input
      placeholder="请输入内容"
      :maxlength="10"
      size="small"
      clearable
      style="width: 200px"
      v-model="query.questionCount"
    ></el-input>
    doTime
    <el-input
      placeholder="请输入内容"
      :maxlength="10"
      size="small"
      clearable
      style="width: 200px"
      v-model="query.doTime"
      width="20"
    ></el-input>

    status

    <!-- <el-input v-model="query.status"></el-input> -->
    <!-- style="width: 312px;" -->
    <!-- multiple -->
    <el-select
      clearable
      v-model="query.status"
      style="width: 212px"
      ref="valSelect"
      filterable
      @blur="valSelectBlur"
      @focus="valSelectFocus"
      @change="valSelectChange"
    >
      <el-option
        v-for="item in options"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>

    <div></div>

    <!-- <el-input v-model="ruleForm.tranname" style="width: 280px;position: absolute;left: 0px;"
       @blur="valInputBlur" ref="valInput"
			 @focus="valInputFocus"></el-input> -->
    <!-- ————————————————
版权声明：本文为CSDN博主「马宁马宁请你吃饭」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/m0_63006013/article/details/127017251 -->

    createUser
    <el-input style="width: 200px" v-model="query.createUser"></el-input>
    createTime
    <el-input style="width: 200px" v-model="query.createTime"></el-input>
    taskExamId
    <el-input style="width: 200px" v-model="query.taskExamId"></el-input>
    tenantId <el-input style="width: 200px" v-model="query.tenantId"></el-input>

    用户名 {{ createUserName }}
    <el-button type="" @click="search">search</el-button>
    <!-- exportTableDataToXlsx -->
    <el-button @click="exportTableDataToXlsx">导出考试记录</el-button>

    <el-row :gutter="50">
      <el-col :span="18">
        <el-table
          v-loading="listLoading"
          :data="tableData"
          fit
          highlight-current-row
          style="width: 100%"
          @row-click="itemSelect"
        >
          <el-table-column sortable prop="id" label="序号" width="90px" />
          <el-table-column sortable prop="paperName" label="名称" />
          <!-- width="70" -->
          <el-table-column
            sortable
            prop="subjectName"
            label="学科"
            width="100"
          />
          <!-- <el-table-column
            sortable
            prop="createUserName"
            label="createUserName"
            width="100"
          /> -->

          <el-table-column sortable label="状态" prop="status" width="100px">
            <template slot-scope="{ row }">
              <el-tag :type="statusTagFormatter(row.status)">
                {{ statusTextFormatter(row.status) }}
              </el-tag>
            </template>
          </el-table-column>
          <!-- createTime -->
          <!-- setCreateTimeStr -->
          <!-- createTimeStr  -->
          <el-table-column
            sortable
            prop="createTimeStr"
            label="做题时间"
            width="170"
          />
          <el-table-column sortable align="right" width="70">
            <template slot-scope="{ row }">
              <!-- 学生不该有批改的权限呀 -->
              <!-- <router-link target="_blank" :to="{path:'/edit',query:{id:row.id}}" v-if="row.status === 1 ">
                 <el-button  type="text" size="small">批改</el-button>
               </router-link>
               <router-link target="_blank" :to="{path:'/read',query:{id:row.id}}" v-if="row.status === 2 ">
                 <el-button  type="text" size="small">查看试卷</el-button>
               </router-link> -->

              <!-- EditExamRecord -->
              <router-link
                target="_blank"
                :to="{ path: '/exam/EditExamRecord', query: { id: row.id } }"
                v-if="row.status === 1"
              >
                <el-button type="text" size="small">批改</el-button>
              </router-link>
              <router-link
                target="_blank"
                :to="{ path: '/read', query: { id: row.id } }"
              >
                <el-button type="text" size="small">查看试卷</el-button>
              </router-link>
            </template>
          </el-table-column>
        </el-table>
        <!-- pageNumber -->
        <!-- :page.sync="queryParam.pageIndex" -->
        <pagination
          v-show="total > 0"
          :total="total"
          :background="false"
          :page.sync="queryParam.pageNumber"
          :limit.sync="queryParam.pageSize"
          @pagination="search"
          style="margin-top: 20px"
        />
        <!-- exportTableDataToXlsx -->
        <el-button @click="exportTableDataToXlsx">导出考试记录</el-button>
      </el-col>
      <el-col :span="6">
        <el-card class="record-answer-info">
          <!-- selectItem  {{selectItem}} -->
          <el-form label-width="50%">
            <el-form-item label="系统判分：">
              <span>{{ selectItem.systemScore }}</span>
            </el-form-item>
            <el-form-item label="最终得分：">
              <span>{{ selectItem.userScore }}</span>
            </el-form-item>
            <el-form-item label="试卷总分：">
              <span>{{ selectItem.paperScore }}</span>
            </el-form-item>
            <el-form-item label="正确题数：">
              <span>{{ selectItem.questionCorrect }}</span>
            </el-form-item>
            <el-form-item label="总题数：">
              <span>{{ selectItem.questionCount }}</span>
            </el-form-item>
            <el-form-item label="用时：">
              <span>{{ selectItem.doTime }}</span>
            </el-form-item>
            <el-form-item label="status">
              <span>{{ selectItem.status }}</span>
            </el-form-item>

            <div class="pageTitle">这页的总体统计</div>
            <el-form-item label="计算的分数">
              <span>{{ systemScoreSum }}</span>
            </el-form-item>
            <el-form-item label="得到的成绩">
              <span>{{ userScoreSum }}</span>
            </el-form-item>
            <el-form-item label="试卷的满分">
              <span>{{ paperScoreSum }}</span>
            </el-form-item>
            <el-form-item label="作对的题目数量">
              <span>{{ questionCorrectSum }}</span>
            </el-form-item>
            <el-form-item label="一共有多少题目">
              <span>{{ questionCountSum }}</span>
            </el-form-item>

            <el-form-item label="花了时间">
              <span>{{ doTimeSum }}</span>
            </el-form-item>

            <!-- <div>systemScoreSum  计算的分数 {{ systemScoreSum }}</div> -->
            <!-- <div>userScoreSum {{ userScoreSum }}</div> -->
            <!-- <div>userScoreSum 得到的成绩 {{ userScoreSum }}</div>
<div>paperScoreSum 试卷的满分 {{ paperScoreSum }}</div>
<div>questionCorrectSum 作对的题目数量 {{ questionCorrectSum }}</div>
<div>questionCountSum 一共有多少题目 {{ questionCountSum }}</div>
<div>doTimeSum 花了时间 {{ doTimeSum }}  秒</div> -->
          </el-form>
        </el-card>
      </el-col>
    </el-row>

    showStuEchartsByType
    <div id="showStuEchartsByType" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Pagination from "@/components/Pagination";
import examPaperAnswerApi from "@/api/examPaperAnswer";
import { scrollTo } from "@/utils/scroll-to";
import ExcelUtil from "@/utils/ExcelUtil";
import { showEchartsById } from "@/utils/EchartsUtil";
import { groupBy } from "@/utils/SqlLike";
// DateUtil
// formatDateTime
import { formatDateTime } from "@/utils/DateUtil";
import ListUtil from "@/utils/ListUtil";
//examStatusMap
import Common from "@/utils/Common";
// import DateUtil from '@/utils/DateUtil'
export default {
  components: { Pagination },
  data() {
    return {
      createUserName: null,
      // '待批改':1,
      // '完成':2,
      options: ["待批改", "完成"],
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
        pageNumber: 1,
      },
      // { pageNumber: 1, pageSize: 10 }
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
    };
  },
  created() {
    this.search();
    scrollTo(0, 800);
  },
  methods: {
    valSelectBlur() {},
    valInputFocus() {},
    valSelectFocus() {},
    valSelectChange() {},
    // @blur="valSelectBlur"
    // 	@focus="valSelectFocus"
    // 	@change="valSelectChange"
    search() {
      let createUserId = this.$route.query.createUserId || null;
      this.listLoading = true;
      let _this = this;
      console.log("search examPaperAnswerApi");
      // ex
      // examPaperAnswerApi.
      let dataPost = {
        // id: null,
        // examPaperId: null,
        // paperName: null,
        // paperType: null,
        // subjectId: null,
        // systemScore: null,
        // userScore: null,
        // paperScore: null,
        // questionCorrect: null,
        // questionCount: null,
        // doTime: null,
        // status: Common.examStatusMap[ this.query.status],
        // createUser: createUserId,
        // //  createUser
        // createTime: null,
        // taskExamId: null,
        // tenantId: null,

        id: this.query.id,
        examPaperId: this.query.examPaperId,
        paperName: this.query.paperName,
        paperType: this.query.paperType,
        subjectId: this.query.subjectId,
        systemScore: this.query.systemScore,
        userScore: this.query.userScore,
        paperScore: this.query.paperScore,
        questionCorrect: this.query.questionCorrect,
        questionCount: this.query.questionCount,
        doTime: this.query.doTime,
        status: Common.examStatusMap[this.query.status],
        createUser: createUserId,
        createTime: this.query.createTime,
        taskExamId: this.query.taskExamId,
        tenantId: this.query.tenantId,
      };
      // D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\test\query_postDataGet.js
      // this.query.status=Common.examStatusMap[ this.query.status]
      console.log("this.query.status");
      console.log(this.query.status);
      this.query.createUser = createUserId;
      // this.papr
      // _this.queryParam
      // { pageNumber: 1, pageSize: 10 }
      // this._this.queryParam
      let pageParams = {
        pageNumber: 1,
        pageSize: 10,
      };
      examPaperAnswerApi
        .selectPage(_this.queryParam, dataPost)
        // examPaperAnswerApi.pageList(this.queryParam)
        .then((data) => {
          console.log("data");
          console.log(data);
          console.log("this.query.status get data");
          console.log(_this.query.status);
          _this.setDataMybatisPls(data);
          // response.records
          // const re = data.response
          // _this.tableData = re.list
          // _this.total = re.total
          // _this.queryParam.pageIndex = re.pageNum
          // _this.listLoading = false
        });
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
      questionCountListByType;
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
      _this.tableData = data.response.records;
      console.log("_this.tableData");
      console.log(_this.tableData);
      _this.createUserName = _this.tableData[0].createUserName;
      _this.changeDate(_this.tableData);
      _this.calAll(_this.tableData);
      // _this.  groupByEchartsShow( _this.tableData)
      _this.total = re.total;
      // _this.queryParam.pageIndex = re.pageNum
      _this.queryParam.pageIndex = re.current;
      _this.queryParam.pageNumber = re.current;
      console.log(" _this.queryParam");
      console.log(_this.queryParam);
      console.log("_this.total");
      console.log(_this.total);
      console.log("_this.query");
      console.log(_this.query);
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
