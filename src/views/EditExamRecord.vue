<template>
<div>
  <el-row  class="do-exam-title" style="background-color: #F5F5DC">
    <el-col :span="24">
        <span :key="item.itemOrder"  v-for="item in answer.answerItems">
             <el-tag :type="questionDoRightTag(item.doRight)" class="do-exam-title-tag" @click="goAnchor('#question-'+item.itemOrder)">{{item.itemOrder}}</el-tag>
        </span>
    </el-col>
  </el-row>
  <el-row  class="do-exam-title-hidden">
    <el-col :span="24">
        <span :key="item.itemOrder"  v-for="item in answer.answerItems">
             <el-tag  class="do-exam-title-tag" >{{item.itemOrder}}</el-tag>
        </span>
    </el-col>
  </el-row>
  <el-container  class="app-item-contain">
    <el-header class="align-center">
      <h1>{{form.name}}</h1>
      <div>
        <span class="question-title-padding">试卷得分：{{answer.score}}</span>
        <span class="question-title-padding">试卷耗时：{{formatSeconds(answer.doTime)}}</span>
      </div>
    </el-header>
    <el-main>
      <el-form :model="form" ref="form" v-loading="formLoading" label-width="100px">
        <el-row :key="index"  v-for="(titleItem,index) in form.titleItems">
          <h3>{{titleItem.name}}</h3>
          <el-card class="exampaper-item-box" v-if="titleItem.questionItems.length!==0">
            <el-form-item :key="questionItem.itemOrder" :label="questionItem.itemOrder+'.'"
                          v-for="questionItem in titleItem.questionItems"
                          class="exam-question-item"  label-width="50px" :id="'question-'+ questionItem.itemOrder">
              <el-row>
                <QuestionAnswerShow :qType="questionItem.questionType" 
                :question="questionItem"  :answer="answer.answerItems[questionItem.itemOrder-1]"/>
                <el-button type="" @click="show(questionItem,answer.answerItems[questionItem.itemOrder-1])">show</el-button>
              </el-row>
              <el-row v-if="answer.answerItems[questionItem.itemOrder-1]&&answer.answerItems[questionItem.itemOrder-1].doRight === null">
                <label style="color: #e6a23c">批改：</label>
                <el-radio-group v-model="answer.answerItems[questionItem.itemOrder-1].score">
                  <el-radio  v-for="item in scoreSelect(questionItem.score)"  :key="item"  :label="item" >
                    {{(item==0?'错误':'对')}}
                  </el-radio>
                </el-radio-group>
              </el-row>
            </el-form-item>
          </el-card>
        </el-row>
        <el-row class="do-align-center">
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button>取消</el-button>
        </el-row>
      </el-form>
    </el-main>

    <el-dialog
      top="10px"
      :visible.sync="richEditor.dialogVisibleEditor"
      append-to-body
      :close-on-click-modal="false"
      width="1300px"
      height="1200px"
      :show-close="false"
      center
    >
      <!-- ref='WangEdiorFormula' -->
      <!-- @getVal="getVal" -->
      <WangEdiorFormula
        ref="WangEdiorFormula"
        :editorDataHtml="editorData"
        @getVal="editorConfirmFormula"
        @close="onClose"
        class="sketch_content"
      ></WangEdiorFormula>
      <!-- <div class="home sketch_content">
      <WangEdiorFormula></WangEdiorFormula>
      
  </div> -->
    </el-dialog>

  </el-container>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { formatSeconds } from '@/utils'
// import QuestionAnswerShow from '../components/QuestionAnswerShow'
import QuestionAnswerShow from '@/components/QuestionAnswerShow'
import WangEdiorFormula from "@/views/WangEdiorFormula";
import examPaperAnswerApi from '@/api/examPaperAnswer'
export default {
  components: { QuestionAnswerShow ,
    WangEdiorFormula
  },
  data () {
    return {
      editorData: "",

richEditor: {
        dialogVisibleEditor: false,
        dialogVisible: false,
        object: null,
        parameterName: "",
        instance: null,
        dialogVisibleEditorG6: false,
      },
      form: {},
      formLoading: false,
      answer: {
        id: null,
        score: 0,
        doTime: 0,
        answerItems: [],
        doRight: false
      }
    }
  },
  created () {
    let id = this.$route.query.id
    let _this = this

    // console.log( "form.titleItems");
    // console.log( this.form.titleItems);
    if (id && parseInt(id) !== 0) {
      // _this.formLoading = true
      examPaperAnswerApi.read(id).then(re => {
        _this.form = re.response.paper
        console.log( "_this.form");
        console.log( _this.form);

        console.log( "form.titleItems");
    console.log( _this.form.titleItems);
    _this.parseTitleItems(_this.form.titleItems)
        _this.answer = re.response.answer
        // answer.answerItems
        console.log(" item.doRight");
        _this.answer.answerItems.forEach(item => {
          // item.score = item.score.toString()
          // doRight
          console.log(item);
          console.log( item.doRight);
         
        })
        // D:\proj\bishe\exam-vue-admin3\src\views\EditExamRecord.vue
        console.log(  "_this.answer" );
        console.log(  _this.answer );
        // _this.formLoading = false
      })
    }
  },
  mounted(){
    this.
    mountedEditor()

  },
  // components:{

  // },
  methods: {
    show(questionItem,ans){

      console.log("questionItem");
      console.log(questionItem);

      console.log("ans");
      console.log(ans);
      // content
      // ans.content
      this.richEditor.dialogVisibleEditor = true

this.editorData=ans.content
    },

    mountedEditor() {
      //  let   this.$store.getters.doneTodos;
      const editor = new WangEditor("#demo1");
      // WangEditor 不要获取焦点
      // WangEditor 设置值
      // 配置菜单栏，删减菜单，调整顺序
      // editor.config.menus = ['bold', 'head', 'link', 'italic', 'underline']

      // 配置行高
      // editor.config.lineHeights = ['1', '1.15', '1.6', '2', '2.5', '3']

      // 获取必要的变量，这些在下文中都会用到
      const { $ } = WangEditor;
      const { PanelMenu, Panel } = WangEditor;

      class Kityformula extends PanelMenu {
        // 公式输入插件
        constructor(editors) {
          const $elem = WangEditor.$(
            `<div class="w-e-menu">
                    <i class="iconfont icongongshi" style="font-size:18px;"></i>
                </div>`
          );
          super($elem, editors);
        }

        // 菜单点击事件
        clickHandler() {
          // 做任何你想做的事情
          // 可参考【常用 API】文档，来操作编辑器
          const conf = createKityformula(editor);
          const panel = new Panel(this, conf);
          panel.create();
        }

        tryChangeActive() {}
      }

      class Myscript extends PanelMenu {
        // 公式手写插件
        constructor(editors) {
          const $elem = WangEditor.$(
            `<div class="w-e-menu">
                    <i class="iconfont iconshouxieban" style="font-size:18px;"></i>
                </div>`
          );
          super($elem, editors);
        }

        // 菜单点击事件
        clickHandler() {
          // 做任何你想做的事情
          // 可参考【常用 API】文档，来操作编辑器
          const conf = myscriptMath(editor);
          const panel = new Panel(this, conf);
          panel.create();
        }

        tryChangeActive() {}
      }

      // 注册菜单
      const kityformulaKey = "kityformulaKey"; // 菜单 key ，各个菜单不能重复
      editor.menus.extend("kityformulaKey", Kityformula);

      // 注册菜单
      const myscriptKey = "myscriptKey"; // 菜单 key ，各个菜单不能重复
      editor.menus.extend("myscriptKey", Myscript);

      // 将菜单加入到 editor.config.menus 中
      // 也可以通过配置 menus 调整菜单的顺序，参考【配置菜单】部分的文档
      editor.config.menus = editor.config.menus.concat(kityformulaKey);
      editor.config.menus = editor.config.menus.concat(myscriptKey);

      editor.config.uploadImgShowBase64 = true;
      editor.config.uploadImgMaxLength = 5; // 一次最多上传 5 个图片
      // editor.config.uploadImgMaxLength = 5;
      editor.zIndex.baseZIndex = 100; //方法
      // 配置 onchange 回调函数，将数据同步到 vue 中
      editor.config.onchange = (newHtml) => {
        this.editorData = newHtml;
      };
      // editor.config.focus=false

      let WangEdiorFormulaDataOfStore = this.getWangEdiorFormulaData;
      console.log("WangEdiorFormulaDataOfStore");
      console.log(WangEdiorFormulaDataOfStore);
      // editor.txt.html(this.getWangEdiorFormulaData)
      // 创建编辑器
      // app
      editor.create();
      let WangEdiorFormulaData = this.getWangEdiorFormulaDataFromStore();
      console.log("WangEdiorFormulaData");
      console.log(WangEdiorFormulaData);
      editor.txt.html(WangEdiorFormulaData);
      this.editor = editor;

      // 取消自动focus且禁止虚拟键盘弹出
      // document.activeElement.blur();
      // document.activeElement.blur
    },

    editorConfirmFormula(content) {
      // let content = this.richEditor.instance.getContent();
      this.richEditor.object[this.richEditor.parameterName] = content;
      this.richEditor.dialogVisibleEditor = false;
    },

   onClose() {
      // onClose
      // onClose
      this.richEditor.dialogVisibleEditor = false;
    },
    parseTitleItems(titleItems){

      for(let titleItem of titleItems){

        console.log(titleItem);
        // titleItem.questionItems
        // questionItems
        this.parseQuestionItems(titleItem.questionItems)
      }
    },
    parseQuestionItems(questionItems){

for(let titleItem of questionItems){

  console.log(titleItem);
  // titleItem.questionItems
  // questionItems
}
},
    submitForm () {
      let _this = this
      _this.formLoading = true
      let id = this.$route.query.id
      examPaperAnswerApi.edit(this.answer).then(re => {
        if (re.code === 1) {
          _this.$alert('试卷得分：' + re.response + '分', '考试结果', {
            confirmButtonText: '返回考试记录',
            callback: action => {
              // _this.$router.push('/record/index')
              // D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\ExamRecord.vue
              // _this.$router.push(`/test/ExamRecord`,{query:
              //   {id:id}})
                _this.$router.push(`/test/ExamRecord?id=${id}`,{query:
                {id:id}})

            }
          })
        } else {
          _this.$message.error(re.message)
        }
        _this.formLoading = false
      }).catch(e => {
        _this.formLoading = false
      })
    },
    scoreSelect (score) {
      let array = []
      for (let i = 0; i <= parseInt(score); i++) {
        array.push(i.toString())
      }
      if (score.indexOf('.') !== -1) {
        array.push(score)
      }
      return array
    },
    formatSeconds (theTime) {
      return formatSeconds(theTime)
    },
    questionDoRightTag (status) {
      return this.enumFormat(this.doRightTag, status)
    },
    goAnchor (selector) {
      this.$el.querySelector(selector).scrollIntoView({ behavior: 'instant', block: 'center', inline: 'nearest' })
    }
  },
  computed: {
    ...mapGetters('enumItem', ['enumFormat']),
    ...mapState('enumItem', {
      doRightTag: state => state.exam.question.answer.doRightTag
    })
  }
}
</script>

<style lang="scss" scoped>
  .align-center {
    text-align: center
  }

  .exam-question-item{
    padding: 10px;
    .el-form-item__label{
      font-size: 15px !important;
    }
  }

  .question-title-padding{
    padding-left: 25px;
    padding-right: 25px;
  }
</style>
