
<template>
  <div>
    <el-button
      type="primary"
      icon="el-icon-circle-check-outline"
      @click="handleConfirm"
      round
    >
      点击保存
    </el-button>
    <el-button
      icon="el-icon-caret-right"
      type="info"
      @click="handleRunCode"
      round
    >
      在线运行
    </el-button>
    <code-editor :cmTheme="cmTheme" :cmMode="cmMode"> </code-editor>
  </div>
</template>
  
  <script>
// D:\proj\bishe\exam-vue-admin3\src\components\CodeMirrorEditor.vue

// import codeEditor from "@/components/CodeEditor/index";
// import codeEditor from "@/components/CodeEditor";
import codeEditor from "@/components/CodeMirrorEditor";

import "codemirror/theme/monokai.css"; // 导入monokai主题
import "codemirror/mode/python/python.js"; // 导入python
export default {
  name: "index",
  components: {
    codeEditor,
  },
  data() {
    return {
      cmTheme: "monokai",
      cmMode: "python",
    };
  },
  methods: {
    handleConfirm() {},
    handleRunCode() {},
  },
};
</script>
  
  <style>
.CodeMirror {
  position: relative;
  height: 100vh;
  overflow: hidden;
  margin-top: 10px;
}
</style>
  <style lang="scss" scoped>
</style>