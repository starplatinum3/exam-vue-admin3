(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d496645"],{"09f4":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),Math.easeInOutQuad=function(e,t,a,r){return e/=r/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function n(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function i(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(e,t,a){var o=i(),l=e-o,u=20,s=0;t="undefined"===typeof t?500:t;var c=function e(){s+=u;var i=Math.easeInOutQuad(s,o,l,t);n(i),s<t?r(e):a&&"function"===typeof a&&a()};c()}},1944:function(e,t,a){"use strict";var r=a("9214"),n=a("7ea1"),i=a("9882"),o=a("26b3"),l=a("e270"),u=a("b7e5"),s=a("e51c"),c=a("fee2"),p=a("ae33");n("search",(function(e,t,a){return[function(t){var a=l(this),n=o(t)?void 0:c(t,e);return n?r(n,t,a):new RegExp(t)[e](s(a))},function(e){var r=i(this),n=s(e),o=a(t,r,n);if(o.done)return o.value;var l=r.lastIndex;u(l,0)||(r.lastIndex=0);var c=p(r,n);return u(r.lastIndex,l)||(r.lastIndex=l),null===c?-1:c.index}]}))},2752:function(e,t,a){"use strict";a.r(t);a("a7b5"),a("9bb8"),a("1944");var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container"},[t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.formLoading,expression:"formLoading"}],ref:"form",attrs:{model:e.form,"label-width":"100px",rules:e.rules}},[t("el-form-item",{attrs:{label:"年级：",prop:"gradeLevel",required:""}},[t("el-select",{attrs:{placeholder:"年级"},on:{change:e.levelChange},model:{value:e.form.gradeLevel,callback:function(t){e.$set(e.form,"gradeLevel",t)},expression:"form.gradeLevel"}},e._l(e.levelEnum,(function(e){return t("el-option",{key:e.key,attrs:{value:e.key,label:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"标题：",prop:"title",required:""}},[t("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),t("el-form-item",{attrs:{label:"试卷：",required:""}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.form.paperItems,border:"",fit:"","highlight-current-row":""}},[t("el-table-column",{attrs:{prop:"subjectId",label:"学科",formatter:e.subjectFormatter,width:"120px"}}),t("el-table-column",{attrs:{prop:"name",label:"名称"}}),t("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"160px"}}),t("el-table-column",{attrs:{label:"操作",align:"center",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.row;return[t("el-button",{staticClass:"link-left",attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.removePaper(r)}}},[e._v("删除")])]}}])})],1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("提交")]),t("el-button",{on:{click:e.resetForm}},[e._v("重置")]),t("el-button",{attrs:{type:"success"},on:{click:e.addPaper}},[e._v("添加试卷")])],1)],1),t("el-dialog",{attrs:{visible:e.paperPage.showDialog,width:"70%"},on:{"update:visible":function(t){return e.$set(e.paperPage,"showDialog",t)}}},[t("el-form",{ref:"queryForm",attrs:{model:e.paperPage.queryParam,inline:!0}},[t("el-form-item",{attrs:{label:"学科："}},[t("el-select",{attrs:{clearable:""},model:{value:e.paperPage.queryParam.subjectId,callback:function(t){e.$set(e.paperPage.queryParam,"subjectId",t)},expression:"paperPage.queryParam.subjectId"}},e._l(e.paperPage.subjectFilter,(function(e){return t("el-option",{key:e.id,attrs:{value:e.id,label:e.name+" ( "+e.levelName+" )"}})})),1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.examPaperSubmitForm}},[e._v("查询")])],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.paperPage.listLoading,expression:"paperPage.listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.paperPage.tableData,border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"35"}}),t("el-table-column",{attrs:{prop:"id",label:"Id",width:"90px"}}),t("el-table-column",{attrs:{prop:"subjectId",label:"学科",formatter:e.subjectFormatter,width:"120px"}}),t("el-table-column",{attrs:{prop:"name",label:"名称"}}),t("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"160px"}})],1),t("pagination",{directives:[{name:"show",rawName:"v-show",value:e.paperPage.total>0,expression:"paperPage.total>0"}],attrs:{total:e.paperPage.total,page:e.paperPage.queryParam.pageIndex,limit:e.paperPage.queryParam.pageSize},on:{"update:page":function(t){return e.$set(e.paperPage.queryParam,"pageIndex",t)},"update:limit":function(t){return e.$set(e.paperPage.queryParam,"pageSize",t)},pagination:e.search}}),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.paperPage.showDialog=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.confirmPaperSelect}},[e._v("确定")])],1)],1)],1)},n=[],i=a("56c3"),o=(a("ad6c"),a("57b9"),a("c619"),a("7c25"),a("d2b4"),a("b199")),l=a("4a0c"),u=a("333d"),s=a("7736"),c={components:{Pagination:u["a"]},data:function(){return{form:{id:null,gradeLevel:null,title:"",paperItems:[]},formLoading:!1,paperPage:{subjectFilter:null,multipleSelection:[],showDialog:!1,queryParam:{subjectId:null,level:null,paperType:6,pageIndex:1,pageSize:5},listLoading:!0,tableData:[],total:0},rules:{gradeLevel:[{required:!0,message:"请输入年级",trigger:"change"}],title:[{required:!0,message:"请输入任务标题",trigger:"blur"}]}}},created:function(){var e=this;this.initSubject((function(){e.paperPage.subjectFilter=e.subjects}));var t=this.$route.query.id;t&&0!==parseInt(t)&&(e.formLoading=!0,o["a"].select(t).then((function(t){e.form=t.response,e.formLoading=!1})))},methods:Object(i["a"])(Object(i["a"])({addPaper:function(){this.paperPage.queryParam.level=this.form.gradeLevel,this.paperPage.showDialog=!0,this.search()},confirmPaperSelect:function(){var e=this;this.paperPage.multipleSelection.forEach((function(t){return e.form.paperItems.push(t)})),this.paperPage.showDialog=!1},search:function(){var e=this;this.paperPage.showDialog=!0,this.listLoading=!0,l["a"].taskExamPage(this.paperPage.queryParam).then((function(t){var a=t.response;e.paperPage.tableData=a.list,e.paperPage.total=a.total,e.paperPage.queryParam.pageIndex=a.pageNum,e.paperPage.listLoading=!1}))},handleSelectionChange:function(e){this.paperPage.multipleSelection=e},examPaperSubmitForm:function(){this.paperPage.queryParam.pageIndex=1,this.search()},levelChange:function(){var e=this;this.paperPage.queryParam.subjectId=null,this.paperPage.subjectFilter=this.subjects.filter((function(t){return t.level===e.form.gradeLevel}))},removePaper:function(e){this.form.paperItems.forEach((function(t,a,r){t.id===e.id&&r.splice(a,1)}))},submitForm:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(!a)return!1;e.formLoading=!0,o["a"].edit(e.form).then((function(e){1===e.code?(t.$message.success(e.message),t.delCurrentView(t).then((function(){t.$router.push("/task/list")}))):t.$message.error(e.message),t.formLoading=!1})).catch((function(e){t.formLoading=!1}))}))},resetForm:function(){var e=this.form.id;this.$refs["form"].resetFields(),this.form={id:null,gradeLevel:null,title:"",paperItems:[]},this.form.id=e},subjectFormatter:function(e,t,a,r){return this.subjectEnumFormat(a)}},Object(s["b"])("exam",{initSubject:"initSubject"})),Object(s["b"])("tagsView",{delCurrentView:"delCurrentView"})),computed:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(s["c"])("enumItem",["enumFormat"])),Object(s["e"])("enumItem",{questionTypeEnum:function(e){return e.exam.question.typeEnum},levelEnum:function(e){return e.user.levelEnum}})),Object(s["c"])("exam",["subjectEnumFormat"])),Object(s["e"])("exam",{subjects:function(e){return e.subjects}}))},p=c,m=a("e607"),d=Object(m["a"])(p,r,n,!1,null,null,null);t["default"]=d.exports},"333d":function(e,t,a){"use strict";var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[t("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},n=[],i=(a("ea1e"),a("09f4")),o={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:10},pageSizes:{type:Array,default:function(){return[5,10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&Object(i["a"])(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&Object(i["a"])(0,800)}}},l=o,u=(a("48e1"),a("e607")),s=Object(u["a"])(l,r,n,!1,null,"6c907def",null);t["a"]=s.exports},"48e1":function(e,t,a){"use strict";a("a93a")},"4a0c":function(e,t,a){"use strict";var r=a("b775");t["a"]={pageList:function(e){return Object(r["a"])("/api/admin/exam/paper/page",e)},taskExamPage:function(e){return Object(r["a"])("/api/admin/exam/paper/taskExamPage",e)},edit:function(e){return Object(r["a"])("/api/admin/exam/paper/edit",e)},select:function(e){return Object(r["a"])("/api/admin/exam/paper/select/"+e)},deletePaper:function(e){return Object(r["a"])("/api/admin/exam/paper/delete/"+e)}}},a93a:function(e,t,a){},b199:function(e,t,a){"use strict";var r=a("b775");t["a"]={pageList:function(e){return Object(r["a"])("/api/admin/task/page",e)},edit:function(e){return Object(r["a"])("/api/admin/task/edit",e)},select:function(e){return Object(r["a"])("/api/admin/task/select/"+e)},deleteTask:function(e){return Object(r["a"])("/api/admin/task/delete/"+e)}}},b7e5:function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}}}]);