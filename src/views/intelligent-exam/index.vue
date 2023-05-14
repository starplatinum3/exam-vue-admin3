<template>
  <div style="margin-top: 10px" class="app-contain">
    <!-- 分栏布局，gutter为每一栏的间隔 -->
    <!-- 布局的一行el-cow分为24份，span就是来确定el-col占了几份 -->
    <!-- el-card为内置的卡片组件 header + body-->
    <el-row :gutter="50">
      <el-col :span="8">
        <el-card>
          <el-form :model="form" ref="form" label-width="25%">
            <el-form-item
              label="学科："
              prop="subjectId"
              style="margin-top: 20px"
              required
            >
              <el-select
                v-model="form.subjectId"
                placeholder="学科"
                @change="subjectChange"
              >
                <el-option
                  v-for="item in subjects"
                  :key="item.id"
                  :value="item.id"
                  :label="item.name"
                ></el-option>
              </el-select>
            </el-form-item>
            <!-- http://localhost:8002/#/auto/index -->
            <el-form-item label="章节：" prop="chapters" required>
              <el-checkbox-group v-model="form.chapters">
                <el-checkbox
                  v-for="item in chapterFilter"
                  :key="item.id"
                  :label="item.id"
                  >{{ item.name }}</el-checkbox
                >
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="选择题：" prop="choiceNum" required>
              <div class="slider-block">
                <el-slider
                  v-model="form.choiceNum"
                  :step="3"
                  show-stops
                  :max="15"
                ></el-slider>
              </div>
            </el-form-item>
            <el-form-item label="填空题：" prop="fillingNum" required>
              <div class="slider-block">
                <el-slider
                  v-model="form.fillingNum"
                  :step="1"
                  show-stops
                  :max="10"
                ></el-slider>
              </div>
            </el-form-item>
            <el-form-item label="简答题：" prop="answerNum" required>
              <div class="slider-block">
                <el-slider
                  v-model="form.answerNum"
                  :step="1"
                  show-stops
                  :max="10"
                ></el-slider>
              </div>
            </el-form-item>
            <el-form-item label="难度：" prop="difficulty" required>
              <el-radio-group v-model="form.difficulty">
                <el-radio-button
                  v-for="item in difficultEnum"
                  :key="item.key"
                  :label="item.key"
                  >{{ item.value }}</el-radio-button
                >
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm">生成试卷</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card>
          <el-table
            :data="tableData"
            v-loading="listLoading"
            fit
            highlight-current-row
          >
            <el-table-column
              prop="name"
              label="试卷名称"
              width="500"
            ></el-table-column>
            <el-table-column
              prop="subjectName"
              label="学科"
              width="100"
            ></el-table-column>
            <el-table-column
              prop="createTime"
              label="创建时间"
              width="250"
            ></el-table-column>
            <el-table-column width="150">
              <!-- 作用域插槽，就是带有数据的插槽：可以获取父组件传递的参数，将这些参数使用到子组件中 -->
              <!-- 带查询参数examPaperId -->
              <template slot-scope="{ row }">
                <router-link :to="{ path: '/do', query: { id: row.id } }">
                  <el-button type="text">开始做题</el-button>
                </router-link>
              </template>
            </el-table-column>
          </el-table>
          <pagination
            v-show="total > 0"
            :background="false"
            :total="total"
            :page.sync="queryParam.pageIndex"
            :limit.sync="queryParam.pageSize"
            style="margin-top: 20px"
            @pagination="search"
          />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Pagination from "@/components/Pagination";
import examPaperApi from "@/api/examPaper";

import MergeUtil from "@/utils/MergeUtil";

export default {
  components: { Pagination },
  data() {
    return {
      form: {
        // subjectId: null,
        // subjectId: 1,
        subjectId: 4,
        // chapters: [1,4],
        chapters: [1, 3],
        choiceNum: 6,
        // fillingNum: 3,
        // answerNum: 3,
        fillingNum: 0,
        answerNum: 0,
        difficulty: 0,
      },
      queryParam: {
        paperType: 10,
        subjectId: null,
        pageIndex: 1,
        pageSize: 10,
      },
      total: 10,
      chapterFilter: [],
      tableData: [], // 智能组卷试卷列表
      listLoading: false, // 是否加载
    };
  },
  created() {
    this.initChapter();
    this.initSubject();
    this.subjectChange();
    // subjects
    this.search();
  },
  mounted() {},
  methods: {
    search() {
      this.listLoading = true;
      examPaperApi.pageList(this.queryParam).then((data) => {
        const re = data.response;
        this.tableData = re.list;
        this.total = re.total;
        this.setUpSubjectName(this.tableData);
        this.queryParam.pageIndex = re.pageNum;
        this.listLoading = false;
      });
    },
    getSubjectName(item) {
      for (let subject of this.subjects) {
        if (subject.id == item.subjectId) {
          return subject.name;
        }
      }
    },
    setUpSubjectName(tableData) {
      // deleted
      // :
      // false
      // id
      // :
      // 3
      // itemOrder
      // :
      // null
      // level
      // :
      // 1
      // levelName
      // :
      // "大一"
      // name
      // :
      // "C++"
      // for(let subject of subjects){

      //   if(subject.id==item.subjectId){
      //    return  subject.name
      //   }

      // }
      for (let o of tableData) {
        // o
        // this.getSubjectName
        let subjectName =    MergeUtil.getSubjectName(o,this.subjects);
        // let subjectName = getSubjectName(o);
        o.subjectName = subjectName;
      }
    },
    submitForm() {
      let _this = this;
      this.$refs.form.validate((vaild) => {
        if (vaild) {
          this.listLoading = true;
          examPaperApi
            .examInsert(this.form)
            .then((data) => {
              if (data.code === 1) {
                _this.$message.success(data.message); // element消息提示
                this.search();
              } else {
                _this.$message.error(data.message);
                _this.listLoading = false;
              }
            })
            .catch((e) => {
              this.listLoading = false;
            });
        } else {
          return false;
        }
      });
    },
    subjectChange() {
      this.form.chapterArray = []; // data.subjectId为number类型 -- this.form。subjectId为string类型
      this.chapterFilter = this.chapters.filter(
        (data) => data.subjectId === this.form.subjectId * 1
      );
      console.log("this.chapterFilter");
      console.log(this.chapterFilter);
    },
    ...mapActions("exam", { initSubject: "initSubject" }),
    ...mapActions("exam", { initChapter: "initChapter" }),
  },
  computed: {
    ...mapState("exam", { subjects: (state) => state.subjects }),
    ...mapState("exam", { chapters: (state) => state.chapters }),
    ...mapState("enumItem", {
      difficultEnum: (state) => state.exam.examPaper.difficultEnum,
    }),
  },
};
</script>

<style lang="scss" scoped>
.slider-block {
  margin-right: 20px;
}

.train-item-rate {
  margin-top: 10px;
}
</style>
