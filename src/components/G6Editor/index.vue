<template>
  <div id="mountNode" :style="{ width: width }">
    <div class="editor">
      <context-menu />
      <!--toolbar-->
      <toolbar @exportData="exportData" />
      <div style="height: 42px"></div>
      <div class="bottom-container">
        <!--itempannel-->
        <item-panel />
        <!--detailpannel-->
        <detail-panel />
        <!--miniMap-->
        <minimap />
        <!--page-->
        <page :height="height" :width="width" :data="data" />
      </div>
    </div>
    <Flow />
  </div>
</template>

<script>
import Toolbar from "../Toolbar";
import ItemPanel from "../ItemPanel";
import DetailPanel from "../DetailPanel";
import Minimap from "../Minimap";
import Page from "../Page";
import Flow from "../Flow";
import ContextMenu from "../ContextMenu";
import Editor from "@/components/Base/Editor";
import command from "@/command";
import NodeUtil from "@/utils/NodeUtil";
import ListUtil from "@/utils/ListUtil";
// NodeUtil
// D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\utils\NodeUtil.js
export default {
  name: "G6Editor",
  components: {
    Toolbar,
    ItemPanel,
    DetailPanel,
    Minimap,
    Page,
    ContextMenu,
    Flow,
  },
  props: {
    height: {
      type: Number,
      default: document.documentElement.clientHeight,
    },
    width: {
      type: Number,
      default: document.documentElement.clientWidth,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  created() {
    this.init();
  },
  data() {
    return {
      editor: {},
      command: null,
    };
  },
  methods: {
    init() {
      let drawG6 = {
        nodes: [
          {
            name: "背景图片节点",
            label: "背景图片节点",
            size: ["170", "34"],
            type: "node",
            x: 133,
            y: 177,
            shape: "customNode",
            color: "#1890ff",
            image:
              "https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg",
            stateImage: "static/img/ok.463ab0e4.svg",
            backImage: "static/img/bg.9a8b47e5.jpg",
            inPoints: [[0, 0.5]],
            outPoints: [[1, 0.5]],
            offsetX: 56,
            offsetY: 21,
            id: "node2",
          },
          {
            name: "测试节点",
            label: "测试节点",
            // "size": ["170", "34"],
            size: ["30", "30"],
            type: "node",
            x: 213,
            y: 60,
            shape: "customNode",
            color: "#1890ff",
            image:
              "https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg",
            stateImage: "static/img/ok.463ab0e4.svg",
            inPoints: [[0, 0.5]],
            outPoints: [[1, 0.5]],
            offsetX: 36,
            offsetY: 3,
            id: "node8",
          },
          {
            name: "背景图片节点",
            label: "背景图片节点",
            size: ["170", "34"],
            type: "node",
            x: 143 + 200,
            y: 177,
            shape: "customNode",
            color: "#1890ff",
            image:
              "https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg",
            stateImage: "static/img/ok.463ab0e4.svg",
            backImage: "static/img/bg.9a8b47e5.jpg",
            inPoints: [[0, 0.5]],
            outPoints: [[1, 0.5]],
            offsetX: 56,
            offsetY: 21,
            id: "node2",
          },
        ],
        edges: [
          {
            id: "edge72",
            source: "node8",
            target: "node2",
            sourceId: "node8",
            targetId: "node2",
            start: {
              x: 0,
              y: 17,
            },
            end: {
              x: 0,
              y: -17,
            },
            shape: "customEdge",
            type: "edge",
            startPoint: {
              x: 201.03418803418805,
              y: 77.5,
            },
            endPoint: {
              x: 144.96581196581195,
              y: 159.5,
            },
          },
        ],
        groups: [],
      };

      this.data = drawG6;

      this.row2Get();
      this.editor = new Editor();
      this.command = new command(this.editor);
    },
    exportData(data) {
      // this.
      this.$emit("exportData", data);
    },
    makeNode(name, x, y, id) {
      let node = {
        name: name,
        label: name,
        size: ["170", "34"],
        type: "node",
        x: x,
        y: y,
        shape: "customNode",
        color: "#1890ff",
        image:
          "https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg",
        stateImage: "static/img/ok.463ab0e4.svg",
        inPoints: [[0, 0.5]],
        outPoints: [[1, 0.5]],
        offsetX: 36,
        offsetY: 3,
        // "id": "node8"
        id: id,
      };
      return node;
    },
    mockRows() {
      for (let i = 0; i < 3; i++) {
        let node = {
          name: "测试节点",
          label: "测试节点",
          size: ["170", "34"],
          type: "node",
          x: 213 + i * 200,
          y: 60,
          shape: "customNode",
          color: "#1890ff",
          image:
            "https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg",
          stateImage: "static/img/ok.463ab0e4.svg",
          inPoints: [[0, 0.5]],
          outPoints: [[1, 0.5]],
          offsetX: 36,
          offsetY: 3,
          id: "node8",
        };
        this.data.nodes.push(node);
        // this.nodes.
      }

      for (let i = 0; i < 3; i++) {
        let node = {
          name: "测试节点",
          label: "测试节点",
          size: ["170", "34"],
          type: "node",
          x: 213 + i * 200,
          y: 460,
          shape: "customNode",
          color: "#1890ff",
          image:
            "https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg",
          stateImage: "static/img/ok.463ab0e4.svg",
          inPoints: [[0, 0.5]],
          outPoints: [[1, 0.5]],
          offsetX: 36,
          offsetY: 3,
          id: "node8",
        };
        this.data.nodes.push(node);
        // this.nodes.
      }
    },
    row2Get() {
      // let
      let row1NodesNames = ["1"];
      let row2NodesNames = ["2", "22"];
      let row3NodesNames = ["33", "333", "344"];
      let rows = [row1NodesNames, row2NodesNames, row3NodesNames];
      // for (let i = 0; i < rows.length; i++) {
      //   let rowNodesNames = rows[i];
      //   let rowX = 100;
      //   let rowY = 60 + i * 100;
      //   this.data.nodes = ListUtil.addList(
      //     this.data.nodes,
      //     NodeUtil.makeRowNodes(rowX, rowY, rowNodesNames, `row${i}`)
      //   );
      // }
      // (method) makeRowsNodes(rows: any, xStart?: number, yStart?: number, yDiff?: number): any
// 
let  xStart=100
let  yStart=100


      let nodes= NodeUtil.makeRowsNodes(rows,xStart,yStart,100);
      // this.data.nodes.push(...nodes);
      ListUtil.addList(this.data.nodes, nodes);
      // let id = `node-${i}-${rowName}`;
      // this.data.edges,
    //  let edge=  NodeUtil.makeEdge( "node-0-row1", "node-0-row2");
 
     
     let edges=  NodeUtil.makeRowsEdges( rows);
    //  this.data.edges.push(edge);
    ListUtil.addList(this.data.edges, edges);
      // let row1X = 100;
      // let row1Y = 60;
      // for (let i = 0; i < row1NodesNames.length; i++) {
      //   let row1NodeName = row1NodesNames[i];
      //   let id = `node-${i}-row1`;
      //   let nodeRow1 = NodeUtil.makeWhiteNode(
      //     row1NodeName,
      //     row1X + i * 200,
      //     row1Y,
      //     id
      //   );

      //   // let nodeRow1 = this.makeNode(row1NodeName, row1X + i * 200, row1Y,id);
      //   this.data.nodes.push(nodeRow1);
      //   let node = {
      //     name: "测试节点",
      //     label: "测试节点",
      //     size: ["170", "34"],
      //     type: "node",
      //     x: 213 + i * 200,
      //     y: 60,
      //     shape: "customNode",
      //     color: "#1890ff",
      //     image:
      //       "https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg",
      //     stateImage: "static/img/ok.463ab0e4.svg",
      //     inPoints: [[0, 0.5]],
      //     outPoints: [[1, 0.5]],
      //     offsetX: 36,
      //     offsetY: 3,
      //     id: "node8",
      //   };
      // }
      // // let row1X = 100;
      // let row2X = 100;
      // let row2Y = row1Y + 100;
      // // for (let i = 0; i < row2NodesNames.length; i++) {
      // //   let row1NodeName = row2NodesNames[i];
      // //   let id = `node-${i}-row2`;
      // //   let nodeRow1 = this.makeNode(row1NodeName, row2X + i * 200, row2Y,id);
      // //   this.data.nodes.push(nodeRow1);

      // // }
      // let xDiff = 100;

      // let row2Name = "row2";
      // this.data.nodes = ListUtil.addList(
      //   this.data.nodes,
      //   NodeUtil.makeRowNodes(row2X, row2Y, row2NodesNames, row2Name, xDiff)
      // );
      // // makeRowNodes(xStart,yStart,row2NodesNames,rowName="row1",xDiff=200,yDiff=100){
      // //  let nodesRow3= NodeUtil.makeRowNodes(row2X,row2Y+100,row3NodesNames,rowName="row1",xDiff= 100);

      // //  let nodesRow3= NodeUtil.makeRowNodes(row2X,row2Y+100,row3NodesNames,"row1",xDiff= 100);
      // let nodesRow3 = NodeUtil.makeRowNodes(
      //   row2X,
      //   row2Y + 100,
      //   row3NodesNames,
      //   "row3",
      //   100
      // );

      // // makeRowNodes(row3NodesNames, 100, 300, "row3");
      // // this.data.nodes.push(...nodesRow3);
      // this.data.nodes = ListUtil.addList(this.data.nodes, nodesRow3);
    },
  },
};
</script>

<style scoped>
.editor {
  position: relative;
  width: 100%;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.bottom-container {
  position: relative;
}
</style>