import { post } from '@/utils/request'

export default {
  select_table_name_list: (data) => post('/api/all/SELECT_table_name_list',data),
  testPaper: (data) => post('/api/all/testPaper',data),
  
  autoPaperByRule: (data) => post('/api/all/autoPaperByRule',data),

  select_information_schema_columns: (data) => post('/api/all/select_information_schema_columns',data),
  select_limit_10: (data) => post('/api/all/select_limit_10',data),
  select_by_content_like: (data) => post('/api/all/select_by_content_like',data),
  selectBySql: (data) => post('/api/all/selectBySql',data),
  selectPageEqual: (data) => post('/api/admin/question/selectPage/equal',data),
  // "/api/admin/question
  // /selectPage/equal
  findAllEsQuestion: (data) => post('/api/all/findAllEsQuestion',data),
  insert_into_batch_null_id: (data) => post('/api/all/insert_into_batch_null_id',data),
  StatisticsPaperScore: (data) => post('/api/all/StatisticsPaperScore',data),

  
  

}
