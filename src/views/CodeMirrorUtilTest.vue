<template>
  <div>
    <a href="https://visualgo.net/zh">
      数据结构和算法动态可视化 (Chinese) - VisuAlgo
    </a>
    <!-- '100%' -->
    <div class="flexRow">
      <!-- <div id="container" :style="{ height: '800px', width: '70%' }" ></div> -->

      <!-- style="height: 200px; width: 600px" -->
      <textarea
        ref="mycode"
        class="codesql"
        v-model="code"
        style="height: 200px; width: 600px"
      ></textarea>
    </div>
  </div>
</template>
  <script>
import G6 from "@antv/g6";
// D:\proj\bishe\exam-vue-admin3\src\utils\CodeMirrorUtil.js
import CodeMirrorUtil from "@/utils/CodeMirrorUtil";
// D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\CodeMirrorItTest.vue
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
      getTreedata: [
        // ..你的数据
        {
          id: 1,
          indexTitle: 1,
          indexList: [
            {
              id: 1,
              indexTitle: "indexTitle",
              indexList: [
                {
                  id: 1,
                  indexName: "indexName",
                  newData: "newData",
                  tarData: "tarData",
                  status: 1,
                },
                {
                  id: 2,
                  indexName: "indexName2",
                  newData: "newData2",
                  tarData: "tarData2",
                  status: 1,
                },
              ],
            },
            {
              id: 1,
              indexTitle: "indexTitle",
              indexList: [
                {
                  id: 1,
                  indexName: "indexName",
                  newData: "newData",
                  tarData: "tarData",
                  status: 1,
                },
                {
                  id: 2,
                  indexName: "indexName2",
                  newData: "newData2",
                  tarData: "tarData2",
                  status: 1,
                },
              ],
            },
          ],
        },
      ],
      treedata: [],
    };
  },
  mounted() {
    // this.changeTreeData();
    // this.showChart();
    // CodeMirrorUtil.getEditor(this.$refs.mycode, "text/x-sql")
    let editor = CodeMirrorUtil.getEditor(this.$refs.mycode);
  },
  methods: {
    
 getEditor(refId){
    // debugger
    // let mime = 'text/x-mariadb'
    // CodeMirror xml 编辑器 代码提示
    let mime = "application/xml";
    let that = this;
    // this.$refs.mycode
    //let theme = 'ambiance'//设置主题，不设置的会使用默认主题
    let editor = CodeMirror.fromTextArea(refId, {
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
        //   that.formatSelection();
          that.formatSelection(editor);
        //  this. formatSelection(editor)
        },
        "Shift-Alt": function () {
          // 全文格式化，快捷键可自定义，根据具体业务此处格式化的同时要处理其它逻辑，故把此处代码提出来写
          that.format(editor);
        //   that.format();

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
      console.log("cm completeIfAfterLt");
      console.log(cm);
      return CodeMirror.commands.completeAfter(cm, function () {
        var cur = cm.getCursor();
        return cm.getRange(CodeMirror.Pos(cur.line, cur.ch - 1), cur) == "<";
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
    return editor;
},
    //处理数据
    changeTreeData() {
      this.getTreedata.forEach((item, i) => {
        let data2 = [];
        for (var i in item.indexList) {
          let data3 = [];
          for (var j in item.indexList[i].indexList) {
            var data = (
              item.indexList[i].indexList[j].indexName +
              "(" +
              item.indexList[i].indexList[j].newData +
              "/" +
              item.indexList[i].indexList[j].tarData +
              ")"
            ).replace(/(.{18})/g, "$1\n");
            data3.push({
              id: item.indexList[i].indexList[j].id,
              label: data,
              status: item.indexList[i].indexList[j].status,
            });
          }
          data2.push({
            id: String(item.indexList[i].id),
            label: item.indexList[i].indexTitle,
            children: data3,
          });
        }
        this.treedata.push({
          id: item.id,
          label: item.indexTitle,
          children: data2,
        });
        console.log(this.treedata);
      });
    },
    //生成树图
    showChart() {
      const data = this.treedata[0];
      const container = document.getElementById("container");
      if (container) {
        const width = container.clientWidth;
        const height = container.clientHeight;
        const graph = new G6.TreeGraph({
          // 图的DOM 容器，可以传入该 DOM 的 id 或者直接传入容器的 HTML 节点对象。
          container: container,
          width: width,
          height: height,
          // 设置画布的模式 包含default 模式和 edit 模式
          modes: {
            // default 模式中包含点击选中节点行为和拖拽画布行为
            default: [
              {
                type: "collapse-expand",
                trigger: "click",
              },
              // 拖拽画布 和 缩放画布
              "drag-canvas",
              "zoom-canvas",
            ],
          },
          // 默认的节点设置
          defaultNode: {
            //节点的大小
            size: 14,
            // 指定边连入节点的连接点的位置
            anchorPoints: [
              [0, 0.5],
              [1, 0.5],
            ],
            // 节点样式
            style: {
              fill: "#C6E5FF",
              stroke: "#5B8FF9",
            },
          },
          // 默认的配置
          defaultEdge: {
            type: "cubic-horizontal",
            style: {
              stroke: "#A3B1BF",
            },
          },
          layout: {
            type: "compactBox",
            direction: "LR",
            // 指定节点 ID
            getId: function getId(d) {
              return d.id;
            },
            // 指定节点高度
            getHeight: function getHeight() {
              return 16;
            },
            //指定节点宽度
            getWidth: function getWidth() {
              return 16;
            },
            // 指定节点之间的垂直间距
            getVGap: function getVGap() {
              return 10;
            },
            // 指定节点之间的水平间距
            getHGap: function getHGap() {
              return 100;
            },
          },
        });

        // 为不同节点进行不同的配置 必须在 render 之前调用
        graph.node(function (node) {
          return {
            style: {
              fill: node.depth == 2 && node.status ? "#c1422b" : "#c6e5ff",
              stroke: node.depth == 2 && node.status ? "#c1422b" : "#6b9bfa",
            },
            //String 类型。标签文本的文字内容
            label: node.label,
            labelCfg: {
              // 文本的偏移
              offset: 10,
              // 文本相对于节点的位置
              position:
                node.children && node.children.length > 0 ? "left" : "right",
              //文本样式
              style: {
                fill: node.depth == 2 && node.status ? "#c1422b" : "#2c3e50",
              },
            },
          };
        });
        //初始化数据
        graph.data(data);
        //渲染视图
        graph.render();
        //让画布内容适应视口
        graph.fitView();
      }
    },
  },
};
</script>
  
  
<style scoped>
.flexRow {
  width: 1000px;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  /* align-items: center; */
}

.codesql {
  font-size: 11pt;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
  margin-left: 10px;
}
</style>