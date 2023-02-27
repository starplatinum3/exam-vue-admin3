<template>
  <div>
    <el-button type="" @click="toEyesightResList">显示测试记录</el-button>
    <div id="test_app">
      <!-- <div></div> -->
      <!--echarts的容器-->
      <div id="main" style="width: 100%; height: 520px; background: #fff"></div>
    </div>
  </div>
</template>
   
  <script>
import * as echarts from "echarts";
import eyesightResApi from "@/api/eyesightRes";
import examPaperAnswerApi from "@/api/examPaperAnswer";

export default {
  name: "",
  data() {
    return {
      charts: "",
      // opinionData: ["155", "400", "900", "800", "300", "900", "270"], //数据
      // opinionData: ["5.3", "5.3", "5.3", "5.3",  "5.3", "5.3", "5.3"], //数据

      // opinionData: ["5.3", "5.3", "5.3", "5.3",  "5.2", 5.2, 5.2], //数据
      opinionData: ["5.3", "5.3", "5.3", "5.3", "5.2"], //数据
    };
  },

  methods: {
    toEyesightResList() {
      this.$router.push({ path: "/test/eyesightResList" });
    },
    getData() {
      // eyesightResApi.selectPageEqual
      //       eyesightResApi.selectPageEqual({ pageNumber: 1, pageSize: 10 }, { id: 1 })
      //       .then((res) => {
      //         this.tableData =  res.response.records
      // this.total =res.response.total
      // this.queryParam.pageIndex=res.response.current
      //       })

      let dataPost = {
        createUser: 1,
      };
      // pageNumber:0, 不行
      // pageSize:6
      examPaperAnswerApi
        .StatisticsEyesightResOfUser(
          {
            pageNumber: 1,
            // pageSize:3
            // pageSize:6
            pageSize: 8,
          },
          dataPost
        )
        .then((res) => {
          let resp = res.response;
          console.log("resp StatisticsEyesightResOfUser");
          console.log(resp);
          let d = {
            create_time_str: "2022-02-23",
            left_eyesight: 5,
          };
          let create_time_str_list = resp.map((item) => item.create_time_str);
          let left_eyesight_list = resp.map((item) => item.left_eyesight);

          this.drawLineEyeData(
            "main",
            create_time_str_list,
            left_eyesight_list
          );
        });

      // eyesightResApi.selectPlusPage().then(res => {
      //   console.log(res);
      //   this.opinionData = res.data;
      //   this.drawLine("main");
      // }
    },
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id));

      let eyeData = {
        title: {
          left: "3%",
          top: "5%",
          text: "视力变化", //标题文本，支持使用 \n 换行。
          // text: "最近一周订单数量", //标题文本，支持使用 \n 换行
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          align: "right", //文字在前图标在后
          left: "3%",
          top: "15%",
          // data: ["近一周"],
          data: ["视力"],
        },
        grid: {
          top: "30%",
          left: "5%",
          right: "5%",
          bottom: "5%",
          containLabel: true,
        },

        toolbox: {
          feature: {
            saveAsImage: {}, //保存为图片
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          axisTick: {
            alignWithLabel: true, //保证刻度线和标签对齐
          },
          // data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"], //x坐标的名称
          // data: ["2022-1-15", "2022-4-15", "2022-7-15", "2022-10-15",
          // "2023-1-15",
          // "2023-4-15", "2023-7-15"],
          data: [
            "2022-1-15",
            "2022-4-15",
            "2022-7-15",
            "2022-10-15",
            "2023-1-15",
          ],
        },
        yAxis: {
          type: "value",
          boundaryGap: true,
          splitNumber: 4, //纵坐标数
          interval: 250, //强制设置坐标轴分割间隔
        },

        series: [
          {
            // name: "近一周",
            name: "近年来",
            type: "line", //折线图line;柱形图bar;饼图pie
            stack: "总量",
            areaStyle: {
              //显示区域颜色---渐变效果
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgb(255,200,213)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#ffffff", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            itemStyle: {
              color: "rgb(255,96,64)", //改变折线点的颜色
              lineStyle: {
                color: "rgb(255,96,64)", //改变折线颜色
              },
            },
            data: this.opinionData,
          },
        ],
      };
      let saleData = {
        title: {
          left: "3%",
          top: "5%",
          text: "视力变化", //标题文本，支持使用 \n 换行。
          // text: "最近一周订单数量", //标题文本，支持使用 \n 换行
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          align: "right", //文字在前图标在后
          left: "3%",
          top: "15%",
          // data: ["近一周"],
          data: ["视力"],
        },
        grid: {
          top: "30%",
          left: "5%",
          right: "5%",
          bottom: "5%",
          containLabel: true,
        },

        toolbox: {
          feature: {
            saveAsImage: {}, //保存为图片
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          axisTick: {
            alignWithLabel: true, //保证刻度线和标签对齐
          },
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"], //x坐标的名称
        },
        yAxis: {
          type: "value",
          boundaryGap: true,
          splitNumber: 4, //纵坐标数
          interval: 250, //强制设置坐标轴分割间隔
        },

        series: [
          {
            name: "近一周",
            type: "line", //折线图line;柱形图bar;饼图pie
            stack: "总量",
            areaStyle: {
              //显示区域颜色---渐变效果
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgb(255,200,213)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#ffffff", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            itemStyle: {
              color: "rgb(255,96,64)", //改变折线点的颜色
              lineStyle: {
                color: "rgb(255,96,64)", //改变折线颜色
              },
            },
            data: this.opinionData,
          },
        ],
      };
      this.charts.setOption(eyeData);
    },
    drawLineEyeData(id, create_time_str_list, left_eyesight_list) {
      this.charts = echarts.init(document.getElementById(id));

      let eyeData = {
        title: {
          left: "3%",
          top: "5%",
          text: "视力变化", //标题文本，支持使用 \n 换行。
          // text: "最近一周订单数量", //标题文本，支持使用 \n 换行
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          align: "right", //文字在前图标在后
          left: "3%",
          top: "15%",
          // data: ["近一周"],
          data: ["视力"],
        },
        grid: {
          top: "30%",
          left: "5%",
          right: "5%",
          bottom: "5%",
          containLabel: true,
        },

        toolbox: {
          feature: {
            saveAsImage: {}, //保存为图片
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          axisTick: {
            alignWithLabel: true, //保证刻度线和标签对齐
          },
          // data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"], //x坐标的名称
          // data: ["2022-1-15", "2022-4-15", "2022-7-15", "2022-10-15",
          // "2023-1-15",
          // "2023-4-15", "2023-7-15"],
          data: create_time_str_list,
        },
        yAxis: {
          type: "value",
          boundaryGap: true,
          splitNumber: 4, //纵坐标数
          interval: 250, //强制设置坐标轴分割间隔
        },

        series: [
          {
            // name: "近一周",
            name: "近年来",
            type: "line", //折线图line;柱形图bar;饼图pie
            stack: "总量",
            areaStyle: {
              //显示区域颜色---渐变效果
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgb(255,200,213)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#ffffff", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            itemStyle: {
              color: "rgb(255,96,64)", //改变折线点的颜色
              lineStyle: {
                color: "rgb(255,96,64)", //改变折线颜色
              },
            },
            data: left_eyesight_list,
          },
        ],
      };

      this.charts.setOption(eyeData);
    },
  },
  //调用
  mounted() {
    this.$nextTick(function () {
      this.drawLine("main");
      this.getData();
    });
  },
};
</script>
   
  <style scoped>
.test_app {
  background-color: #fff;
  /* rgb(168, 22, 22) */
}
/* * {
  margin: 0;
  padding: 0;
  list-style: none;
} */
</style>