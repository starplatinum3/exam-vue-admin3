import { post } from '@/utils/request'

export default {
  pageList: query => post('/api/admin/exam/paper/page', query),
  taskExamPage: query => post('/api/admin/exam/paper/taskExamPage', query),
  edit: query => post('/api/admin/exam/paper/edit', query),
  select: id => post('/api/admin/exam/paper/select/' + id),
  insert: query => post('/api/student/exam/paper/autoInsert', query),
  examInsert: query => post('/api/student/exam/paper/intelligence', query),
  deletePaper: id => post('/api/admin/exam/paper/delete/' + id),
  // insert: query => post('/api/student/exampaper/autoInsert', query),
  // examInsert: query => post('/api/student/exampaper/intelligence', query),
  // insert: query => post('/api/student/exampaper/autoInsert', query),
  // examInsert: query => post('/api/student/exampaper/intelligence', query),
}
