<template>
  <div v-loading="qLoading" style="line-height: 1.8">
    <div
      v-if="qType == 1 || qType == 2 || qType == 3 || qType == 4 || qType == 5"
    >
      <div v-if="qType == 1" class="questionsContain">
        <div class="q-title" v-html="question.title" />
        <div class="q-content">
          <!-- class="questionsRadioGroup" -->
          <!-- <el-radio-group  竖着下来 -->
          <!-- element ui el-radio-group 增加垂直排列_PostgreSQL运维技术的博客-CSDN博客
https://blog.csdn.net/qq_35462323/article/details/119276258 -->
          <el-radio-group v-model="answer.content">
            <div :key="item.prefix" v-for="item in question.items">
              <el-radio class="questionsRadio" :label="item.prefix">
                <span class="question-prefix">{{ item.prefix }}.</span>
                <span  class="RadioTxtAnsOne" v-html="item.content"></span>
                <!-- v-html="item.content" -->
                <!-- <span class="RadioTxtAnsOne" > {{  item.content}}</span> -->

                <!-- class="q-item-span-content" -->
              </el-radio>
            </div>
          </el-radio-group>
        </div>
      </div>
      <div v-else-if="qType == 2">
        <div class="q-title" v-html="question.title" />
        <div class="q-content">
          <el-checkbox-group v-model="answer.contentArray">
            <el-checkbox
              v-for="item in question.items"
              :label="item.prefix"
              :key="item.prefix"
            >
              <span class="question-prefix">{{ item.prefix }}.</span>
              <span v-html="item.content" class="q-item-span-content"></span>
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div v-else-if="qType == 3">
        <div
          class="q-title"
          v-html="question.title"
          style="display: inline; margin-right: 10px"
        />
        <span style="padding-right: 10px">(</span>
        <el-radio-group v-model="answer.content">
          <el-radio
            v-for="item in question.items"
            :key="item.prefix"
            :label="item.prefix"
          >
            <span v-html="item.content" class="q-item-span-content"></span>
          </el-radio>
        </el-radio-group>
        <span style="padding-left: 10px">)</span>
      </div>
      <div v-else-if="qType == 4">
        <div class="q-title" v-html="question.title" />
        <div v-if="answer.contentArray !== null">
          <el-form-item
            :label="item.prefix"
            :key="item.prefix"
            v-for="item in question.items"
            label-width="50px"
            style="margin-top: 10px; margin-bottom: 10px"
          >
            <el-input v-model="answer.contentArray[item.prefix - 1]" />
          </el-form-item>
        </div>
      </div>
      <div v-else-if="qType == 5">
        <div class="q-title" v-html="question.title" />
        <div>
          <el-input
            v-model="answer.content"
            type="textarea"
            rows="5"
          ></el-input>
          <el-card>
            <div  class="shortAnsTxtHtml" v-html="answer.content"></div>
          </el-card>
          <!-- <section>
            <div  class="shortAnsTxtHtml" v-html="answer.content"></div>

          </section> -->
        </div>
      </div>
      <div class="question-answer-show-item" style="margin-top: 15px">
        <span class="question-show-item">结果：</span>
        <el-tag :type="doRightTagFormatter(answer.doRight)">
          {{ doRightTextFormatter(answer.doRight) }}
        </el-tag>
      </div>
      <div class="question-answer-show-item">
        <span class="question-show-item">分数：</span>
        <span>{{ question.score }}</span>
      </div>
      <div class="question-answer-show-item">
        <span class="question-show-item">难度：</span>
        <el-rate
          disabled
          v-model="question.difficult"
          class="question-show-item"
        ></el-rate>
      </div>
      <br />
      <div class="question-answer-show-item" style="line-height: 1.8">
        <span class="question-show-item">解析：</span>
        <span v-html="question.analyze" class="q-item-span-content" />
      </div>
      <div class="question-answer-show-item">
        <span class="question-show-item">正确答案：</span>
        <span
          v-if="qType == 1 || qType == 2 || qType == 5"
          v-html="question.correct"
          class="q-item-span-content"
        />
        <span
          v-if="qType == 3"
          v-html="trueFalseFormatter(question)"
          class="q-item-span-content"
        />
        <span v-if="qType == 4">{{ question.correctArray }}</span>
        <!-- drawIo    {{ question.drawIo }}
       {{ answer.drawIo}} -->
      </div>

      <el-dialog title="" width="1400px" :visible.sync="drawIoShowing">
        <DrawIo @saveDrawBack="saveDrawBack" :drawIo="answer.drawIo"></DrawIo>
      </el-dialog>
      <!-- lookQuestionDrawIoRightAns -->

      <el-button type="" @click="lookQuestionDrawIoRightAns"  v-if="shouldShowDrawIo"
        >lookQuestionDrawIoRightAns</el-button  >

      
      <el-button type="" @click="g6TreeShow">查看树状图</el-button>

      <el-button type="" @click="toSetDrawPageG6">去设计流程图</el-button>
      <el-button type=""
      v-if="shouldShowDrawIo"
       @click="lookDrawIo">lookDrawIo</el-button>
      <!-- <el-button type="" @click="lookQuestionDrawIo">lookQuestionDrawIo</el-button> -->
      <el-dialog title="" width="1400px" :visible.sync="questionDrawIoShowing">
        <DrawIo @saveDrawBack="saveDrawBack" :drawIo="question.drawIo"></DrawIo>
      </el-dialog>
    </div>
    <div v-else></div>

    <el-dialog
      top="10px"
      class="dialogG6Editor"
      :visible.sync="richEditor.dialogVisibleEditorG6"
      append-to-body
      :close-on-click-modal="false"
      width="1300px"
      height="1200px"
      :show-close="false"
      center
    >
      <G6Editor @exportData="exportData" :data="answer.drawIo" mode="edit">
      </G6Editor>
    </el-dialog>

    <el-dialog
      top="10px"
      class="dialogG6Editor"
      :visible.sync="dialogVisibleEditorG6Code"
      append-to-body
      :close-on-click-modal="false"
      width="1300px"
      height="1200px"
      :show-close="false"
      center
    >
   
      <G6Tree  
      style="z-index:1000;" @onClose="onCloseG6Tree" 
      :doFake="true"
      
      @onCloseNotSave="onCloseNotSaveG6Tree" 
      @exportData="exportData" :data="answer.drawIo"></G6Tree>
    </el-dialog>


  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import DrawIo from "@/views/DrawIo";
import axios from "axios";
// import common from '@/utils/common'
import common from "@/utils/Common";
import G6Editor from "@/components/G6Editor/index";
import eventBus from "@/utils/eventBus";
import G6Tree from "@/components/G6Tree";
export default {
  name: "QuestionShow",
  components: {
    DrawIo,
    G6Editor ,
    G6Tree,
  },
  data() {
    return {
      dialogVisibleEditorG6Code:false,
      shouldShowDrawIo: true,
      drawIoShowing: false,
      questionDrawIoShowing: false,
      richEditor: {
        dialogVisibleEditor: false,
        dialogVisible: false,
        object: null,
        parameterName: "",
        instance: null,
        dialogVisibleEditorG6: false,
      },

    };
  },
  props: {
    question: {
      type: Object,
      default: function () {
        return {};
      },
    },
    answer: {
      type: Object,
      default: function () {
        return { id: null, content: "", contentArray: [], doRight: false };
      },
    },
    qLoading: {
      type: Boolean,
      default: false,
    },
    qType: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    console.log("question");
    console.log(this.question);
    console.log("answer");
    console.log(this.answer);

    this.drawIoSetUp();
    this.G6EditorInit()
  },
  methods: {
    g6TreeShow(){

      this.dialogVisibleEditorG6Code =true
    },
    onCloseG6Tree(JsonCodeMirrorVal){
      // this.$emit('onClose',JsonCodeMirrorVal)

      console.log("JsonCodeMirrorVal onCloseG6Tree");
      console.log(JsonCodeMirrorVal);
      this.form.g6Tree=JsonCodeMirrorVal
      this.dialogVisibleEditorG6Code=false
    },
    onCloseNotSaveG6Tree(JsonCodeMirrorVal){
      this.dialogVisibleEditorG6Code=false
    },

  exportData(data) {
      console.log(data);
    },
    onClose() {
      // onClose
      // onClose
      this.richEditor.dialogVisibleEditor = false;
    },

    exportData(data) {
      // this.
      this.$emit("exportData", data);
    },
    G6EditorInit(){
      eventBus.$on("exportData", (data) => {
      console.log("data exportData emit");
      console.log(data);
    });
    // onCloseNotSave
    eventBus.$on("onCloseNotSave", (data) => {
      this.richEditor.dialogVisibleEditorG6 = false;
    });
    eventBus.$on("onClose", (data) => {
      console.log("data onClose emit");
      console.log(data);
      this.richEditor.dialogVisibleEditorG6 = false;
      // let questionId = this.$route.query?.question_id;
      let questionId = this.form.id;

      // this.form.questionId
      // node_draw
      let qu = {
        id: 145,
        questionType: 5,
        subjectId: 5,
        title: "drawio",
        gradeLevel: 2,
        items: [],
        analyze: "无",
        correctArray: null,
        correct: "drawio",
        score: 1,
        difficult: 3,
        itemOrder: null,
        videoLink: null,
        createUserId: null,
      };

      let drawObj = {};
      let drawObjContent = data;
      questionDrawApi
        .saveDrawOfQuestion(drawObj, this.$message, questionId, drawObjContent)
        .then((re) => {
          console.log("re");
          console.log(re);
          // this.form.title = re.response;
          // this.richEditor.dialogVisibleEditor = false;
        });
    });
    },
    toSetDrawPageG6() {

this.richEditor.dialogVisibleEditorG6 = true;
},

    drawIoSetUp() {
      let rightAnsDrawIo = this.question.drawIo;
      console.log("rightAnsDrawIo");
      console.log(rightAnsDrawIo);
      if (
        !rightAnsDrawIo ||
        rightAnsDrawIo == "" ||
        rightAnsDrawIo == "null" ||
        rightAnsDrawIo == "undefined" ||
        rightAnsDrawIo == "{}" ||
        rightAnsDrawIo == "[]" ||
        rightAnsDrawIo == '{"text":[],"begin":[],"circle":[],"lines":[]}'
      ) {
        // this.question.drawIo=JSON.parse( "{\"text\":[],\"begin\":[],\"circle\":[],\"lines\":[]}");
        this.shouldShowDrawIo = false;
        return
      }
      try {
        console.log("this.question.drawIo");
        console.log(this.question.drawIo);
        this.question.drawIo = JSON.parse(this.question.drawIo);
      } catch (e) {
        console.log(e);
        this.question.drawIo = JSON.parse(
          '{"text":[],"begin":[],"circle":[],"lines":[]}'
        );
      }
      // "content": "{\"text\":[],\"begin\":[],\"circle\":[],\"lines\":[]}"
      try {
        this.answer.drawIo = JSON.parse(this.answer.drawIo);
      } catch (e) {
        console.log(e);
        this.answer.drawIo = JSON.parse(
          '{"text":[],"begin":[],"circle":[],"lines":[]}'
        );
      }
    },
    lookQuestionDrawIoRightAns() {
      this.questionDrawIoShowing = true;
    },
    lookQuestionDrawIo() {
      let baseUrl = common.examUrl;
      // let postData={
      //   "questionId": this.question.id,
      //   "questionType": this.question.type,
      //   "questionDrawType": 1
      // }
      let postData = {
        drawId: null,
        id: null,
        questionId: this.question.id,
      };
      // axios
      //   .post(
      //     baseUrl + `questionDraw/selectPage?pageNumber=${0}&pageSize=${1}`,
      //     postData
      //   ).then(res=>{
      //     console.log("res questionDraw/selectPage");
      //     console.log(res);
      //   })

      axios
        .post(
          baseUrl +
            `questionDraw/getDrawByQuestionId?pageNumber=${0}&pageSize=${1}`,
          postData
        )
        .then((res) => {
          console.log("res questionDraw/getDrawByQuestionId");
          console.log(res);
          if (res.data.code != 1) {
            this.$message.error(res.data.response);
            return;
          }

          let response = res.data.response;
          response.content = JSON.parse(response.content);
          this.question.drawIo = response.content;
          this.questionDrawIoShowing = true;
        });

      // getDrawByQuestionId
    },
    lookDrawIo() {
      this.drawIoShowing = true;
    },
    saveDrawBack(drawIo) {
      // this.answer.answerItems[this.questionItemIdx].drawIo = drawIo;
      // this.questionItem.drawIo = drawIo
      console.log(" this.questionItem saveDrawBack");
      console.log(this.questionItem);
      this.drawIoShowing = false;
    },
    trueFalseFormatter(question) {
      return question.items.filter((d) => d.prefix === question.correct)[0]
        .content;
    },
    doRightTagFormatter(status) {
      return this.enumFormat(this.doRightTag, status);
    },
    doRightTextFormatter(status) {
      return this.enumFormat(this.doRightEnum, status);
    },
  },
  computed: {
    ...mapGetters("enumItem", ["enumFormat"]),
    ...mapState("enumItem", {
      doRightEnum: (state) => state.exam.question.answer.doRightEnum,
      doRightTag: (state) => state.exam.question.answer.doRightTag,
    }),
  },
};
</script>

<style scoped>
.questionsContain {
  /* background-color: beige; */
}
.questionsRadio {
  /* background-color: azure; */
}

.questionsRadioGroup {
  /* background-color: green; */
}

.q-item-span-content {
  white-space: normal;
  /* line-height: 1.8; */

  /* line-height: 1; */
}

.q-item-span-content p {
  /* display: inline !important; */
}
</style>