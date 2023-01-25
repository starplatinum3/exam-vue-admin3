<template>
  <!-- <div class="json-editor">
    <textarea ref="textarea" />
  </div> -->
  <div>
    <json-editor :value="value"></json-editor>

  </div>
</template>
  
  <script>
import CodeMirror from "codemirror";
import "codemirror/addon/lint/lint.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/panda-syntax.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/lint/json-lint";
// 折叠代码
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/xml-fold.js";
import "codemirror/addon/fold/indent-fold.js";
import "codemirror/addon/fold/markdown-fold.js";
import "codemirror/addon/fold/comment-fold.js";

// D:\proj\bishe\exam-vue-admin3\src\components
import JsonEditor from '@/components/JsonEditor';

export default {
  name: "JsonEditor",
  // props: ["value"],
  components:{
    JsonEditor,
  },
  data() {
    return {
      jsonEditor: false,
      value:"dahida "
    };
  },
  watch: {
    // value(value) {
    //   const editor_value = this.jsonEditor.getValue();
    //   if (value !== editor_value) {
    //     this.jsonEditor.setValue(JSON.stringify(this.value, null, 2));
    //   }
    // },
  },
  mounted() {
    // this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
    //   lineNumbers: true,
    //   mode: "application/json",
    //   gutters: [
    //     "CodeMirror-lint-markers",
    //     "CodeMirror-linenumbers",
    //     "CodeMirror-foldgutter",
    //   ],
    //   theme: "panda-syntax",
    //   lint: true,
    //   foldGutter: {
    //     rangeFinder: new CodeMirror.fold.combine(
    //       CodeMirror.fold.indent,
    //       CodeMirror.fold.comment
    //     ),
    //   },
    // });

    // this.jsonEditor.setValue(JSON.stringify(this.value, null, 2));
    // this.jsonEditor.on("change", (cm) => {
    //   this.$emit("changed", cm.getValue());
    //   this.$emit("input", cm.getValue());
    // });
  },
  methods: {
    getValue() {
      return this.jsonEditor.getValue();
    },
  },
};
</script>
  
  <style scoped>
.json-editor {
  height: 100%;
  position: relative;
}
.json-editor >>> .CodeMirror {
  height: auto;
  min-height: 180px;
}
.json-editor >>> .CodeMirror-scroll {
  min-height: 180px;
}
.json-editor >>> .cm-s-rubyblue span.cm-string {
  color: #f08047;
}
</style>
  