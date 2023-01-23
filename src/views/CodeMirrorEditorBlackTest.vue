<template>
  <!-- class="flexRow" -->
  <div  class="rowEditor" style="">
    <div class="leftBlock" style="width: 200px"></div>
    <!-- style="width: 400px" -->
    <CodeMirrorEditorBlack class="floatRight" ></CodeMirrorEditorBlack>
    <!-- <div>
      <CodeMirrorEditorBlack class="floatRight" style="width: 400px"></CodeMirrorEditorBlack>
    </div> -->
  </div>
</template>
  <script>
import G6 from "@antv/g6";
// D:\proj\bishe\exam-vue-admin3\src\utils\CodeMirrorUtil.js
import CodeMirrorUtil from "@/utils/CodeMirrorUtil";
import CodeMirrorEditorBlack from "@/components/CodeMirrorEditorBlack";
// D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\CodeMirrorItTest.vue
import "codemirror/theme/ambiance.css";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/hint/show-hint.css";
// D:\proj\bishe\exam-vue-admin3\src\components\CodeMirrorEditorBlack.vue

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
  components: {
    CodeMirrorEditorBlack,
  },
  mounted() {
    this.changeTreeData();
    this.showChart();
    // CodeMirrorUtil.getEditor(this.$refs.mycode, "text/x-sql")
    // let editor = CodeMirrorUtil.getEditor(this.$refs.mycode);
  },
  methods: {
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

.rowEditor{

}

.floatRight{
  width: 500px;
  float: right;
}
.leftBlock{
  background: rgb(187, 27, 27);
}
</style>