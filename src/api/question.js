// import { post } from '@/utils/request'


import { post ,postWithQuery} from '@/utils/request'
// import questionApi from "@/api/question";
let apiPreffix=`/api/admin/question`

export default {
  // textContent 有的 
  /**
   * 
    private Integer id;
    private Integer level;
    private Integer subjectId;
    private Integer questionType;
   * @param {*} query 
   * @returns 
   */
  pageList: query => post('/api/admin/question/page', query),
  edit: query => post('/api/admin/question/edit', query),
  select: id => post('/api/admin/question/select/' + id),
  deleteQuestion: id => post('/api/admin/question/delete/' + id),
  insertBatch: query => post('/api/admin/question/insertBatch/' ,query),
  findAllEs: query => post('/api/admin/question/findAllEs/' ,query),

  
  save: (query, data) => postWithQuery(`${apiPreffix}/save`, query, data),
  autoPaper: (data) => post('/api/admin/question/autoPaper',data),
  saveAll: (query, data) => postWithQuery(`${apiPreffix}/saveAll`, query, data),
  deleteBy: (query, data) => postWithQuery(`${apiPreffix}/deleteBy`, query, data),
  selectPageEqual: (query, data) => postWithQuery(`${apiPreffix}/selectPageEqual`, query, data),
  selectByExample: (query, data) => postWithQuery(`${apiPreffix}/selectByExample`, query, data),
  selectPage: (query, data) => postWithQuery(`${apiPreffix}/selectPage`, query, data),
  removeByIds: (query, data) => postWithQuery(`${apiPreffix}/removeByIds`, query, data),
  selectPlusPage: (query, data) => postWithQuery(`${apiPreffix}/selectPlusPage`, query, data),
  // select: (query, data) => postWithQuery(`${apiPreffix}/select`, query, data),
}

