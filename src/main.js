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

// import Vue from 'vue'
// import App from './App.vue'
// import store from './store'
import VueI18n from 'vue-i18n'
// import element from '@utils/getElementUI'
import { codemirror } from 'vue-codemirror'

// theme
import './assets/css/codemirror.css'
import './assets/css/show-hint.css'
import './assets/css/foldgutter.css'
import './assets/css/codemirror-dialog.css'
import '../public/css/font.css'
import './assets/themes/default.css'
import './assets/css/tern.css'

Vue.config.productionTip = false

/**
 * Determine the preferred language of the current browser
 * 判断当前浏览器的首选语言
 */
function WebLocation () {
  if (jsEcdStore !== null) {
    return store.state.language
  } else {
    return navigator.language === 'zh-CN' ? 'zh' : 'en'
  }
}

// const i18n = new VueI18n({
//   locale: WebLocation(),
//   messages: {
//     zh: require('./language/zh'),
//     en: require('./language/en'),
//   },
// })


const jsEcdStore = sessionStorage.getItem('jsEcdStore')

/**
 * Get state from sessionStorage when page onload
 * 页面加载完之后取出session中储存的配置信息放到VueX中
 */
if (jsEcdStore !== null) {
  const oldState = JSON.parse(jsEcdStore)
  oldState.visibleDialog = ''
  store.replaceState(oldState)
}
Vue.use(Element, {
  size: 'medium' // set element-ui default size
})

Vue
// .use(VueI18n)
.use(codemirror)

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
  // i18n,
  render: h => h(App)
}).$mount('#app')


/**
 * Store state in sessionStorage before page refresh
 * 在刷新页面之前将VueX存储的信息放入sessionStorage
 */
window.onbeforeunload = () => {
  store.commit('updateShowBg', false)
  store.commit('updateCurrentDialog', '')
  sessionStorage.setItem('jsEcdStore', JSON.stringify(store.state))
}