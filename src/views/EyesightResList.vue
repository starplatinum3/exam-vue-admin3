


<template>
  <div
    class="progress_list"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
  >

  <!-- D:\proj\bishe\exam-vue-admin3\src\views\EchartsShowEyesight.vue -->
  <el-button type="" @click="EchartsShowEyesight">统计图表显示</el-button>
  

    <div class="progress_item" v-for="(item, index) in tableData" :key="index">
      <div class="progress_title">{{ item.userName }}</div>
      <div class="progress_box">
        <div class="progress_bar">
          <!-- <div class="progress_value">{{ `${item.currVal}%` }}</div>
          <div
            class="progress_line"
            :style="{ left: item.totalVal + '%' }"
          ></div> -->
          <!-- <span></span> -->
          <!-- 左眼 -->
          <span class="leftEyesight">  左眼 {{ item.leftEyesight }}</span>
          <!-- 右眼 -->
          <span class="rightEyesight">右眼  {{ item.rightEyesight }}</span>
          <!-- 时间 -->
          <span class="createTimeStr"> 时间 {{ item.createTimeStr }}</span>
          <!-- <div class="">{{ item.leftEyesight }}</div>
          <div class="">{{ item.rightEyesight }}</div> -->
        </div>
     
      </div>
    </div>
    
    <div class="progress_loading" v-if="loading">加载中...</div>
    <div class="progress_loading" v-if="noMore">无更多数据</div>
  </div>
</template>

<script>
import Common from "@/utils/Common";
// formatDateTime ,
import { formatTime} from "@/utils/DateUtil";
import axios from "axios";
// axios
export default {
  data() {
    return {
        pageTotal: 0, //总页数
      page: 1, //当前页数
      pageSize: 10, //每页10条
      loading: false,
      noMore: false,
      list: [
        {index: 1, projectName: '项目1', currVal: 50, totalVal: 50, status: '进度刚好'},
        {index: 2, projectName: '项目2', currVal: 50, totalVal: 50, status: '进度刚好'},
      ], //列表展示数据
      demandData:{
        items:[]
      },
      tableData: [
      {
        id:1,
        paperName:"java",
        subjectName:"1",
        questionCorrect:1,
        questionCount:1,
        createTimeStr:"2022-02-22",
        "createTime":null ,
        "createUserId":null ,
        "departId":null ,
        "departName":null ,
        "deviceId":null ,
        "deviceName":null ,
        "enableMark":null ,
        // "id":null ,
        "isDeleted":null ,
        "leftEyesight":5.3 ,
        "memo":null ,
        "rightEyesight":5.3 ,
        "testTime":null ,
        "updateTime":null ,
        "updateUserId":null ,
        "userCode":null ,
        "userId":null ,
        "userName":"starp" ,
        "userSex":null 
        
      },
      {
        id:1,
        paperName:"java",
        subjectName:"1",
        questionCorrect:1,
        questionCount:1,
        createTimeStr:"2022-02-22",
        "createTime":null ,
        "createUserId":null ,
        "departId":null ,
        "departName":null ,
        "deviceId":null ,
        "deviceName":null ,
        "enableMark":null ,
        // "id":null ,
        "isDeleted":null ,
        "leftEyesight":5.3 ,
        "memo":null ,
        "rightEyesight":5.3 ,
        "testTime":null ,
        "updateTime":null ,
        "updateUserId":null ,
        "userCode":null ,
        "userId":null ,
        "userName":null ,
        "userSex":null 
        
      },
      {
        id:1,
        paperName:"java",
        subjectName:"1",
        questionCorrect:1,
        questionCount:1,
        createTimeStr:"2022-02-22",
        "createTime":null ,
        "createUserId":null ,
        "departId":null ,
        "departName":null ,
        "deviceId":null ,
        "deviceName":null ,
        "enableMark":null ,
        // "id":null ,
        "isDeleted":null ,
        "leftEyesight":5.3 ,
        "memo":null ,
        "rightEyesight":5.3 ,
        "testTime":null ,
        "updateTime":null ,
        "updateUserId":null ,
        "userCode":null ,
        "userId":null ,
        "userName":null ,
        "userSex":null 
        
      },
      {
        id:1,
        paperName:"java",
        subjectName:"1",
        questionCorrect:1,
        questionCount:1,
        createTimeStr:"2022-02-22",
        "createTime":null ,
        "createUserId":null ,
        "departId":null ,
        "departName":null ,
        "deviceId":null ,
        "deviceName":null ,
        "enableMark":null ,
        // "id":null ,
        "isDeleted":null ,
        "leftEyesight":5.3 ,
        "memo":null ,
        "rightEyesight":5.3 ,
        "testTime":null ,
        "updateTime":null ,
        "updateUserId":null ,
        "userCode":null ,
        "userId":null ,
        "userName":null ,
        "userSex":null 
        
      },
      {
        id:1,
        paperName:"java",
        subjectName:"1",
        questionCorrect:1,
        questionCount:1,
        createTimeStr:"2022-02-22",
        "createTime":null ,
        "createUserId":null ,
        "departId":null ,
        "departName":null ,
        "deviceId":null ,
        "deviceName":null ,
        "enableMark":null ,
        // "id":null ,
        "isDeleted":null ,
        "leftEyesight":5.3 ,
        "memo":null ,
        "rightEyesight":5.3 ,
        "testTime":null ,
        "updateTime":null ,
        "updateUserId":null ,
        "userCode":null ,
        "userId":null ,
        "userName":null ,
        "userSex":null 
        
      },
    ],
  
    };
  },
  mounted() {
    // this.setList();

    
let  pageNumber=1
let  pageSize=10
// let  pageSize=2
let  postData= {  
  "createTime":null ,
  "createUserId":null ,
  "departId":null ,
  "departName":null ,
  "deviceId":null ,
  "deviceName":null ,
  "enableMark":null ,
  "id":null ,
  "isDeleted":null ,
  "leftEyesight":null ,
  "memo":null ,
  "rightEyesight":null ,
  "testTime":null ,
  "updateTime":null ,
  "updateUserId":null ,
  "userCode":null ,
  "userId":null ,
  "userName":null ,
  "userSex":null 
           }
          //  selectPlusPageOrderByCreateTime
          // selectPlusPage
        //   this.$axios.post
             axios.post
            //  (Common.examUrl + "draw/save", this.drawObj).then((res) => {

// import Common from "@/utils/Common";
// app.jsonPost
// `/api
(Common.examUrl+`eyesightRes/selectPlusPageOrderByCreateTime?pageNumber=${pageNumber}&pageSize=${pageSize}`
,postData)
    // this.$axios.post(`/eyesightRes/selectPlusPage?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`,data)
    .then(res => {

      // formatTime
      
  
      // selectPlusPageOrderByCreateTime
    console.log("res pi/eyesightRes/selectPlusPag");
    console.log(res);
    // let response= res.response
    let response=res.data.response|| res.response
    // this.tableData = res.response.records;
    // this.pageTotal= res.response.total

    let  records=response.records

    this.changeDateStr(records)
//    this. setData({
//       tableData:records,
//       pageTotal:response.total
//     })
    this.tableData=records
    this.pageTotal=response.total
    // this.tableData = res.response.data.records;
    // response
    // this.tableData = res.data.data.records;
    console.log(" this.tableData")
    console.log( this.tableData)
    // this.pageTotal= res.data.data.total
    });

  },
  methods: {

    EchartsShowEyesight(){

        this.$router.push({
          path: "/test/EchartsShowEyesight",
          query: {
            // id: this.id,
            // name: this.name,
          },
        });
    },
    changeDateStr(records){

        
        // formatDateTime
for(let o of records){
  
  o.createTimeStr=
  formatTime(
    new Date(
      o.createTime
    )
  )
}
},
    // 滚动加载
    loadMore() {
      this.noMore = false;
      if (this.list.length === this.demandData.items.length) {
        this.noMore = true;
        return false;
      }
      this.loading = true;
      setTimeout(() => {
        this.page++;
        this.setList();
        this.loading = false;
      }, 1000);
    },
    // 计算滚动加载的数据
    setList() {
      let begin = (this.page - 1) * this.pageSize;
      let end = this.page * this.pageSize;
      let data = [];
      data = [...this.list, ...this.demandData.items.slice(begin, end)];
      this.list = data;
    },
  },
};
</script>

<style scoped>

.progress_value{
    margin-left: 20px;
}
.progress_text{
    margin-right: 20px;
}
.progress_box{
    display: flex;
    /* justify-content: flex-end; */
    justify-content: space-between;
    /* align-items: center; */
}
.progress_title{
    margin-left: 10px;
    /* font-size: 14px; */
    /* font-size: 24px; */
    font-size: 20px;
    color: #333333;
    margin-bottom: 10px;
    margin-top: 5px;
}
.progress_item{
    /* width: 200px; */
            /* height: 200px; */
            /* line-height: 200px; */
            /* text-align: center; */
            font-size: 20px;
            border: 1px red solid;
            /* border-radius: 50px; */
            border-radius: 10px;
            background-color: bisque;
/* ————————————————
版权声明：本文为CSDN博主「律己以严」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/piaoliangj/article/details/112794882 */

    /* background-color: #d61d1d; */
    /* width: 200px; */
    margin-bottom: 10px;
}
.process {
  background-color: #ffffff;
  box-shadow: 1px 1px 5px #f4f5f9;
  padding: 30px;
  margin: 30px;
}
.process_box {
  width: 100%;
  height: auto;
}
.process_list {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.box_li {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  border-radius: 3px;
  color: #999999;
  border: 1px solid #999999;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  position: relative;
  margin: 30px 0;
}
.row_line {
  width: 100%;
  height: 90px;
  position: absolute;
  border-top: 1px solid #b5b5b5;
  border-bottom: 1px solid #b5b5b5;
}
.unset_bottom {
  border-bottom: 0 !important;
}
.clear_before {
  margin-top: 0 !important;
}
.clear_before:before {
  content: "";
  height: 0 !important;
  background-color: unset !important;
}
.clear_after {
  margin-bottom: 0 !important;
}
.clear_after:after {
  content: "";
  height: 0 !important;
  background-color: unset !important;
}
.box_li:after {
  content: "";
  display: block;
  height: 30px;
  width: 0.1px;
  position: absolute;
  bottom: -31px;
  background-color: #b5b5b5;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
}
.box_li:before {
  content: "";
  display: block;
  height: 30px;
  width: 0.1px;
  position: absolute;
  top: -31px;
  background-color: #b5b5b5;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
}

.progress_bar{
    font-size: 20px;
    display: flex;
    /* justify-content: space-between; */
    justify-content: center;
}
.leftEyesight{
    /* font-size: 10px; */
    font-size: 15px;
    margin-left: 10px;
}
.rightEyesight{
    font-size: 15px;
    margin-left: 10px;
}

.createTimeStr{
    font-size: 15px;
    /* margin-left: 10px; */
    /* margin-left: 100px; */
    margin-left: 60px;
}


.blue {
  color: #fff !important;
  background-color: #00a3ff !important;
  border: 1px solid #00a3ff !important;
}
.grey {
  background-color: #f2f2f2 !important;
  border: 1px solid #f2f2f2 !important;
}
</style>
