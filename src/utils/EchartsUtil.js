
// import 
export function  showEchartsById(names, datas,showStuEchartsId) {
  // D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\utils\EchartsUtil.js
    console.log("names");
    console.log(names);
    console.log("datas");
    console.log(datas);
    // 基于准备好的dom，初始化echarts实例
    // var myChart = echarts.init(document.getElementById("showStuEcharts"));
    var myChart = echarts.init(document.getElementById(showStuEchartsId));
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: "学生成绩统计",
      },
      tooltip: {},
      legend: {
        data: ["成绩"],
      },
      // TODO:待补充修改代码，定义x轴数据,并让数据正确显示
      xAxis: {
        // data: ["张三", "李四", "王五", "贺八", "杨七", "陈九"],
        data: names,
      },
      // y轴
      yAxis: {},
      series: [
        {
          name: "成绩",
          type: "bar",
          // data: [55, 90, 65, 70, 80, 63],
          data: datas,
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }


  
// import 
/**
 *   names=conf.names;
  datas=conf.datas;
  let  echartsId=conf.echartsId;
conf.title,
 conf.valName,
 * @param {*} conf 
 * @param {*} names 
 * @param {*} datas 
 * @param {*} showStuEchartsId 
 */
//  names, datas,showStuEchartsId
export function  showEchartsByConf(conf,) {
  // D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\utils\EchartsUtil.js
 let names=conf.names;
 let  datas=conf.datas;
  let  echartsId=conf.echartsId;
    console.log("names");
    console.log(names);
    console.log("datas");
    console.log(datas);
    // 基于准备好的dom，初始化echarts实例
    // var myChart = echarts.init(document.getElementById("showStuEcharts"));
    var myChart = echarts.init(document.getElementById(echartsId));
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: conf.title,
      },
      tooltip: {},
      legend: {
        data: ["成绩"],
      },
      // TODO:待补充修改代码，定义x轴数据,并让数据正确显示
      xAxis: {
        // data: ["张三", "李四", "王五", "贺八", "杨七", "陈九"],
        data: names,
      },
      // y轴
      yAxis: {},
      series: [
        {
          name: conf.valName,
          type: "bar",
          // data: [55, 90, 65, 70, 80, 63],
          data: datas,
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }


  
// import 
export function  showEchartsByConfSeries(conf,names, datas,showStuEchartsId) {
  // D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\utils\EchartsUtil.js
  names=conf.names;
  datas=conf.datas;
  let  echartsId=conf.echartsId;
    console.log("names");
    console.log(names);
    console.log("datas");
    console.log(datas);
    // 基于准备好的dom，初始化echarts实例
    // var myChart = echarts.init(document.getElementById("showStuEcharts"));
    var myChart = echarts.init(document.getElementById(echartsId));
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: conf.title,
      },
      tooltip: {},
      legend: {
        data: ["成绩"],
      },
      // TODO:待补充修改代码，定义x轴数据,并让数据正确显示
      xAxis: {
        // data: ["张三", "李四", "王五", "贺八", "杨七", "陈九"],
        data: names,
      },
      // y轴
      yAxis: {},
      series: conf.series,
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
