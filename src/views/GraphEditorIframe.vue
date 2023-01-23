<template>
  <div class="code-mirror-div">
    <!-- href -->
    <!-- height="800" -->
    <!-- http://139.196.8.79/ -->
    <!-- src="http://yuhn-z.gitee.io/grapheditor" -->
    <!-- https://aidn.jp/mikutap/ -->
    <!-- src="http://139.196.8.79/" -->
    <!-- http://139.196.8.79:8085/graphEditor.html -->
    <!-- src="https://aidn.jp/mikutap/" -->
    <!-- height="600" -->
    <!--  -->
    <iframe
      class="GraphEditorIframe"
      id="GraphEditorIframe"
      src="http://139.196.8.79:8085/graphEditor.html"
      height="800"
      width="1200"
    ></iframe>
    <el-button type="" @click="postMessageToIframe"
      >postMessageToIframe</el-button
    >
    <!-- <iframe src="http://www.runoob.com"></iframe> -->
  </div>
</template>
<script>
// 使用时需要根据CodeMirrorEditor.vue的实际存放路径，调整from后面的组件路径，以便正确引用
// import CodeMirrorEditor from "@/common/components/public/CodeMirrorEditor";
import CodeMirrorEditor from "@/views/CodeMirrorEditor";

// src\views\CodeMirrorEditor.vue
export default {
  components: {
    CodeMirrorEditor,
  },
  mounted() {
    // 注册消息事件监听，接受子元素给的数据
    window.addEventListener(
      "message",
      (e) => {
        console.log("e from iframe");
        console.log(e);
        //   alert(e.data);
      },
      false
    );

    var id = document.getElementById("GraphEditorIframe");
    console.log("   id.contentWindow");
    console.log(id.contentWindow);
    // 触发子页面的监听事件
    id.contentWindow.addEventListener(
      "message",
      (e) => {
        console.log("e from iframe");
        console.log(e);
        //   alert(e.data);
      },
      false
    );
    //   .postMessage('我是父元素传给子元素的数据哦！', '*');
    //   console.log("e from iframe");
    //     console.log(e);
  },
  data() {
    return {
      cmTheme: "default", // codeMirror主题
      // codeMirror主题选项
      cmThemeOptions: [
        "default",
        "3024-day",
        "3024-night",
        "abcdef",
        "ambiance",
        "ayu-dark",
        "ayu-mirage",
        "base16-dark",
        "base16-light",
        "bespin",
        "blackboard",
        "cobalt",
        "colorforth",
        "darcula",
        "dracula",
        "duotone-dark",
        "duotone-light",
        "eclipse",
        "elegant",
        "erlang-dark",
        "gruvbox-dark",
        "hopscotch",
        "icecoder",
        "idea",
        "isotope",
        "lesser-dark",
        "liquibyte",
        "lucario",
        "material",
        "material-darker",
        "material-palenight",
        "material-ocean",
        "mbo",
        "mdn-like",
        "midnight",
        "monokai",
        "moxer",
        "neat",
        "neo",
        "night",
        "nord",
        "oceanic-next",
        "panda-syntax",
        "paraiso-dark",
        "paraiso-light",
        "pastel-on-dark",
        "railscasts",
        "rubyblue",
        "seti",
        "shadowfox",
        "solarized dark",
        "solarized light",
        "the-matrix",
        "tomorrow-night-bright",
        "tomorrow-night-eighties",
        "ttcn",
        "twilight",
        "vibrant-ink",
        "xq-dark",
        "xq-light",
        "yeti",
        "yonce",
        "zenburn",
      ],
      cmEditorMode: "default", // 编辑模式
      // 编辑模式选项
      cmEditorModeOptions: [
        "default",
        "json",
        "sql",
        "javascript",
        "css",
        "xml",
        "html",
        "yaml",
        "markdown",
        "python",
      ],
      cmMode: "application/json", //codeMirror模式
      jsonIndentation: 2, // json编辑模式下，json格式化缩进 支持字符或数字，最大不超过10，默认缩进2个空格
      autoFormatJson: true, // json编辑模式下，输入框失去焦点时是否自动格式化，true 开启， false 关闭
    };
  },
  methods: {
    postMessageToIframe() {
      // iframe的id
      var id = document.getElementById("GraphEditorIframe");
      console.log("   id.contentWindow");
      console.log(id.contentWindow);
      // 触发子页面的监听事件
      //   id.contentWindow.postMessage('我是父元素传给子元素的数据哦！', '*');
      let dataDemo = {
        type: "init",
        data: {
          errorInfo: "ok",
          templateId: "1",
          templateName: "模板名称",
          graphJson: {
        "version": "0.4.8",
        "deviceNum": "79",
        "wheelZoom": null,
        "width": 1384,
        "height": 647,
        "id": "ST172.19.105.52015100809430700001",
        "topoLevel": "1",
        "parentLevel": "0",
        "nextLevel": "0",
        "childs": [{
            "elementType": "scene",
            "id": "S172.19.105.52015100809430700002",
            "topoLevel": "1",
            "parentLevel": "0",
            "nextLevel": "0",
            "translateX": 663.8,
            "translateY": 188.43,
            "scaleX": 1.29,
            "scaleY": 1.29,
            "totalLevel": "1",
            "childs": [{
                "elementType": "Node",
                "id": "382677481066",
                "topoLevel": 1,
                "parentLevel": "0",
                "nextLevel": "0",
                "x": 184.29,
                "y": -18.82,
                "width": 98,
                "height": 40,
                "visible": true,
                "rotate": 0,
                "scaleX": 1,
                "scaleY": 1,
                "zIndex": 3,
                "deviceId": "1549608289251.1665",
                "dataType": "GH",
                "nodeImage": "f.png",
                "text": "系统设计",
                "textPosition": "Middle_Center",
                "templateId": "",
                "config": ""
            }, {
                "elementType": "Node",
                "id": "1278502281745",
                "topoLevel": 1,
                "parentLevel": "0",
                "nextLevel": "0",
                "x": 187.61,
                "y": 72.51,
                "width": 92,
                "height": 45,
                "visible": true,
                "rotate": 0,
                "scaleX": 1,
                "scaleY": 1,
                "zIndex": 3,
                "deviceId": "915229206808.0334",
                "dataType": "GH",
                "nodeImage": "f.png",
                "text": "登陆子系统",
                "textPosition": "Middle_Center",
                "templateId": "",
                "config": ""
            }, {
                "elementType": "Node",
                "id": "1113001568495",
                "topoLevel": 1,
                "parentLevel": "0",
                "nextLevel": "0",
                "x": 22.99,
                "y": 183.1,
                "width": 105,
                "height": 45,
                "visible": true,
                "rotate": 0,
                "scaleX": 1,
                "scaleY": 1,
                "zIndex": 3,
                "deviceId": "1155285254410.7837",
                "dataType": "GH",
                "nodeImage": "f.png",
                "text": "教师子系统",
                "textPosition": "Middle_Center",
                "templateId": "",
                "config": ""
            }, {
                "elementType": "Node",
                "id": "220880361960",
                "topoLevel": 1,
                "parentLevel": "0",
                "nextLevel": "0",
                "x": 178.26,
                "y": 186.57,
                "width": 111,
                "height": 42,
                "visible": true,
                "rotate": 0,
                "scaleX": 1,
                "scaleY": 1,
                "zIndex": 3,
                "deviceId": "1532618275577.5376",
                "dataType": "GH",
                "nodeImage": "f.png",
                "text": "学生子系统",
                "textPosition": "Middle_Center",
                "templateId": "",
                "config": ""
            }, ]
        }]
    },
        },
      };
      id.contentWindow.postMessage(dataDemo, "*");
    },

    // 切换编辑模式事件处理函数
    onEditorModeChange(value) {
      switch (value) {
        case "json":
          this.cmMode = "application/json";
          break;
        case "sql":
          this.cmMode = "sql";
          break;
        case "javascript":
          this.cmMode = "javascript";
          break;
        case "xml":
          this.cmMode = "xml";
          break;
        case "css":
          this.cmMode = "css";
          break;
        case "html":
          this.cmMode = "htmlmixed";
          break;
        case "yaml":
          this.cmMode = "yaml";
          break;
        case "markdown":
          this.cmMode = "markdown";
          break;
        case "python":
          this.cmMode = "python";
          break;
        default:
          this.cmMode = "application/json";
      }
    },
    // 修改样式（不推荐，建议参考<style>中的样式，提前配置好样式）
    setStyle() {
      let styleStr =
        "position: absolute; top: 80px; left: 50px; right: 200px; bottom: 20px; padding: 2px; height: auto;";
      this.$refs.cmEditor.setStyle(styleStr);
    },
    //获取内容
    getValue() {
      let content = this.$refs.cmEditor.getValue();
      console.log(content);
    },
    //修改内容
    setValue() {
      let jsonValue = {
        name: "laiyu",
        addr: "广东省深圳市",
        other: "nothing",
        tel: "168888888",
        intro: [{ item1: "item1" }],
      };
      this.$refs.cmEditor.setValue(JSON.stringify(jsonValue));
    },
  },
};
</script>
<style>
.CodeMirror {
  position: absolute;
  top: 80px;
  left: 2px;
  right: 5px;
  bottom: 0px;
  padding: 2px;
  height: auto;
  overflow-y: auto;
}

.GraphEditorIframe {
  margin-top: 100px;
}
</style>

<style lang="scss" scoped>
.code-mirror-div {
  position: absolute;
  top: 0px;
  left: 2px;
  right: 5px;
  bottom: 0px;
  padding: 2px;
  .tool-bar {
    top: 20px;
    margin: 30px 2px 0px 20px;
  }
}
</style>