// import { post } from '@/utils/request'

import { post ,postWithQuery} from '@/utils/request'
// import examPaperAnswerApi from "@/api/examPaperAnswer";
// let apiPreffix=`/api/admin/examPaperAnswer`
let apiPreffix=`/api/examPaperAnswer`

export default {
  page: query => post('/api/admin/examPaperAnswer/page', query),
  pageList: query => post('/api/student/exampaper/answer/pageList', query),
  answerSubmit: form => post('/api/student/exampaper/answer/answerSubmit', form),
  read: id => post('/api/student/exampaper/answer/read/' + id),
  edit: form => post('/api/student/exampaper/answer/edit', form),
  save: (query, data) => postWithQuery(`${apiPreffix}/save`, query, data),
  saveAll: (query, data) => postWithQuery(`${apiPreffix}/saveAll`, query, data),
  deleteBy: (query, data) => postWithQuery(`${apiPreffix}/deleteBy`, query, data),
  selectPageEqual: (query, data) => postWithQuery(`${apiPreffix}/selectPageEqual`, query, data),
  selectByExample: (query, data) => postWithQuery(`${apiPreffix}/selectByExample`, query, data),
  selectPage: (query, data) => postWithQuery(`${apiPreffix}/selectPage`, query, data),
  removeByIds: (query, data) => postWithQuery(`${apiPreffix}/removeByIds`, query, data),
  selectPlusPage: (query, data) => postWithQuery(`${apiPreffix}/selectPlusPage`, query, data),
  select: (query, data) => postWithQuery(`${apiPreffix}/select`, query, data),
  selectPageByCreateUserName: (query, data) => postWithQuery(`${apiPreffix}/selectPageByCreateUserName`, query, data),
  StatisticsPaperScoreOfUser: (query, data) => postWithQuery(`${apiPreffix}/StatisticsPaperScoreOfUser`, query, data),
  StatisticsEyesightResOfUser: (query, data) => postWithQuery(`${apiPreffix}/StatisticsEyesightResOfUser`, query, data),

  selectByExamPaperId: (query, data) => postWithQuery(`${apiPreffix}/selectByExamPaperId`, query, data),
  
  selectByCreateUserId: (query, data) => postWithQuery(`${apiPreffix}/selectByCreateUserId`, query, data),

  
}
