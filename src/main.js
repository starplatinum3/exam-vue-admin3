import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import 'normalize.css/normalize.css'
import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css
import './icons' // icon
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

Vue.use(Element, {
  size: 'medium' // set element-ui default size
})


import jsPlumb from 'jsplumb'
Vue.prototype.$jsPlumb = jsPlumb.jsPlumb
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import {fas} from '@fortawesome/free-solid-svg-icons'
library.add(fas)

// import './index.css'

// import { library } from '@fontawesome/fontawesome-svg-core'
//
// /* import font awesome icon component */
// import { FontAwesomeIcon } from '@fontawesome/vue-fontawesome'
//
// /* import specific icons */
// import { faUserSecret } from '@fontawesome/free-solid-svg-icons'

/* add icons to the library */
// library.add(faUserSecret)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
// import  'axios' from  axios
import  axios from  'axios'
// 如果后台要求cookies的话，一定要把axios.default.withCredentials设置为true
axios.default.withCredentials=true
// axios 配置

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  // start progress bar
  if(to=="/test/DbManager"){
    next()
    return
  }
  NProgress.start()
  if (to.meta.title !== undefined) {
    document.title = to.meta.title
  } else {
    document.title = '\u200E'
  }
  store.commit('router/initRoutes')

  if (to.path) {
    // eslint-disable-next-line no-undef
    _hmt.push(['_trackPageview', '/#' + to.fullPath])
  }

  next()
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

Vue.prototype.$$router = router

// 引入jshint用于实现js自动补全提示 

// import jshint from "jshint";

// window.JSHINT = jshint.JSHINT;

// 引入代码编辑器 

// import { codemirror } from "vue-codemirror";

// import "codemirror/lib/codemirror.css";

// import App from "./app/App"

// ...略

// Vue.use(ElementUI);

// Vue.use(codemirror);

// ...略

new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount('#app')
