<template>
  <div id="app">
    <button @click="toUpdate">切换数据</button>
    <div id="mountNode"></div>
  </div>
</template>
  
  <script>
  // D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\BusinessFlowChart.vue
//    import {init,update} from './utils/g6Utils.min.js';
import { init, update } from "@/utils/g6Utils.min.js";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    toUpdate() {
      const data = {
        nodes: [
          {
            shape: "root",
            id: "begin",
            name: "开始",
            x: 100,
            y: 100,
          },
          {
            shape: "node",
            id: "shenhe1",
            name: "审核",
            status: "done",
            x: 200,
            y: 200,
          },
          {
            shape: "node",
            id: "xiafa",
            name: "下发",
            status: "done",
            x: 200,
            y: 300,
          },
          {
            shape: "node",
            id: "qianshou",
            name: "签收",
            status: "done",
            x: 300,
            y: 300,
          },
          {
            shape: "node",
            id: "chuzhi",
            name: "处置",
            status: "timeout",
            x: 300,
            y: 400,
          },
          {
            shape: "node",
            id: "shangbao",
            name: "上报",
            status: "",
            x: 300,
            y: 500,
          },
          {
            shape: "node",
            id: "shenhe2",
            name: "审核",
            status: "",
            x: 200,
            y: 500,
          },
          {
            shape: "root",
            id: "end",
            name: "结束",
            status: "",
            x: 100,
            y: 500,
          },
        ],
        edges: [
          {
            id: "edge1",
            source: "begin",
            target: "shenhe1",
            controlPoints: [
              {
                x: 230,
                y: 115,
              },
            ],
          },
          {
            id: "edge2",
            source: "shenhe1",
            target: "xiafa",
          },
          {
            id: "edge3",
            source: "xiafa",
            target: "qianshou",
          },
          {
            id: "edge4",
            source: "qianshou",
            target: "chuzhi",
          },
          {
            id: "edge5",
            source: "chuzhi",
            target: "shangbao",
            label: "完成",
          },
          {
            id: "edge6",
            source: "shangbao",
            target: "shenhe2",
          },
          {
            id: "edge7",
            source: "shenhe2",
            target: "end",
          },
          {
            id: "edge8",
            source: "shenhe1",
            target: "begin",
            label: "不通过",
            controlPoints: [
              {
                x: 130,
                y: 215,
              },
            ],
          },
        ],
        groups: [],
        guides: [
          {
            id: "states",
            shape: "states",
          },
        ],
        status: [
          {
            title: "default",
            color: "gray",
            name: "未开始",
          },
        ],
      };
      update(data);
    },
  },
  mounted() {
    const data = {
      nodes: [
        {
          shape: "root",
          id: "begin",
          name: "开始",
          radius: 15,
          x: 400,
          y: 100,
          parent: "group1",
        },
        {
          shape: "node",
          id: "shenhe1",
          name: "审核",
          status: "done",
          x: 300,
          y: 100,
          parent: "group2",
        },
        {
          shape: "node",
          id: "shenhe2",
          name: "审核",
          status: "done",
          x: 200,
          y: 100,
          parent: "group3",
        },
        {
          shape: "node",
          id: "qianshou1",
          name: "签收",
          status: "done",
          x: 100,
          y: 100,
          parent: "group4",
        },
        {
          shape: "node",
          id: "jianyi",
          name: "建议",
          status: "done",
          x: 100,
          y: 200,
          parent: "group4",
        },
        {
          shape: "node",
          id: "shenhe3",
          name: "审核",
          status: "done",
          x: 200,
          y: 200,
          parent: "group3",
        },
        {
          shape: "node",
          id: "xiafa1",
          name: "下发",
          status: "done",
          x: 200,
          y: 300,
          parent: "group3",
        },
        {
          shape: "node",
          id: "qianshou2",
          name: "签收",
          status: "done",
          x: 300,
          y: 300,
          parent: "group2",
        },
        {
          shape: "node",
          id: "xiafa2",
          name: "下发",
          status: "done",
          x: 300,
          y: 400,
          parent: "group2",
        },
        {
          shape: "node",
          id: "qianshou3",
          name: "签收",
          status: "done",
          x: 400,
          y: 400,
          parent: "group1",
        },
        {
          shape: "node",
          id: "chuzhi",
          name: "处置",
          status: "timeout",
          animation: "flicker",
          x: 400,
          y: 500,
          parent: "group1",
        },
        {
          shape: "node",
          id: "shangbao",
          name: "上报",
          status: "ing",
          animation: "wave",
          x: 400,
          y: 600,
          parent: "group1",
        },
        {
          shape: "node",
          id: "shenghe4",
          name: "审核",
          status: "",
          x: 200,
          y: 600,
          parent: "group3",
        },
        {
          shape: "root",
          id: "end",
          name: "结束",
          radius: 15,
          x: 100,
          y: 600,
          parent: "group4",
        },
      ],
      edges: [
        {
          id: "edge1",
          source: "begin",
          target: "shenhe1",
        },
        {
          id: "edge2",
          source: "shenhe1",
          target: "shenhe2",
        },
        {
          id: "edge3",
          source: "shenhe2",
          target: "qianshou1",
        },
        {
          id: "edge4",
          source: "qianshou1",
          target: "jianyi",
        },
        {
          id: "edge6",
          source: "shenhe3",
          target: "xiafa1",
        },
        {
          id: "edge66",
          source: "shenhe3",
          target: "jianyi",
          label: "不通过",
          controlPoints: [
            {
              x: 230,
              y: 150,
            },
            {
              x: 130,
              y: 150,
            },
          ],
        },
        {
          id: "edge7",
          source: "xiafa1",
          target: "qianshou2",
        },
        {
          id: "edge8",
          source: "qianshou2",
          target: "xiafa2",
        },
        {
          id: "edge9",
          source: "xiafa2",
          target: "qianshou3",
        },
        {
          id: "edge10",
          source: "qianshou3",
          target: "chuzhi",
        },
        {
          id: "edge11",
          source: "chuzhi",
          target: "shangbao",
          label: "完成",
        },
        {
          id: "edge12",
          source: "shangbao",
          target: "shenghe4",
        },
        {
          id: "edge13",
          source: "shenghe4",
          target: "end",
        },
      ],
      groups: [
        {
          shape: "lane",
          id: "group4",
          label: "泳道一",
        },
        {
          shape: "lane",
          id: "group3",
          label: "泳道二",
        },
        {
          shape: "lane",
          id: "group2",
          label: "泳道三",
        },
        {
          shape: "lane",
          id: "group1",
          label: "泳道四",
        },
      ],
      guides: [
        {
          id: "legend",
          shape: "legend",
          label: [
            { shape: "root", name: "开始/结束" },
            { shape: "node", name: "处置流程" },
          ],
        },
        {
          id: "states",
          shape: "states",
        },
      ],
      status: [
        {
          title: "done",
          color: "green",
          name: "已完成",
        },
        {
          title: "timeout",
          color: "red",
          name: "已超时",
        },
        {
          title: "ing",
          color: "#EE8262",
          name: "进行中",
        },
        {
          title: "default",
          color: "gray",
          name: "未开始",
        },
      ],
    };
    init("mountNode", 500, 500, data);
  },
};
</script>
  
  <style>
#mountNode {
  width: 500px;
  height: 500px;
  border: 1px saddlebrown solid;
}
</style>
  