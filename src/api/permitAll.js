import { post } from '@/utils/request'

export default {
  findAllTextContents: query => post('/api/all/findAllTextContents', query),
  edit: query => post('/api/admin/question/edit', query),
  select: id => post('/api/admin/question/select/' + id),
  deleteQuestion: id => post('/api/admin/question/delete/' + id),
  insertBatch: query => post('/api/admin/question/insertBatch/' ,query)
}
