// ListUtil
import ListUtil from '@/utils/ListUtil'
let NodeUtil = {
  makePicNode(name, x, y, id) {
    let node = {
      name: name,
      label: name,
      size: ["170", "34"],
      type: "node",
      x: x,
      y: y,
      shape: "customNode",
      color: "#1890ff",
      image: "https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg",
      stateImage: "static/img/ok.463ab0e4.svg",
      inPoints: [
        [0, 0.5]
      ],
      outPoints: [
        [1, 0.5]
      ],
      offsetX: 36,
      offsetY: 3,
      // "id": "node8"
      id: id,
    };
    return node;
  },
  //处理数据
  changeTreeData(getTreedata) {
    // this.
    let treedata=[]
    getTreedata.forEach((item, i) => {
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
      // this.
      treedata.push({
        id: item.id,
        label: item.indexTitle,
        children: data2,
      });
      // console.log(this.treedata);
    });
    return treedata
  },
  makeWhiteNode(name, x, y, id) {
    // ListUtil
    let node = {
      name: name,
      label: name,
      size: ["30", "30"],
      //   size: ["170", "34"],
      type: "node",
      x: x,
      y: y,
      shape: "customNode",
      color: "#1890ff",
      image: "https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg",
      stateImage: "static/img/ok.463ab0e4.svg",
      inPoints: [
        [0, 0.5]
      ],
      outPoints: [
        [1, 0.5]
      ],
      offsetX: 36,
      offsetY: 3,
      // "id": "node8"
      id: id,
    };
    return node;
  },

  // dd(){
  //   let whiteNode=   {
  //         name: "测试节点",
  //         label: "测试节点",
  //         // "size": ["170", "34"],
  //         size: ["30", "30"],
  //         type: "node",
  //         x: 213,
  //         y: 60,
  //         shape: "customNode",
  //         color: "#1890ff",
  //         image:
  //           "https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg",
  //         stateImage: "static/img/ok.463ab0e4.svg",
  //         inPoints: [[0, 0.5]],
  //         outPoints: [[1, 0.5]],
  //         offsetX: 36,
  //         offsetY: 3,
  //         id: "node8",
  //       }

  // },
  listContains(list, want) {
    for (const obj of list) {
      if (obj == want) {
        return true
      }

    }
    return false
  },

  getLast(list) {
    let lastIdx = list.length - 1
    return list[lastIdx]
  },

  listRemove(list, dontWant) {
    let resList = []
    for (const obj of list) {
      if (obj == dontWant) {
        continue
      }
      resList.push(obj)
    }
    return resList
  },

  listTrim(list, dontWant) {
    let resList = []
    for (const obj of list) {
      if (obj == dontWant) {
        continue
      }
      resList.push(obj)
    }
    return resList
  },

  makeRowNodes(xStart, yStart, row2NodesNames, rowName = "row1", xDiff = 200, yDiff = 100) {
    // let row2X = 100;
    // let yStart = row1Y+100;
    let nodes = []
    for (let i = 0; i < row2NodesNames.length; i++) {
      let row1NodeName = row2NodesNames[i];
      //   let id = `node-${i}-row2`;
      let id = `node-${i}-${rowName}`;
      let nodeRow1 = this.makeWhiteNode(row1NodeName, xStart + i * xDiff, yStart, id);
      //   this.data.
      nodes.push(nodeRow1);

    }
    return nodes
  },
  // let rows = [row1NodesNames, row2NodesNames, row3NodesNames];
  //   makeRowsNodes(rows,xStart,yStart,rowName="row1",xDiff=200,yDiff=100){
  makeRowsNodes(rows, xStart = 100, yStart = 60, yDiff = 100) {

    // let rows = [row1NodesNames, row2NodesNames, row3NodesNames];
    let nodes = []
    for (let i = 0; i < rows.length; i++) {
      let rowNodesNames = rows[i];
      //   let rowX = 100;
      //   let rowY = 60 + i * 100;
      let rowX = xStart;
      let rowY = yStart + i * yDiff;
      nodes = ListUtil.addList(
        nodes,
        NodeUtil.makeRowNodes(rowX, rowY, rowNodesNames, `row${i}`)
      );
    }

    return nodes
  },

  makeTwoRowEdges(rowNum,rowNodesNamesLen,rowNodesNamesNextLen){
    // let rowNodesNames = rows[i];
    // let rowNodesNamesNext = rows[idxNext];
    // let rowNum=i
    let edges=[]
    for(let i=0;i<rowNodesNamesLen;i++){
        for(let j=0;j<rowNodesNamesNextLen;j++){
            let edge=  NodeUtil.makeEdge( `node-${i}-row${rowNum}`, `node-${j}-row${rowNum+1}`);
            // this.data.
            edges.push(edge);
        }
    }
    return edges

    // for(let i=0;i<rowNodesNames.length;i++){
    //     for(let j=0;j<rowNodesNamesNext.length;j++){
    //         let edge=  NodeUtil.makeEdge( `node-${i}-row${rowNum}`, `node-${j}-row${rowNum+1}`);
    //         this.data.edges.push(edge);
    //     }
    // }
  },
  makeRowsEdges(rows, xStart = 100, yStart = 60, yDiff = 100) {
    // let rows = [row1NodesNames, row2NodesNames, row3NodesNames];
    let nodes = []
    let edges = []
    for (let i = 0; i < rows.length; i++) {
      
      let idxNext=i+1
      if(idxNext>=rows.length){
        return edges
      }
      let rowNodesNames = rows[i];
      let rowNodesNamesNext = rows[idxNext];
      let rowNum=i
      let  TwoRowEdges=this.makeTwoRowEdges(rowNum,rowNodesNames.length,rowNodesNamesNext.length)
      ListUtil.addList(edges,TwoRowEdges)
    //   let edge=  NodeUtil.makeEdge( "node-0-row1", "node-0-row2");
    //   this.data.edges.push(edge);
      //   let rowX = 100;
      //   let rowY = 60 + i * 100;
    //   let rowX = xStart;
    //   let rowY = yStart + i * yDiff;
    //   nodes = ListUtil.addList(
    //     nodes,
    //     NodeUtil.makeRowNodes(rowX, rowY, rowNodesNames, `row${i}`)
    //   );
    }

    return edges
  },
  makeEdge(source, target) {
    let edge = {
      id: `edge-${source}-${target}`,
      source: source,
      sourceId: source,
      target: target,

      targetId: target,
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
    }

    return edge
  }


}



export default NodeUtil
