<template>
  <div class="json-editor">
    <div>isValid  {{ isValid }}</div>
    <textarea ref="textarea" />
  </div>
</template>
  
  <script>
import CodeMirror from "codemirror";
import "codemirror/addon/lint/lint.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/rubyblue.css"; // 主题显示，可以百度搜索其他的主题
require("script-loader!jsonlint");
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/json-lint";
import 'codemirror/addon/scroll/annotatescrollbar.js'
import 'codemirror/addon/search/matchesonscrollbar.js'
import 'codemirror/addon/search/match-highlighter.js'
import 'codemirror/addon/search/jump-to-line.js'
import { debounce, throttle } from "@/utils/tools";
import 'codemirror/addon/dialog/dialog.js'
import 'codemirror/addon/dialog/dialog.css'
import 'codemirror/addon/search/searchcursor.js'
import 'codemirror/addon/search/search.js'
// 折叠
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/comment-fold'

export default {
  name: "JsonEditor",
  /* eslint-disable vue/require-prop-types */
  props: [
    // 'value'
    "data",
  ],
  data() {
    return {
      isValid: true,
      value: "",
      jsonEditor: false,
    };
  },
  // 监听是否数据改变，随时更新json数据
  watch: {
    value(value) {
      console.log("监听是否数据改变，随时更新json数据");
      console.log(value);
      const editorValue = this.jsonEditor.getValue();
      if (value !== editorValue) {
        this.jsonEditor.setValue(JSON.stringify(this.value, null, 2));
      }
      this.checkValid()
    },
    immediate: true,
    deep: true,
  },
  mounted() {
    // 模拟数据接口
    this.value = [
      {
        items: [
          { market_type: "forexdata", symbol: "XAUUSD" },
          { market_type: "forexdata", symbol: "UKOIL" },
          { market_type: "forexdata", symbol: "CORN" },
        ],
        name: "",
      },
    ];

    // this.value=JSON.stringify(this.data)
    this.value = this.data;
    // this.value = this.data;
    // console.log( "this.value");
    // console.log( this.value);
    // CodeMirror的配置项，搜官网看这里的配置项配置
    this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true, // 是否显示行数
      mode: "application/json", // 接受的类型，json xml....
      foldGutter: true, // 折叠
       lineWrapping: true,
  //  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter',"CodeMirror-lint-markers"], // 样式的宽度
      theme: "rubyblue", // 主题
      lint: true,
    });

    let  valueStr=JSON.stringify(this.value, null, 2)
    // console.log("valueStr");
    // console.log(valueStr);
    // let doEmitChanged=   throttle(()=>{
    //       this.$emit("changed", cm.getValue());
    //       this.checkValid()
    //   }, 1000)

    const changedDo=(cm)=>{
      console.log("changedDo");
          this.$emit("changed", cm.getValue());
          this.checkValid()
      }

      let doEmitChanged= (cm)=>   debounce(changedDo(cm), 1000)
      // let doEmitChanged= (cm)=> throttle(changedDo(cm), 10000)

      console.log("doEmitChanged");
      console.log(doEmitChanged);
      console.log("typeof doEmitChanged");
      console.log(typeof doEmitChanged);
      // typeof
      // let doEmitChanged  = (cm)=>   debounce(changedDo(cm), 1000)
    this.jsonEditor.setValue(valueStr);
    this.jsonEditor.on("change", (cm) => {
        // this.$emit("changed", cm.getValue());
        // debounce(changedDo(cm), 1000)
        // throttle(changedDo(cm), 10000)
        // doEmitChanged(cm)
        // doEmitChanged(cm)
        // debounce(()=>{
        //   console.log("changedDo");
        //   this.$emit("changed", cm.getValue());
        //   this.checkValid()
        // }, 1000)()

        // throttle(()=>{
        //   console.log("changedDo");
        //   this.$emit("changed", cm.getValue());
        //   this.checkValid()
        // }, 10000)()

        let that=this
        // throttle(function(){
        //   console.log("changedDo");
        //   // this.$emit("changed", cm.getValue());
        //   // this.checkValid()
        //   that.$emit("changed", cm.getValue());
        //   that.checkValid()
        // }, 10000)()
        this.throttleChanged(cm)
        // debounce(changedDo(cm), 1000)()
        // doEmitChanged(cm)()
        // throttle(changedDo(cm), 10000)()
      // 编辑json框里面的内容可以时刻监听到值，通过cm.getValue()获取到
    
    });
    // this.jsonEditor.setSize("100%", "100%")
    // this.jsonEditor.setSize("1000px", "500px")
    // this.jsonEditor.setSize("600px", "500px")
    // this.jsonEditor.setSize("600px", "700px")
    this.jsonEditor.setSize("800", "700px")


  },
  methods: {
    // 这样有效 写在 mounted 里面 无效 
    throttleChanged: throttle(function(cm){
          console.log("changedDo");
          this.$emit("changed", cm.getValue());
          this.checkValid()
          // that.$emit("changed", cm.getValue());
          // that.checkValid()
        }, 1000),
    d(){

      let root={}
      root.indexList=[]
    },
    checkValid () {
      console.log('checkValid');
      setTimeout(() => {
        this.jsonEditor.refresh()
        // this.codemirror.refresh()
        const container = this.$refs.      textarea
        // const container = this.$refs.codeMirror
       let CodeMirrorErrors= container.querySelectorAll('.CodeMirror-lint-marker-error')
      //  for(let )
      // 没啥东西 
      // console.log("CodeMirrorErrors");
      // Array.from(CodeMirrorErrors).forEach((item)=>{
      //   console.log(item);
      //   console.log(item.innerText);
      // })
        // console.log(container);
        // console.log(container.querySelectorAll('.CodeMirror-lint-marker-error'));
      // let CodeMirrorErrors= container.querySelectorAll('.CodeMirror-lint-marker-error')

        const len = container.querySelectorAll('.CodeMirror-lint-marker-error').length
        console.log("len");
        console.log(len);

        this.isValid = !!len && len > 0
      }, 1000)
    },
// ————————————————
// 版权声明：本文为CSDN博主「前端岚枫」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/lfcss/article/details/106149019
    getValue() {
      return this.jsonEditor.getValue();
    },
  },
};

//   作者：小奶冀
//   链接：https://juejin.cn/post/6844904022650912775
//   来源：稀土掘金
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
</script>
  
  <style scoped>
.json-editor {
  height: 100%;
  position: relative;
}
.json-editor >>> .CodeMirror {
  height: auto;
  min-height: 300px;
}
.json-editor >>> .CodeMirror-scroll {
  min-height: 300px;
}
.json-editor >>> .cm-s-rubyblue span.cm-string {
  color: #f08047;
}
</style>
  
  