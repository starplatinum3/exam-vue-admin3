<template>
  <div>
    <button @click="getAuthentication">getAuthentication</button>

    <el-button type="" @click="findAllEs">findAllEs</el-button>

    <el-button type="" @click="autoPaper_do">autoPaper_do</el-button>
    <el-button type="" @click="autoPaper_do">autoPaper_do</el-button>
    <el-button type="" @click="testPaper">testPaper</el-button>

    <!-- testPaper -->
    autoPaper
    <div @click="changeTableName(item)" :key="item" v-for="item in autoPaper">
      {{ item }}
    </div>

    <el-button type="" @click="findAllEsQuestion_do"
      >findAllEsQuestion_do</el-button
    >

    findAllEsQuestion
    <div
      @click="changeTableName(item)"
      :key="item"
      v-for="item in findAllEsQuestion"
    >
      {{ item }}
    </div>

    formula
    <!-- <formula></formula> -->
    <formula ref="formulaPage" :data-list="dataList"></formula>

    WangTest
    <WangTest></WangTest>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import Pagination from "@/components/Pagination";
import formula from "@/components/formula";
import WangTest from "@/components/wang-test";
import examPaperAnswerApi from "@/api/examPaperAnwser";
import { post } from "@/utils/request";
// import { log } from 'console'
// import { log } from 'console'
import questionApi from "@/api/question";
import allApi from "@/api/all";
// D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\components\wang-test.vue

// findAllEs
export default {
  components: { Pagination, formula, WangTest },
  data() {
    //     【一个简单的vue公式编辑器组件】_qq_42989165的博客-CSDN博客_vue公式编辑器
    // https://blog.csdn.net/qq_42989165/article/details/126483350
    return {
      dataList: [
        {
          name: "负责的客户数量",
          id: "1",
        },
        {
          name: "创建的客户数量",
          id: "2",
        },
      ],
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
    testPaper() {
      // let data = {
      //   id: this.id,
      //   questionType: this.questionType,
      //   subjectId: this.subjectId,
      //   score: this.score,
      //   gradeLevel: this.gradeLevel,
      //   difficult: 2,
      //   infoTextContentId: this.infoTextContentId,
      //   createUser: this.createUser,
      //   status: this.status,
      //   createTime: this.createTime,
      //   deleted: this.deleted,
      //   correct: this.correct,
      // };
      let data = {
    
      };

      allApi.testPaper(data).then((res) => {
        console.log("res autoPaper");
        console.log(res);
        this.autoPaper = res.response;
      });
    },
    autoPaper_do() {
      let data = {
        id: this.id,
        questionType: this.questionType,
        subjectId: this.subjectId,
        score: this.score,
        gradeLevel: this.gradeLevel,
        difficult: 2,
        infoTextContentId: this.infoTextContentId,
        createUser: this.createUser,
        status: this.status,
        createTime: this.createTime,
        deleted: this.deleted,
        correct: this.correct,
      };

      questionApi.autoPaper(data).then((res) => {
        console.log("res autoPaper");
        console.log(res);
        this.autoPaper = res.response;
      });
    },

    findAllEsQuestion_do() {
      allApi
        .findAllEsQuestion({
          tableName: this.TableName,
        })
        .then((res) => {
          console.log("res findAllEsQuestion");
          console.log(res);
          this.findAllEsQuestion = res.response;
        });
    },

    findAllEs() {
      questionApi.findAllEs(this.queryParam).then((data) => {
        console.log("data");
        console.log(data);
      });
    },
    search() {
      this.listLoading = true;
      examPaperAnswerApi.page(this.queryParam).then((data) => {
        const re = data.response;
        this.tableData = re.list;
        this.total = re.total;
        this.queryParam.pageIndex = re.pageNum;
        this.listLoading = false;
      });
    },
    getAuthentication() {
      // /api/all/getAuthentication
      let query = {};
      let resTest = {
        code: 1,
        message: "成功",
        response: {
          authorities: [
            {
              authority: "ROLE_ADMIN",
            },
          ],
          details: {
            remoteAddress: "0:0:0:0:0:0:0:1",
            sessionId: null,
          },
          authenticated: true,
          principal: {
            password: null,
            username: "admin",
            authorities: [
              {
                authority: "ROLE_ADMIN",
              },
            ],
            accountNonExpired: true,
            accountNonLocked: true,
            credentialsNonExpired: true,
            enabled: true,
          },
          keyHash: 119217,
          credentials: "",
          name: "admin",
        },
      };
      post("/api/all/getAuthentication", query).then((res) => {
        console.log(res);
      });
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
