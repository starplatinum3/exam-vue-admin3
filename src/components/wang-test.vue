<template>
    <div>
        <div id="wang-test"></div>

        <el-button class="btnOK" type="primary" @click="pasteOptionByNavigator">粘贴文本</el-button>

    </div>
</template>
 
<script>
import Editor from "./formula-menu-conf.js";
export default {
    data() {
        return {
            instance: null,//编辑器实例
        }
    },
 
    mounted() {
   
        this.instance = new Editor("#wang-test");
        // 配置 server 接口地址
        this.instance.config.uploadImgServer = '你的上传地址'
        //上传文件参数别名
        this.instance.config.uploadFileName = 'file'
        this.instance.config.withCredentials = true
        this.instance.config.uploadImgHooks = {
            // 图片上传并返回了结果，想要自己把图片插入到编辑器中
            // 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用customInsert
            customInsert: function (insertImgFn, result) {
                // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
                console.log("result");
                console.log(result);
                insertImgFn(result.url)
            }
        }
        // this.instance.config.
        this.instance.config.onSelectionChange = function (newSelection) {
  console.log("onSelectionChange", newSelection);
  /**
    {
       text:'wangeditor', // 当前选择文本
       html: '<p>wangeditor</p>', // 当前选中的html
       selection: selection, // 原生selection对象
    }
   */
};
// editor.create();
        this.instance.create(); 
        this.pasteOption()
       },
 
    beforeDestroy() {
        if (this.instance)
            this.instance.destroy()
        this.instance = null
    },
    methods: {

        //事件获取剪贴板
pasteOption() { 
  window.addEventListener("paste", function (e) {
    var clipdata = e.clipboardData || window.clipboardData;
  let content = clipdata.getData("text/plain");
  console.log("content");
  console.log(content);
  }); 
},


//自动获取剪贴板
pasteOptionByNavigator() {
    // navigator.clipboard.read() 获取 html 
    // navigator.clipboard.read 
    navigator.clipboard.read()
    .then((v) => {
      console.log("获取剪贴板成功：");
      console.log(v);
    //   this.content = v; 

    let clipboardItems=v
     // 
    // clipboardItems[0].getType('text/plain')
    // let  clipboardItemHtml= 
 clipboardItems[0].getType('text/html').then(clipboardItemHtml=>{
        console.log("clipboardItemHtml");
     console.log(clipboardItemHtml);
     })
 
    })
    .catch((v) => {
      console.log("获取剪贴板失败: ", v);
    });

//   navigator.clipboard
//     .readText()
//     .then((v) => {
//       console.log("获取剪贴板成功：", v);
//     //   this.content = v; 
//     })
//     .catch((v) => {
//       console.log("获取剪贴板失败: ", v);
//     });
},


        //获取文本内容
        getUEContent() {
            return this.instance.txt.html()
        },
        //设置文本内容
        setText(html) {
            console.log("html");
            console.log(html);
            this.instance.txt.html(`${html}`)
        }
    }
}
</script>
<style>
.content {
    border-radius: 8px;
    padding: 15px;
    border: 1px solid #e5e5e5;
    max-height: 200px;
    overflow-y: scroll;
}
 
.title {
    font-size: 22rpx;
    font-weight: bold;
    color: #333;
    margin: 10px 0px;
}
 
.w-e-text {
    padding-top: 10px;
    line-height: 25px;
}
</style>