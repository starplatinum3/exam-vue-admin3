<template>
    <div>
        <span ref="latex" class="katex" v-html="rawHTML"></span>
  <el-input v-model="latexRaw" placeholder=""></el-input>
  <el-button type="" @click="renderToString">renderToString</el-button>
    </div>
 
</template>
  
  <script>
import katex from "katex";
import "katex/dist/katex.css";
export default {
  name: "latexDisplay",
  data() {
    return {
        latexRaw:null,
      rawHTML: "",
    };
  },
  methods:{
    renderToString(){
        // let  title=String.raw`\title{文章标题 \tnoteref{t1,t2}}`
//    this.$slots.default[0].text,
// console.log("title");
// console.log(title);
    this.rawHTML = katex.renderToString(this.latexRaw, {
      throwOnError: false,
    });
    console.log( "this.rawHTML");
    console.log( this.rawHTML);
    }
  },
  mounted() {

    console.log("katex");
    console.log(katex);
    // \tnotetext[t2]{脚注内容}
   let  title=String.raw`\title{文章标题 \tnoteref{t1,t2}}`
//    this.$slots.default[0].text,
console.log("title");
console.log(title);
    this.rawHTML = katex.renderToString(title, {
      throwOnError: false,
    });
    console.log( "this.rawHTML");
    console.log( this.rawHTML);
    /*
      // 另一种方法
      katex.render(this.$slots.default[0].text, this.$refs.latex, {
        throwOnError: false,
      });
      */
  },
};
</script>
  
  <style>
</style>
  
  