<template>
  <div id="app">
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
  name: 'app',
  data(){
return {
  questionId:null,
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
