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

export default {
  name: 'app',
  components:{G6Editor},
  created(){
    eventBus.$on('exportData', (data) => {
      console.log("data exportData emit")
      console.log(data)
    })
  },
  methods:{
  
    exportData(data){
      console.log("data exportData")
      console.log(data)
    }
  }
}
</script>

<style>
html, body {
    overflow: hidden;
    margin: 0;
    font-size: 12px;
}
#app{
  margin: 0;
  padding: 0;
}
</style>
