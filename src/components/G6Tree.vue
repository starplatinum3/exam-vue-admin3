<template>
  <div>
    <!-- <a href="https://visualgo.net/zh">
      数据结构和算法动态可视化 (Chinese) - VisuAlgo
    </a> -->
    <!-- '100%' -->
    <div class="flexRow">
      <div class="flexCol g6Part">
        <el-button type="" @click="getCode">getCode</el-button>
        
        <!-- onClose -->
        <el-button type="" @click="onClose">保存并关闭</el-button>
        <!-- onCloseNotSave -->
        <el-button type="" @click="onCloseNotSave">关闭不保存</el-button>

        <!-- :style="{ height: '800px', width: '70%' }"  -->
        <div id="container" :style="{ height: '800px', width: '700px' }"></div>
      </div>

      <!-- style="height: 200px; width: 600px" -->
      <!-- <textarea
        ref="mycode"
        class="codesql"
        v-model="code"
        style="height: 200px; width: 600px"
      ></textarea> -->
      <!-- :code="getTreedata"  -->
      <!-- <CodeMirrorEditorBlack 
      :data="getTreedata" 
      style="width:400px"></CodeMirrorEditorBlack> -->
      <!-- :data="getTreedata"> -->
      <!-- getTreedata -->
      <JsonCodeMirror
      @changed="onChanged"
      v-if="JsonCodeMirrorShow"
       ref='JsonCodeMirror' 
       :data="JsonCodeMirrorData"></JsonCodeMirror>
    </div>
  </div>
</template>
  <script>
import G6 from "@antv/g6";
// D:\proj\bishe\exam-vue-admin3\src\utils\CodeMirrorUtil.js
import CodeMirrorUtil from "@/utils/CodeMirrorUtil";
import NodeUtil from "@/utils/NodeUtil";
// D:\proj\bishe\exam-vue-admin3\src\components\G6Tree.vue
import G6Util from "@/utils/G6Util";
import TreeUtil from "@/utils/TreeUtil";

import CodeMirrorEditorBlack from "@/components/CodeMirrorEditorBlack";
import JsonCodeMirror from "@/components/JsonCodeMirror";

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
// D:\proj\bishe\exam-vue-admin3\src\components\JsonCodeMirror.vue
// D:\proj\bishe\exam-vue-admin3\src\utils\TreeUtil.js

export default {
  props:{
    // data:"{}",
    data:""
  },
  data() {
    return {
      editor: null,
      code: "//按Ctrl键进行代码提示",
      JsonCodeMirrorShow:false,
      JsonCodeMirrorData:{},
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
      graph: null,
      // mode:"indexTree",
      mode:"g6Tree"
    };
  },
  components: {
    CodeMirrorEditorBlack,
    JsonCodeMirror,
  },
  mounted() {
    let mockTreeDataList= [
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
      ]
      let treeDataOfDepth={
    "depth": 0,
    "label": "0-0",
    "status": 1,
    "children": [
        {
            "depth": 1,
            "label": "1-0-1",
            "children": [
                {
                    "depth": 2,
                    "label": "2-0-2",
                    "x": 432,
                    "y": 0,
                    "style": {
                        "fill": "#c6e5ff",
                        "stroke": "#6b9bfa"
                    },
                    "labelCfg": {
                        "offset": 10,
                        "position": "right",
                        "style": {
                            "fill": "#2c3e50"
                        }
                    }
                },
                {
                    "depth": 2,
                    "label": "2-1-3",
                    "x": 432,
                    "y": 36,
                    "style": {
                        "fill": "#c6e5ff",
                        "stroke": "#6b9bfa"
                    },
                    "labelCfg": {
                        "offset": 10,
                        "position": "right",
                        "style": {
                            "fill": "#2c3e50"
                        }
                    }
                }
            ],
            "x": 216,
            "y": 18,
            "style": {
                "fill": "#c6e5ff",
                "stroke": "#6b9bfa"
            },
            "labelCfg": {
                "offset": 10,
                "position": "left",
                "style": {
                    "fill": "#2c3e50"
                }
            }
        },
        {
            "depth": 1,
            "label": "1-1-4",
            "children": [
                {
                    "depth": 2,
                    "label": "2-0-5",
                    "x": 432,
                    "y": 72,
                    "style": {
                        "fill": "#c6e5ff",
                        "stroke": "#6b9bfa"
                    },
                    "labelCfg": {
                        "offset": 10,
                        "position": "right",
                        "style": {
                            "fill": "#2c3e50"
                        }
                    }
                },
                {
                    "depth": 2,
                    "label": "2-1-6",
                    "x": 432,
                    "y": 108,
                    "style": {
                        "fill": "#c6e5ff",
                        "stroke": "#6b9bfa"
                    },
                    "labelCfg": {
                        "offset": 10,
                        "position": "right",
                        "style": {
                            "fill": "#2c3e50"
                        }
                    }
                }
            ],
            "x": 216,
            "y": 90,
            "style": {
                "fill": "#c6e5ff",
                "stroke": "#6b9bfa"
            },
            "labelCfg": {
                "offset": 10,
                "position": "left",
                "style": {
                    "fill": "#2c3e50"
                }
            }
        }
    ],
    "x": 0,
    "y": 54,
    "style": {
        "fill": "#c6e5ff",
        "stroke": "#6b9bfa"
    },
    "labelCfg": {
        "offset": 10,
        "position": "left",
        "style": {
            "fill": "#2c3e50"
        }
    }
}
// this.JsonCodeMirrorData=treeDataOfDepth

    if(!this.data||this.data=="{}"||this.data==""){
      // this.data="{}"
      // this.data=  JSON.stringify(this.JsonCodeMirrorData)
      this.JsonCodeMirrorData=treeDataOfDepth
      this.mode="g6Tree"
      this.graph=   G6Util.showChartG6Tree("container",this.JsonCodeMirrorData)

      // this.data=  JSON.stringify(mockTreeDataList)
    }else if (this.data.startsWith("[")){
      this.JsonCodeMirrorData=JSON.parse(this.data)
      let treeData=NodeUtil.changeTreeData(this.JsonCodeMirrorData)

    let treeData0= treeData[0]
     
      this.graph=   G6Util.showChartG6Tree("container",treeData0)
      this.mode="indexTree"

    }
    else{
      this.JsonCodeMirrorData=JSON.parse(this.data)
      this.graph=   G6Util.showChartG6Tree("container",this.JsonCodeMirrorData)
      this.mode="g6Tree"
    }


//     let getTreedata=   JSON.parse(this.data)
//     this.getTreedata=getTreedata
//     console.log("getTreedata mounted");
//     console.log(getTreedata);
//     // let getTreedata=this.data
//     let treeData=NodeUtil.changeTreeData(getTreedata)

//     let treeData0= treeData[0]
//   console.log("treeData0");
//   console.log(treeData0);

//   let  height3Tree= TreeUtil.makeTreeOfHeight(3)
//   // let  height3Tree= TreeUtil.makeTreeOfHeight(4)
//   console.log("height3Tree");
//   console.log(height3Tree);

// let  treeDataToshow=height3Tree
// // let  treeDataToshow=treeData0

// this.graph=   G6Util.showChartG6Tree("container",treeDataToshow)
// this.graph=   G6Util.showChartG6Tree("container",this.JsonCodeMirrorData)

// this.graph=   G6Util.showChartG6Tree("container",treeData[0])
    // this.changeTreeData();
    // this.showChart();
    // CodeMirrorUtil.getEditor(this.$refs.mycode, "text/x-sql")
    // let editor = CodeMirrorUtil.getEditor(this.$refs.mycode);
    this.JsonCodeMirrorShow=true
  },
  methods: {
    onChanged(){

      this.getCode()
    },
    mountedG6TreeIndex() {
    let mockTreeDataList= [
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
      ]
      let dd={
    "depth": 0,
    "label": "0-0",
    "status": 1,
    "children": [
        {
            "depth": 1,
            "label": "1-0-1",
            "children": [
                {
                    "depth": 2,
                    "label": "2-0-2",
                    "x": 432,
                    "y": 0,
                    "style": {
                        "fill": "#c6e5ff",
                        "stroke": "#6b9bfa"
                    },
                    "labelCfg": {
                        "offset": 10,
                        "position": "right",
                        "style": {
                            "fill": "#2c3e50"
                        }
                    }
                },
                {
                    "depth": 2,
                    "label": "2-1-3",
                    "x": 432,
                    "y": 36,
                    "style": {
                        "fill": "#c6e5ff",
                        "stroke": "#6b9bfa"
                    },
                    "labelCfg": {
                        "offset": 10,
                        "position": "right",
                        "style": {
                            "fill": "#2c3e50"
                        }
                    }
                }
            ],
            "x": 216,
            "y": 18,
            "style": {
                "fill": "#c6e5ff",
                "stroke": "#6b9bfa"
            },
            "labelCfg": {
                "offset": 10,
                "position": "left",
                "style": {
                    "fill": "#2c3e50"
                }
            }
        },
        {
            "depth": 1,
            "label": "1-1-4",
            "children": [
                {
                    "depth": 2,
                    "label": "2-0-5",
                    "x": 432,
                    "y": 72,
                    "style": {
                        "fill": "#c6e5ff",
                        "stroke": "#6b9bfa"
                    },
                    "labelCfg": {
                        "offset": 10,
                        "position": "right",
                        "style": {
                            "fill": "#2c3e50"
                        }
                    }
                },
                {
                    "depth": 2,
                    "label": "2-1-6",
                    "x": 432,
                    "y": 108,
                    "style": {
                        "fill": "#c6e5ff",
                        "stroke": "#6b9bfa"
                    },
                    "labelCfg": {
                        "offset": 10,
                        "position": "right",
                        "style": {
                            "fill": "#2c3e50"
                        }
                    }
                }
            ],
            "x": 216,
            "y": 90,
            "style": {
                "fill": "#c6e5ff",
                "stroke": "#6b9bfa"
            },
            "labelCfg": {
                "offset": 10,
                "position": "left",
                "style": {
                    "fill": "#2c3e50"
                }
            }
        }
    ],
    "x": 0,
    "y": 54,
    "style": {
        "fill": "#c6e5ff",
        "stroke": "#6b9bfa"
    },
    "labelCfg": {
        "offset": 10,
        "position": "left",
        "style": {
            "fill": "#2c3e50"
        }
    }
}
    if(!this.data){
      // this.data="{}"
      this.data=  JSON.stringify(mockTreeDataList)
    }

    let getTreedata=   JSON.parse(this.data)
    this.getTreedata=getTreedata
    console.log("getTreedata mounted");
    console.log(getTreedata);
    // let getTreedata=this.data
    let treeData=NodeUtil.changeTreeData(getTreedata)

    let treeData0= treeData[0]
  console.log("treeData0");
  console.log(treeData0);

  let  height3Tree= TreeUtil.makeTreeOfHeight(3)
  // let  height3Tree= TreeUtil.makeTreeOfHeight(4)
  console.log("height3Tree");
  console.log(height3Tree);

let  treeDataToshow=height3Tree
// let  treeDataToshow=treeData0

this.graph=   G6Util.showChartG6Tree("container",treeDataToshow)

// this.graph=   G6Util.showChartG6Tree("container",treeData[0])
    // this.changeTreeData();
    // this.showChart();
    // CodeMirrorUtil.getEditor(this.$refs.mycode, "text/x-sql")
    // let editor = CodeMirrorUtil.getEditor(this.$refs.mycode);
    this.JsonCodeMirrorShow=true
    },
    onClose(){

      let JsonCodeMirrorVal=  this.$refs.JsonCodeMirror?.getValue()

      this.$emit('onClose',JsonCodeMirrorVal)
    },
    onCloseNotSave(){

      let JsonCodeMirrorVal=  this.$refs.JsonCodeMirror?.getValue()

      this.$emit('onCloseNotSave',JsonCodeMirrorVal)
    },
    getCode() {
      if( this.mode=="indexTree")
     {
        this.getCodePutTreeIndex()
        return
     }
      this.getCodePutTree()
      // code to graph 
    //   console.log('getCode');
    //   let graph=this.graph
    //   // if(graph.destroyed){
    //   //   this.showChart()
    //   // }
    //   if(graph?.destroy){
    //     graph.destroy()
    //   }

    //   // JsonCodeMirror
    //   // getValue
    //   // let getTreedata=  this.$refs.JsonCodeMirror?.getValue()
    //   let JsonCodeMirrorVal=  this.$refs.JsonCodeMirror?.getValue()

    //   let getTreedata=    JSON.parse(JsonCodeMirrorVal)
    // //  let getTreedata=  this.$refs.JsonCodeMirror?.data
    //  console.log("getTreedata");
    //   console.log(getTreedata);

    //   // console.log("this.getTreedata");
    //   // console.log(this.getTreedata);

    //   // let data=NodeUtil.changeTreeData(this.getTreedata)
    //   // let treeData=NodeUtil.changeTreeData(this.getTreedata)
    //   let treeData=NodeUtil.changeTreeData(getTreedata)

    //   this.graph=   G6Util.showChartG6Tree("container",treeData[0])
    //        //初始化数据
    //       //  graph.data(data);
    //       // let  treeData0=treeData[0]
    //       // console.log("treeData0");
    //       // console.log(treeData0);
    //       //  graph.data(treeData0);

    //     // //渲染视图
    //     // graph.render();
    //     // //让画布内容适应视口
    //     // graph.fitView();
    },
    getCodePutTreeIndex() {
      // code to graph 
      console.log('getCode');
      let graph=this.graph
      // if(graph.destroyed){
      //   this.showChart()
      // }
      if(graph?.destroy){
        graph.destroy()
      }

      // JsonCodeMirror
      // getValue
      // let getTreedata=  this.$refs.JsonCodeMirror?.getValue()
      let JsonCodeMirrorVal=  this.$refs.JsonCodeMirror?.getValue()

      let getTreedata=    JSON.parse(JsonCodeMirrorVal)
    //  let getTreedata=  this.$refs.JsonCodeMirror?.data
     console.log("getTreedata");
      console.log(getTreedata);

      // console.log("this.getTreedata");
      // console.log(this.getTreedata);

      // let data=NodeUtil.changeTreeData(this.getTreedata)
      // let treeData=NodeUtil.changeTreeData(this.getTreedata)
      let treeData=NodeUtil.changeTreeData(getTreedata)

      this.graph=   G6Util.showChartG6Tree("container",treeData[0])
           //初始化数据
          //  graph.data(data);
          // let  treeData0=treeData[0]
          // console.log("treeData0");
          // console.log(treeData0);
          //  graph.data(treeData0);

        // //渲染视图
        // graph.render();
        // //让画布内容适应视口
        // graph.fitView();
    },
    getCodePutTree() {
      // code to graph 
      console.log('getCode');
      let graph=this.graph
      // if(graph.destroyed){
      //   this.showChart()
      // }
      if(graph?.destroy){
        try{
          graph.destroy()
        }catch(e){
          console.error(e)
          // log.error(e)

        }
      
      }

      // JsonCodeMirror
      // getValue
      // let getTreedata=  this.$refs.JsonCodeMirror?.getValue()
      let JsonCodeMirrorVal=  this.$refs.JsonCodeMirror?.getValue()

      let getTreedata=    JSON.parse(JsonCodeMirrorVal)
    //  let getTreedata=  this.$refs.JsonCodeMirror?.data
     console.log("getTreedata");
      console.log(getTreedata);

      // console.log("this.getTreedata");
      // console.log(this.getTreedata);

      // let data=NodeUtil.changeTreeData(this.getTreedata)
      // let treeData=NodeUtil.changeTreeData(this.getTreedata)
      // let treeData=NodeUtil.changeTreeData(getTreedata)
      // this.graph=   G6Util.showChartG6Tree("container",treeData[0])

      this.graph=   G6Util.showChartG6Tree("container",getTreedata)
           //初始化数据
          //  graph.data(data);
          // let  treeData0=treeData[0]
          // console.log("treeData0");
          // console.log(treeData0);
          //  graph.data(treeData0);

        // //渲染视图
        // graph.render();
        // //让画布内容适应视口
        // graph.fitView();
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
        // const width=1000
        const width = container.clientWidth;
        const height = container.clientHeight;
        // new G6.TreeGraph 更新数据
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
        this.graph=graph
      }
    },
  },
};
</script>
  
  
<style scoped>
.g6Part {
  width: 1000px;
}
.flexCol {
  /* width: 1000px; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: center; */
}
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