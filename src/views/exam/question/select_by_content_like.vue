<template>
  <div class="app-container">
    <!-- <el-button type="" @click="select_by_content_like_do"
      >select_by_content_like_do</el-button
    > -->

    <!-- textContentSearch
    <el-button type="" @click="textContentSearch">textContentSearch</el-button> -->

<!-- // TextContentEsHilightSearchResultMapper -->
    <!-- http://localhost:8003/es/textContent/TextContentEsHilightSearchResultMapper -->


    <!-- http://localhost:8003/es/textContent/TextContentEsHilightSearchResultMapper -->
    <!-- <el-button type="" @click="TextContentEsHilightSearchResultMapperFuzziness"
      >TextContentEsHilightSearchResultMapperFuzziness</el-button
    > -->
    <!-- <el-button type="" @click="esPage" >esPage</el-button  > -->
    

    <!-- http://localhost:8003/es/textContent/TextContentEsHilightSearchResultMapper -->

    <!-- <el-button type="" @click="contentInId">contentInId</el-button> -->


    <!-- <el-button type="" @click="select_by_content_like_go"
      >select_by_content_like_go</el-button
    > -->
  
    <!-- <el-button type="" @click="selectPageTextContent">selectPageTextContent</el-button> -->
    

    <el-dialog
      class="dialogShow"
      title="提示"
      style="width: 100%; height: 100%"
      :visible.sync="ques_dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <!-- <span>{{by_content_like[0].correct}}</span> -->
      <!-- {{ShowQuesCorret}} -->
      <span v-html="ShowQuesCorret"></span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="ques_dialogVisible = false">取 消</el-button>
        <!-- @click="ques_dialogVisible = false" -->
        <el-button type="primary" @click="showInfo">确 定</el-button>
      </span>
    </el-dialog>

    <el-form :model="queryParam" ref="queryForm" :inline="true">
      <!-- <el-form-item label="题目ID：">
        <el-input v-model="queryParam.id" clearable></el-input>
      </el-form-item> -->
      <el-form-item label="内容">
        <el-input v-model="queryParam.content" clearable></el-input>
      </el-form-item>
      <!-- <el-form-item label="年级：">
        <el-select
          v-model="queryParam.level"
          placeholder="年级"
          @change="levelChange"
          clearable
        >
          <el-option
            v-for="item in levelEnum"
            :key="item.key"
            :value="item.key"
            :label="item.value"
          ></el-option>
        </el-select>
      </el-form-item> -->
      <!-- <el-form-item label="学科：">
        <el-select v-model="queryParam.subjectId" clearable>
          <el-option
            v-for="item in subjectFilter"
            :key="item.id"
            :value="item.id"
            :label="item.name + ' ( ' + item.levelName + ' )'"
          ></el-option>
        </el-select>
      </el-form-item> -->
      <!-- <el-form-item label="题型：">
        <el-select v-model="queryParam.questionType" clearable>
          <el-option
            v-for="item in questionType"
            :key="item.key"
            :value="item.key"
            :label="item.value"
          ></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item>
        <!-- select_by_content_like_do -->
        <!-- <el-button type="" @click="select_by_content_like_do"
          >查询内容</el-button > -->

        <!-- <el-button type="primary" @click="submitForm">查询</el-button> -->
     

        <!-- <el-button type="primary" class="link-left" @click="toBatchInsert"
          >批量插入
        </el-button> -->

        <el-button type="" @click="TextContentEsHilightSearchResultMapper"
      >内容搜索</el-button >
      </el-form-item>
    </el-form>

    <!-- by_content_like
    <div :key="item.id" v-for="item in by_content_like">
      {{ item }}
    </div> -->
    <!-- xam/question/select_by_content_like -->
    <div v-show="by_content_like.length > 0" class="grid-container">
      <!-- frostedGlassPlace   -->
      <!-- <el-popover
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      > -->
      <div
        class="frostedGlassPlace"
        :key="item.id"
        v-for="item in by_content_like"
      >
        <!-- @click="dialogChange(item)" -->
        <div class="frostedGlassCard" @click="editQuestionOfContent(item)">
          <span
            v-html="item.contentParsed.titleContent"
            class="titleName overflow-ellipsis"
          ></span>
          <!-- <P class="cardContentText">2021_2_15/bilibili</P> -->
          <!-- correct -->
          <P
            v-html="item.contentParsed.correct"
            class="cardContentTex overflow-ellipsis"
          >
            <!-- {{item.contentParsed.correct}} -->
          </P>
          <el-button type="" @click="editQuestion(item)">editQuestion</el-button>
        </div>
        <!-- <div class="orangeBall"></div>
            <div class="blueBall"></div> -->

        <!-- <el-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <el-button slot="reference">hover 激活</el-button>
  </el-popover> -->

        <!-- <el-dialog
            class="dialogShow"
  title="提示"
  style="width: 100%; height: 100%"
  :visible.sync="item.dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="item.dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="item.dialogVisible = false">确 定</el-button>
  </span>
</el-dialog> -->
      </div>
      <!-- </el-popover> -->
    </div>
<!-- 
    questionsOfContent
    <div :key="item.id" v-for="item in questionsOfContent">
      {{ item }}
    </div> -->

    <!-- http://localhost:8003/es/textContent/TextContentEsHilightSearchResultMapper -->

    <!-- v-loading="listLoading" -->
    <el-table
      :data="tableData"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column
        prop="content"
        label="内容"
        width="200"
        align="center"
      >
        <template slot-scope="scope">
          <div v-html="scope.row.content"></div>
        </template>
      </el-table-column>
      <!-- width="200" -->
      <el-table-column
        prop="contentShow"
        label="重点内容"
        width="250"
        align="center"
      >
        <!-- contentShow -->
        <template slot-scope="scope">
          <div v-html="scope.row.contentShow"></div>
        </template>
      </el-table-column>
      <!-- width="200" -->
      <!-- <el-table-column
        prop="id"
        label="id"
        width="50"
        align="center"
      ></el-table-column> -->

   

      <!-- <el-table-column
        prop="subjectId"
        label="学科"
        :formatter="subjectFormatter"
        width="120px"
      />
      <el-table-column
        prop="questionType"
        label="题型"
        :formatter="questionTypeFormatter"
        width="70px"
      /> -->

      <!-- <el-table-column prop="shortTitle" label="题干" show-overflow-tooltip />
      <el-table-column prop="score" label="分数" width="60px" />
      <el-table-column prop="difficult" label="难度" width="60px" />
      <el-table-column prop="createTime" label="创建时间" width="160px" /> -->
      <el-table-column label="操作" align="center" width="220px">
        <template slot-scope="{ row }">
          <el-button size="mini" @click="showQuestion(row)">预览</el-button>
          <el-button size="mini" @click="editQuestion(row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="deleteQuestion(row)"
            class="link-left"
            >删除
          </el-button>
        </template>
      </el-table-column>

      <el-table-column
        prop="createTime"
        label="创建时间"
        width="200"
        align="center"
      ></el-table-column>

      <el-table-column prop="id" label="Id" width="90px" />
    </el-table>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="queryParam.pageIndex"
      :limit.sync="queryParam.pageSize"
      @pagination="search"
    />
    <el-dialog
      :visible.sync="questionShow.dialog"
      style="width: 100%; height: 100%"
    >
      <QuestionShow
        :qType="questionShow.qType"
        :question="questionShow.question"
        :qLoading="questionShow.loading"
      />
    </el-dialog>
    <el-button type="" @click="insertBatch">insertBatch</el-button>
    <el-button type="" @click="findAllTextContents"
      >findAllTextContents</el-button
    >

    selectPageEqual
    <el-button type="" @click="selectPageEqual">selectPageEqual</el-button>

    <el-button type="" @click="select_by_content_like_do"
      >select_by_content_like_do</el-button
    >

    <el-button type="" @click="selectBySql_do">selectBySql_do</el-button>

    by_content_like
    <div
      @click="changeTableName(item)"
      :key="item.id"
      v-for="item in by_content_like"
    >
      <!-- {{ item }} -->


      <!-- selectBySql
      <div
        @click="changeTableName(item)"
        :key="item.id"
        v-for="item in selectBySql"
      >
        {{ item }}
      </div>
       -->
    </div>
  </div>
</template>

<script>
import { post, postWithQuery } from "@/utils/request";
import { mapGetters, mapState, mapActions } from "vuex";
import Pagination from "@/components/Pagination";
import QuestionShow from "./components/Show";
import questionApi from "@/api/question";
import permitAllApi from "@/api/permitAll";
import allApi from "@/api/all";
import textContentApi from "@/api/textContent";
import StringUtil from "@/utils/StringUtil";
import ObjUtil from "@/utils/ObjUtil";
import axios from "axios";
import Common from "@/utils/Common";
export default {
  components: { Pagination, QuestionShow },
  data() {
    return {
      questionsOfContent: [],
      ShowQuesCorret: null,
      ques_dialogVisible: false,
      by_content_like: [],
      queryParam: {
        content: null,
        id: null,
        questionType: null,
        level: null,
        subjectId: null,
        pageIndex: 1,
        pageSize: 10,
      },
      selectBySql: [],
      subjectFilter: null,
      listLoading: true,
      tableData: [],
      total: 0,
      questionShow: {
        qType: 0,
        dialog: false,
        question: null,
        loading: false,
      },
      toShowItem: null,
    };
  },
  created() {
    this.esPage()
    // this.initSubject();
    // this.search();
  },
  methods: {
    // editQuestion(row) {
    //   let url = this.enumFormat(this.editUrlEnum, row.questionType);
    //   console.log("url editQuestion");
    //   console.log(url);
    //   this.$router.push({ path: url, query: { id: row.id } });
    // },

    getContent(o) {
      try {
        let content = JSON.parse(o.content);
        return content.titleContent;
      } catch (e) {
        console.log(e);
        return o.content;
      }
    },
    forTableData() {
      for (let o of this.tableData) {
        // o.content=JSON.parse(o.content).titleContent
        let content = this.getContent(o);
        //  o.content=content
        o.contentShow = content;
      }
    },
    TextContentEsHilightSearchResultMapper() {
      // /api
      postWithQuery(
        "/api/es/textContent/TextContentEsHilightSearchResultMapper",
        {
          pageNumber: 0,
          pageSize: 10,
         
        },
        {
          fuzziness:'fuzziness',
          keyword: this.queryParam.content,
        }
      ).then((res) => {
        console.log(res);
        this.tableData = res.content;
        this.forTableData();
      });
    },
    // esPage
    esPage() {
      // /api
      // Integer pageNum,
      //                    @RequestParam(defaultValue = "5") Integer pageSize) 
      let postData=  {
          fuzziness:'fuzziness',
          keyword: this.queryParam.content,
        }
      postWithQuery(
        "/api/es/textContent/esPage",
        {
          pageNumber: 0,
          pageSize: 10,
          pageNum: 0,
        },
        postData
      ).then(res=> {
        console.log(res);
        // res.Data
        let succ=1
        if(res.code!=succ){
          // ElMess 
          this.$message({
            message: res.message,
            type: "error",
          });
          return
        }
        
        this.tableData = res.Data||res.content;
        this.forTableData();
      });
    },
   TextContentEsHilightSearchResultMapperFuzziness() {
      postWithQuery(
        "/api/es/textContent/TextContentEsHilightSearchResultMapperFuzziness",
        {
          pageNumber: 0,
          pageSize: 10,
        
        },
        {
          fuzziness:'fuzziness',
          keyword: this.queryParam.content,
        }
      ).then((res) => {
        console.log(res);
        this.tableData = res.content;
        this.forTableData();
      });
    },
    contentInId() {
      postWithQuery(
        "/es/textContent/contentInId",
        {
          pageNumber: 0,
          pageSize: 10,
        },
        {
          keyword: this.queryParam.content,
        }
      ).then((res) => {
        console.log(res);
        this.tableData = res || res.content;
        this.forTableData();
      });
    },
    textContentSearch() {
      // "queryParam.content"
      //       pageNumber : 1
      // pageSize : 1

      // http://localhost:8003/es/textContent/findAllEs
      postWithQuery(
        "/es/textContent/search",
        {
          pageNumber: 0,
          pageSize: 10,
        },
        {
          keyword: this.queryParam.content,
        }
      ).then((res) => {
        console.log(res);
        this.tableData = res;
      });
    },

    handleClose() {},
    showInfo() {
      this.ques_dialogVisible = false;
      //       allApi.  selectBySql({
      //        "sql": `select * from t_question
      // where info_text_content_id = ${this.queryParam.id}`,
      //    }).then(res=>{
      //        console.log("res selectBySql");
      //        console.log(res);
      //        this.selectBySql = res. response

      //     })
    },

    selectBySql_do() {
      this.ShowQuesCorret = null;
      allApi
        .selectBySql({
          sql: `select * from t_question 
where info_text_content_id = ${this.toShowItem.id}`,
        })
        .then((res) => {
          console.log("res selectBySql");
          console.log(res);
          this.selectBySql = res.response;
          if (this.selectBySql.length >= 1) {
            //  this.$message({
            //    message: "该题目已经存在",
            //    type: "warning",
            //  });
            this.ShowQuesCorret = this.selectBySql[0].correct;
          }
        });
    },

    selectPageEqual() {
      allApi.selectPageEqual({}).then((res) => {
        console.log("res selectPageEqual");
        console.log(res);
      });
    },

    selectPageTextContent(){
      // this.form
      let  data= {
     "id":null ,
     "content":null ,
     "createTime":null
              }
              let  queryParam=this.queryParam
              let  pageIndex=queryParam.pageIndex
              let  pageSize=queryParam.pageSize
              // queryParam.pageIndex
              // this.pageNumber
              // queryParam.pageNumber
             
              console.log("this.queryParam");
              console.log(this.queryParam);
              textContentApi.selectPage({ pageNumber: pageIndex, pageSize: pageSize },  this.queryParam)
        // axios.post(Common.examUrl + `textContent/selectPage?pageNumber=${pageIndex}&pageSize=${pageSize}`,
        //   this.queryParam)
         .then(res => {
      // this.$axios.post( `/textContent/selectPage?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`,data).then(res => {
     console.log("res");
     console.log(res);
   let   resDemo={
    "code": 1,
    "message": "成功",
    "response": {
        "records": [
            {
                "id": 23,
                "content": "{\"titleContent\":\"<p>修饰权限符以下哪个不是？<br/></p>\",\"analyze\":\"<p>缺省</p>\",\"questionItemObjects\":[{\"prefix\":\"A\",\"content\":\"public\",\"score\":null},{\"prefix\":\"B\",\"content\":\"protected\",\"score\":null},{\"prefix\":\"C\",\"content\":\"private\",\"score\":null},{\"prefix\":\"D\",\"content\":\"default\",\"score\":null}],\"correct\":\"D\"}",
                "createTime": 1619350137000
            },
            {
                "id": 24,
                "content": "{\"titleContent\":\"<p class=\\\"ueditor-p\\\">重载和重写哪个描述的不对？</p>\",\"analyze\":\"重载不表现多态性\",\"questionItemObjects\":[{\"prefix\":\"A\",\"content\":\"重载表现多态性，重写表现多态性\",\"score\":null},{\"prefix\":\"B\",\"content\":\"方法名和参数列表相同的是重写；方法名相同参数列表不相同的为重载\",\"score\":null},{\"prefix\":\"C\",\"content\":\"<p>重写的返回值要小于等于父类</p>\",\"score\":null},{\"prefix\":\"D\",\"content\":\"抛出异常要小于等于父类，权限修饰符要大于等于父类\",\"score\":null}],\"correct\":\"A\"}",
                "createTime": 1619357190000
            },
            {
                "id": 25,
                "content": "{\"titleContent\":\"<p class=\\\"ueditor-p\\\">abstract抽象类和interface接口的异同？<br/></p>\",\"analyze\":\"1\",\"questionItemObjects\":[{\"prefix\":\"A\",\"content\":\"<p>都不能直接实例化</p>\",\"score\":null},{\"prefix\":\"B\",\"content\":\"都有构造器\",\"score\":null},{\"prefix\":\"C\",\"content\":\"设计理念是一样的\",\"score\":null},{\"prefix\":\"D\",\"content\":\"都可以多继承\",\"score\":null}],\"correct\":\"A\"}",
                "createTime": 1619357868000
            },
            {
                "id": 26,
                "content": "{\"titleContent\":\"<p>哪个不是死锁产生的条件</p>\",\"analyze\":\"循环等待条件\",\"questionItemObjects\":[{\"prefix\":\"A\",\"content\":\"<p>互斥条件</p>\",\"score\":null},{\"prefix\":\"B\",\"content\":\"不可剥夺条件\",\"score\":null},{\"prefix\":\"C\",\"content\":\"请求与保持条件\",\"score\":null},{\"prefix\":\"D\",\"content\":\"阻塞条件\",\"score\":null}],\"correct\":\"D\"}",
                "createTime": 1619366571000
            },
            {
                "id": 27,
                "content": "{\"titleContent\":\"以下哪个不是sychronized和reentranlock的区别？\",\"analyze\":\"sychronized为悲观锁，只能一个对象持有\",\"questionItemObjects\":[{\"prefix\":\"A\",\"content\":\"都为可重入锁\",\"score\":null},{\"prefix\":\"B\",\"content\":\"reentranlock可以等待且中断\",\"score\":null},{\"prefix\":\"C\",\"content\":\"reentranlock可以为公平锁，可选择性通知\",\"score\":null},{\"prefix\":\"D\",\"content\":\"sychronized为乐观锁\",\"score\":null}],\"correct\":\"D\"}",
                "createTime": 1619366824000
            },
            {
                "id": 28,
                "content": "{\"titleContent\":\"<p>以下哪个不是synchronized和volatile的区别？</p>\",\"analyze\":\"<p>变量用long或者double修饰时获得原子性</p>\",\"questionItemObjects\":[{\"prefix\":\"A\",\"content\":\"volatile不会造成线程阻塞，sychronized会\",\"score\":null},{\"prefix\":\"B\",\"content\":\"voliatile保证可见性，synchronized保证原子性和可见性\",\"score\":null},{\"prefix\":\"C\",\"content\":\"volatile只能应用于变量级别，synchronized应用于方法，变量，代码块\",\"score\":null},{\"prefix\":\"D\",\"content\":\"volatile不可以获得原子性\",\"score\":null}],\"correct\":\"D\"}",
                "createTime": 1619367064000
            },
            {
                "id": 29,
                "content": "{\"titleContent\":\"以下关于ThreadLocal描述对的是？\",\"analyze\":\"强引用会导致垃圾回收时不回收，故需要调用remove避免\",\"questionItemObjects\":[{\"prefix\":\"A\",\"content\":\"访问这个变量的线程在本地都会有副本\",\"score\":null},{\"prefix\":\"B\",\"content\":\"底层为ThreadLocalMap，通过get、set进行获取值和赋值\",\"score\":null},{\"prefix\":\"C\",\"content\":\"第一个变量为弱引用，是ThreadLocal对象本身，第二个对象为强引用\",\"score\":null},{\"prefix\":\"D\",\"content\":\"为避免内存泄露，可以调用remove方法\",\"score\":null}],\"correct\":\"\"}",
                "createTime": 1619367377000
            },
            {
                "id": 30,
                "content": "{\"titleContent\":\"<p>以下为创建线程池的方法有？</p>\",\"analyze\":\"<p>ThreadPool为线程池接口</p>\",\"questionItemObjects\":[{\"prefix\":\"A\",\"content\":\"newFixThreadPool\",\"score\":null},{\"prefix\":\"B\",\"content\":\"newsingleThreadExecutor\",\"score\":null},{\"prefix\":\"C\",\"content\":\"newCacheThreadPool\",\"score\":null},{\"prefix\":\"D\",\"content\":\"ThreadPool\",\"score\":null}],\"correct\":\"\"}",
                "createTime": 1619367550000
            },
            {
                "id": 31,
                "content": "{\"titleContent\":\"<p>Runnable的run()，和Callable的call()方法区别有？<br/></p>\",\"analyze\":\"无\",\"questionItemObjects\":[{\"prefix\":\"A\",\"content\":\"run方法没有返回值，call有<br/>\",\"score\":null},{\"prefix\":\"B\",\"content\":\"run不抛出异常，call抛出\",\"score\":null},{\"prefix\":\"C\",\"content\":\"call方法相当于启动一个异步运算，通过Future对象接收\",\"score\":null},{\"prefix\":\"D\",\"content\":\"<p>使用Future的cancel方法可以取消执行</p>\",\"score\":null}],\"correct\":\"\"}",
                "createTime": 1619367727000
            },
            {
                "id": 32,
                "content": "{\"titleContent\":\"说说IO流的分类\",\"analyze\":\"无\",\"questionItemObjects\":[],\"correct\":\"<p class=\\\"ueditor-p\\\">1.操作数据单位：字节流、字符流</p><p class=\\\"ueditor-p\\\">2.数据的流向：输入流、输出流</p><p class=\\\"ueditor-p\\\">3.流的角色：节点流、处理流</p>\"}",
                "createTime": 1619367838000
            }
        ],
        "total": 249,
        "size": 10,
        "current": 1,
        "orders": [],
        "optimizeCountSql": true,
        "hitCount": false,
        "countId": null,
        "maxLimit": null,
        "searchCount": true,
        "pages": 25
    }
}
// stion/select_by_content_like
this.tableData =  res.response.records
this.total =res.response.total
this.queryParam.pageIndex=res.response.current
    //  this.tableData = re.list;
        // this.total = re.total;
        // this.queryParam.pageIndex = re.pageNum;
        // this.listLoading = false;
     });
    },

    dialogChange(item) {
      // console.log("item dialogChange");
      // console.log(item);
      // item.dialogVisible = !item.dialogVisible;
      this.toShowItem = item;
      this.ques_dialogVisible = !this.ques_dialogVisible;
      // getHtmlPlainText
      if (this.ques_dialogVisible) {
        this.selectBySql_do();
      }
      //       allApi.  selectBySql({
      //        "sql": `select * from t_question
      // where info_text_content_id = ${this.queryParam.id}`,
      //    }).then(res=>{
      //        console.log("res selectBySql");
      //        console.log(res);
      //        this.selectBySql = res. response

      //     })
    },
    toBatchInsert() {
      // this.$router.push({path: 'question/edit/batch-input', query: {selected: "2"}});
      this.$router.push({ path: "edit/batch-input", query: { selected: "2" } });
    },
    submitForm() {
      this.queryParam.pageIndex = 1;
      this.search();
    },
    search() {
      this.listLoading = true;
      questionApi.pageList(this.queryParam).then((data) => {
        const re = data.response;
        this.tableData = re.list;
        this.total = re.total;
        this.queryParam.pageIndex = re.pageNum;
        this.listLoading = false;
      });
    },
    insertBatch() {
      let list = [
        {
          correct: "B,C,D",
          createTime: new Date(),
          createUser: 0,
          deleted: false,
          difficult: 0,
          gradeLevel: 0,
          id: null,
          infoTextContentId: 0,
          questionType: 0,
          score: 0,
          status: 0,
          subjectId: 0,
        },
      ];

      // 正确题目的 数据 B,C,D
      questionApi.insertBatch(list).then((data) => {
        console.log(data);
      });
    },
    parseContent(content) {
      // console.log("content parseContent");
      // console.log(content);
      try {
        // console.log("content");
        // console.log(content);
        content = JSON.parse(content);
        // let content = JSON.parse(content);
        return content;
      } catch (e) {
        console.log(e);
        // console.log("content error");
        // console.log(content);
        return content;
      }
    },

    select_by_content_like_go() {
      this.$router.push({ path: "edit/batch-input", query: { selected: "2" } });
    },
    select_by_content_like_res_parse(res) {
      // this.tableData = res.data 
      let that = this;
      // this.by_content_like = res.response;
      this.by_content_like = res.response.records;
      console.log("this.by_content_like select_by_content_like_res_parse");
      console.log(this.by_content_like);
      //  let resList=response
      // let resList = this.by_content_like;
      let resList = [];
      for (let i = 0; i < this.by_content_like.length; i++) {
        let que = this.by_content_like[i];
        // resList[i].contentParsed = JSON.parse(resList[i].content);
        // resList[i].dialogVisible = false;
        // if(que.content )
        // js 判断是 str

        let content = que.content;
        console.log("content");
        console.log(content);
        //  if(isStr){
        //   let content =que.content
        //  }else{
        //   let content = JSON.parse(que.content);
        //  }
        content = that.parseContent(content);
        // let isStr= ObjUtil.isStr(que.content)
        //  if(!isStr){
        //   content = JSON.parse(que.content);
        //  }

        if (content.titleContent) {
          console.log("que.content");
          console.log(que.content);
          que.contentParsed = content;
          // getHtmlPlainText
          que.contentParsed.titleContent = StringUtil.getHtmlPlainText(
            que.contentParsed.titleContent
          );
          que.contentParsed.correct = StringUtil.getHtmlPlainText(
            que.contentParsed.correct
          );
          // que.contentParsed.correct.substr(0,20)
          que.contentParsed.correct.substr(0, 10);
          resList.push(que);
          // 是题目
        }
        // else{
        //   content.titleContent=""
        // }
        // resList.push(que);
        // resList[i].contentParsed = JSON.parse(que.content);
        // resList[i].dialogVisible = false;
      }

      this.by_content_like = resList;
      console.log("this.by_content_like ");
      console.log(this.by_content_like);
    },
    select_by_content_like_do() {
      let that = this;
      textContentApi
        .selectPlusPage(
          // .selectPageEqual
          {
            content: this.queryParam.content,
            pageIndex: 1,
            pageNumber: 1,
            pageSize: 10,
          },
          this.queryParam
        )
        .then((res) => {
          console.log("res select_by_content_like_do");
          console.log(res);
        this.tableData=  res. response.records
          // this.by_content_like = res.response.list;
          // this.by_content_like.forEach((item) => {
          //   item.content = that.parseContent(item.content);
          // });
          this.select_by_content_like_res_parse(res);
        });

      /*
      allApi.select_by_content_like(this.queryParam).then((res) => {
        console.log("res select_by_content_like");
        console.log(res);
        this.by_content_like = res.response;
        //  let resList=response
        // let resList = this.by_content_like;
        let resList = [];
        for (let i = 0; i < this.by_content_like.length; i++) {
          let que = this.by_content_like[i];
          // resList[i].contentParsed = JSON.parse(resList[i].content);
          // resList[i].dialogVisible = false;
          // if(que.content )
          // js 判断是 str 
        
         let content =que.content
         console.log("content");
         console.log(content);
        //  if(isStr){
        //   let content =que.content
        //  }else{
        //   let content = JSON.parse(que.content);
        //  }
        content=that.parseContent(content)
        // let isStr= ObjUtil.isStr(que.content)
        //  if(!isStr){
        //   content = JSON.parse(que.content);
        //  }
        
          if (content.titleContent) {
            console.log("que.content");
            console.log(que.content);
            que.contentParsed = content;
            // getHtmlPlainText
            que.contentParsed.titleContent = StringUtil.getHtmlPlainText(
              que.contentParsed.titleContent
            );
            que.contentParsed.correct = StringUtil.getHtmlPlainText(
              que.contentParsed.correct
            );
            // que.contentParsed.correct.substr(0,20)
            que.contentParsed.correct.substr(0, 10);
            resList.push(que);
          }
          // resList[i].contentParsed = JSON.parse(que.content);
          // resList[i].dialogVisible = false;
        }

        this.by_content_like = resList;
      });
      */
    },

    findAllTextContents() {
      // let data={}
      let data = [];
      console.log("permitAllApi");
      permitAllApi
        .findAllTextContents(data)
        .then((re) => {
          console.log(re);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    levelChange() {
      this.queryParam.subjectId = null;
      this.subjectFilter = this.subjects.filter(
        (data) => data.level === this.queryParam.level
      );
    },
    addQuestion() {
      this.$router.push("/exam/question/edit/singleChoice");
    },
    showQuestion(row) {
      let _this = this;
      this.questionShow.dialog = true;
      this.questionShow.loading = true;
      questionApi.select(row.id).then((re) => {
        _this.questionShow.qType = re.response.questionType;
        _this.questionShow.question = re.response;
        _this.questionShow.loading = false;
      });
    },
    editQuestion(row) {
      let url = this.enumFormat(this.editUrlEnum, row.questionType);
      console.log("url editQuestion");
      console.log(url);
      // http://localhost:8003/api/admin/question/selectPageEqual
      postWithQuery(
        "/api/admin/question/selectPageEqual",
        {
          pageNumber: 0,
          pageSize: 10,
        },
        {
          id: null,
          questionType: null,
          subjectId: null,
          score: null,
          gradeLevel: null,
          difficult: null,
          correct: null,
          infoTextContentId: row.id,
          createUser: null,
          status: null,
          createTime: null,
          deleted: null,
        }
      ).then((res) => {
        console.log(res);
        //  let  quesId= res.response.records[0].id
        let resTpl = {
          code: 1,
          message: "成功",
          response: {
            records: [
              {
                id: 1,
                quesContent: null,
                questionType: 1,
                subjectId: 4,
                score: 20,
                gradeLevel: 1,
                difficult: 2,
                correct: "B",
                infoTextContentId: 1,
                createUser: 2,
                videoLink: null,
                status: 1,
                createTime: 1618641652000,
                deleted: false,
                analyze: null,
                title: null,
                items: null,
              },
            ],
            total: 1,
            size: 10,
            current: 1,
            orders: [],
            optimizeCountSql: true,
            hitCount: false,
            countId: null,
            maxLimit: null,
            searchCount: true,
            pages: 1,
          },
        };

        let ques = res.response.records[0];
        let quesId = res.response.records[0].id;
        let questionType = ques.questionType;
        let url = this.enumFormat(this.editUrlEnum, questionType);
        console.log("url editQuestion");
        console.log(url);

        this.$router.push({ path: url, query: { id: quesId } });
        // this.$router.push({ path: url, query: { id: row.id } });
      });
    },
    editQuestionOfContent(row) {
      let ques = row;
      console.log("row editQuestionOfContent");
      console.log(row);
      // textContentApi.selectPageEqual({
      //   pageNumber:2,
      //   pageSize:10,
      // },{}).then(res=>{
      //   console.log("res selectPageEqual");
      //   console.log(res);
      // })

      // questionApi.select(row.id).then(res=>{

      // })

      /**
       * 题目 填空、 题干、解析、答案等信息
       */
      // private Integer infoTextContentId;
      // pageSize: 10,
      questionApi
        .selectPageEqual(
          {
            // pageNumber:2,
            // pageNumber:1,
            pageNumber: 0,
            pageSize: 9999999,
          },
          {
            infoTextContentId: row.id,
            // id:row.id,
          }
        )
        .then((res) => {
          console.log("res selectPageEqual");
          console.log(res);
          let rep = {
            records: [],
            total: 0,
            size: 10,
            current: 1,
            orders: [],
            optimizeCountSql: true,
            hitCount: false,
            countId: null,
            maxLimit: null,
            searchCount: true,
            pages: 0,
          };

          let records = res.response.records;
          console.log("records");
          console.log(records);
          if (res.response.records.length == 0) {
            this.$message({
              message: "没有相关题目",
              type: "warning",
            });
            return;
          }

          console.log("records");
          console.log(records);
          this.questionsOfContent = records;
        });

      // row.id
      // let url = this.enumFormat(this.editUrlEnum, row.questionType);
      // console.log("url editQuestion");
      // console.log(url);
      // this.$router.push({ path: url, query: { id: row.id } });
    },
    deleteQuestion(row) {
      let _this = this;
      questionApi.deleteQuestion(row.id).then((re) => {
        if (re.code === 1) {
          _this.search();
          _this.$message.success(re.message);
        } else {
          _this.$message.error(re.message);
        }
      });
    },
    questionTypeFormatter(row, column, cellValue, index) {
      return this.enumFormat(this.questionType, cellValue);
    },
    subjectFormatter(row, column, cellValue, index) {
      return this.subjectEnumFormat(cellValue);
    },
    ...mapActions("exam", { initSubject: "initSubject" }),
  },
  computed: {
    ...mapGetters("enumItem", ["enumFormat"]),
    ...mapState("enumItem", {
      questionType: (state) => state.exam.question.typeEnum,
      editUrlEnum: (state) => state.exam.question.editUrlEnum,
      levelEnum: (state) => state.user.levelEnum,
    }),
    ...mapGetters("exam", ["subjectEnumFormat"]),
    ...mapState("exam", { subjects: (state) => state.subjects }),
  },
};
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
.Gradient {
  /* z-index: -10; */
  /* z-index: -100; */
  z-index: -1010;
  display: flex;
  justify-content: center;
  /* 给背景一个渐变 */
  background: linear-gradient(to left, rgb(238, 92, 92), rgb(154, 127, 250));
  /* height: 1000px; */
  height: 500px;
}
/* *{
            padding: 0;
            margin: 0;
        } */
.frostedGlassPlace {
  position: relative;
  /* width: 400px; */
  width: 300px;
  /* height: 250px; */
  /* top: 150px; */
}
/* frosted glass */
/* frostedGlassCard */
.frostedGlassCard {
  /* position: absolute; */
  width: 400px;
  /* height: 250px; */
  border-radius: 20px;
  /* 设置渐变 */
  background: linear-gradient(to bottom, #f00, #67f);

  /* background: linear-gradient(
                to right bottom,
                rgba(255,255,255,.6),
                rgba(255,255,255,.3),
                rgba(255,255,255,.2)
            ); */
  /* 重点：使元素背景模糊化 */
  backdrop-filter: blur(11px);
  /* 设置上高光和左高光，使其看起来更加逼真 */
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  border-left: 1px solid rgba(255, 255, 255, 0.8);
}

.frostedGlassCard {
  color: rgba(255, 255, 255, 0.8);
  /* position: absolute; */
  /* left: 100px; */
  /* top: 200px; */
  z-index: 10;
  font-family: sans-serif;
  /* text-align: center; */
  width: 300px;
  /* height: 500px; */
  height: 200px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  background: linear-gradient(
    to top right,
    rgba(90, 149, 207, 0.5),
    rgba(58, 76, 99, 0.8)
  );
  box-shadow: 10px -10px 20px rgba(0, 0, 0, 0.2),
    -10px 10px 20px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  /*  元素后面区域添加模糊效果 */
  border-radius: 20px;
  /* transform: rotate(-15deg); */
  /* font-size:  ; */
}

/* .grid-container {
  display: grid;
  grid: 160px / auto auto auto;
} */

/* 设置文字阴影 */
/* 设置文字的大小和粗细 */
/* .frostedGlassCard span{
            font: 900 50px '';
            position: absolute;
            top: 10px;
            left: 20px;
            color: rgba(0,0,0,.5);
          
            text-shadow: 1px 1px 3px rgba(255,255,255,.7);
        } */

.el-table {
  user-select: initial;
  /* 
————————————————
版权声明：本文为CSDN博主「雷电影的小厨师、」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_45438028/article/details/127683722 */
}
.titleName {
  /* 设置文字的大小和粗细 */
  /* font: 900 50px ''; */
  /* font: 900 24px ""; */
  font-size: 15px;
  /* font: 200 50px '';
              font: 200 50px ''; */
  /* position: absolute; */
  /* top: 10px; */
  /* left: 20px; */
  margin-left: 10px;
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.5);
  /* 设置文字阴影 */
  text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.7);
}
/* 设置字体间距 */
/* .cardContentText{
            font: 900 25px '';
            position: absolute;
            bottom: 20px;
            right: 20px;
            color: rgba(255,255,255,.3);
           
            letter-spacing: 3px;
        } */

.cardContentText {
  /* font: 900 25px "";
  font: 900 25px ""; */
  font-size: 17px;
  /* margin-bottom: 20px; */
  /* margin-bottom: 60px; */
  /* ma  */
  position: absolute;
  left: 20px;
  bottom: 20px;
  right: 20px;
  /* color: rgba(255,255,255,.3); */
  /* 设置字体间距 */
  letter-spacing: 3px;
}

.grid-container {
  display: grid;
  /* grid: 160px / auto auto auto; */

  grid: 200px / auto auto auto;
  /* grid: 250px / auto auto auto; */
  grid-gap: 10px;
  /* background-color: #2196F3; */
  padding: 10px;
}

.overflow-ellipsis {
  /* 限定范围 */
  /* width: 300px;
       height: 40px; */
  /* border: 1px solid red; */

  /* 1.溢出隐藏 */
  overflow: hidden;
  /* 2.用省略号来代替超出文本 */
  text-overflow: ellipsis;
  /* 3.设置盒子属性为-webkit-box  必须的 */
  display: -webkit-box;
  /* 4.-webkit-line-clamp 设置为2，表示超出2行的部分显示省略号，如果设置为3，那么就是超出3行部分显示省略号 */
  /* -webkit-line-clamp: 2; */
  -webkit-line-clamp: 4;
  /* 5.字面意思：单词破坏：破坏英文单词的整体性，在英文单词还没有在一行完全展示时就换行  即一个单词可能会被分成两行展示 */
  word-break: break-all;
  /* 6.盒子实现多行显示的必要条件，文字是垂直展示，即文字是多行展示的情况下使用 */
  -webkit-box-orient: vertical;
}
/* ————————————————
版权声明：本文为CSDN博主「JJ_Smilewang」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/JJ_Smilewang/article/details/123992510 */

/* 毛玻璃  frosted glass */
/* 设置字体间距 */
/* .frostedGlassCard p{
            font: 900 25px '';
            position: absolute;
            bottom: 20px;
            right: 20px;
            color: rgba(255,255,255,.3);
           
            letter-spacing: 3px;
        } */
/* 接下来设置两个球 */
.orangeBall {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: rgb(240, 160, 0);
  position: absolute;
  /* top: 140px; */
  top: 100px;
  /* left: -40px; */
  left: -20px;
  z-index: -99;
}

.dialogShow {
  width: 200px;
  height: 200px;
}
.blueBall {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #77fdd7;
  position: absolute;
  /* top: -50px; */
  top: -20px;
  /* left: 260px; */
  left: 200px;
  z-index: -99;
}
</style>