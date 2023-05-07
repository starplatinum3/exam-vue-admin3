<template>
  <div class="app-container">
    <!-- <el-form :model="form" ref="form" label-width="100px" v-loading="formLoading" :rules="rules">
      <el-form-item label="年级：" prop="gradeLevel" required>
        <el-select v-model="form.gradeLevel" placeholder="年级"  @change="levelChange" clearable>
          <el-option v-for="item in levelEnum" :key="item.key" :value="item.key" :label="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学科：" prop="subjectId" required>
        <el-select v-model="form.subjectId" placeholder="学科" >
          <el-option v-for="item in subjectFilter" :key="item.id" :value="item.id" :label="item.name+' ( '+item.levelName+' )'"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="题干：" prop="title" required>
        <el-input v-model="form.title"   @focus="inputClick(form,'title')" />
      </el-form-item>
      <el-form-item label="选项：" required>
        <el-form-item :label="item.prefix" :key="item.prefix"  v-for="(item,index) in form.items"  label-width="50px" class="question-item-label">
          <el-input v-model="item.prefix"  style="width:50px;" />
          <el-input v-model="item.content"   @focus="inputClick(item,'content')"  class="question-item-content-input"/>
           <el-button type="danger" size="mini" class="question-item-remove" icon="el-icon-delete" @click="questionItemRemove(index)"></el-button>
        </el-form-item>
      </el-form-item>
      <el-form-item label="解析：" prop="analyze" required>
        <el-input v-model="form.analyze"  @focus="inputClick(form,'analyze')" />
      </el-form-item>
      <el-form-item label="分数：" prop="score" required>
        <el-input-number v-model="form.score" :precision="1" :step="1" :max="100"></el-input-number>
      </el-form-item>
      <el-form-item label="难度：" required>
        <el-rate v-model="form.difficult" class="question-item-rate"></el-rate>
      </el-form-item>
      <el-form-item label="正确答案：" prop="correct" required>
        <el-radio-group v-model="form.correct">
          <el-radio  v-for="item in form.items"  :key="item.prefix"  :label="item.prefix">{{item.prefix}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
        <el-button type="success" @click="questionItemAdd">添加选项</el-button>
        <el-button type="success" @click="showQuestion">预览</el-button>
      </el-form-item>
    </el-form>
    <el-dialog  :visible.sync="richEditor.dialogVisible"  append-to-body :close-on-click-modal="false" style="width: 100%;height: 100%"   :show-close="false" center>
      <Ueditor @ready="editorReady"/>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="editorConfirm">确 定</el-button>
        <el-button @click="richEditor.dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="questionShow.dialog" style="width: 100%;height: 100%">
      <QuestionShow :qType="questionShow.qType" :question="questionShow.question" :qLoading="questionShow.loading"/>
    </el-dialog> -->

    输入 待解析的文字(标红的说明是重复的)
    <!-- :rows="8" -->
    <!--    v-model="allQues"-->
    <!--    v-html="allQues"-->
    <!--    v-show="!errorHappen"-->
    <!--    <p v-html="errorContent"></p>-->
    <!--    v-html="errorContent"-->

<!--    <div v-model="allQues" contenteditable="true" class="allQuesEditor">-->
<!--      <p v-html="errorContent"></p>-->
<!--    </div>-->


<!--    <textarea v-model="allQues"></textarea>-->
<!--    <p v-html="errorContent"></p>-->

    <!--    <el-input v-model="allQues" :rows="20" placeholder="" type="textarea">-->

    <!--    </el-input>-->

    <!--    style=""-->

<!--    <div v-show="errorHappen"-->
<!--         @click="modify()"-->
<!--         class="errorHtml"-->
<!--    >-->
<!--      <p v-html="errorContent" class="errorHtmlContent"></p>-->
<!--    </div>-->

    <!--    ————————————————-->
    <!--    版权声明：本文为CSDN博主「杨北林」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。-->
    <!--    原文链接：https://blog.csdn.net/qq_43405812/article/details/120455497-->
    <!--    -->
    <!-- parse -->
    <div v-if="sameQuestions.length>0">
      <!-- :key="index" -->
      <!-- (item,index)  -->
      有和题库重复的题目
      <div v-for="(item,index) in sameQuestions" :key="index" >
        {{ item }}
      </div>
    </div>
    <el-button @click="parse">解析</el-button>
    <!-- // insertBatch -->
    <el-button @click="insertBatch">批量插入解析好的题目</el-button>
    <!-- getVal -->
    <el-button @click="getVal">查看内容</el-button>
    <!--    <Ueditor @ready="editorReady"/>-->

    <!--    <wysiwyg-editor @input="onInput" v-model="someText" :value="someText" />-->

    <!--    <Markdown v-dodel="someText"></Markdown>-->
    <!--    <Markdown @ready="onReadyMarkdown" v-model="someText"></Markdown>-->
<!--    <Markdown @on-ready="onReadyMarkdown" v-model="someText"></Markdown>-->
    <div class="markDownBlock">
<!--      autoSave="true"-->
<!--      width="200"-->
<!--      width="600"-->
<!--      width="1400"-->
<!--      width="1800"-->
<!--      width="1600"-->
      <Markdown width="1500" autoSave @on-save="handleOnSave" @on-ready="onReadyMarkdown"
       v-model="allQues"></Markdown>
<!--      @on-ready="onReadyMarkdown"-->
<!--      isPreview="true"-->
      <Markdown  isPreview class="topMarkDown"  v-model="errorContent"></Markdown>
<!--      <Markdown class="topMarkDown"  v-model="changedContent"></Markdown>-->
    </div>

  </div>
</template>

<script>
  import QuestionShow from '../components/Show'
  import Ueditor from '@/components/Ueditor'
  import { mapGetters, mapState, mapActions } from 'vuex'
  import questionApi from '@/api/question'
  import Common from '@/utils/Common'
  import QuestionParser from '@/utils/QuestionParser'
  import WysiwygEditor from '../../../../components/WysiwygEditor'
  // wysiwyg-editor

  import Markdown from 'vue-meditor'
  // import Markdown from 'vue-meditor' v-model="errorContent" 不会变啊

  // WysiwygEditor

  export default {
    components: {
      Ueditor, QuestionShow,
      WysiwygEditor,
      Markdown
    },
    data () {

      return {
        markdownObj: null,

        sameQuestions:[],
        someText: '',
        richEditor: {
          dialogVisible: false,
          // object: null,
          object: {},
          parameterName: '',
          instance: null
        },
        erroradd: false,
        errorHappen: false,
        allQues: null,
        errorContent: null,
        parsedQuesList: null,
        queryParam: {
          id: null,
          questionType: null,
          level: null,
          subjectId: null,
          pageIndex: 1,
          pageSize: 999999,
        },
        allQuesListDb: null
      }
    },
    created () {
      let localStorage=window.localStorage
      let allQuesFromLocSto=  localStorage.getItem(Common.allQuesMark)
      console.log("allQuesFromLocSto")
      console.log(allQuesFromLocSto)
      this.allQues=allQuesFromLocSto
      questionApi.pageList(this.queryParam).then((data) => {
        const re = data.response
        this.allQuesListDb = re.list
        console.log('this.allQuesListDb')
        console.log(this.allQuesListDb)
      })
    },
    // computed:{
    //   changedContent () {
    //     // this.allQues
    //     // return this.message.split('').reverse().join('')
    //   }
    // },
    methods: {

      handleOnSave({value, theme}){
        // console.log(value, theme);
        console.log("value")
        console.log(value)
        console.log("save")
        let allQuesMark="allQues"
        let localStorage=window.localStorage
        console.log("localStorage")
        console.log(localStorage)
        localStorage.setItem(allQuesMark,value)
       let allQuesFromLocSto=  localStorage.getItem(allQuesMark)
        console.log("allQuesFromLocSto")
        console.log(allQuesFromLocSto)
        this.parse()
      },

      getVal () {
        console.log('this.someText')
        console.log(this.someText)
      },
      onReadyMarkdown (markdownObj) {
        // console.log('markdownObj')
        // console.log(markdownObj)
        // markdownObj.insertContent
        this.markdownObj = markdownObj
        this.markdownObj.insertContent = '# java'
        // console.log('this.markdownObj')
        //
        // console.log(this.markdownObj)

        // console.log('this.someText')
        // console.log(this.someText)
      },
      onInput (text) {
        console.log('onInput out')
        console.log('text')
        console.log(text)
        // this.someText=text
      },
      editorReady (instance) {
        console.log('editorReady')
        this.richEditor.instance = instance
        console.log('this.richEditor')
        console.log(this.richEditor)
        // log
        let currentContent = this.richEditor.object[this.richEditor.parameterName]
        console.log('currentContent')
        console.log(currentContent)
        let content = `<div style="color: rebeccapurple">haha</div>`
        // this.richEditor.instance.setContent(currentContent)
        console.log('content')
        console.log(content)
        this.richEditor.instance.setContent(content)
        // 光标定位到Ueditor
        this.richEditor.instance.focus(true)
      },

      modify () {
        this.errorHappen = false
      },

      insertBatch () {
        let list = [
          {
            correct: 'B,C,D',
            createTime: new Date(),
            createUser: 0,
            deleted: false,
            difficult: 0,
            gradeLevel: 0,
            id: null,
            infoTextContentId: 0,
            questionType: 0,
            score: 0,
            status: 0,
            subjectId: 0,
          },
        ]

        if (this.parsedQuesList == null) {
          // alert('没有解析')
          this.$message.error('没有解析')
          return
        }

        if(this.errorHappen ){
          // alert("有错误 不能插入")
          // this.$message("有错误 不能插入")
          this.$message.error("有错误 不能插入")
          return
        }
// 正确题目的 数据 B,C,D
        questionApi.insertBatch(this.parsedQuesList).then((data) => {
          console.log(data)
        })
      },

      parse () {
        //  let  res= QuestionParser.getEachSub(this.allQues)
        let res = QuestionParser.parseQues(this.allQues)
        console.log(res)
        // for(let o of res){
        //   o.items=JSON.stringify(o.items)
        // }
        this.errorHappen = false

        this.parsedQuesList = res
        // this.parsedQuesList.
        this.errorContent = this.allQues
        let that=this
        for (let o of this.parsedQuesList) {
          // shortTitle
          let parsedDataTrimed = o.title.trim()
          // let eqList=  this.allQuesListDb.filter(o=>{
          //   if(o!=null){
          //   return   o.shortTitle.trim()==parsedDataTrimed
          //   }
          //
          // })
          //  console.log("eqList")
          //  console.log(eqList)

          for (let dbData of this.allQuesListDb) {
            if (dbData == null) {
              continue
            }
            let shortTitle = dbData.shortTitle
            if (shortTitle == null) {
              console.log('没有标题')
              console.log('dbData')
              console.log(dbData)
              continue
            }
            let shortTitleDbTrimed = dbData.shortTitle.trim()
            // let parsedDataTrimed= o.title.trim()
            if (shortTitleDbTrimed == parsedDataTrimed) {
              console.log('有一样的 ')
              console.log('数据库里的 ')
              console.log(shortTitleDbTrimed)
              console.log('现在解析的')
              console.log(parsedDataTrimed)
            // this.$message(`数据库里面有一样的题目了  ${shortTitleDbTrimed}`)
            that.errorHappen = true
              // this.allQues=this.allQues.replace(shortTitleDbTrimed,
              //   '<span style=\'color: red;\' >' + shortTitleDbTrimed + '</span>')
              that.errorContent = that.errorContent.replace(shortTitleDbTrimed,
                '<span style=\'color: red;\' >' + shortTitleDbTrimed + '</span>')

                console.log(  "that.errorContent ");
                console.log(  that.errorContent );
                // that.allQues=  that.errorContent
            }
          }

        }
      },

    },
    computed: {}
  }
</script>

<style scoped>
  .markDownBlock{
    position: relative;
  }
  .topMarkDown{
    /* visibility: hidden; */
    position: absolute;
    /*top: 0;*/
    /*top: 20px;*/
    top: 40px;
    /*left: ;*/
    right: 0;
    width: 50%;
    /* width: 40%; */
    /* z-index: 100; */
  }
  .errorHtmlContent {
    /*margin-top: 8px;*/
    /*margin-left: 10px;*/
    /*font-size: 14px;*/
  }

  .errorHtml {
    /*position:absolute;*/
    /*border: 1px solid #ccc;*/
    /*border-radius: 4px;*/
    /*width: 360px;height: 40px;*/
    /*margin-left: 59px;*/
    /*margin-top: -30px;*/
  }

  .allQuesEditor {
    width: 400px;
    height: 400px;
    border: 1px dashed #000

  }
</style>
