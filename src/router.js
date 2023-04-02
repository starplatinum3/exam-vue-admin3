import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/views/login/index'),
    meta: { title: '登录' }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '主页', icon: 'home', affix: true }
      }
    ]
  },
  // http://localhost:8002/#/exam/paper/Statistics?examPaperId=96
  {
    path: '/user',
    component: Layout,
    name: 'UserPage',
    meta: {
      title: '用户管理',
      icon: 'users'
    },
    children: [
      {
        path: 'student/list',
        component: () => import('@/views/user/student/list'),
        name: 'UserStudentPageList',
        meta: { title: '学生列表', noCache: true }
      },
      {
        path: 'student/edit',
        component: () => import('@/views/user/student/edit'),
        name: 'UserStudentEdit',
        meta: { title: '学生编辑', noCache: true, activeMenu: '/user/student/list' },
        hidden: true
      },
      {
        path: 'admin/list',
        component: () => import('@/views/user/admin/list'),
        name: 'UserAdminPageList',
        meta: { title: '管理员列表', noCache: true }
      },
      {
        path: 'admin/edit',
        component: () => import('@/views/user/admin/edit'),
        name: 'UserAdminEdit',
        meta: { title: '管理员编辑', noCache: true, activeMenu: '/user/admin/list' },
        hidden: true
      }
    ]
  },
  {
    path: '/exam',
    component: Layout,
    name: 'ExamPage',
    meta: {
      title: '卷题管理',
      icon: 'exam'
    },
    children: [
      // D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\EditExamRecord.vue
      {
        path: 'EditExamRecord',
        component: () => import('@/views/EditExamRecord'),
        name: 'EditExamRecord',
        meta: { title: 'EditExamRecord', noCache: true }
      },
      // D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\EditExamRecord.vue
      {
        path: 'paper/list',
        component: () => import('@/views/exam/paper/list'),
        name: 'ExamPaperPageList',
        meta: { title: '试卷列表', noCache: true }
      },
      {
        path: 'paper/edit',
        component: () => import('@/views/exam/paper/edit'),
        name: 'ExamPaperEdit',
        meta: { title: '试卷编辑', noCache: true, activeMenu: '/exam/paper/list' },
        hidden: true
      },
      
      {
        path: 'question/list',
        component: () => import('@/views/exam/question/list'),
        name: 'ExamQuestionPageList',
        meta: { title: '题目列表', noCache: true }
      },
      {
        path: 'paper/Statistics',
        component: () => import('@/views/exam/paper/Statistics'),
        name: 'Statistics',
        meta: { title: 'Statistics paper', noCache: true, activeMenu: '/exam/paper/list' },
        hidden: true
      },

      {
        path: "question/TextContent",
        component: () => import('@/views/exam/question/TextContent'),
        name: 'TextContent',
        meta: { title: 'TextContent', noCache: true }
      },
      {
        path: "question/select_by_content_like",
        component: () => import('@/views/exam/question/select_by_content_like'),
        name: '内容查找',
        // select_by_content_like
        meta: { title: '内容查找', 
        noCache: false }
      },
      {
        path: 'DrawIo',
        component: () => import('@/views/DrawIo'),
        name: 'DrawIo',
        meta: { title: 'DrawIo', noCache: true, activeMenu: '/DrawIo' },
        // hidden: true
      },
    
      {
        path: 'question/edit/singleChoice',
        component: () => import('@/views/exam/question/edit/single-choice'),
        name: 'singleChoicePage',
        meta: { title: '单选题编辑', noCache: true, activeMenu: '/exam/question/list' },
        hidden: true
      },
      {
        path: 'question/edit/multipleChoice',
        component: () => import('@/views/exam/question/edit/multiple-choice'),
        name: 'multipleChoicePage',
        meta: { title: '多选题编辑', noCache: true, activeMenu: '/exam/question/list' },
        hidden: true
      },
      {
        path: 'question/edit/trueFalse',
        component: () => import('@/views/exam/question/edit/true-false'),
        name: 'trueFalsePage',
        meta: { title: '判断题编辑', noCache: true, activeMenu: '/exam/question/list' },
        hidden: true
      },
      {
        path: 'question/edit/gapFilling',
        component: () => import('@/views/exam/question/edit/gap-filling'),
        name: 'gapFillingPage',
        meta: { title: '填空题编辑', noCache: true, activeMenu: '/exam/question/list' },
        hidden: true
      },
      
      {
        path: 'question/edit/batch-input',
        component: () => import('@/views/exam/question/edit/batch-input'),
        name: 'batch-input',
        meta: { title: '批量插入', noCache: true, activeMenu: '/exam/question/list' },
        hidden: true
      },
      {
        path: 'question/edit/shortAnswer',
        component: () => import('@/views/exam/question/edit/short-answer'),
        name: 'shortAnswerPage',
        meta: { title: '简答题编辑', noCache: true, activeMenu: '/exam/question/list' },
        hidden: true
      }
    ]
  },

  // DbManager
  {
    path: '/test',
    component: Layout,
    // component: () => import('@/views/test/test'),
    name: 'test',
    meta: {
      title: 'test',
      icon: 'task'
    },
    alwaysShow: true,
    children: [
      {
        path: 'test',
        component: () => import('@/views/test/test'),
        // component: () => import('@/views/dashboard/index'),
        name: 'test',
        meta: { title: 'test', icon: 'home', affix: true }
      },
      {
        path: 'G6EditorTest',
        component: () => import('@/views/G6EditorTest'),
        // component: () => import('@/views/dashboard/index'),
        name: 'G6EditorTest',
        meta: { title: 'G6EditorTest', icon: 'home', affix: true }
      },
      {
        path: 'JsPlumbTest',
        component: () => import('@/views/JsPlumbTest'),
        name: 'JsPlumbTest',
        meta: { title: 'JsPlumbTest', icon: 'home', affix: true }
      },
      {
        path: 'G6EditorMove',
        component: () => import('@/views/G6EditorMove'),
        name: 'G6EditorMove',
        meta: { title: 'G6EditorMove', icon: 'home', affix: true }
      },
      // D:\proj\bishe\exam-vue-admin3\src\views\WebSocketTest.vue
      {
        path: 'WebSocketTest',
        component: () => import('@/views/WebSocketTest'),
        name: 'WebSocketTest',
        meta: { title: 'WebSocketTest', icon: 'home', affix: true }
      },
      // D:\proj\bishe\exam-vue-admin3\src\views\MyScrollTest.vue
      // {
      //   path: 'MyScrollTest',
      //   component: () => import('@/views/MyScrollTest'),
      //   name: 'MyScrollTest',
      //   meta: { title: 'MyScrollTest', icon: 'home', affix: true }
      // },
      {
        path: 'EyesightResList',
        component: () => import('@/views/EyesightResList'),
        name: 'EyesightResList',
        meta: { title: 'EyesightResList', icon: 'home', affix: true }
      },
      // D:\proj\bishe\exam-vue-admin3\src\views\EyesightResList.vue
      {
        path: 'EchartsShow',
        component: () => import('@/views/EchartsShow'),
        name: 'EchartsShow',
        meta: { title: 'EchartsShow', icon: 'home', affix: true }
      },
      {
        path: 'EchartsShowEyesight',
        component: () => import('@/views/EchartsShowEyesight'),
        name: 'EchartsShowEyesight',
        meta: { title: 'EchartsShowEyesight', icon: 'home', affix: true }
      },
      // D:\proj\bishe\exam-vue-admin3\src\views\EchartsShowEyesight.vue
      // EchartsShow.vue
      // D:\proj\bishe\exam-vue-admin3\src\views\G6EditorMove.vue
      {
        path: 'G6Tree',
        component: () => import('@/views/G6Tree'),
        name: 'G6Tree',
        meta: { title: 'G6Tree', icon: 'home', affix: true }
      },
      // D:\proj\bishe\exam-vue-admin3\src\views\G6Tree.vue
      // JsPlumbTest
      // D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\G6EditorTest.vue
      {
        path: 'DragDiv',
        component: () => import('@/views/DragDiv'),
        // component: () => import('@/views/dashboard/index'),
        name: 'DragDiv',
        meta: { title: 'DragDiv', icon: 'home', affix: true }
      },
      {
        path: 'CodeMirrorEditorTest',
        component: () => import('@/views/CodeMirrorEditorTest'),
        name: 'CodeMirrorEditorTest',
        meta: { title: 'CodeMirrorEditorTest', icon: 'home', affix: true }
      },
      {
        path: 'GraphEditorIframe',
        component: () => import('@/views/GraphEditorIframe'),
        name: 'GraphEditorIframe',
        meta: { title: 'GraphEditorIframe', icon: 'home', affix: true }
      },
      {
        path: 'CodeMirrorUtilTest',
        component: () => import('@/views/CodeMirrorUtilTest'),
        name: 'CodeMirrorUtilTest',
        meta: { title: 'CodeMirrorUtilTest', icon: 'home', affix: true }
      },
      {
        path: 'G6TreeAdd',
        component: () => import('@/views/G6TreeAdd'),
        name: 'G6TreeAdd',
        meta: { title: 'G6TreeAdd', icon: 'home', affix: true }
      },
      // D:\proj\bishe\exam-vue-admin3\src\views\G6TreeAdd.vue
      // JsEditor.vue
      {
        path: 'JsEditor',
        component: () => import('@/views/JsEditor'),
        name: 'JsEditor',
        meta: { title: 'JsEditor', icon: 'home', affix: true }
      },
      {
        path: 'Instance',
        component: () => import('@/views/Instance'),
        name: 'Instance',
        meta: { title: 'Instance', icon: 'home', affix: true }
      },
       {
        path: 'JsonEditor2',
        component: () => import('@/views/JsonEditor2'),
        name: 'JsonEditor2',
        meta: { title: 'JsonEditor2', icon: 'home', affix: true }
      },
      // JsonEditor2
      // D:\proj\bishe\exam-vue-admin3\src\views\Instance.vue
      // D:\proj\bishe\exam-vue-admin3\src\views\CodeMirrorEditorBlackTest.vue
      // D:\proj\bishe\exam-vue-admin3\src\views\JsonEditor.vue
      // {
      //   path: 'JsonEditor',
      //   component: () => import('@/views/JsonEditor'),
      //   name: 'JsonEditor',
      //   meta: { title: 'JsonEditor', icon: 'home', affix: true }
      // },
      // D:\proj\bishe\exam-vue-admin3\src\views\JsonEditorTest.vue
      {
        path: 'JsonEditorTest',
        component: () => import('@/views/JsonEditorTest'),
        name: 'JsonEditorTest',
        meta: { title: 'JsonEditorTest', icon: 'home', affix: true }
      },
      {
        path: 'CodeMirrorEditorBlackTest',
        component: () => import('@/views/CodeMirrorEditorBlackTest'),
        name: 'CodeMirrorEditorBlackTest',
        meta: { title: 'CodeMirrorEditorBlackTest', icon: 'home', affix: true }
      },
      {
        path: 'CodeMirrorG6',
        component: () => import('@/views/CodeMirrorG6'),
        name: 'CodeMirrorG6',
        meta: { title: 'CodeMirrorG6', icon: 'home', affix: true }
      },
      // D:\proj\bishe\exam-vue-admin3\src\views\CodeMirrorG6.vue
      // GraphEditorIframe
      // D:\proj\bishe\exam-vue-admin3\src\views\CodeMirrorUtilTest.vue
      {
        path: 'PythonEditor',
        component: () => import('@/views/PythonEditor'),
        name: 'PythonEditor',
        meta: { title: 'PythonEditor', icon: 'home', affix: true }
      },
      // D:\proj\bishe\exam-vue-admin3\src\views\PythonEditor.vue
      // D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\DragDiv.vue
      {
        path: 'FlowChart',
        component: () => import('@/views/FlowChart'),
        name: 'FlowChart',
        meta: { title: 'FlowChart', icon: 'home', affix: true }
      },
      // {
      //   path: 'BusinessFlowChart',
      //   component: () => import('@/views/BusinessFlowChart'),
      //   name: 'BusinessFlowChart',
      //   meta: { title: 'BusinessFlowChart', icon: 'home', affix: true }
      // },
      // D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\BusinessFlowChart.vue
      // D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\FlowChart.vue
      {
        path: 'LatexDisplay',
        component: () => import('@/views/LatexDisplay'),
        name: 'LatexDisplay',
        meta: { title: 'LatexDisplay', icon: 'home', affix: true }
      },
      // D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\LatexDisplay.vue
      // D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\DataImport.vue
      {
        path: 'DataImport',
        component: () => import('@/views/DataImport'),
        name: 'DataImport',
        meta: { title: 'DataImport', icon: 'home', affix: true }
      },
      {
        path: 'DbManager',
        component: () => import('@/views/DbManager/index'),
        name: 'DbManager',
        meta: { title: 'DbManager', icon: 'home', affix: true }
      },
      {
        path: 'WangEdiorFormula',
        component: () => import('@/views/WangEdiorFormula'),
        name: 'WangEdiorFormula',
        meta: { title: 'WangEdiorFormula', icon: 'home', affix: true }
      },
      {
        path: 'CodeMirrorItTest',
        component: () => import('@/views/CodeMirrorItTest'),
        name: 'CodeMirrorItTest',
        meta: { title: 'CodeMirrorItTest', icon: 'home', affix: true }
        // meta: { title: 'CodeMirrorItTest', noCache: true, activeMenu: '/CodeMirrorItTest' },
        // hidden: true
      },
      

      {
        path: 'CodeMirrorTest',
        component: () => import('@/views/CodeMirrorTest'),
        name: 'CodeMirrorTest',
        meta: { title: 'CodeMirrorTest', icon: 'home', affix: true }
      },
      {
        path: 'EditableTable',
        component: () => import('@/views/EditableTable'),
        name: 'EditableTable',
        meta: { title: 'EditableTable', icon: 'home', affix: true }
      },
      {
        path: 'ExamRecord',
        component: () => import('@/views/ExamRecord'),
        name: 'ExamRecord',
        meta: { title: 'ExamRecord', icon: 'home', affix: true }
      },
      {
        path: 'Statistics',
        component: () => import('@/views/Statistics'),
        name: 'ExamRStatisticsecord',
        meta: { title: 'Statistics', icon: 'home', affix: true }
      },
      
      // D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\Statistics.vue
    ]
 
  },

  {
    path: '/task',
    component: Layout,
    name: 'TaskPage',
    meta: {
      title: '任务管理',
      icon: 'task'
    },
    alwaysShow: true,
    children: [
      {
        path: 'list',
        component: () => import('@/views/task/list'),
        name: 'TaskListPage',
        meta: { title: '任务列表', noCache: true }
      },
      {
        path: 'edit',
        component: () => import('@/views/task/edit'),
        name: 'TaskEditPage',
        meta: { title: '任务创建', noCache: true }
      }
    ]
  },
  {
    path: '/education',
    component: Layout,
    name: 'EducationPage',
    meta: {
      title: '教育管理',
      icon: 'education'
    },
    alwaysShow: true,
    children: [
      {
        path: 'subject/list',
        component: () => import('@/views/education/subject/list'),
        name: 'EducationSubjectPage',
        meta: { title: '学科列表', noCache: true }
      },
      {
        path: 'subject/edit',
        component: () => import('@/views/education/subject/edit'),
        name: 'EducationSubjectEditPage',
        meta: { title: '学科编辑', noCache: true, activeMenu: '/education/subject/list' },
        hidden: true
      }
    ]
  },
  {
    path: '/answer',
    component: Layout,
    name: 'AnswerPage',
    meta: {
      title: '成绩管理',
      icon: 'answer'
    },
    alwaysShow: true,
    children: [
      {
        path: 'list',
        component: () => import('@/views/answer/list'),
        name: 'AnswerPageList',
        meta: { title: '答卷列表', noCache: true }
      }
    ]
  },
  {
    path: '/message',
    component: Layout,
    name: 'MessagePage',
    meta: {
      title: '消息中心',
      icon: 'message'
    },
    alwaysShow: true,
    children: [
      {
        path: 'list',
        component: () => import('@/views/message/list'),
        name: 'MessageListPage',
        meta: { title: '消息列表', noCache: true }
      },
      {
        path: 'send',
        component: () => import('@/views/message/send'),
        name: 'MessageSendPage',
        meta: { title: '消息发送', noCache: true }
      }
    ]
  },
  {
    path: '/log',
    component: Layout,
    name: 'LogPage',
    meta: {
      title: '日志中心',
      icon: 'log'
    },
    alwaysShow: true,
    children: [
      {
        path: 'user/list',
        component: () => import('@/views/log/list'),
        name: 'LogUserPage',
        meta: { title: '用户日志', noCache: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: '个人简介', icon: 'user', noCache: true }
      }
    ]
  },
  { path: '*',
    hidden: true,
    component: () => import('@/views/error-page/404'),
    meta: { title: '404', noCache: true }
  }
]

const router = new Router({
  routes: constantRoutes
})

export {
  constantRoutes,
  router
}
