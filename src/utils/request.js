import axios from 'axios'
import vue from 'vue'
import Common from './Common'
import StringUtil from './StringUtil'
// let  baseUrl = 'http://43.142.150.223:8003'
let  baseUrl = 'http://localhost:8003'
const request = function (loadtip, query) {
  let loading
  if (loadtip) {
    loading = vue.prototype.$loading({
      lock: false,
      text: '正在加载中…',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.5)'
    })
  }
  // let  baseUrl = 'http://localhost:8003'
  // let  baseUrl = 'http://43.142.150.223:8003'
  query. baseURL=baseUrl
  return axios.request(query)
    .then(res => {
      // console.log("axios 内部");
      // console.log(res);
      if (loadtip) {
        loading.close()
      }
      if (res.data.code === 401) {
        vue.prototype.$$router.push({ path: '/login' })
        return Promise.reject(res.data)
      } else if (res.data.code === 500) {
        return Promise.reject(res.data)
      } else if (res.data.code === 501) {
        return Promise.reject(res.data)
      } else if (res.data.code === 502) {
        vue.prototype.$$router.push({ path: '/login' })
        return Promise.reject(res.data)
      } else {
        return Promise.resolve(res.data)
      }
    })
    .catch(e => {
      if (loadtip) {
        loading.close()
      }
      vue.prototype.$message.error(e.message)
      return Promise.reject(e.message)
    })
}

const post = function (url, params) {
  // console.log("process.env.VUE_APP_URL");
  // console.log(process.env.VUE_APP_URL);
  let baseURL= process.env.VUE_APP_URL||baseUrl
  // console.log("baseURL");
  // console.log(baseURL);
  // base="http://localhost:8002/"
  // baseURL="http://localhost:8003"
  // console.log("baseURL");
  // console.log(baseURL);
  // let  tenantId="companyb";
  // let  tenantId="exam";

  // Common.tenantId
  const query = {
    baseURL:baseURL,
    url: url,
    method: 'post',
    withCredentials: true,
    timeout: 30000,
    data: params,
    headers: { 'Content-Type': 'application/json', 'request-ajax': true
  ,"x-tenant-id":Common.tenantId }
  }
  // console.log("query");
  // console.log(query);
  return request(false, query)
}


const postWithQuery = function (url,queryObj, params) {
  // console.log("queryObj");
  // console.log(queryObj);
  let  queryStr= StringUtil.queryObjToPathStr(queryObj)
  // console.log("process.env.VUE_APP_URL");
  // console.log(process.env.VUE_APP_URL);
  let baseURL= process.env.VUE_APP_URL||baseUrl
  // console.log("baseURL");
  // console.log(baseURL);
  // base="http://localhost:8002/"
  // baseURL="http://localhost:8003"
  // console.log("baseURL");
  // console.log(baseURL);
 
  const query = {
    baseURL:baseURL,
    url: `${url}${queryStr}`,
    method: 'post',
    withCredentials: true,
    timeout: 30000,
    data: params,
    headers: { 'Content-Type': 'application/json', 'request-ajax': true
    ,"x-tenant-id":Common.tenantId }
  }
  // console.log("query");
  // console.log(query);
  return request(false, query)
}

const postWithLoadTip = function (url, params) {
  const query = {
    baseURL: process.env.VUE_APP_URL,
    url: url,
    method: 'post',
    withCredentials: true,
    timeout: 30000,
    data: params,
    headers: { 'Content-Type': 'application/json', 'request-ajax': true
    ,"x-tenant-id":Common.tenantId }
  }
  console.log("query");
  console.log(query);
  return request(true, query)
}

const postWithOutLoadTip = function (url, params) {
  const query = {
    baseURL: process.env.VUE_APP_URL,
    url: url,
    method: 'post',
    withCredentials: true,
    timeout: 30000,
    data: params,
    headers: { 'Content-Type': 'application/json', 'request-ajax': true }
  }
  return request(false, query)
}

const get = function (url, params) {
  const query = {
    baseURL: process.env.VUE_APP_URL,
    url: url,
    method: 'get',
    withCredentials: true,
    timeout: 30000,
    params: params,
    headers: { 'request-ajax': true }
  }
  return request(false, query)
}

const form = function (url, params) {
  const query = {
    baseURL: process.env.VUE_APP_URL,
    url: url,
    method: 'post',
    withCredentials: true,
    timeout: 30000,
    data: params,
    headers: { 'Content-Type': 'multipart/form-data', 'request-ajax': true }
  }
  return request(false, query)
}

export {
  post,
  postWithLoadTip,
  postWithOutLoadTip,
  get,
  form,
  postWithQuery
}
