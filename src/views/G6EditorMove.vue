<template>
  <div id="appG6Editor">
    <G6Editor @exportData="exportData" mode="edit">

    </G6Editor>
  </div>
</template>

<script>
  // ev
  import eventBus from "@/utils/eventBus";
// import G6Editor from './components/G6Editor'
// import G6Editor from '@/components/G6Editor'
import G6Editor from '@/components/G6Editor/index'
import questionApi from "@/api/question";
export default {
  name: 'appG6Editor',
  data(){
return {
  questionId:null,
  question:{
    id:null,
    title:null,
    type:null,
    content:null,
    answer:null,
    analysis:null,
    score:null,
    level:null,
    status:null,
    createTime:null,
    updateTime:null,
    createUser:null,
    updateUser:null,
    delFlag:null,
    g6GraghMove:null,
  },
}
  },
  components:{G6Editor},
  created(){
    // D:\proj\bishe\exam-vue-admin3\src\views\G6EditorTest.vue
    this.questionId=  this.$route.query.questionId
    // initData()
    questionApi.select( this.questionId).then(res=>{
      console.log("res questionApi select");
      console.log(res);
      // if( res.data.code==2){
     if( res.code==2){
        this.$message({
          // message: res.data.msg,
          message: res.message,
          type: 'error'
        });
        return;
     }
    //  this.question=res.data.response
     this.question=res.response

      // data.code
    })
    // this.save( ) 
    eventBus.$on('exportData', (data) => {
      console.log("data exportData emit")
      console.log(data)
    })
  },
  methods:{
  async initData(){
    // vue async
    let  res=await   questionApi.select( this.questionId)
  },
    exportData(data){
      console.log("data exportData")
      console.log(data)
    }
  }
}
</script>

<style>
html, body {
    /* overflow: hidden; */
    overflow: auto;
    margin: 0;
    font-size: 12px;
}
/* #app{
  margin: 0;
  padding: 0;
} */
</style>

