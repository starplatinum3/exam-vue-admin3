(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cb06669"],{"014a":function(e,t,a){"use strict";function n(e,t,a){console.log("names"),console.log(e),console.log("datas"),console.log(t);var n=echarts.init(document.getElementById(a)),o={title:{text:"学生成绩统计"},tooltip:{},legend:{data:["成绩"]},xAxis:{data:e},yAxis:{},series:[{name:"成绩",type:"bar",data:t}]};n.setOption(o)}function o(e){var t=e.names,a=e.datas,n=e.echartsId;console.log("names"),console.log(t),console.log("datas"),console.log(a);var o=echarts.init(document.getElementById(n)),r={title:{text:e.title},tooltip:{},legend:{data:["成绩"]},xAxis:{data:t},yAxis:{},series:[{name:e.valName,type:"bar",data:a}]};o.setOption(r)}function r(e,t,a,n){t=e.names,a=e.datas;var o=e.echartsId;console.log("names"),console.log(t),console.log("datas"),console.log(a);var r=echarts.init(document.getElementById(o)),l={title:{text:e.title},tooltip:{},legend:{data:["成绩"]},xAxis:{data:t},yAxis:{},series:e.series};r.setOption(l)}a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return r}))},"09f4":function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),Math.easeInOutQuad=function(e,t,a,n){return e/=n/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function o(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e,t,a){var l=r(),i=e-l,s=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=s;var r=Math.easeInOutQuad(u,l,i,t);o(r),u<t?n(e):a&&"function"===typeof a&&a()};c()}},1944:function(e,t,a){"use strict";var n=a("9214"),o=a("7ea1"),r=a("9882"),l=a("26b3"),i=a("e270"),s=a("b7e5"),u=a("e51c"),c=a("fee2"),p=a("ae33");o("search",(function(e,t,a){return[function(t){var a=i(this),o=l(t)?void 0:c(t,e);return o?n(o,t,a):new RegExp(t)[e](u(a))},function(e){var n=r(this),o=u(e),l=a(t,n,o);if(l.done)return l.value;var i=n.lastIndex;s(i,0)||(n.lastIndex=0);var c=p(n,o);return s(n.lastIndex,i)||(n.lastIndex=i),null===c?-1:c.index}]}))},"333d":function(e,t,a){"use strict";var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[t("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},o=[],r=(a("ea1e"),a("09f4")),l={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:10},pageSizes:{type:Array,default:function(){return[5,10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&Object(r["a"])(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&Object(r["a"])(0,800)}}},i=l,s=(a("48e1"),a("e607")),u=Object(s["a"])(i,n,o,!1,null,"6c907def",null);t["a"]=u.exports},"48e1":function(e,t,a){"use strict";a("a93a")},"4a0c":function(e,t,a){"use strict";var n=a("b775");t["a"]={pageList:function(e){return Object(n["a"])("/api/admin/exam/paper/page",e)},taskExamPage:function(e){return Object(n["a"])("/api/admin/exam/paper/taskExamPage",e)},edit:function(e){return Object(n["a"])("/api/admin/exam/paper/edit",e)},select:function(e){return Object(n["a"])("/api/admin/exam/paper/select/"+e)},deletePaper:function(e){return Object(n["a"])("/api/admin/exam/paper/delete/"+e)}}},"5ef6":function(e,t,a){},a93a:function(e,t,a){},b042:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("ad6c"),a("57b9"),a("c30d"),a("c619");var n=function(e,t){var a={};return e.forEach((function(e){var n=JSON.stringify(t(e));a[n]=a[n]||[],a[n].push(e)})),a}},b7e5:function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},cd67:function(e,t,a){"use strict";a("5ef6")},ef08:function(e,t,a){"use strict";a.r(t);a("a7b5"),a("c619"),a("9bb8"),a("1944");var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container"},[t("el-form",{ref:"queryForm",attrs:{model:e.queryParam,inline:!0}},[t("el-form-item",{staticClass:"inputLabel",attrs:{label:"题目ID："}},[t("el-input",{attrs:{clearable:""},model:{value:e.queryParam.id,callback:function(t){e.$set(e.queryParam,"id",t)},expression:"queryParam.id"}})],1),t("el-form-item",{attrs:{label:"年级："}},[t("el-select",{attrs:{placeholder:"年级",clearable:""},on:{change:e.levelChange},model:{value:e.queryParam.level,callback:function(t){e.$set(e.queryParam,"level",t)},expression:"queryParam.level"}},e._l(e.levelEnum,(function(e){return t("el-option",{key:e.key,attrs:{value:e.key,label:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"学科："}},[t("el-select",{attrs:{clearable:""},model:{value:e.queryParam.subjectId,callback:function(t){e.$set(e.queryParam,"subjectId",t)},expression:"queryParam.subjectId"}},e._l(e.subjectFilter,(function(e){return t("el-option",{key:e.id,attrs:{value:e.id,label:e.name+" ( "+e.levelName+" )"}})})),1)],1),t("el-form-item",{attrs:{label:"名字"}},[t("el-input",{attrs:{clearable:"",placeholder:"名字"},model:{value:e.queryParam.name,callback:function(t){e.$set(e.queryParam,"name",t)},expression:"queryParam.name"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("查询")]),t("router-link",{staticClass:"link-left",attrs:{to:{path:"/exam/paper/edit"}}},[t("el-button",{attrs:{type:"primary"}},[e._v("添加")])],1)],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",fit:"","highlight-current-row":""},on:{"cell-click":e.handleCellClick}},[t("el-table-column",{attrs:{prop:"subjectId",label:"学科",formatter:e.subjectFormatter,width:"120px"}}),t("el-table-column",{attrs:{prop:"name",label:"名称"}}),t("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"160px"}}),t("el-table-column",{attrs:{prop:"paperType",formatter:e.paperTypeFormatter,label:"paperType",width:"160px"}}),t("el-table-column",{attrs:{prop:"questionCount",label:"questionCount",width:"160px"}}),t("el-table-column",{attrs:{label:"操作",align:"center",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.row;return[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.$router.push({path:"/exam/paper/Statistics",query:{examPaperId:n.id}})}}},[e._v("Statistics")]),t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.$router.push({path:"/exam/paper/edit",query:{id:n.id}})}}},[e._v("编辑")]),t("el-button",{staticClass:"link-left",attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.deletePaper(n)}}},[e._v("删除")])]}}])})],1),t("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParam.pageIndex,limit:e.queryParam.pageSize},on:{"update:page":function(t){return e.$set(e.queryParam,"pageIndex",t)},"update:limit":function(t){return e.$set(e.queryParam,"pageSize",t)},pagination:e.search}}),t("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"showStuEchartsByType"}})],1)},o=[],r=a("272e"),l=a("56c3"),i=(a("7c25"),a("ad6c"),a("7736")),s=a("333d"),u=a("4a0c"),c=a("b042"),p=a("014a"),m=(a("906c"),{components:{Pagination:s["a"]},data:function(){return{queryParam:{id:null,level:1,subjectId:null,pageIndex:1,pageSize:10},subjectFilter:null,listLoading:!0,tableData:[],total:0}},created:function(){this.initSubject(),this.search(),console.log("this.subjectFilter"),console.log(this.subjectFilter),console.log("this.exam"),console.log(this.exam)},mounted:function(){var e=this;this.subjectFilter=this.subjects.filter((function(t){return t.level===e.queryParam.level})),console.log("this.subjects"),console.log(this.subjects)},methods:Object(l["a"])({handleCellClick:function(e,t,a,n){if(console.log("row"),console.log(e),console.log("column"),console.log(t),console.log("cell"),console.log(a),console.log("event"),console.log(n),"佣金"==t.label)return e.show1=!0,this.$set(this.dataList,e.index,e),console.log(e),!1},paperTypeFormatter:function(e,t){return this.getPaperTypeName(e.paperType)},getPaperTypeName:function(e){var t,a=Object(r["a"])(this.paperTypeEnum);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(n.key==e)return n.value}}catch(o){a.e(o)}finally{a.f()}},groupByEchartsShow:function(e){console.log("this.paperTypeEnum"),console.log(this.paperTypeEnum);var t=Object(c["a"])(e,(function(e){return e.paperName})),a=Object(c["a"])(e,(function(e){return e.paperType})),n=[],o=[],l=[];for(var i in console.log("groupBy_paperType"),console.log(a),a){var s=a[i],u=this.getPaperTypeName(i);u||(console.log("typeName not found"),console.log("i"),console.log(i)),console.log("o"),console.log(s),o.push(u),l.push(i);var m,d=0,g=Object(r["a"])(s);try{for(g.s();!(m=g.n()).done;){var f=m.value;d+=parseFloat(f.questionCount)}}catch(T){g.e(T)}finally{g.f()}n.push(d)}console.log("groupBy_paperName"),console.log(t);var h=[],b=[],y=[],v=[];for(var x in t){var j=t[x];h.push(x);var P,S=0,q=0,w=0,O=0,k=Object(r["a"])(j);try{for(k.s();!(P=k.n()).done;){var E=P.value;S+=parseFloat(E.userScore),q+=parseFloat(E.systemScore),w+=parseFloat(E.paperScore),O++}}catch(T){k.e(T)}finally{k.f()}j.sum=S,j.count=O,j.avg=S/O,j.systemScoreSum=q,j.paperScoreSum=w,j.avgScoreGot=q/w,y.push(w),b.push(q),v.push(j.avgScoreGot)}console.log("groupBy_paperName"),console.log(t);var I={names:o,datas:n,echartsId:"showStuEchartsByType",title:"题目统计 试卷类型",valName:"个数"};Object(p["a"])(I)},submitForm:function(){this.queryParam.pageIndex=1,this.search()},search:function(){var e=this;this.listLoading=!0,u["a"].pageList(this.queryParam).then((function(t){var a=t.response;e.tableData=a.list,e.groupByEchartsShow(a.list),e.total=a.total,e.queryParam.pageIndex=a.pageNum,e.listLoading=!1}))},deletePaper:function(e){var t=this;u["a"].deletePaper(e.id).then((function(e){1===e.code?(t.search(),t.$message.success(e.message)):t.$message.error(e.message)}))},levelChange:function(){var e=this;this.queryParam.subjectId=null,this.subjectFilter=this.subjects.filter((function(t){return t.level===e.queryParam.level})),console.log("this.subjectFilter"),console.log(this.subjectFilter),this.search()},subjectFormatter:function(e,t,a,n){return this.subjectEnumFormat(a)}},Object(i["b"])("exam",{initSubject:"initSubject"})),computed:Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])({},Object(i["c"])("enumItem",["enumFormat"])),Object(i["e"])("enumItem",{levelEnum:function(e){return e.user.levelEnum}})),Object(i["c"])("exam",["subjectEnumFormat"])),Object(i["e"])("enumItem",{questionTypeEnum:function(e){return e.exam.question.typeEnum},paperTypeEnum:function(e){return console.log("state.exam.examPaper paperTypeEnum"),console.log(e.exam.examPaper),e.exam.examPaper.paperTypeEnum},levelEnum:function(e){return e.user.levelEnum}})),Object(i["e"])("exam",{subjects:function(e){return e.subjects}}))}),d=m,g=(a("cd67"),a("e607")),f=Object(g["a"])(d,n,o,!1,null,"4597f56e",null);t["default"]=f.exports}}]);