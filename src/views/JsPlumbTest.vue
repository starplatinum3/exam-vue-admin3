<template>
  <div>
    <!-- <span ref="latex" class="katex" v-html="rawHTML"></span>
  <el-input v-model="latexRaw" placeholder=""></el-input>
  <el-button type="" @click="renderToString">renderToString</el-button> -->
    <!-- <div id="workspace"></div> -->

    <div id="container">
			<div class="col1">
				<div v-for="item in list1" :id="item.nodeId" name="cell">{{item.name}}</div>
			</div>
			<div class="col2">
				<div v-for="item in list2" :id="item.nodeId" name="cell">{{item.name}}</div>
			</div>
		</div>
 
  </div>
</template>
  
  <script>
  
//   D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\JsPlumbTest.vue
import katex from "katex";
import "katex/dist/katex.css";
export default {
  name: "latexDisplay",
  data() {
    return {
      latexRaw: null,
      rawHTML: "",
      jsPlumb: null,
			list1:[{name:'XX',nodeId:'x'},{name:'YY',nodeId:'y'},{name:'ZZ',nodeId:'z'}],
			list2:[{name:'AA',nodeId:'a'},{name:'BB',nodeId:'b'},{name:'CC',nodeId:'c'}],
			connlist:[{sourceNodeId:'x',targetNodeId:'a'},{sourceNodeId:'y',targetNodeId:'b'},{sourceNodeId:'z',targetNodeId:'c'}]
// ————————————————
// 版权声明：本文为CSDN博主「Hotice888」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/Hotice888/article/details/107169796/
    };
  },

// 	m
// ————————————————
// 版权声明：本文为CSDN博主「Hotice888」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/Hotice888/article/details/107169796/
  created() {
    // this.jsPlumb = this.$jsPlumb.getInstance({
    //   Container: "workspace", //选择器id
    //   EndpointStyle: { radius: 4, fill: "#acd" }, //端点样式
    //   PaintStyle: { stroke: "#fafafa", strokeWidth: 3 }, // 绘画样式，默认8px线宽  #456
    //   HoverPaintStyle: { stroke: "#1E90FF" }, // 默认悬停样式  默认为null
    //   EndpointHoverStyle: { fill: "#F00", radius: 6 }, // 端点悬停样式
    //   ConnectionOverlays: [
    //     //连线上的默认样式  这里是箭头
    //     [
    //       "Arrow",
    //       {
    //         location: 1,
    //         paintStyle: {
    //           stroke: "#00688B",
    //           fill: "#00688B",
    //         },
    //       },
    //     ],
    //   ],
    //   Connector: ["Straight", { gap: 1 }], //要使用的默认连接器的类型：折线，流程等
    // });

    this.jsPlumb = this.$jsPlumb.getInstance({
			Container:"container",   //选择器id
			EndpointStyle: { radius: 4, fill: "#acd"},  //端点样式
			PaintStyle: { stroke: '#fafafa',strokeWidth:4},// 绘画样式，默认8px线宽  #456
			HoverPaintStyle: { stroke: '#1E90FF' }, // 默认悬停样式  默认为null
			EndpointHoverStyle: { fill: '#F00', radius:6 }, // 端点悬停样式
			ConnectionOverlays:[                 
				["Arrow",{
					location:1,
					paintStyle: {
						stroke: '#00688B',
						fill: '#00688B',
					}
				}]
			],
			Connector:["Straight",{gap:1}],     //要使用的默认连接器的类型：折线，流程等
			DrapOptions:{cursor:"crosshair",zIndex:2000}
		});

// ————————————————
// 版权声明：本文为CSDN博主「Hotice888」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/Hotice888/article/details/107169796/
  },
  methods: {
    initAll () {
			let rl = this.list1;
			for (let i = 0; i < rl.length; i++) {
				this.init(rl[i].nodeId)
			}
			let rl2 = this.list2;
			for (let i = 0; i < rl2.length; i++) {
				this.init(rl2[i].nodeId)
			}
		},
		// 初始化规则使其可以连线、拖拽
		init (id) {
			let ins = this.jsPlumb,
					elem = document.getElementById(id);
			ins.makeSource(elem,{
				anchor: ["Perimeter", {anchorCount:200, shape:"Rectangle"}],
				allowLoopback: false,
				maxConnections: 1
			});
			ins.makeTarget(elem,{
				anchor: ["Perimeter", {anchorCount:200, shape:"Rectangle"}],
				allowLoopback: false,
				maxConnections: 1
			});
			ins.draggable(elem,{
				containment: true
			});
		},
		connectionAll () {
			let ins = this.jsPlumb;
			ins.ready(() => {
				for (let i = 0; i < this.connlist.length; i++) {
					let conn = this.connlist[i],
							connection = ins.connect({
								source:conn.sourceNodeId,
								target:conn.targetNodeId
							});
					connection.setPaintStyle({stroke:"#fafafa",strokeWidth:4})
				}
			})
		},
		switchContainer (target,source,draggable) {
			let elem = document.getElementsByName("cell"),
				  ins = this.jsPlumb;
			ins.setSourceEnabled(elem,source);
			ins.setTargetEnabled(elem,target);
			ins.setDraggable(elem,draggable);
		},

// ————————————————
// 版权声明：本文为CSDN博主「Hotice888」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/Hotice888/article/details/107169796/

    renderToString() {
      // let  title=String.raw`\title{文章标题 \tnoteref{t1,t2}}`
      //    this.$slots.default[0].text,
      // console.log("title");
      // console.log(title);
      this.rawHTML = katex.renderToString(this.latexRaw, {
        throwOnError: false,
      });
      console.log("this.rawHTML");
      console.log(this.rawHTML);
    },
  },
  mounted() {
    console.log("katex");
    console.log(katex);
    // \tnotetext[t2]{脚注内容}
    let title = String.raw`\title{文章标题 \tnoteref{t1,t2}}`;
    //    this.$slots.default[0].text,
    console.log("title");
    console.log(title);
    this.rawHTML = katex.renderToString(title, {
      throwOnError: false,
    });
    console.log("this.rawHTML");
    console.log(this.rawHTML);
    /*
      // 另一种方法
      katex.render(this.$slots.default[0].text, this.$refs.latex, {
        throwOnError: false,
      });
      */

      let ins = this.jsPlumb
			 let  allConnection = ins.getAllConnections();
		ins.batch(() => {
			this.initAll();
			this.connectionAll();
		});
		this.switchContainer(true,true,false);
  },
};
</script>
<style>
	#container{
		margin: 50px;
		position: relative;
		background: #efefef;
		width: 400px;
		height: 400px;
	}
	.col2,.col1{
		float: left;
	}
	.col1{
		margin-left: 40px;
	}
	.col2{
		margin-left: 150px;
	}
	#container>div>div{
		width: 100px;
		height: 40px;
		line-height: 40px;
		background: lightcyan;
		margin-top: 40px;
	}
</style>
  