import { post ,postWithQuery} from '@/utils/request'
// import { post } from '@/utils//request'

// import textContentApi from "@/api/textContent";
let apiPreffix=`/api/admin/textContent`
export default {
    list: query => post(`/api/admin/education/subject/list`),
pageList: query => post('/api/admin/education/subject/page', query),
    edit: query => post('/api/admin/education/subject/edit', query),
    save: query => post(`${apiPreffix}/save`, query),
    saveAll: query => post(`${apiPreffix}/saveAll`, query),
    deleteBy: query => post(`${apiPreffix}/deleteBy`, query),
    // selectPageEqual: query => post(`${apiPreffix}/selectPage/equal`, query),
    // selectPageEqual: (query,data) => postWithQuery(`${apiPreffix}/selectPage/equal`, query,data),
    selectPageEqual: (query,data) => postWithQuery(`${apiPreffix}/selectPageEqual`, query,data),
    selectByExample: query => post(`${apiPreffix}/selectByExample`, query),
    // selectPage: query => post(`${apiPreffix}/selectPage`, query),
    selectPage: (query, data) => postWithQuery(`${apiPreffix}/selectPage`, query, data),
    removeByIds: query => post(`${apiPreffix}/removeByIds`, query),
    selectPlusPage: query => post(`${apiPreffix}/selectPlusPage`, query),
    select: id => post('/api/admin/education/subject/select/' + id),
    deleteSubject: id => post('/api/admin/education/subject/delete/' + id)
}
