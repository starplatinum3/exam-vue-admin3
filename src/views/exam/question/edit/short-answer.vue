<template>
  <div class="app-container">
    <el-form
      :model="form"
      ref="form"
      label-width="100px"
      v-loading="formLoading"
      :rules="rules"
    >
      <el-form-item label="年级：" prop="gradeLevel" required>
        <el-select
          v-model="form.gradeLevel"
          placeholder="年级"
          @change="levelChange"
        >
          <el-option
            v-for="item in levelEnum"
            :key="item.key"
            :value="item.key"
            :label="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学科：" prop="subjectId" required>
        <el-select v-model="form.subjectId" placeholder="学科">
          <el-option
            v-for="item in subjectFilter"
            :key="item.id"
            :value="item.id"
            :label="item.name + ' ( ' + item.levelName + ' )'"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="题干：" prop="title" required>
        <!-- inputClickEditor -->
        <!-- <el-button type="" @click="makeTitle('title')">makeTitle</el-button> -->
        <!-- <el-button type="" @click="makeTitle">makeTitle</el-button> -->
        <el-button type="" @click="inputClickEditor(form, 'title')"
          >makeTitle</el-button
        >
        <!-- inputClickEditor -->
        <!-- <div  v-model="form.title"   @focus="inputClick(form,'title')"></div> -->
        <!-- <div  v-html="form.title"   @focus="inputClick(form,'title')"></div> -->
        <div
          class="titleDiv"
          v-html="form.title"
          @click="inputClick(form, 'title')"
        ></div>
        <!-- <el-input  v-html="form.title"   @focus="inputClick(form,'title')"></el-input> -->
        <el-input v-model="form.title" @focus="inputClick(form, 'title')" />
      </el-form-item>
      <el-form-item label="答案：" prop="correct" required>
        <el-button type="" @click="inputClickEditor(form, 'correct')"
          >makeTitle</el-button >
       
        <div v-html="form.correct" @click="inputClick(form, 'correct')"></div>
        <el-input v-model="form.correct" @focus="inputClick(form, 'correct')" />
      </el-form-item>
      <el-form-item label="解析：" prop="analyze" required>
        <el-input v-model="form.analyze" @focus="inputClick(form, 'analyze')" />
      </el-form-item>
      <el-form-item label="分数：" prop="score" required>
        <el-input-number
          v-model="form.score"
          :precision="1"
          :step="1"
          :max="100"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="难度：" required>
        <el-rate v-model="form.difficult" class="question-item-rate"></el-rate>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
        <el-button type="success" @click="showQuestion">预览</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      :visible.sync="richEditor.dialogVisible"
      append-to-body
      :close-on-click-modal="false"
      style="width: 100%; height: 100%"
      :show-close="false"
      center
    >
      <Ueditor @ready="editorReady" />
      <span slot="footer" class="dialog-footer">
        <el-button class="btnOK" type="primary" @click="pasteOptionByNavigator"
          >粘贴文本</el-button
        >
        <el-button type="primary" @click="editorConfirm">确 定</el-button>
        <el-button @click="richEditor.dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- <WangEdiorFormula></WangEdiorFormula> -->

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

    <el-button class="btnOK" type="primary" @click="pasteOptionByNavigator"
      >粘贴文本</el-button
    >

    <el-button type="" @click="toSetDrawPage">toSetDrawPage</el-button>
    <el-button type="" @click="toSetDrawPageG6">toSetDrawPageG6</el-button>
    <!-- <el-button type="" @click="toSetDrawPageG6">toSetDrawPageG6</el-button> -->
    <el-button type="" @click="toSetDrawPageG6Editor">toSetDrawPageG6Editor</el-button>

    <!-- shortAnswer -->
    <!-- D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\exam\question\edit\short-answer.vue -->

    <!-- <el-dialog  :visible.sync="richEditor.dialogVisible"  
    append-to-body :close-on-click-modal="false" style="width: 100%;height: 100%"   :show-close="false" center>
      <Ueditor @ready="editorReady"/>
      <span slot="footer" class="dialog-footer">
        <el-button class="btnOK" type="primary" @click="pasteOptionByNavigator">粘贴文本</el-button>
        <el-button type="primary" @click="editorConfirm">确 定</el-button>
        <el-button @click="richEditor.dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog> -->
    <!-- el-dialog 大小  -->
    <!-- style="width: 100%;height: 100%"   -->
    <!-- width="2000px" -->
    <!-- width="1000px" -->
    <!-- width="1400px" -->
    <!-- width="1200px" -->
    <!-- el-dialog height 不变 -->
    <el-dialog
      top="10px"
      :visible.sync="richEditor.dialogVisibleEditor"
      append-to-body
      :close-on-click-modal="false"
      width="1300px"
      height="1200px"
      :show-close="false"
      center
    >
      <!-- ref='WangEdiorFormula' -->
      <!-- @getVal="getVal" -->
      <WangEdiorFormula
        ref="WangEdiorFormula"
        :editorDataHtml="editorData"
        @getVal="editorConfirmFormula"
        @close="onClose"
        class="sketch_content"
      ></WangEdiorFormula>
      <!-- <div class="home sketch_content">
      <WangEdiorFormula></WangEdiorFormula>
      
  </div> -->
    </el-dialog>

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
      <G6Editor @exportData="exportData" :data="form.drawIo" mode="edit">
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
   
      <G6Tree @onClose="onCloseG6Tree" 
      
      @onCloseNotSave="onCloseNotSaveG6Tree" 
      @exportData="exportData" :data="form.g6Tree"></G6Tree>
    </el-dialog>

    <!-- dialogVisibleEditorG6Code -->
  </div>
</template>

<script>
// 引入 wangEditor
import WangEditor from "wangeditor";
// D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views
// import createKityformula from "@/components/kityformula";
// // import createKityformula from "./components/kityformula";
// // import myscriptMath from "./components/myscript-math-web";
// import myscriptMath from "@/components/myscript-math-web";
// D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\WangEdiorFormula.vue
import createKityformula from "@/views/components/kityformula";
import myscriptMath from "@/views/components/myscript-math-web";
import WangEdiorFormula from "@/views/WangEdiorFormula";
import "codemirror/theme/ambiance.css";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/hint/show-hint.css";
// D:\proj\bishe\exam-vue-admin3\src\components\G6Tree.vue
import G6Tree from "@/components/G6Tree";
// const CodeMirror = require('codemirror');
// console.log("CodeMirror");
// console.log(CodeMirror);
// require('codemirror/addon/edit/matchbrackets');
// require('codemirror/addon/selection/active-line');
// require('codemirror/mode/javascript/javascript');
// require('codemirror/addon/hint/show-hint');
// require('codemirror/keymap/sublime.js');
// require('codemirror/addon/selection/active-line.js');
// require('codemirror/addon/edit/matchbrackets.js');
// require('codemirror/addon/display/autorefresh.js');

// vue-codemirror  vue2
import { codemirror } from "vue-codemirror";
import "codemirror/theme/liquibyte.css"; //导入选中的theme主题,与初始化theme配置一致
// import "codemirror/addon/hint/show-hint.css"; //导入自动提示核心样式
import store from "@/store";
import "codemirror/mode/sql/sql.js"; //导入使用的语言语法定义文件，初始化mode配置一致
import "codemirror/addon/edit/matchbrackets.js";
import "codemirror/addon/hint/show-hint.js"; //导入自动提示核心文件
import "codemirror/addon/hint/sql-hint.js"; //导入指定语言的提示文件

import "codemirror/mode/sql/sql.js";
// 主题css
import "codemirror/theme/solarized.css";
// require active-line.js
import "codemirror/addon/selection/active-line.js";
// closebrackets
import "codemirror/addon/edit/closebrackets.js";
// import { mapGetters } from "vuex";

// Ueditor 有些不能复制
import QuestionShow from "../components/Show";
import Ueditor from "@/components/Ueditor";
// Ueditor 公式
// Ueditor 加 按钮
import { mapGetters, mapState, mapActions } from "vuex";
import questionApi from "@/api/question";
import questionDrawApi from "@/api/questionDraw";
import G6Editor from "@/components/G6Editor/index";
import eventBus from "@/utils/eventBus";
import common from "@/utils/Common";
import axios from "axios";
// axios

// Axios
// common
// Common
// 文档：toSetDrawPageG6(){.note
// 链接：http://note.youdao.com/noteshare?id=5e4a3321904a5b49913a304da60b49ed&sub=F1B2929203094FFA9F942D333C8BBCD6
export default {
  components: {
    Ueditor,
    QuestionShow,
    codemirror,
    WangEdiorFormula,
    G6Editor,
    G6Tree
  },
  data() {
    return {
      dialogVisibleEditorG6Code:false,
      outVisible: false,
      editor: null,
      editorData: "",
      editorText: null,
      textarea: "",
      curCode: "#include<int></int>",
      cmOptions: {
        tabSize: 4, // tabsize默认为4
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: "text/x-mysql", // 选择代码语言，我这里选的sql
        extraKeys: { Ctrl: "autocomplete" }, //自动提示配置
        lineWrapping: true, // 自动换行
        theme: "solarized light", // 主题根据需要自行配置
      },

      form: {
        g6Tree:null,
        drawIo: null,
        id: null,
        questionType: 5,
        // gradeLevel: null,
        //  subjectId :  5 数据结构
        gradeLevel: 1,
        // subjectId: null,
        // subjectId: 1,
        subjectId: 5,
        title: "",
        items: [],
        analyze: "无",
        correct: "",
        // score: '',
        score: 1,
        // difficult: 0
        difficult: 3,
       
      },
      subjectFilter: null,
      formLoading: false,
      rules: {
        gradeLevel: [
          { required: true, message: "请选择年级", trigger: "change" },
        ],
        subjectId: [
          { required: true, message: "请选择学科", trigger: "change" },
        ],
        title: [{ required: true, message: "请输入题干", trigger: "blur" }],
        correct: [{ required: true, message: "请输入答案", trigger: "blur" }],
        analyze: [{ required: true, message: "请输入解析", trigger: "blur" }],
        score: [{ required: true, message: "请输入分数", trigger: "blur" }],
      },
      richEditor: {
        dialogVisibleEditor: false,
        dialogVisible: false,
        object: null,
        parameterName: "",
        instance: null,
        dialogVisibleEditorG6: false,
      },
      questionShow: {
        qType: 0,
        dialog: false,
        question: null,
        loading: false,
      },
    };
  },

  created() {
    let id = this.$route.query.id;
    let _this = this;
    this.initSubject(function () {
      _this.subjectFilter = _this.subjects;
    });
    // console.log('created  questionApi get');
    // console.log('id');
    // console.log(id);
    // 如果是新建的话 是没有id的
    if (id && parseInt(id) !== 0) {
      // console.log('created  questionApi get id ok ');
      _this.formLoading = true;
      questionApi.select(id).then((re) => {
        _this.form = re.response;
        console.log("_this.form questionApi get");
        console.log(_this.form);
        _this.formLoading = false;
        this.getQuestionDrawIoG6();
      });

      _this.questionDrawApiSelectPageEqual();
    }

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

  mounted() {
    this.mountedEditor();
  },
  methods: {
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
    getVal(editorData) {
      console.log("editorData");
      console.log(editorData);
      this.form.title = editorData;
    },
    makeTitle() {
      this.richEditor.dialogVisibleEditor =
        !this.richEditor.dialogVisibleEditor;
    },
    see() {
      // this.outVisible=true
      this.outVisible = !this.outVisible;
    },
    // onCmFocus(){

    // },
    onCmFocus(cm) {
      console.log("the editor is focused!", cm);
      console.log("this.editor .config.focus");
      console.log(this.editor.config.focus);
      this.editor.config.focus = false;
      console.log("this.editor .config.focus");
      console.log(this.editor.config.focus);

      console.log("document.activeElement");
      console.log(document.activeElement);
      // document.activeElement.blur()
      // document.activeElement.focus()
      // this.$refs.wangEditor.blur()
      let codemirrorCodeEl = this.$refs.codemirrorCode.$el;
      codemirrorCodeEl.blur();
      codemirrorCodeEl.focus();
      // this.$refs.codemirrorCode.blur()
      // el
      // this.$refs.codemirrorCode.focus()
      this.$nextTick(() => {
        codemirrorCodeEl.focus();
        // this.$refs.codemirrorCode.focus()
        cm.refresh();
        // cm.$el.refresh()
      });
    },
    seeCode() {
      console.log("this.editorData");
      console.log(this.editorData);
      store.dispatch("app/setWangEdiorFormulaData", this.editorData);
      this.$router.push("/test/CodeMirrorTest");
    },
    outClose() {
      console.log("outClose");
      this.outVisible = false;
    },
    getWangEdiorFormulaDataFromStore() {
      console.log("this.$store.state");
      console.log(this.$store.state);
      return this.$store.state.app.WangEdiorFormulaData;
    },
    codemirrorOnClick(v) {
      console.log("v");
      console.log(v);
      console.log("this.editor .config.focus");
      console.log(this.editor.config.focus);
      this.editor.config.focus = false;
      console.log("this.editor .config.focus");
      console.log(this.editor.config.focus);
    },
    changes(cm, changesVal) {
      // console.log("changesVal");
      // console.log(changesVal);
      let editorValue = cm.getValue();
      console.log("editorValue");
      console.log(editorValue);
      this.editor.txt.html(editorValue);
    },
    onCmCodeChanges(cm, changes) {
      this.editorValue = cm.getValue();
      this.resetLint();
    },

    mountedCodeMirror() {
      this.editorText = CodeMirror.fromTextArea(this.$refs.mycode, {
        mode: { name: "javascript", globalVars: true },
        indentWithTabs: true,
        smartIndent: true,
        lineNumbers: true,
        matchBrackets: true,
        autoRefresh: true,
        extraKeys: { Ctrl: "autocomplete" }, // 自定义快捷键
        hintOptions: {
          // 自定义提示选项
          tables: {
            users: ["name", "score", "birthDate"],
            countries: ["name", "population", "size"],
          },
        },
      });
      // 可选,挂载一下监听事项
      // : any
      this.editorText.on("change", (cm) => {
        this.code = cm.getValue(); // 这里要用多一个载体去获取值,不然会重复赋值卡顿
      });
    },
    getEditorData() {
      // 通过代码获取编辑器内容
      const data = this.editor.txt.html();
      alert(data);
    },
    setEditorData() {
      // 通过代码获取编辑器内容
      // const data = this.editor.txt.html();
      // alert(data);
      // this.editor.txt="e141411"
      this.editor.txt.html("e141411");
    },
    save() {
      const data = this.editor.txt.html();
      let editor_html_key = "editor_html";
      window.localStorage.setItem(editor_html_key, data);
      let editor_html = window.localStorage.getItem(editor_html_key);
      console.log("editor_html");
      console.log(editor_html);
    },

    // uestion/edit/shortAnswer
    mountedEditor() {
      //  let   this.$store.getters.doneTodos;
      const editor = new WangEditor("#demo1");
      // WangEditor 不要获取焦点
      // WangEditor 设置值
      // 配置菜单栏，删减菜单，调整顺序
      // editor.config.menus = ['bold', 'head', 'link', 'italic', 'underline']

      // 配置行高
      // editor.config.lineHeights = ['1', '1.15', '1.6', '2', '2.5', '3']

      // 获取必要的变量，这些在下文中都会用到
      const { $ } = WangEditor;
      const { PanelMenu, Panel } = WangEditor;

      class Kityformula extends PanelMenu {
        // 公式输入插件
        constructor(editors) {
          const $elem = WangEditor.$(
            `<div class="w-e-menu">
                    <i class="iconfont icongongshi" style="font-size:18px;"></i>
                </div>`
          );
          super($elem, editors);
        }

        // 菜单点击事件
        clickHandler() {
          // 做任何你想做的事情
          // 可参考【常用 API】文档，来操作编辑器
          const conf = createKityformula(editor);
          const panel = new Panel(this, conf);
          panel.create();
        }

        tryChangeActive() {}
      }

      class Myscript extends PanelMenu {
        // 公式手写插件
        constructor(editors) {
          const $elem = WangEditor.$(
            `<div class="w-e-menu">
                    <i class="iconfont iconshouxieban" style="font-size:18px;"></i>
                </div>`
          );
          super($elem, editors);
        }

        // 菜单点击事件
        clickHandler() {
          // 做任何你想做的事情
          // 可参考【常用 API】文档，来操作编辑器
          const conf = myscriptMath(editor);
          const panel = new Panel(this, conf);
          panel.create();
        }

        tryChangeActive() {}
      }

      // 注册菜单
      const kityformulaKey = "kityformulaKey"; // 菜单 key ，各个菜单不能重复
      editor.menus.extend("kityformulaKey", Kityformula);

      // 注册菜单
      const myscriptKey = "myscriptKey"; // 菜单 key ，各个菜单不能重复
      editor.menus.extend("myscriptKey", Myscript);

      // 将菜单加入到 editor.config.menus 中
      // 也可以通过配置 menus 调整菜单的顺序，参考【配置菜单】部分的文档
      editor.config.menus = editor.config.menus.concat(kityformulaKey);
      editor.config.menus = editor.config.menus.concat(myscriptKey);

      editor.config.uploadImgShowBase64 = true;
      editor.config.uploadImgMaxLength = 5; // 一次最多上传 5 个图片
      // editor.config.uploadImgMaxLength = 5;
      editor.zIndex.baseZIndex = 100; //方法
      // 配置 onchange 回调函数，将数据同步到 vue 中
      editor.config.onchange = (newHtml) => {
        this.editorData = newHtml;
      };
      // editor.config.focus=false

      let WangEdiorFormulaDataOfStore = this.getWangEdiorFormulaData;
      console.log("WangEdiorFormulaDataOfStore");
      console.log(WangEdiorFormulaDataOfStore);
      // editor.txt.html(this.getWangEdiorFormulaData)
      // 创建编辑器
      // app
      editor.create();
      let WangEdiorFormulaData = this.getWangEdiorFormulaDataFromStore();
      console.log("WangEdiorFormulaData");
      console.log(WangEdiorFormulaData);
      editor.txt.html(WangEdiorFormulaData);
      this.editor = editor;

      // 取消自动focus且禁止虚拟键盘弹出
      // document.activeElement.blur();
      // document.activeElement.blur
    },

    //自动获取剪贴板
    pasteOptionByNavigator() {
      // navigator.clipboard.read() 获取 html
      // navigator.clipboard.read
      navigator.clipboard
        .read()
        .then((v) => {
          console.log("获取剪贴板成功：");
          console.log(v);
          //   this.content = v;

          let clipboardItems = v;
          //
          // clipboardItems[0].getType('text/plain')
          // let  clipboardItemHtml=
          clipboardItems[0].getType("text/html").then((clipboardItemHtml) => {
            console.log("clipboardItemHtml");
            console.log(clipboardItemHtml);
          });
        })
        .catch((v) => {
          console.log("获取剪贴板失败: ", v);
        });

      //   navigator.clipboard
      //     .readText()
      //     .then((v) => {
      //       console.log("获取剪贴板成功：", v);
      //     //   this.content = v;
      //     })
      //     .catch((v) => {
      //       console.log("获取剪贴板失败: ", v);
      //     });
    },

    getQuestionDrawIoG6() {
      let baseUrl = common.examUrl;
      // let postData={
      //   "questionId": this.question.id,
      //   "questionType": this.question.type,
      //   "questionDrawType": 1
      // }
      let questionId = this.form.id;
      let postData = {
        drawId: null,
        id: null,
        questionId: questionId,
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
          // this.question.drawIo = response.content;
          this.form.drawIo = response.content;
          console.log("  this.form.drawIo");
          console.log(this.form.drawIo);

          // this.questionDrawIoShowing = true;
        });

      // getDrawByQuestionId
    },

    questionDrawApiSelectPageEqual() {
      let questionId = this.$route.query.id;
      questionDrawApi
        .selectPageEqual(
          { pageNumber: 1, pageSize: 10 },
          { questionId: questionId }
        )
        .then((re) => {
          console.log("questionDrawApiSelectPageEqual re");
          console.log(re);
          // if(re.response.records.length > 0){
          //   re.response.records.forEach(element => {
          //     questionDrawApi.delete(element.id).then(re => {
          //       console.log("delCurrentView delete");
          //       console.log(re);
          //     })
          //   });
          // }
        });
    },
    toSetDrawPageG6() {
      // let id = this.$route.query.id;
      // this.$router.push({
      //   path: "/exam/DrawIo",
      //   query: {
      //     question_id: id,
      //   },
      // });
      this.richEditor.dialogVisibleEditorG6 = true;
    },
    toSetDrawPageG6Editor(){
      this.dialogVisibleEditorG6Code = true;
    },
    toSetDrawPage() {
      // D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\DrawIo.vue
      let id = this.$route.query.id;
      this.$router.push({
        path: "/exam/DrawIo",
        query: {
          question_id: id,
        },
      });
    },

    editorReady(instance) {
      this.richEditor.instance = instance;
      let currentContent =
        this.richEditor.object[this.richEditor.parameterName];
      this.richEditor.instance.setContent(currentContent);
      // 光标定位到Ueditor
      this.richEditor.instance.focus(true);
    },
    inputClick(object, parameterName) {
      this.richEditor.object = object;
      this.richEditor.parameterName = parameterName;
      this.richEditor.dialogVisible = true;
    },
    inputClickEditor(object, parameterName) {
      this.richEditor.object = object;
      this.richEditor.parameterName = parameterName;
      // this.richEditor.dialogVisibleEditor = true;
      this.richEditor.dialogVisibleEditor = true;
      // this.richEditor.object[this.richEditor.parameterName]
      // console.log("this.editorData");
      // console.log(this.editorData);
      let currentContent =
        this.richEditor.object[this.richEditor.parameterName];
      // this.$refs.WangEdiorFormula.onSetVal(this.editorData);
      console.log("currentContent");
      console.log(currentContent);
      this.$nextTick(() => {
        this.$refs.WangEdiorFormula.onSetVal(currentContent);
      });
    },
    editorConfirmFormula(content) {
      // let content = this.richEditor.instance.getContent();
      this.richEditor.object[this.richEditor.parameterName] = content;
      this.richEditor.dialogVisibleEditor = false;
    },
    editorConfirm() {
      let content = this.richEditor.instance.getContent();
      this.richEditor.object[this.richEditor.parameterName] = content;
      this.richEditor.dialogVisible = false;
    },
    submitForm() {
      let _this = this;
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.formLoading = true;
          questionApi
            .edit(this.form)
            .then((re) => {
              if (re.code === 1) {
                _this.$message.success(re.message);
                _this.delCurrentView(_this).then(() => {
                  _this.$router.push("/exam/question/list");
                });
              } else {
                _this.$message.error(re.message);
                this.formLoading = false;
              }
            })
            .catch((e) => {
              this.formLoading = false;
            });
        } else {
          return false;
        }
      });
    },
    resetForm() {
      let lastId = this.form.id;
      this.$refs["form"].resetFields();
      this.form = {
        id: null,
        questionType: 5,
        gradeLevel: null,
        subjectId: null,
        title: "",
        items: [],
        analyze: "",
        correct: "",
        score: "",
        difficult: 0,
      };
      this.form.id = lastId;
    },
    levelChange() {
      this.form.subjectId = null;
      this.subjectFilter = this.subjects.filter(
        (data) => data.level === this.form.gradeLevel
      );
    },
    showQuestion() {
      this.questionShow.dialog = true;
      this.questionShow.qType = this.form.questionType;
      this.questionShow.question = this.form;
      console.log("this.questionShow.question");
      console.log(this.questionShow.question);
    },
    ...mapActions("exam", { initSubject: "initSubject" }),
    ...mapActions("tagsView", { delCurrentView: "delCurrentView" }),
  },
  computed: {
    ...mapGetters("enumItem", ["enumFormat"]),
    ...mapState("enumItem", {
      questionTypeEnum: (state) => state.exam.question.typeEnum,
      levelEnum: (state) => state.user.levelEnum,
    }),
    ...mapState("exam", { subjects: (state) => state.subjects }),
  },
};
</script>
<style scoped>
.titleDiv {
  /* width: 60px; */
}

.sketch_content {
  /* // 必须有高度 overflow 为自动 */
  overflow: auto;
  /* height: 434px; */
  border-top: 1px solid #eff1f4;
  border-bottom: 1px solid #eff1f4;
  padding: 0px 30px 11px 27px;
}

/* // 滚动条的样式,宽高分别对应横竖滚动条的尺寸 */
.sketch_content::-webkit-scrollbar {
  width: 3px;
}

/* // 滚动条里面默认的小方块,自定义样式 */
.sketch_content::-webkit-scrollbar-thumb {
  background: #8798af;
  border-radius: 2px;
}

/* // 滚动条里面的轨道 */
.sketch_content::-webkit-scrollbar-track {
  background: transparent;
}
.dialogG6Editor {
  /* width: 1000px; */
  /* height: 600px; */
  /* padding: 0;
  margin: 0;
  border: none; */
}
</style>