(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30b5fb45"],{b61f:function(t,n,e){},eb40:function(t,n,e){"use strict";e.r(n);e("a7b5");var o,a=function(){var t=this,n=t._self._c;return n("div",[n("div",{attrs:{id:"container"}},[n("div",{staticClass:"col1"},t._l(t.list1,(function(e){return n("div",{attrs:{id:e.nodeId,name:"cell"}},[t._v(" "+t._s(e.name)+" ")])})),0),n("div",{staticClass:"col2"},t._l(t.list2,(function(e){return n("div",{attrs:{id:e.nodeId,name:"cell"}},[t._v(" "+t._s(e.name)+" ")])})),0)])])},i=[],r=e("3edb"),l=(e("d221"),e("75cb")),s=e.n(l),c=(e("21cf"),{name:"latexDisplay",data:function(){return{latexRaw:null,rawHTML:"",jsPlumb:null,list1:[{name:"XX",nodeId:"x"},{name:"YY",nodeId:"y"},{name:"ZZ",nodeId:"z"}],list2:[{name:"AA",nodeId:"a"},{name:"BB",nodeId:"b"},{name:"CC",nodeId:"c"}],connlist:[{sourceNodeId:"x",targetNodeId:"a"},{sourceNodeId:"y",targetNodeId:"b"},{sourceNodeId:"z",targetNodeId:"c"}]}},created:function(){this.jsPlumb=this.$jsPlumb.getInstance({Container:"container",EndpointStyle:{radius:4,fill:"#acd"},PaintStyle:{stroke:"#fafafa",strokeWidth:4},HoverPaintStyle:{stroke:"#1E90FF"},EndpointHoverStyle:{fill:"#F00",radius:6},ConnectionOverlays:[["Arrow",{location:1,paintStyle:{stroke:"#00688B",fill:"#00688B"}}]],Connector:["Straight",{gap:1}],DrapOptions:{cursor:"crosshair",zIndex:2e3}})},methods:{initAll:function(){for(var t=this.list1,n=0;n<t.length;n++)this.init(t[n].nodeId);for(var e=this.list2,o=0;o<e.length;o++)this.init(e[o].nodeId)},init:function(t){var n=this.jsPlumb,e=document.getElementById(t);n.makeSource(e,{anchor:["Perimeter",{anchorCount:200,shape:"Rectangle"}],allowLoopback:!1,maxConnections:1}),n.makeTarget(e,{anchor:["Perimeter",{anchorCount:200,shape:"Rectangle"}],allowLoopback:!1,maxConnections:1}),n.draggable(e,{containment:!0})},connectionAll:function(){var t=this,n=this.jsPlumb;n.ready((function(){for(var e=0;e<t.connlist.length;e++){var o=t.connlist[e],a=n.connect({source:o.sourceNodeId,target:o.targetNodeId});a.setPaintStyle({stroke:"#fafafa",strokeWidth:4})}}))},switchContainer:function(t,n,e){var o=document.getElementsByName("cell"),a=this.jsPlumb;a.setSourceEnabled(o,n),a.setTargetEnabled(o,t),a.setDraggable(o,e)},renderToString:function(){this.rawHTML=s.a.renderToString(this.latexRaw,{throwOnError:!1}),console.log("this.rawHTML"),console.log(this.rawHTML)}},mounted:function(){var t=this;console.log("katex"),console.log(s.a);var n=String.raw(o||(o=Object(r["a"])(["\title{文章标题 \tnoteref{t1,t2}}"],["\\title{文章标题 \\tnoteref{t1,t2}}"])));console.log("title"),console.log(n),this.rawHTML=s.a.renderToString(n,{throwOnError:!1}),console.log("this.rawHTML"),console.log(this.rawHTML);var e=this.jsPlumb;e.getAllConnections();e.batch((function(){t.initAll(),t.connectionAll()})),this.switchContainer(!0,!0,!1)}}),d=c,u=(e("f857"),e("e607")),h=Object(u["a"])(d,a,i,!1,null,null,null);n["default"]=h.exports},f857:function(t,n,e){"use strict";e("b61f")}}]);