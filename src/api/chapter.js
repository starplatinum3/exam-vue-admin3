import { post } from '@/utils/request'

export default {
  list: query => post('/api/admin/chapter/list'),
  pageList: query => post('/api/admin/chapter/page', query),
  edit: query => post('/api/admin/chapter/edit', query),
  select: id => post('/api/admin/chapter/select/' + id),
  deleteChapter: id => post('/api/admin/chapter/delete/' + id)
}
