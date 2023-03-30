let
  QuestionType = {
    //   单选
    singleChoice: 1
  }
let allQuesMark = "allQues"

// examPaperAnswer: {
//   statusEnum: [{ key: 1, value: '待批改' }, { key: 2, value: '完成' }],

let examStatusMap = {
  1: "待批改",
  2: "完成",
  '待批改': 1,
  '完成': 2,
  3: "未完成",
  4: "已过期",
  5: "已作废",
  6: "已删除",
  7: "已提交",
  8: "已批改",
  9: "已阅卷",
  10: "已评分",
  11: "已发布",
  12: "已关闭",
  13: "已归档",
  14: "已退回",
  15: "已终止",
  16: "已暂停",
  17: "已启动",
  18: "已完成",
  19: "已取消",
  20: "已拒绝",
  21: "已同意",
  22: "已通过",
  23: "已拒绝",
  24: "已完成",
}

/**
 * 试卷类型( 1固定试卷 4.时段试卷 6.任务试卷)
 */
//  private Integer paperType;

let paperTypeMap = {
  1: "固定试卷",
  4: "时段试卷",
  6: "任务试卷"
}
// let drawUrl= 'http://121.36.20.234:3000/'
// let drawUrl= 'http://localhost:3000/'
// // let expressDemoBaseUrl= 'http://localhost:3001/'


// let drawUrl= 'http://localhost:3000/api/'
// let examUrl= 'http://localhost:8003/api/'
// let expressDemoBaseUrl= 'http://localhost:3001/api/'

// let ip = '43.142.150.223'
let ip = 'localhost'

// starp 服务器 腾讯 
let examPort="8003"


// 121.40.131.82
// cailaoshi
// let ip = '121.40.131.82'
// let examPort="8000"
// let ip = 'localhost'
// let examPort="8004"


// let ip = '43.142.150.223'


let drawUrl = `http://${ip}:3000/api/`
let examUrl = `http://${ip}:${examPort}/api/`
let baseURL =`http://${ip}:${examPort}`
let expressDemoBaseUrl = `http://${ip}:3001/api/`

// let  tenantId="exam";
let tenantId = "public";
let Common = {
  QuestionType,
  allQuesMark,
  drawUrl,
  expressDemoBaseUrl,
  paperTypeMap,
  examUrl,
  tenantId,
  examStatusMap,
  baseURL,
  sysTitle:"中共青田县委党校",
  debug:true
  // sysTitle:"考试系统"
}


export default Common
