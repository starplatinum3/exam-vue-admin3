<template>
  <div class="json-editor">
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

export default {
  name: "JsonEditor",
  /* eslint-disable vue/require-prop-types */
  props: [
    // 'value'
    "data",
  ],
  data() {
    return {
      value: "",
      jsonEditor: false,
    };
  },
  // 监听是否数据改变，随时更新json数据
  watch: {
    value(value) {
      console.log(value);
      const editorValue = this.jsonEditor.getValue();
      if (value !== editorValue) {
        this.jsonEditor.setValue(JSON.stringify(this.value, null, 2));
      }
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
    // CodeMirror的配置项，搜官网看这里的配置项配置
    this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true, // 是否显示行数
      mode: "application/json", // 接受的类型，json xml....
      gutters: ["CodeMirror-lint-markers"], // 样式的宽度
      theme: "rubyblue", // 主题
      lint: true,
    });

    this.jsonEditor.setValue(JSON.stringify(this.value, null, 2));
    this.jsonEditor.on("change", (cm) => {
      //   this.$emit("changed", cm.getValue());
      // 编辑json框里面的内容可以时刻监听到值，通过cm.getValue()获取到
    });
    // this.jsonEditor.setSize("100%", "100%")
    // this.jsonEditor.setSize("1000px", "500px")
    // this.jsonEditor.setSize("600px", "500px")
    // this.jsonEditor.setSize("600px", "700px")
    this.jsonEditor.setSize("800", "700px")


  },
  methods: {
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
  
  