<template>
  <div class="dashboard-container">
    DbManager

    <el-button type="" @click="select_table_name_list_do"
      >select_table_name_list_do</el-button
    >

    <el-button type="" @click="select_information_schema_columns_do"
      >select_information_schema_columns_do</el-button
    >

<!-- 会发起两次请求啊  -->
    <div
      @click="changeTableName(table_name)"
      :key="table_name"
      v-for="table_name in table_name_list"
    >
      {{ table_name }}
    </div>

<h3>TableName</h3>
    
    <div>{{ TableName }}</div>
<h2>information_schema_columns</h2>
    
    <div :key="item" v-for="item in information_schema_columns">{{item.COLUMN_NAME}}</div>





    <el-button type="" @click="select_limit_10_do">select_limit_10_do</el-button>

limit_10
<div 
  :key="item" v-for="item in limit_10">
   <!-- {{item}} -->

   <span v-for="ii in  item">
    {{ii}}
   </span>
 </div>
 <el-button type="" @click="getList">getList</el-button>
 

 <el-table
       
        v-loading="loading"
        :data="checkLogList"
        :render-header="labelHead"
        :border="true"
      >
        <el-table-column
          :label="item"
          v-for="(item, index) in header"
          :key="item"
          align="center"
        >
        item
        {{item}}

          <template slot-scope="scope">

            <!-- item -->
            <div :key="itemIdx" v-for="(item,itemIdx) in scope.row">
              <!-- {{item}}
            {{  item[itemIdx]}}
            {{  item[0]}} -->
            <span @click="cellGet(item2,item,scope.row)"
              v-for="(item2, index2) in item"
              v-if="index2 == index"
              :key ="index2"
            >
              {{ item[index2] }}
            </span>
            </div>

            <!-- <span
              v-for="(item2, index2) in scope.row.countd"
              v-if="index2 == index"
            >
              {{ scope.row.countd[index2] }}
            </span>
            <span
              v-for="(item2, index2) in scope.row.countp"
              v-if="index2 == index"
            >
              {{ scope.row.countp[index2] }}
            </span>
            <span
              v-for="(item2, index2) in scope.row.principalPrice"
              v-if="index2 == index"
            >
              {{ scope.row.principalPrice[index2] }}
            </span> -->
          </template>
        </el-table-column>
      </el-table>

      <!-- <table border="1">
<tr>
      <td>1</td>
<td>admin</td>
<td>姜子牙</td>
<td>4</td>
<td>1620118058000</td>
<td>7</td>
<td>3</td>
<td>11111111</td>
<td>111111111</td>
<td>1</td>
</tr>
</table> -->

<div v-html="tableCode"></div>
  </div>
</template>

<script>
import CountTo from "vue-count-to";
import dashboardApi from "@/api/dashboard";
// import select_table_name_list from '@/api/all'
import allApi from "@/api/all";
import {genTableCode} from "@/utils/CodeGenUtil";

export default {
  mixins: [],
  components: {
    CountTo,
  },
  data() {
    return {
      checkLogList:[],
      limit_10:[],
      information_schema_columns:[],
      table_name_list: [],
      examPaperCount: 0,
      questionCount: 0,
      doExamPaperCount: 0,
      doQuestionCount: 0,
      echartsUserAction: null,
      echartsQuestion: null,
      loading: false,
      TableName: null,
      tableCode: null,
    };
  },
  mounted() {
    this.select_table_name_list_do();
    // allApi.
    // select_table_name_list({}).then(res=>{
    //   console.log("res select_table_name_list");
    //   console.log(res);
    // })
  },
  methods: {

    /** 查询列表 */
    getList(data) {
      this.loading = true;
      this.wideTable = true;
      this.header = [];
      // for(let o of limit_10){

      // }
      this.checkLogList = [
        // { header: ["", "第一季度", "第二季度", "第三季度", "第四季度"] },
        { countd: ["户数", "1", "2", "3", "4"] },
        { countp: ["包数", "5", "6", "7", "8"] },
        { principalPrice: ["本金金额", "9", "10", "11", "12"] },
      ];
      this.header = ["", "第一季度", "第二季度", "第三季度", "第四季度"];
      this.loading = false;
    },
    labelHead(h, { column, index }) {
      //动态表头渲染
      //let l = column.label.length;
      //let f = 12; //每个字大小,其实是每个字的比例值,大概会比字体大小打差不多大
      //column.minWidth = f * l; //字大小乘个数即长度 ,注意不要加px像素，这里minWidth只是一个比例值，不是真正的长度
      //然后将列标题放在一个div块中，注意块的宽度一定要100%，否则表格显示不完全
      return h("span", { class: "table-head", style: { width: "100%" } }, [
        column.label,
      ]);
    },


    select_limit_10_do(){

allApi.  select_limit_10({
  "tableName": this.TableName,
}).then(res=>{
    console.log("res select_limit_10");
    console.log(res);
    this.limit_10 = res. response
  let tableCode=   genTableCode(this.limit_10)
  this.tableCode=tableCode
  console.log("tableCode");
  console.log(tableCode);

 })
},


    select_information_schema_columns_do() {
      allApi.select_information_schema_columns({
        "tableName": this.TableName,
      }).then((res) => {
        console.log("res select_information_schema_columns");
        console.log(res);
        this.information_schema_columns = res.response;

        this.select_limit_10_do()
      });
    },

    select_table_name_list_do() {
      allApi.select_table_name_list({}).then((res) => {
        console.log("res select_table_name_list");
        console.log(res);
        this.table_name_list = res.response;
      });
    },
    cellGet(cell,row,all){
      console.log('cell');
console.log(cell);
console.log('row');
console.log(row);
console.log('all');
console.log(all);

    },

    changeTableName(TableName) {
      this.TableName = TableName.table_name;
      this.select_information_schema_columns_do()
    },
    option(title, formatter, label, vaule) {
      return {
        title: {
          text: title,
          x: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: formatter,
        },
        xAxis: {
          type: "category",
          data: label,
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: vaule,
            type: "line",
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}

.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}

.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3;
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}

.echarts-line {
  background: #fff;
  padding: 16px 16px 0;
  margin-bottom: 32px;
}
</style>
