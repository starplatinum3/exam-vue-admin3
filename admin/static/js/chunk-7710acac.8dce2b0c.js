(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7710acac"],{"070c":function(e,t,a){},"3b02":function(e,t,a){"use strict";a.r(t);a("9bb8"),a("1944"),a("ad6c"),a("9e4b"),a("a7b5");var l,n,d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container"},[t("el-form",{ref:"queryForm",attrs:{model:e.queryParam,inline:!0}},[t("el-form-item",{attrs:{label:"用户名："}},[t("el-input",{model:{value:e.queryParam.userName,callback:function(t){e.$set(e.queryParam,"userName",t)},expression:"queryParam.userName"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("查询")]),t("router-link",{staticClass:"link-left",attrs:{to:{path:"/user/student/edit"}}},[t("el-button",{attrs:{type:"primary"}},[e._v("添加")])],1)],1),t("el-form-item",{attrs:{label:"tenantId"}},[t("el-input",{model:{value:e.queryParam.tenantId,callback:function(t){e.$set(e.queryParam,"tenantId",t)},expression:"queryParam.tenantId"}})],1)],1),e._l(e.cardList,(function(a,l){return t("div",{key:l},[e._v(" "+e._s(a.title)+" "),t("el-upload",{staticClass:"upload",attrs:{name:"file",action:"#","before-remove":e.beforeRemove,limit:3,"on-exceed":e.handleExceed,"before-upload":function(t){return e.beforeUploadSetData(t,a.type)},"on-success":e.uploadSuccess,multiple:!0}},[t("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-upload"}},[e._v("点击上传")])],1),t("el-button",{on:{click:function(t){return e.insertBatch(a.type)}}},[e._v("insertBatch")])],1)})),t("el-popover",{attrs:{placement:"bottom",title:"筛选列",trigger:"click",width:"40"}},[t("el-checkbox-group",{attrs:{size:"mini"},model:{value:e.checkedColumns,callback:function(t){e.checkedColumns=t},expression:"checkedColumns"}},e._l(e.checkBoxGroup,(function(e){return t("el-checkbox",{key:e,attrs:{label:e,value:e}})})),1),t("div",{staticClass:"filter-table-col",attrs:{slot:"reference",title:"筛选列"},slot:"reference"},[t("i",{staticClass:"el-icon-c-scale-to-original"})])],1),t("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParam.pageIndex,limit:e.queryParam.pageSize},on:{"update:page":function(t){return e.$set(e.queryParam,"pageIndex",t)},"update:limit":function(t){return e.$set(e.queryParam,"pageSize",t)},pagination:e.search}}),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"tableSort",staticStyle:{"margin-top":"12px"},attrs:{"header-cell-style":{"background-color":"#337AB7",color:"#ffffff"},data:e.list.markTbValueSvTaskNodeVoList},on:{"cell-mouse-enter":e.handleCellEnter,"cell-mouse-leave":e.handleCellLeave,"selection-change":e.setSelectRows}},[e._l(e.list.tbFieldList,(function(a,l){return t("el-table-column",{key:a.id.toString(),attrs:{align:"center",property:a.id.toString(),prop:a.code.toString(),label:a.name},scopedSlots:e._u([{key:"default",fn:function(a){return[a.row.isEdit?t("el-input",{staticClass:"item",attrs:{placeholder:"请输入内容"},model:{value:e.list.tbFieldList[l],callback:function(t){e.$set(e.list.tbFieldList,l,t)},expression:"list.tbFieldList[FieldIdx]"}}):t("div",{staticClass:"txt"},[e._v(" "+e._s(e.getCellData(a.row.tbValueList,l))+" ")])]}}],null,!0)})})),t("el-table-column",{attrs:{align:"center",label:"操作","show-overflow-tooltip":"",width:"120"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.look(a)}}},[e._v("查看")])]}}])})],2),t("el-dialog",{attrs:{title:"表单弹框页面","append-to-body":!0,visible:e.formVisible,center:!0},on:{"update:visible":function(t){e.formVisible=t}}},[t("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"80px",rules:e.rules}},[t("el-form-item",{attrs:{label:"日期：",prop:"date"}},[t("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期"},model:{value:e.editForm.date,callback:function(t){e.$set(e.editForm,"date",t)},expression:"editForm.date"}})],1),t("el-form-item",{attrs:{label:"姓名：",prop:"name"}},[t("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),t("el-form-item",{attrs:{label:"地址:",prop:"address"}},[t("el-select",{model:{value:e.editForm.address,callback:function(t){e.$set(e.editForm,"address",t)},expression:"editForm.address"}},e._l(e.addresses,(function(e,a){return t("el-option",{key:a,attrs:{label:e,value:e}})})),1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.cancelAction}},[e._v("取消")]),e.editVisible?t("el-button",{attrs:{type:"danger"},on:{click:e.editAction}},[e._v("修改")]):e._e(),e.insertVisible?t("el-button",{attrs:{type:"danger"},on:{click:e.insertAction}},[e._v("新增")]):e._e()],1)],1)],2)},i=[],r=a("56c3"),c=a("d18b"),s=a("272e"),o=a("da3e"),b=a("1e56"),u=(a("7c25"),a("2529"),a("d89d"),a("c676"),a("d2b4"),a("8137"),a("c619"),a("73d1"),a("7736")),m=a("333d"),f=a("df80"),y=a("93e7"),_=(l={physicalTest:"physicalTest",physical_test:"physical_test"},Object(b["a"])(l,"physical_test","physical_test"),Object(b["a"])(l,"tChapter","tChapter"),Object(b["a"])(l,"chapter","chapter"),Object(b["a"])(l,"t_chapter","t_chapter"),Object(b["a"])(l,"tExamPaper","tExamPaper"),Object(b["a"])(l,"exam_paper","exam_paper"),Object(b["a"])(l,"t_exam_paper","t_exam_paper"),Object(b["a"])(l,"tExamPaperAnswer","tExamPaperAnswer"),Object(b["a"])(l,"exam_paper_answer","exam_paper_answer"),Object(b["a"])(l,"t_exam_paper_answer","t_exam_paper_answer"),Object(b["a"])(l,"tExamPaperQuestionCustomerAnswer","tExamPaperQuestionCustomerAnswer"),Object(b["a"])(l,"exam_paper_question_customer_answer","exam_paper_question_customer_answer"),Object(b["a"])(l,"t_exam_paper_question_customer_answer","t_exam_paper_question_customer_answer"),Object(b["a"])(l,"tMessage","tMessage"),Object(b["a"])(l,"message","message"),Object(b["a"])(l,"t_message","t_message"),Object(b["a"])(l,"tMessageUser","tMessageUser"),Object(b["a"])(l,"message_user","message_user"),Object(b["a"])(l,"t_message_user","t_message_user"),Object(b["a"])(l,"tQuestion","tQuestion"),Object(b["a"])(l,"question","question"),Object(b["a"])(l,"t_question","t_question"),Object(b["a"])(l,"tQuestion2","tQuestion2"),Object(b["a"])(l,"question_2","question_2"),Object(b["a"])(l,"t_question_2","t_question_2"),Object(b["a"])(l,"tSubject","tSubject"),Object(b["a"])(l,"subject","subject"),Object(b["a"])(l,"t_subject","t_subject"),Object(b["a"])(l,"tTaskExam","tTaskExam"),Object(b["a"])(l,"task_exam","task_exam"),Object(b["a"])(l,"t_task_exam","t_task_exam"),Object(b["a"])(l,"tTaskExamCustomerAnswer","tTaskExamCustomerAnswer"),Object(b["a"])(l,"task_exam_customer_answer","task_exam_customer_answer"),Object(b["a"])(l,"t_task_exam_customer_answer","t_task_exam_customer_answer"),Object(b["a"])(l,"tTextContent","tTextContent"),Object(b["a"])(l,"text_content","text_content"),Object(b["a"])(l,"t_text_content","t_text_content"),Object(b["a"])(l,"tUser","tUser"),Object(b["a"])(l,"user","user"),Object(b["a"])(l,"t_user","t_user"),Object(b["a"])(l,"tUserEventLog","tUserEventLog"),Object(b["a"])(l,"user_event_log","user_event_log"),Object(b["a"])(l,"t_user_event_log","t_user_event_log"),Object(b["a"])(l,"tUserToken","tUserToken"),Object(b["a"])(l,"user_token","user_token"),Object(b["a"])(l,"t_user_token","t_user_token"),Object(b["a"])(l,"tenant","tenant"),Object(b["a"])(l,"tenant","tenant"),Object(b["a"])(l,"tenant","tenant"),Object(b["a"])(l,"tenantExamPaper","tenantExamPaper"),Object(b["a"])(l,"tenant_exam_paper","tenant_exam_paper"),Object(b["a"])(l,"tenant_exam_paper","tenant_exam_paper"),l),p=_,k=a("8c63"),x=a("c24f"),g=a("391f"),h=(a("b775"),a("a7dd")),v={components:{Pagination:m["a"]},data:function(){var e;return e={dialogVisible:!1,innerVisible:!1,editVisible:!1,insertVisible:!1,tableData:[{date:new Date,name:"汪笨湖",address:"上海市普陀区金沙江路 1518 弄"},{date:new Date,name:"汪笨湖",address:"上海市普陀区金沙江路 1518 弄"},{date:new Date,name:"汪笨湖",address:"上海市普陀区金沙江路 1518 弄"},{date:new Date,name:"汪笨湖",address:"上海市普陀区金沙江路 1518 弄"},{date:new Date,name:"汪笨湖",address:"上海市普陀区金沙江路 1518 弄"}],editForm:{},editIndex:-1,deleteIndex:-1,inputFromWidth:300,rules:{date:[{type:"date",required:!0,message:"请输入日期",triggle:"change"}],name:[{required:!0,message:"请输入姓名",triggle:"blur"}],address:[{required:!0,message:"请选择地址",triggle:"change"}]},addresses:["江苏省苏州市","安徽省淮北市","上海市浦东区","河南省郑州市"]},Object(b["a"])(e,"insertVisible",!0),Object(b["a"])(e,"editVisible",!0),Object(b["a"])(e,"formVisible",!1),Object(b["a"])(e,"height",20),Object(b["a"])(e,"lineHeight",20),Object(b["a"])(e,"list",[]),Object(b["a"])(e,"showWord",""),Object(b["a"])(e,"editButton","确认上传excel文件"),Object(b["a"])(e,"cardList",[{title:"用户数据导入",icon:"md-person",type:"user"},{title:"试题导入",icon:"ios-albums",type:p.t_question}]),Object(b["a"])(e,"fileList",[{fileName:"用户数据模板.xlsx"},{fileName:"作家数据模板.xlsx"},{fileName:"作品数据模板.xlsx"},{fileName:"专辑数据模板.xlsx"}]),Object(b["a"])(e,"fileBasePath","../template/"),Object(b["a"])(e,"showData",[]),Object(b["a"])(e,"importData",[]),Object(b["a"])(e,"columns",[]),Object(b["a"])(e,"properties",[]),Object(b["a"])(e,"type",""),Object(b["a"])(e,"percent",0),Object(b["a"])(e,"errorList",[]),Object(b["a"])(e,"excelData",null),Object(b["a"])(e,"colData",[{title:"编号",istrue:!0},{title:"内网IP",istrue:!0},{title:"设备状态",istrue:!0},{title:"持续时间",istrue:!0},{title:"更新时间",istrue:!0},{title:"服务状态",istrue:!0},{title:"工作状态",istrue:!0},{title:"是否请允许关机",istrue:!0},{title:"服务器类型",istrue:!0}]),Object(b["a"])(e,"checkBoxGroup",["编号","内网IP","设备状态","持续时间","更新时间","服务状态","工作状态","是否请允许关机","服务器类型"]),Object(b["a"])(e,"checkedColumns",["编号","内网IP","设备状态","持续时间","更新时间","服务状态","工作状态","是否请允许关机","服务器类型"]),Object(b["a"])(e,"editForm",{}),Object(b["a"])(e,"queryParam",{tenantId:null,userName:"",role:1,pageIndex:1,pageSize:10}),Object(b["a"])(e,"listLoading",!0),Object(b["a"])(e,"tableData",[]),Object(b["a"])(e,"total",0),e},created:function(){this.search()},watch:{checkedColumns:function(e){var t=this.checkBoxGroup.filter((function(t){return!e.includes(t)}));this.colData.filter((function(e){-1!=t.indexOf(e.title)?e.istrue=!1:e.istrue=!0})),this.reload=Math.random()}},methods:(n={openDialog:function(){this.dialogVisible=!0},handleClose:function(e){this.$confirm("确认关闭弹框吗？").then((function(t){e()})).catch((function(e){}))},editData:function(e,t){this.innerVisible=!0,this.editVisible=!0;var a={date:t.date,name:t.name,address:t.address};this.editForm=a,this.editIndex=e},formatDate:function(e){var t=e.date;return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate()," ").concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds())},deleteAction:function(e){this.tableData.splice(e,1),this.$message.success("删除成功!")},look:function(e){this.formVisible=!0,console.log("scope.row "),console.log(e.row)},handleCellEnter:function(e,t,a,l){e.isEdit=!0,console.log("row"),console.log(e)},handleCellLeave:function(e,t,a,l){e.isEdit=!1},setSelectRows:function(){},initData:function(){var e={code:200,msg:null,data:{total:2,records:{tbTable:{createBy:"",createTime:"2022-05-15 23:30:04",updateBy:"",updateTime:"2022-05-16 09:44:12",deleted:0,remark:"string",id:0x152cf2905c866000,name:"区局实效督察",tbTypeId:0x152cf238eb066000,tbType:{createBy:"",createTime:"2022-05-15 23:28:34",updateBy:"",updateTime:"2022-05-15 23:28:34",deleted:0,remark:"string",id:0x152cf238eb066000,name:"网上督察"},processDefinitionId:"未定义:16:d5698e05-dc03-11ec-9afd-4ed577b80fb9"},tbFieldList:[{createBy:"",createTime:"2022-05-16 14:24:19",updateBy:"",updateTime:"2022-05-16 14:24:19",deleted:0,remark:"",id:0x152dbf3e00c74000,name:"督察Guid",code:"GUID",required:1,indexed:1,type:1,showed:1,tableId:0x152cf2905c866000,dicTypeId:null},{createBy:"",createTime:"2022-05-16 14:28:44",updateBy:"",updateTime:"2022-05-16 14:28:44",deleted:0,remark:"",id:0x152dc04083074000,name:"区局",code:"DisOrgan",required:1,indexed:2,type:17,showed:1,tableId:0x152cf2905c866000,dicTypeId:null},{createBy:"",createTime:"2022-05-16 14:29:46",updateBy:"",updateTime:"2022-05-16 14:29:46",deleted:0,remark:"",id:0x152dc07d87074000,name:"督察日期",code:"InSpecialDay",required:1,indexed:3,type:8,showed:1,tableId:0x152cf2905c866000,dicTypeId:null},{createBy:"",createTime:"2022-05-16 14:30:24",updateBy:"",updateTime:"2022-05-16 14:30:24",deleted:0,remark:"",id:0x152dc0a2b4474000,name:"出动人员",code:"OutStaffs",required:1,indexed:4,type:15,showed:1,tableId:0x152cf2905c866000,dicTypeId:null},{createBy:"",createTime:"2022-05-16 14:31:12",updateBy:"",updateTime:"2022-05-16 14:31:12",deleted:0,remark:"",id:0x152dc0d1d5874000,name:"道路（门牌号）",code:"RoadNumber",required:1,indexed:5,type:1,showed:1,tableId:0x152cf2905c866000,dicTypeId:null},{createBy:"",createTime:"2022-05-16 14:31:58",updateBy:"",updateTime:"2022-05-16 14:31:58",deleted:0,remark:"",id:0x152dc0fdf7474000,name:"道路类型",code:"RoadType",required:1,indexed:6,type:4,showed:1,tableId:0x152cf2905c866000,dicTypeId:null},{createBy:"",createTime:"2022-05-16 14:33:12",updateBy:"",updateTime:"2022-05-16 14:33:12",deleted:0,remark:"",id:0x152dc1467c074000,name:"督察大类",code:"DL_Kind",required:1,indexed:8,type:18,showed:1,tableId:0x152cf2905c866000,dicTypeId:null},{createBy:"",createTime:"2022-05-16 14:33:33",updateBy:"",updateTime:"2022-05-16 14:33:33",deleted:0,remark:"",id:0x152dc15acc474000,name:"督察小类",code:"XL_Kind",required:1,indexed:9,type:18,showed:1,tableId:0x152cf2905c866000,dicTypeId:null},{createBy:"",createTime:"2022-05-16 14:34:20",updateBy:"",updateTime:"2022-05-16 14:34:20",deleted:0,remark:"",id:0x152dc188a9c74000,name:"问题描述",code:"Content",required:1,indexed:10,type:1,showed:1,tableId:0x152cf2905c866000,dicTypeId:null},{createBy:"",createTime:"2022-05-16 14:34:52",updateBy:"",updateTime:"2022-05-16 14:34:52",deleted:0,remark:"",id:0x152dc1a815074000,name:"问题照片",code:"FJ",required:1,indexed:11,type:6,showed:1,tableId:0x152cf2905c866000,dicTypeId:null},{createBy:"",createTime:"2022-05-16 14:35:21",updateBy:"",updateTime:"2022-05-16 14:35:21",deleted:0,remark:"",id:0x152dc1c43ac74000,name:"备注",code:"BZ",required:1,indexed:12,type:1,showed:1,tableId:0x152cf2905c866000,dicTypeId:null},{createBy:"",createTime:"2022-05-16 14:36:02",updateBy:"",updateTime:"2022-05-16 14:36:02",deleted:0,remark:"",id:0x152dc1ecd2c74000,name:"五边",code:"FiveSide",required:1,indexed:7,type:17,showed:1,tableId:0x152cf2905c866000,dicTypeId:null},{createBy:"",createTime:"2022-05-16 14:36:02",updateBy:"",updateTime:"2022-05-16 14:36:02",deleted:0,remark:"",id:0x152dc1ecd2c74000,name:"sibala",code:"FiveSide",required:1,indexed:7,type:17,showed:1,tableId:0x152cf2905c866000,dicTypeId:null}],markTbValueSvTaskNodeVoList:[{mark:"c49a762e-0597-46df-9af1-e3bf8477d0af",tbValueList:[{id:0x1540c94b00863000,value:"开始---我是1组督察值",tbFieldId:0x152dbf3e00c74000,mark:"c49a762e-0597-46df-9af1-e3bf8477d0af",tbTableId:0x152cf2905c866000,tbField:null},{id:0x1540c94b01c63000,value:"我是1组区局值",tbFieldId:0x152dc04083074000,mark:"c49a762e-0597-46df-9af1-e3bf8477d0af",tbTableId:0x152cf2905c866000,tbField:null},{id:0x1540c94b02863000,value:"我是1组督察日期值",tbFieldId:0x152dc07d87074000,mark:"c49a762e-0597-46df-9af1-e3bf8477d0af",tbTableId:0x152cf2905c866000,tbField:null},{id:0x1540c94b02c63000,value:"我是1组出动人员值",tbFieldId:0x152dc0a2b4474000,mark:"c49a762e-0597-46df-9af1-e3bf8477d0af",tbTableId:0x152cf2905c866000,tbField:null},{id:0x1540c94b03863000,value:"我是1组道路门牌值",tbFieldId:0x152dc0d1d5874000,mark:"c49a762e-0597-46df-9af1-e3bf8477d0af",tbTableId:0x152cf2905c866000,tbField:null},{id:0x1540c94b03863000,value:"我是1组道路类型值",tbFieldId:0x152dc0fdf7474000,mark:"c49a762e-0597-46df-9af1-e3bf8477d0af",tbTableId:0x152cf2905c866000,tbField:null},{id:0x1540c94b03863000,value:"我是1组督察大类值",tbFieldId:0x152dc1467c074000,mark:"c49a762e-0597-46df-9af1-e3bf8477d0af",tbTableId:0x152cf2905c866000,tbField:null},{id:0x1540c94b03863000,value:"我是1组督察小类值",tbFieldId:0x152dc15acc474000,mark:"c49a762e-0597-46df-9af1-e3bf8477d0af",tbTableId:0x152cf2905c866000,tbField:null},{id:0x1540c94b04463000,value:"我是1组问题描述值",tbFieldId:0x152dc188a9c74000,mark:"c49a762e-0597-46df-9af1-e3bf8477d0af",tbTableId:0x152cf2905c866000,tbField:null},{id:0x1540c94b04463000,value:"我是1组问题照片值",tbFieldId:0x152dc1a815074000,mark:"c49a762e-0597-46df-9af1-e3bf8477d0af",tbTableId:0x152cf2905c866000,tbField:null},{id:0x1540c94b04463000,value:"我是1组备注值",tbFieldId:0x152dc1c43ac74000,mark:"c49a762e-0597-46df-9af1-e3bf8477d0af",tbTableId:0x152cf2905c866000,tbField:null},{id:0x1540c94b04c63000,value:"我是1组五边值",tbFieldId:0x152dc1ecd2c74000,mark:"c49a762e-0597-46df-9af1-e3bf8477d0af",tbTableId:0x152cf2905c866000,tbField:null}],tbValuePub:{id:0x1540c9579dc63000,createTime:"2022-05-31 09:19:35",createBy:"admin",updateTime:"2022-05-31 09:19:35",updateBy:"admin",deleted:0,tbValueMark:"c49a762e-0597-46df-9af1-e3bf8477d0af",tbTableId:0x152cf2905c866000,flowAccomplish:"-1",flowMark:"bb2957d2-e07f-11ec-835a-0c8bfde448c8"},svTaskNodeDto:{processDefinitionId:"未定义:16:d5698e05-dc03-11ec-9afd-4ed577b80fb9",nodeName:"区局督察开单/区级督察派单",taskId:"bb45444c-e07f-11ec-835a-0c8bfde448c8",formKeys:"75ef80ba-d74b-46bc-ba1d-037623551519",createDate:"2022-05-31 09:19:34",dueDate:"2022-05-31 11:19:33",businessKey:"c49a762e-0597-46df-9af1-e3bf8477d0af",nodeId:"sid-2EE380AB-A916-4DD0-B54D-44B4B166A197"}},{mark:"8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",tbValueList:[{id:0x153ff4b98e46f000,value:"开始---我是2组督察值",tbFieldId:0x152dbf3e00c74000,mark:"8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",tbTableId:0x152cf2905c866000,tbField:null},{id:0x153ff4b99146f000,value:"我是2组区局值",tbFieldId:0x152dc04083074000,mark:"8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",tbTableId:0x152cf2905c866000,tbField:null},{id:0x153ff4b99146f000,value:"我是2组督察日期值",tbFieldId:0x152dc07d87074000,mark:"8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",tbTableId:0x152cf2905c866000,tbField:null},{id:0x153ff4b99146f000,value:"我是2组出动人员值",tbFieldId:0x152dc0a2b4474000,mark:"8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",tbTableId:0x152cf2905c866000,tbField:null},{id:0x153ff4b991c6f000,value:"我是2组道路门牌值",tbFieldId:0x152dc0d1d5874000,mark:"8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",tbTableId:0x152cf2905c866000,tbField:null},{id:0x153ff4b99246f000,value:"我是2组道路类型值",tbFieldId:0x152dc0fdf7474000,mark:"8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",tbTableId:0x152cf2905c866000,tbField:null},{id:0x153ff4b99246f000,value:"我是2组督察大类值",tbFieldId:0x152dc1467c074000,mark:"8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",tbTableId:0x152cf2905c866000,tbField:null},{id:0x153ff4b99246f000,value:"我是2组督察小类值",tbFieldId:0x152dc15acc474000,mark:"8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",tbTableId:0x152cf2905c866000,tbField:null},{id:0x153ff4b99306f000,value:"我是2组问题描述值",tbFieldId:0x152dc188a9c74000,mark:"8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",tbTableId:0x152cf2905c866000,tbField:null},{id:0x153ff4b99306f000,value:"我是2组问题照片值",tbFieldId:0x152dc1a815074000,mark:"8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",tbTableId:0x152cf2905c866000,tbField:null},{id:0x153ff4b99306f000,value:"我是2组备注值",tbFieldId:0x152dc1c43ac74000,mark:"8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",tbTableId:0x152cf2905c866000,tbField:null},{id:0x153ff4b99386f000,value:"我是2组五边值",tbFieldId:0x152dc1ecd2c74000,mark:"8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",tbTableId:0x152cf2905c866000,tbField:null}],tbValuePub:{id:0x153ff4d1b546f000,createTime:"2022-05-30 17:51:03",createBy:"admin",updateTime:"2022-05-30 17:51:04",updateBy:"admin",deleted:0,tbValueMark:"8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",tbTableId:0x152cf2905c866000,flowAccomplish:"-1",flowMark:"03886447-dffe-11ec-a51b-0c8bfde448c8"},svTaskNodeDto:{processDefinitionId:"未定义:16:d5698e05-dc03-11ec-9afd-4ed577b80fb9",nodeName:"区局督察开单/区级督察派单",taskId:"03e74d31-dffe-11ec-a51b-0c8bfde448c8",formKeys:"75ef80ba-d74b-46bc-ba1d-037623551519",createDate:"2022-05-30 17:51:01",dueDate:"2022-05-30 19:50:53",businessKey:"8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",nodeId:"sid-2EE380AB-A916-4DD0-B54D-44B4B166A197"}}]},pageSize:20,currentPage:1}};this.list=e.data.records},formatDataMethod:function(e,t){for(var a=0;a<e.length;a++)if(e[a].tbFieldId===t)return e[a].value},getCellData:function(e,t){var a,l=null===(a=e[t])||void 0===a?void 0:a.value;return l},beforeRemove:function(){},handleExceed:function(){}},Object(b["a"])(n,"handleExceed",(function(){})),Object(b["a"])(n,"uploadSuccess",(function(){})),Object(b["a"])(n,"beforeUploadSetData",(function(e,t){return console.log("beforeUploadSetData  file"),console.log(e),t=t||"user",this.upload(e,t)})),Object(b["a"])(n,"readXLSX",(function(e){var t=e.name.split("."),a=t[t.length-1];return["xls","xlsx","csv"].includes(a)?(console.log("fileNames"),console.log(t),new Promise((function(t){var a=new FileReader;a.readAsBinaryString(e),a.onload=function(e){var a=e.target.result;console.log("XLSX"),console.log(g),console.log("XLSX.read"),console.log(g["read"]);var l=g["read"](a,{type:"binary"});t(l)}}))):(this.$message.error("导入文件格式错误，只支持xls、xlsx或csv格式的文件"),!1)})),Object(b["a"])(n,"upload",(function(e,t){var a=this;return Object(o["a"])(Object(c["a"])().mark((function l(){var n,d,i,r,o,b,u,m,_,p,k,x,v,I,j,O,T,w,F,B,q,D,E,S,P,L,C,V,A,N;return Object(c["a"])().wrap((function(l){while(1)switch(l.prev=l.next){case 0:if(console.log("file"),console.log(e),e){l.next=4;break}return l.abrupt("return");case 4:if(a.columns.splice(0,a.columns.length),a.showData.splice(0,a.showData.length),a.importData.splice(0,a.showData.length),a.type=t,n=Object(f["b"])(t),n){l.next=11;break}return l.abrupt("return",!1);case 11:return a.properties=n,console.log(" this.properties"),console.log(a.properties),l.next=16,a.readXLSX(e);case 16:if(d=l.sent,console.log("workBook"),console.log(d),i=d.Sheets[d.SheetNames[0]],console.log("workSheet"),console.log(i),window){l.next=24;break}return l.abrupt("return");case 24:if(r=g["utils"].sheet_to_json(i),console.log("data"),console.log(r),0!==r.length){l.next=30;break}return a.$message.error("文件内容为空"),l.abrupt("return",!1);case 30:for(/^[0-9]*$/,o=[],b=a,u=0,m=Object.keys(r[0]),console.log("colNames"),console.log(m),_=0,p=m;_<p.length;_++)k=p[_],x=k,v=b.properties[k],console.log("codeCol"),console.log(v),b.properties[k]&&(o.push({createBy:"",createTime:"2022-05-16 14:24:19",updateBy:"",updateTime:"2022-05-16 14:24:19",deleted:0,remark:"",id:u,name:x,code:v,required:1,indexed:1,type:1,showed:1,tableId:0x152cf2905c866000,dicTypeId:null}),u++);I=0,j=[],O=Object(s["a"])(r);try{for(O.s();!(T=O.n()).done;){for(w=T.value,console.log("row"),console.log(w),F={},B=[],q=0,D=Object.keys(w);q<D.length;q++)E=D[q],b.properties[E]&&(S=w[E],P=E,L=b.properties[E],C=["create_time","update_time"],V=h["a"].listContains(C,L),V&&(w[P]=Object(y["a"])(S,"-")),S=w[E],F[L]=S,console.log("obj"),console.log(F),B.push({id:0x153ff4b98e46f000,value:S,tbFieldId:0x152dbf3e00c74000,mark:"8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",tbTableId:0x152cf2905c866000,tbField:null}),console.log("tbValueList row  get"),console.log(B));console.log("tbValueList"),console.log(B),A={mark:"8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",tbValueList:B},j.push(A),I<=10&&(b.showData.push(F),I++),b.importData.push(F)}}catch(c){O.e(c)}finally{O.f()}N={tbTable:{createBy:"",createTime:"2022-05-15 23:30:04",updateBy:"",updateTime:"2022-05-16 09:44:12",deleted:0,remark:"string",id:0x152cf2905c866000,name:"区局实效督察",tbTypeId:0x152cf238eb066000,tbType:{createBy:"",createTime:"2022-05-15 23:28:34",updateBy:"",updateTime:"2022-05-15 23:28:34",deleted:0,remark:"string",id:0x152cf238eb066000,name:"网上督察"},processDefinitionId:"未定义:16:d5698e05-dc03-11ec-9afd-4ed577b80fb9"},tbFieldList:o,markTbValueSvTaskNodeVoList:j},a.list=N,console.log("this.importData"),console.log(a.importData);case 46:case"end":return l.stop()}}),l)})))()})),Object(b["a"])(n,"insertBatch",(function(e){var t=this,a={table_name:e,objs:this.importData};k["a"].insert_into_batch_null_id(a).then((function(e){console.log("res insertBatch"),console.log(e),2==e.code&&t.$message({message:e.message,type:"error"})}))})),Object(b["a"])(n,"handleBeforeUpload",(function(e){var t=2,a=["jpg","png","doc","docx","xlsx","zip","rar","pdf"],l=e.name.replace(/.+\./,""),n=(e.size||0)/1024/1024<t;return n?-1!==a.indexOf(l.toLowerCase())||(this.$message.warning({message:"请上传后缀名为jpg、png、txt、pdf、doc、docx、xlsx、zip或rar的附件"}),!1):(this.$message.error("文件大小超过 "+t+"MB"),!1)})),Object(b["a"])(n,"search",(function(){var e=this;this.listLoading=!0,x["a"].getUserPageList(this.queryParam).then((function(t){var a=t.response;e.tableData=a.list,e.total=a.total,e.queryParam.pageIndex=a.pageNum,e.listLoading=!1}))})),Object(b["a"])(n,"changeStatus",(function(e){var t=this;x["a"].changeStatus(e.id).then((function(a){1===a.code?(e.status=a.response,t.$message.success(a.message)):t.$message.error(a.message)}))})),Object(b["a"])(n,"deleteUser",(function(e){var t=this;x["a"].deleteUser(e.id).then((function(e){1===e.code?(t.search(),t.$message.success(e.message)):t.$message.error(e.message)}))})),Object(b["a"])(n,"submitForm",(function(){this.queryParam.pageIndex=1,this.search()})),Object(b["a"])(n,"levelFormatter",(function(e,t,a,l){return this.enumFormat(this.levelEnum,a)})),Object(b["a"])(n,"sexFormatter",(function(e,t,a,l){return this.enumFormat(this.sexEnum,a)})),Object(b["a"])(n,"statusFormatter",(function(e){return this.enumFormat(this.statusEnum,e)})),Object(b["a"])(n,"statusTagFormatter",(function(e){return this.enumFormat(this.statusTag,e)})),Object(b["a"])(n,"statusBtnFormatter",(function(e){return this.enumFormat(this.statusBtn,e)})),n),computed:Object(r["a"])(Object(r["a"])({},Object(u["c"])("enumItem",["enumFormat"])),Object(u["e"])("enumItem",{sexEnum:function(e){return e.user.sexEnum},statusEnum:function(e){return e.user.statusEnum},statusTag:function(e){return e.user.statusTag},statusBtn:function(e){return e.user.statusBtn},levelEnum:function(e){return e.user.levelEnum}}))},I=v,j=(a("e1fc"),a("e607")),O=Object(j["a"])(I,d,i,!1,null,null,null);t["default"]=O.exports},"8c63":function(e,t,a){"use strict";var l=a("b775");t["a"]={select_table_name_list:function(e){return Object(l["a"])("/api/all/SELECT_table_name_list",e)},select_information_schema_columns:function(e){return Object(l["a"])("/api/all/select_information_schema_columns",e)},select_limit_10:function(e){return Object(l["a"])("/api/all/select_limit_10",e)},select_by_content_like:function(e){return Object(l["a"])("/api/all/select_by_content_like",e)},selectBySql:function(e){return Object(l["a"])("/api/all/selectBySql",e)},selectPageEqual:function(e){return Object(l["a"])("/api/admin/question/selectPage/equal",e)},findAllEsQuestion:function(e){return Object(l["a"])("/api/all/findAllEsQuestion",e)},insert_into_batch_null_id:function(e){return Object(l["a"])("/api/all/insert_into_batch_null_id",e)},StatisticsPaperScore:function(e){return Object(l["a"])("/api/all/StatisticsPaperScore",e)}}},a7dd:function(e,t,a){"use strict";var l=a("272e"),n=(a("c619"),a("ad6c"),a("57b9"),a("c30d"),{addList:function(e,t){var a,n=Object(l["a"])(t);try{for(n.s();!(a=n.n()).done;){var d=a.value;e.push(d)}}catch(i){n.e(i)}finally{n.f()}return e},listContains:function(e,t){var a,n=Object(l["a"])(e);try{for(n.s();!(a=n.n()).done;){var d=a.value;if(d==t)return!0}}catch(i){n.e(i)}finally{n.f()}return!1},getLast:function(e){var t=e.length-1;return e[t]},listRemove:function(e,t){var a,n=[],d=Object(l["a"])(e);try{for(d.s();!(a=d.n()).done;){var i=a.value;i!=t&&n.push(i)}}catch(r){d.e(r)}finally{d.f()}return n},listTrim:function(e,t){var a,n=[],d=Object(l["a"])(e);try{for(d.s();!(a=d.n()).done;){var i=a.value;i!=t&&n.push(i)}}catch(r){d.e(r)}finally{d.f()}return n},sum:function(e,t){var a,n=0,d=Object(l["a"])(e);try{for(d.s();!(a=d.n()).done;){var i=a.value;n+=t?i[t]:i}}catch(r){d.e(r)}finally{d.f()}return n},getListOfProp:function(e,t){var a,n=[],d=Object(l["a"])(e);try{for(d.s();!(a=d.n()).done;){var i=a.value;t?n.push(i[t]):n.push(i)}}catch(r){d.e(r)}finally{d.f()}return n}});t["a"]=n},df80:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return T})),a.d(t,"b",(function(){return w}));var l,n=a("272e"),d=a("1e56"),i=(a("7aa1"),[{label:"id",key:"id"},{label:"userUuid",key:"userUuid"},{label:"用户名",key:"userName"},{label:"password",key:"password"},{label:"真实姓名",key:"realName"},{label:"age",key:"age"},{label:"1.男 2女",key:"sex"},{label:"birthDay",key:"birthDay"},{label:"学生年级(1-12)",key:"userLevel"},{label:"phone",key:"phone"},{label:"1.学生 2.老师 3.管理员",key:"role"},{label:"1.启用 2禁用",key:"status"},{label:"头像地址",key:"imagePath"},{label:"createTime",key:"createTime"},{label:"modifyTime",key:"modifyTime"},{label:"lastActiveTime",key:"lastActiveTime"},{label:"是否删除",key:"deleted"},{label:"微信openId",key:"wxOpenId"},{label:"tenantId",key:"tenantId"}]),r=[{label:"id",key:"id"},{label:"标题",key:"title"},{label:"内容",key:"content"},{label:"创建时间",key:"create_time"},{label:"发送者用户ID",key:"send_user_id"},{label:"发送者用户名",key:"send_user_name"},{label:"发送者真实姓名",key:"send_real_name"},{label:"接收人数",key:"receive_user_count"},{label:"已读人数",key:"read_count"},{label:"tenantId",key:"tenant_id"}],c=[{label:"id",key:"id"},{label:"1.单选题  2.多选题  3.判断题 4.填空题 5.简答题",key:"question_type"},{label:"学科",key:"subject_id"},{label:"章节",key:"chapter_id"},{label:"题目总分(千分制)",key:"score"},{label:"级别",key:"grade_level"},{label:"题目难度",key:"difficult"},{label:"正确答案",key:"correct"},{label:"题目  填空、 题干、解析、答案等信息",key:"info_text_content_id"},{label:"创建人",key:"create_user"},{label:"1.正常",key:"status"},{label:"创建时间",key:"create_time"},{label:"deleted",key:"deleted"},{label:"tenantId",key:"tenant_id"}],s=[{label:"id",key:"id"},{label:"用户id",key:"user_id"},{label:"用户名",key:"user_name"},{label:"真实姓名",key:"real_name"},{label:"内容",key:"content"},{label:"时间",key:"create_time"},{label:"tenantId",key:"tenant_id"}],o=[{label:"id",key:"id"},{label:"考试id",key:"exam_paper_id"},{label:"试卷名称",key:"paper_name"},{label:"试卷类型( 1固定试卷  2临时试卷 3班级试卷 4.时段试卷 )",key:"paper_type"},{label:"学科",key:"subject_id"},{label:"系统判定得分",key:"system_score"},{label:"最终得分(千分制)",key:"user_score"},{label:"试卷总分",key:"paper_score"},{label:"做对题目数量",key:"question_correct"},{label:"题目总数量",key:"question_count"},{label:"做题时间(秒)",key:"do_time"},{label:"试卷状态(1待判分 2完成)",key:"status"},{label:"学生",key:"create_user"},{label:"提交时间",key:"create_time"},{label:"taskExamId",key:"task_exam_id"},{label:"tenantId",key:"tenant_id"}],b=[{label:"学号",key:"student_id"},{label:"姓名",key:"full_name"},{label:"性别",key:"gender"},{label:"学院",key:"college"},{label:"专业班级",key:"professional_class"},{label:"总分",key:"total_score"},{label:"等级",key:"grade"},{label:"学籍状态",key:"student_status"},{label:"tenantId",key:"tenant_id"}],u=[{label:"id",key:"id"},{label:"token",key:"token"},{label:"用户Id",key:"user_id"},{label:"微信openId",key:"wx_open_id"},{label:"createTime",key:"create_time"},{label:"endTime",key:"end_time"},{label:"用户名",key:"user_name"},{label:"tenantId",key:"tenant_id"}],m=[{label:"id",key:"id"},{label:"title",key:"title"},{label:"级别",key:"grade_level"},{label:"任务框架 内容为JSON",key:"frame_text_content_id"},{label:"createUser",key:"create_user"},{label:"createTime",key:"create_time"},{label:"deleted",key:"deleted"},{label:"createUserName",key:"create_user_name"},{label:"tenantId",key:"tenant_id"}],f=[{label:"id",key:"id"},{label:"试卷名称",key:"name"},{label:"学科",key:"subject_id"},{label:"试卷类型( 1固定试卷  2临时试卷 3班级试卷 4.时段试卷 5.推送试卷)",key:"paper_type"},{label:"级别",key:"grade_level"},{label:"试卷总分(千分制)",key:"score"},{label:"题目数量",key:"question_count"},{label:"建议时长(分钟)",key:"suggest_time"},{label:"时段试卷 开始时间",key:"limit_start_time"},{label:"时段试卷 结束时间",key:"limit_end_time"},{label:"试卷框架 内容为JSON",key:"frame_text_content_id"},{label:"创建的用户",key:"create_user"},{label:"创建时间",key:"create_time"},{label:"是否删除",key:"deleted"},{label:"任务考试id",key:"task_exam_id"},{label:"userId",key:"user_id"},{label:"tenantId",key:"tenant_id"}],y=[{label:"id",key:"id"},{label:"taskExamId",key:"task_exam_id"},{label:"createUser",key:"create_user"},{label:"createTime",key:"create_time"},{label:"任务完成情况(Json)",key:"text_content_id"},{label:"tenantId",key:"tenant_id"}],_=[{label:"id",key:"id"},{label:"userUuid",key:"user_uuid"},{label:"用户名",key:"user_name"},{label:"password",key:"password"},{label:"真实姓名",key:"real_name"},{label:"age",key:"age"},{label:"1.男 2女",key:"sex"},{label:"birthDay",key:"birth_day"},{label:"学生年级(1-12)",key:"user_level"},{label:"phone",key:"phone"},{label:"1.学生 2.老师 3.管理员",key:"role"},{label:"1.启用 2禁用",key:"status"},{label:"头像地址",key:"image_path"},{label:"createTime",key:"create_time"},{label:"modifyTime",key:"modify_time"},{label:"lastActiveTime",key:"last_active_time"},{label:"是否删除",key:"deleted"},{label:"微信openId",key:"wx_open_id"},{label:"tenantId",key:"tenant_id"}],p=[{label:"id",key:"id"},{label:"消息内容ID",key:"message_id"},{label:"接收人ID",key:"receive_user_id"},{label:"接收人用户名",key:"receive_user_name"},{label:"接收人真实姓名",key:"receive_real_name"},{label:"是否已读",key:"readed"},{label:"createTime",key:"create_time"},{label:"阅读时间",key:"read_time"},{label:"tenantId",key:"tenant_id"}],k=[{label:"id",key:"id"},{label:"tenantId",key:"tenant_id"},{label:"examPaperId",key:"exam_paper_id"}],x=[{label:"id",key:"id"},{label:"章节知识点",key:"name"},{label:"学科id",key:"subject_id"},{label:"所属学科名",key:"subject_name"},{label:"所属年级",key:"grade_level"},{label:"年级名称",key:"level_name"},{label:"是不是删除",key:"deleted"},{label:"tenantId",key:"tenant_id"}],g=[{label:"id",key:"id"},{label:"content",key:"content"},{label:"createTime",key:"create_time"},{label:"tenantId",key:"tenant_id"}],h=[{label:"id",key:"id"},{label:"题目Id",key:"question_id"},{label:"答案Id",key:"exam_paper_id"},{label:"考试卷答案id",key:"exam_paper_answer_id"},{label:"题型",key:"question_type"},{label:"学科",key:"subject_id"},{label:"得分",key:"customer_score"},{label:"题目原始分数",key:"question_score"},{label:"问题内容",key:"question_text_content_id"},{label:"做题答案",key:"answer"},{label:"做题内容",key:"text_content_id"},{label:"是否正确",key:"do_right"},{label:"做题人",key:"create_user"},{label:"创建时间",key:"create_time"},{label:"题目顺序",key:"item_order"},{label:"tenantId",key:"tenant_id"},{label:"drawIo",key:"draw_io"}],v=[{label:"id",key:"id"},{label:"语文 数学 英语 等",key:"name"},{label:"年级 (1-12) 小学 初中 高中  大学",key:"level"},{label:"一年级、二年级等",key:"level_name"},{label:"排序",key:"item_order"},{label:"deleted",key:"deleted"},{label:"tenantId",key:"tenant_id"}],I=[{label:"id",key:"id"},{label:"name",key:"name"},{label:"tenantId",key:"tenant_id"}],j=[{label:"id",key:"id"},{label:"1.单选题  2.多选题  3.判断题 4.填空题 5.简答题",key:"question_type"},{label:"学科",key:"subject_id"},{label:"题目总分(千分制)",key:"score"},{label:"级别",key:"grade_level"},{label:"题目难度",key:"difficult"},{label:"正确答案",key:"correct"},{label:"题目  填空、 题干、解析、答案等信息",key:"info_text_content_id"},{label:"创建人",key:"create_user"},{label:"1.正常",key:"status"},{label:"创建时间",key:"create_time"},{label:"deleted",key:"deleted"},{label:"视频链接",key:"video_link"},{label:"tenantId",key:"tenant_id"}],O=(l={message:r,question2:c,userEventLog:s,examPaperAnswer:o,physicalTest:b,userToken:u,taskExam:m,examPaper:f,taskExamCustomerAnswer:y,user:_,messageUser:p,tenantExamPaper:k,chapter:x,textContent:g,examPaperQuestionCustomerAnswer:h,subject:v,tenant:I,question:j,t_message:r,t_question_2:c,t_user_event_log:s,t_exam_paper_answer:o,physical_test:b,t_user_token:u,t_task_exam:m,t_exam_paper:f,t_task_exam_customer_answer:y,t_user:_,t_message_user:p,tenant_exam_paper:k,t_chapter:x,t_text_content:g,t_exam_paper_question_customer_answer:h,t_subject:v},Object(d["a"])(l,"tenant",I),Object(d["a"])(l,"t_question",j),l);function T(e){var t,a={},l=Object(n["a"])(e);try{for(l.s();!(t=l.n()).done;){var d=t.value;a[d["label"]]=d["key"]}}catch(i){l.e(i)}finally{l.f()}return a}function w(e){console.log("type"),console.log(e),e=e.trim(),console.log("tableNameExcelColsMap"),console.log(O);var t=O[e];return console.log("Columns"),console.log(t),!!t&&T(t)}},e1fc:function(e,t,a){"use strict";a("070c")}}]);