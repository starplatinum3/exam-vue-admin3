<template>
  <div class="home">
    <h3>WangEditor with vue</h3>
    <el-button type="" @click="save">保存</el-button>
    <el-button type="" @click="see">see</el-button>
    <!-- <div ref="wangEditor" id="demo1"></div> -->
  <textarea></textarea>
    <button type="button" class="btn" @click="getEditorData">
      获取当前内容
    </button>
    <h3>内容预览</h3>
    <el-button type="" @click="setEditorData">setEditorData</el-button>
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
    <!-- <el-dialog z-index="10001" title='外部表格弹窗' center :visible.sync='outVisible' :before-close='outClose'> -->
      <!-- v-model="editorData" -->
       <!-- v-model="editorData" -->
       
       <codemirror
    @onclick="codemirrorOnClick"
    @click="codemirrorOnClick"
        ref="codemirrorCode"
        v-model="getWangEdiorFormulaData"
        :options="cmOptions"
        class="code"
        @changes="changes"
        @focus="onCmFocus"

      >
      </codemirror>
      <el-input v-model="getWangEdiorFormulaData" placeholder=""></el-input> 
      <div v-html="getWangEdiorFormulaData"></div>

        <!-- </el-dialog> -->
<!-- ————————————————
版权声明：本文为CSDN博主「念头通达を」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_40765784/article/details/125448401 -->
  
  </div>
</template>
  
  <script>
// 引入 wangEditor
import WangEditor from "wangeditor";
import createKityformula from "./components/kityformula";
import myscriptMath from "./components/myscript-math-web";

import 'codemirror/theme/ambiance.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/hint/show-hint.css';

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


import { mapGetters, mapState, mapActions } from "vuex";
// vue-codemirror  vue2
import { codemirror } from "vue-codemirror";
import "codemirror/theme/liquibyte.css"; //导入选中的theme主题,与初始化theme配置一致
// import "codemirror/addon/hint/show-hint.css"; //导入自动提示核心样式

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

export default {
  data() {
    return {
      outVisible:false,
      editor: null,
      editorData: "",
      editorText:null,
      textarea:"",
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
    };
  },

  components:{
    codemirror
  },
  

  mounted() {
//     const editor = new WangEditor("#demo1");
//     // WangEditor 不要获取焦点
//     // WangEditor 设置值 
//     // 配置菜单栏，删减菜单，调整顺序
//     // editor.config.menus = ['bold', 'head', 'link', 'italic', 'underline']

//     // 配置行高
//     // editor.config.lineHeights = ['1', '1.15', '1.6', '2', '2.5', '3']

//     // 获取必要的变量，这些在下文中都会用到
//     const { $ } = WangEditor;
//     const { PanelMenu, Panel } = WangEditor;

//     class Kityformula extends PanelMenu {
//       // 公式输入插件
//       constructor(editors) {
//         const $elem = WangEditor.$(
//           `<div class="w-e-menu">
//                     <i class="iconfont icongongshi" style="font-size:18px;"></i>
//                 </div>`
//         );
//         super($elem, editors);
//       }

//       // 菜单点击事件
//       clickHandler() {
//         // 做任何你想做的事情
//         // 可参考【常用 API】文档，来操作编辑器
//         const conf = createKityformula(editor);
//         const panel = new Panel(this, conf);
//         panel.create();
//       }

//       tryChangeActive() {}
//     }

//     class Myscript extends PanelMenu {
//       // 公式手写插件
//       constructor(editors) {
//         const $elem = WangEditor.$(
//           `<div class="w-e-menu">
//                     <i class="iconfont iconshouxieban" style="font-size:18px;"></i>
//                 </div>`
//         );
//         super($elem, editors);
//       }

//       // 菜单点击事件
//       clickHandler() {
//         // 做任何你想做的事情
//         // 可参考【常用 API】文档，来操作编辑器
//         const conf = myscriptMath(editor);
//         const panel = new Panel(this, conf);
//         panel.create();
//       }

//       tryChangeActive() {}
//     }

//     // 注册菜单
//     const kityformulaKey = "kityformulaKey"; // 菜单 key ，各个菜单不能重复
//     editor.menus.extend("kityformulaKey", Kityformula);

//     // 注册菜单
//     const myscriptKey = "myscriptKey"; // 菜单 key ，各个菜单不能重复
//     editor.menus.extend("myscriptKey", Myscript);

//     // 将菜单加入到 editor.config.menus 中
//     // 也可以通过配置 menus 调整菜单的顺序，参考【配置菜单】部分的文档
//     editor.config.menus = editor.config.menus.concat(kityformulaKey);
//     editor.config.menus = editor.config.menus.concat(myscriptKey);

//     editor.config.uploadImgShowBase64 = true;
//     editor.config.uploadImgMaxLength = 5; // 一次最多上传 5 个图片

//     // 配置 onchange 回调函数，将数据同步到 vue 中
//     editor.config.onchange = (newHtml) => {
//       this.editorData = newHtml;
//     };
//     // editor.config.focus=false

//     // 创建编辑器
//     editor.create();
//     this.editor = editor;

    
// // 取消自动focus且禁止虚拟键盘弹出
// // document.activeElement.blur();
// // document.activeElement.blur
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/toggleSideBar')
    },

    setWangEdiorFormulaData (data) {
      this.$store.dispatch('app/setWangEdiorFormulaData',data)
    },
    see(){
// this.outVisible=true
this.outVisible=!this.outVisible
    },
    // onCmFocus(){
      
    // },
    onCmFocus(cm) {
      console.log('the editor is focused!', cm)
//       console.log("this.editor .config.focus");
// // console.log(this.editor .config.focus);
//       this.editor .config.focus=false
//       console.log("this.editor .config.focus");
// console.log(this.editor .config.focus);
// cm.$el.refresh()

console.log("document.activeElement" );
console.log(document.activeElement );
// document.activeElement.blur()
// document.activeElement.focus()
// this.$refs.wangEditor.blur()

this.$nextTick(() => {
  // cm.$el.refresh()
  cm.refresh()

})
    },
    codemirrorOnClick(v){
console.log("v");
console.log(v);
console.log("this.editor .config.focus");
console.log(this.editor .config.focus);
this.editor .config.focus=false
console.log("this.editor .config.focus");
console.log(this.editor .config.focus);
    },
    changes(cm, changesVal){
      // console.log("changesVal");
      // console.log(changesVal);
     let  editorValue = cm.getValue();
     console.log("editorValue");
     console.log(editorValue);
    //  this.  editor.txt.html(editorValue)
    this.setWangEdiorFormulaData(editorValue)
    },
    onCmCodeChanges(cm, changes) {
      this.editorValue = cm.getValue();
      this.resetLint();
    },

    mountedCodeMirror() {
		this.editorText = CodeMirror.fromTextArea(this.$refs.mycode, {
            mode: { name: 'javascript', globalVars: true },
            indentWithTabs: true,
            smartIndent: true,
            lineNumbers: true,
            matchBrackets: true,
            autoRefresh: true,
            extraKeys: { Ctrl: 'autocomplete' }, // 自定义快捷键
            hintOptions: {
                // 自定义提示选项
                tables: {
                    users: ['name', 'score', 'birthDate'],
                    countries: ['name', 'population', 'size'],
                },
            },
        });
        // 可选,挂载一下监听事项
        // : any
        this.editorText.on('change', (cm) => {
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
      this.  editor.txt.html("e141411")
    },
    save(){
      const data = this.editor.txt.html();
      let editor_html_key="editor_html"
      window.localStorage.setItem(editor_html_key,data)
    let  editor_html = window.localStorage.getItem(editor_html_key)
    console.log("editor_html");
    console.log(editor_html);
    },
  },
  beforeDestroy() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.editor.destroy();
    this.editor = null;
  },
  computed:{
    ...mapGetters("app", ["getWangEdiorFormulaData"]),
  }
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