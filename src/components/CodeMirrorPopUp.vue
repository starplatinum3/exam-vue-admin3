<template>
  <div class="home">
    <!-- <h3>WangEditor with vue</h3>
    <el-button type="" @click="save">保存</el-button>
    <el-button type="" @click="see">see</el-button>
    <el-button type="" @click="seeCode">seeCode</el-button>
    <el-button type="" @click="onGetVal">onGetVal</el-button>
      <el-button type="" @click="onClose">onClose</el-button>
    <div v-show="!outVisible" class="wangEditorDiv" ref="wangEditor" id="demo1"></div> -->
    <!-- v-if="!outVisible" -->
    <!-- v-show="!outVisible" -->
    <!-- <button type="button" class="btn" @click="getEditorData">
      获取当前内容
    </button> -->
    <h3>内容预览</h3>
    <!-- <el-button type="" @click="setEditorData">setEditorData</el-button> -->
    <el-button type="" @click="saveMirrorToWang">saveMirrorToWang</el-button>
<el-button @click="setData">setData</el-button>
    <!-- <textarea
      name=""
      id=""
      cols="170"
      rows="20"
      readonly
      v-model="editorData"
    ></textarea> -->

    <!-- <textarea ref="mycode" class="textarea" v-model="textarea"></textarea> -->
    <!-- codemirror -vue  onclick  -->
    <!-- ref="child" -->
    <!-- ref="codemirrorCode" -->
    <!-- class="code" -->
    <!-- v-model="code" -->
    <!-- :value="editorData" -->
    <textarea v-model="editorData"> </textarea>
    <!-- :options="cmOptions" -->
    <!-- textarea  v-model codemirror 没有赋值 -->
    <textarea
      @onclick="codemirrorOnClick"
      @click="codemirrorOnClick"
      v-model="editorData"
      @changes="changes"
      ref="mycode"
      class="codesql"
      style="height: 200px; width: 600px"
    ></textarea>
   <!-- @focus="onCmFocus" -->
    <!-- <codemirror
      @onclick="codemirrorOnClick"
      @click="codemirrorOnClick"
      ref="codemirrorCode"
      v-model="editorData"
      :value="editorData"
      :options="cmOptions"
      class="code"
      @changes="changes"
    >
   
    </codemirror> -->

    <!-- codemirror 只是预览 不能写  -->
    <!-- <codemirror
      @onclick="codemirrorOnClick"
      @click="codemirrorOnClick"
      ref="codemirrorCode"
      v-model="editorData"
      :options="cmOptions"
      class="code"
      @changes="changes"
      @focus="onCmFocus"
    >
    </codemirror> -->
    <!-- ————————————————
版权声明：本文为CSDN博主「念头通达を」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_40765784/article/details/125448401 -->
  </div>
</template>
  
  <script>
// 引入 wangEditor
import WangEditor from "wangeditor";
// import createKityformula from "./components/kityformula";
// import myscriptMath from "./components/myscript-math-web";

import "codemirror/theme/ambiance.css";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/hint/show-hint.css";

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
// import { codemirror } from "vue-codemirror";
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
import { mapGetters } from "vuex";
import "codemirror/theme/ambiance.css";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/hint/show-hint.css";

let CodeMirror = require("codemirror/lib/codemirror");
require("codemirror/addon/edit/matchbrackets");
require("codemirror/addon/selection/active-line");
require("codemirror/mode/sql/sql");
require("codemirror/addon/hint/show-hint");
require("codemirror/addon/hint/sql-hint");

import "codemirror/lib/codemirror.css";
import "codemirror/mode/xml/xml"; // xml编辑器模式
import "codemirror/theme/monokai.css"; // 主题

export default {
  data() {
    return {
      editor: null,
      code: "//按Ctrl键进行代码提示",
      editorDataConfRef: {},
      outVisible: false,
      // editor: {

      // },
      editor: null,
      editorData: "1111",
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
        // readonly:true,
        // readOnly:true,
      },
    };
  },

  components: {
    // codemirror,
  },

  updated() {
    // console.log("updated this.editorData");
    // console.log(this.editorData);
    // this.editorData = this.editorDataHtml;
  },
  mounted() {
    console.log("this.editorData");
    console.log(this.editorData);
    this.editorData = this.editorDataHtml;
    // 这里没有赋值 要在里面吗
    this.mountedCodeMirrorXml();
    // console.log("this.editorDataHtml");
    // console.log(this.editorDataHtml);
    // console.log( "this. editorDataConf.data mounted");
    // console.log( this. editorDataConf.data);
    // this.editorDataConfRef = this. editorDataConf
    // this.editorData = this. editorDataConfRef.data

    // let codemirrorCodeRef=this.$refs.codemirrorCode.codemirror;
    //  //显示提示
    //  console.log("codemirrorCodeRef");
    //  console.log(codemirrorCodeRef);
    //  codemirrorCodeRef.on("cursorActivity", () => {
    //   codemirrorCodeRef.showHint();
    //   });

    // this.editorData = this. editorDataConf.data
    // this.editorData = this.editorDataHtml;
    //  let   this.$store.getters.doneTodos;
    // const editor = new WangEditor("#demo1");
    // // WangEditor 不要获取焦点
    // // WangEditor 设置值
    // // 配置菜单栏，删减菜单，调整顺序
    // // editor.config.menus = ['bold', 'head', 'link', 'italic', 'underline']

    // // 配置行高
    // // editor.config.lineHeights = ['1', '1.15', '1.6', '2', '2.5', '3']

    // // 获取必要的变量，这些在下文中都会用到
    // const { $ } = WangEditor;
    // const { PanelMenu, Panel } = WangEditor;

    // class Kityformula extends PanelMenu {
    //   // 公式输入插件
    //   constructor(editors) {
    //     const $elem = WangEditor.$(
    //       `<div class="w-e-menu">
    //                 <i class="iconfont icongongshi" style="font-size:18px;"></i>
    //             </div>`
    //     );
    //     super($elem, editors);
    //   }

    //   // 菜单点击事件
    //   clickHandler() {
    //     // 做任何你想做的事情
    //     // 可参考【常用 API】文档，来操作编辑器
    //     const conf = createKityformula(editor);
    //     const panel = new Panel(this, conf);
    //     panel.create();
    //   }

    //   tryChangeActive() {}
    // }

    // class Myscript extends PanelMenu {
    //   // 公式手写插件
    //   constructor(editors) {
    //     const $elem = WangEditor.$(
    //       `<div class="w-e-menu">
    //                 <i class="iconfont iconshouxieban" style="font-size:18px;"></i>
    //             </div>`
    //     );
    //     super($elem, editors);
    //   }

    //   // 菜单点击事件
    //   clickHandler() {
    //     // 做任何你想做的事情
    //     // 可参考【常用 API】文档，来操作编辑器
    //     const conf = myscriptMath(editor);
    //     const panel = new Panel(this, conf);
    //     panel.create();
    //   }

    //   tryChangeActive() {}
    // }

    // // 注册菜单
    // const kityformulaKey = "kityformulaKey"; // 菜单 key ，各个菜单不能重复
    // editor.menus.extend("kityformulaKey", Kityformula);

    // // 注册菜单
    // const myscriptKey = "myscriptKey"; // 菜单 key ，各个菜单不能重复
    // editor.menus.extend("myscriptKey", Myscript);

    // // 将菜单加入到 editor.config.menus 中
    // // 也可以通过配置 menus 调整菜单的顺序，参考【配置菜单】部分的文档
    // editor.config.menus = editor.config.menus.concat(kityformulaKey);
    // editor.config.menus = editor.config.menus.concat(myscriptKey);

    // editor.config.uploadImgShowBase64 = true;
    // editor.config.uploadImgMaxLength = 5; // 一次最多上传 5 个图片
    // // editor.config.uploadImgMaxLength = 5;
    // editor.zIndex.baseZIndex = 100; //方法
    // // 配置 onchange 回调函数，将数据同步到 vue 中
    // editor.config.onchange = (newHtml) => {
    //   this.editorData = newHtml;
    // };
    // // editor.config.focus=false

    // // let WangEdiorFormulaDataOfStore = this.getWangEdiorFormulaData;
    // // console.log("WangEdiorFormulaDataOfStore");
    // // console.log(WangEdiorFormulaDataOfStore);
    // // editor.txt.html(this.getWangEdiorFormulaData)
    // // 创建编辑器
    // // app
    // editor.create();
    // // let WangEdiorFormulaData = this.getWangEdiorFormulaDataFromStore();
    // // console.log("WangEdiorFormulaData");
    // // console.log(WangEdiorFormulaData);
    // // editor.txt.html(WangEdiorFormulaData);
    // console.log("this.editorDataHtml");
    // console.log(this.editorDataHtml);
    // editor.txt.html(this.editorDataHtml);

    // this.editor = editor;

    // 取消自动focus且禁止虚拟键盘弹出
    // document.activeElement.blur();
    // document.activeElement.blur
  },
  props: {
    editorDataHtml: null,
    // 基础的类型检查 (`null` 匹配任何类型)
    // propA: Number,
    editorDataConf: {
      data: null,
    },
  },
  methods: {
    setData(){

      this.editorData="3123131"

      // CodeMirror5
// cm.setValue(text)

    },
    // 选中部分格式化 indentAuto为codemirror自带api

    formatSelection() {
      CodeMirror.commands.indentAuto(this.editor);
    },
    // 格式化
    format() {
      this.editor.autoFormatRange(
        { line: 0, ch: 0 },
        { line: this.editor.lineCount() }
      );
    },

    updateData(data) {
      this.editorData = data;
      this.editor.setValue(data)
    },
    saveMirrorToWang() {
      console.log("editorData");
      console.log(this.editorData);
     let val=  this.editor.getValue()
      // this.$emit("saveMirrorToWang", this.editorData);
      this.$emit("saveMirrorToWang", val);

      // this.$emit("saveMirrorToWang",this.editor.txt.html())
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

      // let codemirrorCodeEl = this.$refs.codemirrorCode.$el;
      // codemirrorCodeEl.blur();
      // codemirrorCodeEl.focus();
      // this.$refs.codemirrorCode.blur()
      // el
      // this.$refs.codemirrorCode.focus()
      this.$nextTick(() => {
        // codemirrorCodeEl.focus();
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
      // console.log("v");
      // console.log(v);
      // console.log("this.editor .config.focus");
      // console.log(this.editor.config.focus);
      // this.editor.config.focus = false;
      // console.log("this.editor .config.focus");
      // console.log(this.editor.config.focus);
    },
    onGetVal() {
      this.$emit("getVal", this.editorData);
    },
    onSetVal(val) {
      console.log("val");
      console.log(val);
      this.editor.txt.html(val);
      // this.$emit('setVal', this.editorData)
    },
    onClose() {
      this.$emit("close", this.editorData);
    },
    changes(cm, changesVal) {
      // console.log("changesVal");
      // console.log(changesVal);
      // let editorValue = cm.getValue();
      // console.log("editorValue");
      // console.log(editorValue);
      // this.editor.txt.html(editorValue);
    },
    onCmCodeChanges(cm, changes) {
      this.editorValue = cm.getValue();
      this.resetLint();
    },
    mountedCodemirrorCodeRef() {
      console.log("this. editorDataConf.data mounted");
      console.log(this.editorDataConf.data);
      this.editorDataConfRef = this.editorDataConf;
      this.editorData = this.editorDataConfRef.data;

      let codemirrorCodeRef = this.$refs.codemirrorCode.codemirror;
      //显示提示
      console.log("codemirrorCodeRef");
      console.log(codemirrorCodeRef);
      codemirrorCodeRef.on("cursorActivity", () => {
        codemirrorCodeRef.showHint();
      });
    },

    mountedCodeMirrorXml() {
      // debugger
      // let mime = 'text/x-mariadb'
      // CodeMirror xml 编辑器 代码提示
      let mime = "application/xml";
      let that = this;
      //let theme = 'ambiance'//设置主题，不设置的会使用默认主题
      let editor = CodeMirror.fromTextArea(this.$refs.mycode, {
        mode: mime, //选择对应代码编辑器的语言，我这边选的是数据库，根据个人情况自行设置即可
        indentWithTabs: true,
        smartIndent: true,
        lineNumbers: true,
        matchBrackets: true,
        // lineNumbers: true, // 显示行号
        styleActiveLine: true, // 高亮当前行
        theme: "monokai", // 主题
        //theme: theme,
        // autofocus: true,
        // extraKeys: { Ctrl: "autocomplete" }, //自定义快捷键
        hintOptions: {
          //自定义提示选项
          tables: {
            users: ["name", "score", "birthDate"],
            countries: ["name", "population", "size"],
          },
        },
        extraKeys: {
          "'<'": "completeAfter",
          "'/'": "completeIfAfterLt",
          "' '": "completeIfInTag",
          "'='": "completeIfInTag",
          Ctrl: "autocomplete",
          "Shift-Tab": function () {
            // 选中部分格式化
            that.formatSelection();
          },
          "Shift-Alt": function () {
            // 全文格式化，快捷键可自定义，根据具体业务此处格式化的同时要处理其它逻辑，故把此处代码提出来写
            that.format();
          },
        },
      });
      //代码自动提示功能，记住使用cursorActivity事件不要使用change事件，这是一个坑，那样页面直接会卡死
      // editor.on('cursorActivity', function () {
      //   editor.showHint()
      // })

      const tags = {
        "!attrs": {
          // 若tag标签里边没有设置attr属性,则所有的标签自带id和class属性，此为自定义项，非必须
          id: null,
          class: ["A", "B", "C"],
        },
        Button: {
          attrs: {
            x: null,
            y: null,
            w: null,
            h: null,
            align: ["center", "left", "right"],
            alignV: ["center", "top", "bottom"],
            Visibility: null,
          },
        },
      };

      // editor.on("keyup", function (cm, event) {
      //   //所有的字母和'$','{','.'在键按下之后都将触发自动完成

      //   if (
      //     !cm.state.completionActive &&
      //     ((event.keyCode >= 65 && event.keyCode <= 90) ||
      //       event.keyCode == 52 ||
      //       event.keyCode == 219 ||
      //       event.keyCode == 190)
      //   ) {
      //     CodeMirror.commands.autocomplete(cm, null, { completeSingle: false });
      //   }
      // });

      CodeMirror.commands.completeAfter = function (cm, pred) {
        if (!pred || pred())
          setTimeout(function () {
            if (!cm.state.completionActive)
              cm.showHint({ completeSingle: false });
          }, 100);
        return CodeMirror.Pass;
      };
      CodeMirror.commands.completeIfAfterLt = function (cm) {
        // console.log("cm completeIfAfterLt");
        // console.log(cm);
        return CodeMirror.commands.completeAfter(cm, function () {
          var cur = cm.getCursor();
          console.log("cur");
          console.log(cur);
          let  res=cm.getRange(CodeMirror.Pos(cur.line, cur.ch - 1), cur) == "<";
          console.log("res");
          console.log(res);
          return res
        });
      };
      CodeMirror.commands.completeIfInTag = function (cm) {
        return CodeMirror.commands.completeAfter(cm, function () {
          var tok = cm.getTokenAt(cm.getCursor());
          var reg = /[""]/;
          if (
            tok.type == "string" &&
            (!reg.test(tok.string.charAt(tok.string.length - 1)) ||
              tok.string.length == 1)
          )
            return false;
          var inner = CodeMirror.innerMode(cm.getMode(), tok.state).state;
          return inner.tagName;
        });
      };

      CodeMirror.defineExtension("autoFormatRange", function (from, to) {
        var cm = this;
        var outer = cm.getMode(),
          text = cm.getRange(from, to).split("\n");
        var state = CodeMirror.copyState(outer, cm.getTokenAt(from).state);
        var tabSize = cm.getOption("tabSize");

        var out = "",
          lines = 0,
          atSol = from.ch == 0;

        function newline() {
          out += "\n";
          atSol = true;
          ++lines;
        }

        for (var i = 0; i < text.length; ++i) {
          var stream = new CodeMirror.StringStream(text[i], tabSize);
          while (!stream.eol()) {
            var inner = CodeMirror.innerMode(outer, state);
            var style = outer.token(stream, state),
              cur = stream.current();
            stream.start = stream.pos;
            if (!atSol || /\S/.test(cur)) {
              out += cur;
              atSol = false;
            }
            if (
              !atSol &&
              inner.mode.newlineAfterToken &&
              inner.mode.newlineAfterToken(
                style,
                cur,
                stream.string.slice(stream.pos) || text[i + 1] || "",
                inner.state
              )
            )
              newline();
          }
          if (!stream.pos && outer.blankLine) outer.blankLine(state);
          if (!atSol) newline();
        }

        cm.operation(function () {
          cm.replaceRange(out, from, to);
          for (
            var cur = from.line + 1, end = from.line + lines;
            cur <= end;
            ++cur
          ) {
            cm.indentLine(cur, "smart");
          }
        });
      });

      // this.editor = CodeMirror.fromTextArea(this.$refs.code, {
      //     extraKeys: {
      //          "'<'": "completeAfter",
      //          "'/'": "completeIfAfterLt",
      //          "' '": "completeIfInTag",
      //          "'='": "completeIfInTag",
      //     }
      // })
      editor.setOption("hintOptions", { schemaInfo: tags });

    console.log("editor?.text?.html");
    console.log(editor?.text?.html);

     // CodeMirror5
     editor.setValue(this.editorDataHtml);
// cm.setValue(text)
      // editor?.text?.html(this.editorData)

      this.editorData = this.editorDataHtml;
      this.editor = editor;
      // ————————————————
      // 版权声明：本文为CSDN博主「长臂人猿」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
      // 原文链接：https://blog.csdn.net/qq_37334150/article/details/109067869
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
  },
  beforeDestroy() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    console.log("this.editor");
    console.log(this.editor);
    this.editor?.destroy();
    this.editor = null;
    // this.$store.state.app.WangEdiorFormulaData=null
  },
  computed: {
    // ...mapGetters([
    // 	'doneTodos',
    // 	'doneTodosCount'
    // ]),
    ...mapGetters("app", [
      "getWangEdiorFormulaData",
      // 'doneTodosCount'
    ]),
    // exam
  },
};
</script>
  
  <!-- <style lang="scss">
  @import url("http://at.alicdn.com/t/font_2161824_78bvz3356e.css");
  
  .home {
    width: 1200px;
    margin: auto;
    position: relative;
    .btn {
      position: absolute;
      right: 0;
      top: 0;
      padding: 5px 10px;
      cursor: pointer;
    }
    h3 {
      margin: 30px 0 15px;
    }
  }


  </style> -->


  <style  scoped>
@import url("http://at.alicdn.com/t/font_2161824_78bvz3356e.css");
.home {
  width: 1200px;
  margin: auto;
  position: relative;
}
.home .btn {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px 10px;
  cursor: pointer;
}
.home h3 {
  margin: 30px 0 15px;
}
</style>