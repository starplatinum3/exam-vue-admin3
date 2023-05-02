import subjectApi from '@/api/subject'
import chapterApi from '@/api/chapter'

const state = {
  subjects: [],
  chapters: []
}

const getters = {
  subjectEnumFormat: (state) => (key) => {
    for (let item of state.subjects) {
      if (item.id === key) {
        return item.name + ' ( ' + item.levelName + ' )'
      }
    }
    return null
  },
  chapterEnumFormat: (state) => (key) => {
    for ( let item of state.chapters) {
      if (item.id === key) {
        return item.name
      }
    }
    return null
  }
}

/* eslint-disable */
//如果通过异步操作变更数据，必须通过action，而不能使用mutation，但是在action中还是要通过触发Mutation的方式间接变更数据
//在actions中，不能直接修改state中的数据，必须通过context.commit()触发某个mutation
//在this.&store.dispatch("initSubject"):触发某个action
//...mapActions('exam', { initSubject: 'initSubject' }):mapActions将全局的actions函数，映射为methods中的方法
/* eslint-disable */
// actions
const actions = {
  initSubject ({ commit }, action) {
    subjectApi.list().then(re => {
      console.log(` commit('setSubjects', re.response)`);
      console.log(`  re.response `);
      console.log(re.response);
      commit('setSubjects', re.response)
      if (action !== undefined) {
        action()
      }
    })
  },
  initChapter ({commit}, action) {
    chapterApi.list().then(re => {
      console.log("re");
      console.log(re);

      commit('setChapters', re.response)
      if(action != undefined){
        action()
      }
    })
  }
}

// mutations
const mutations = {
  setSubjects: (state, subjects) => {
    state.subjects = subjects
    console.log(`  state.subjects `);
    console.log( state.subjects );
    // state.subjects=[1,2,3,4,,4,4,4,4,]
    state.subjects=[
      {
          "id": 3,
          "name": "C++",
          "level": 1,
          "levelName": "大一",
          "itemOrder": null,
          "deleted": false
      },
      {
          "id": 4,
          "name": "Java",
          "level": 1,
          "levelName": "大一",
          "itemOrder": null,
          "deleted": false
      },
      {
          "id": 5,
          "name": "数据结构",
          "level": 2,
          "levelName": "大二",
          "itemOrder": null,
          "deleted": false
      },
      {
          "id": 6,
          "name": "HTML5",
          "level": 1,
          "levelName": "大一",
          "itemOrder": null,
          "deleted": false
      },
      {
          "id": 7,
          "name": "操作系统",
          "level": 2,
          "levelName": "大二",
          "itemOrder": null,
          "deleted": false
      },
      {
          "id": 8,
          "name": "计算机网络",
          "level": 2,
          "levelName": "大二",
          "itemOrder": null,
          "deleted": false
      },
      {
          "id": 9,
          "name": "SpringBoot",
          "level": 3,
          "levelName": "大三",
          "itemOrder": null,
          "deleted": false
      },
      {
          "id": 10,
          "name": "Spring",
          "level": 3,
          "levelName": "大三",
          "itemOrder": null,
          "deleted": false
      },
      {
          "id": 11,
          "name": "Redis",
          "level": 3,
          "levelName": "大三",
          "itemOrder": null,
          "deleted": false
      },
      {
          "id": 12,
          "name": "Mysql",
          "level": 2,
          "levelName": "大二",
          "itemOrder": null,
          "deleted": false
      },
      {
          "id": 13,
          "name": "软件工程导论",
          "level": 4,
          "levelName": "大四",
          "itemOrder": null,
          "deleted": false
      },
      {
          "id": 14,
          "name": "css",
          "level": 1,
          "levelName": "大一",
          "itemOrder": null,
          "deleted": false
      },
      {
          "id": 15,
          "name": "面经",
          "level": 1,
          "levelName": "一年级",
          "itemOrder": null,
          "deleted": false
      }
  ]
  }
  ,
  setChapters: (state, chapters) => {
    state.chapters = chapters
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
