
const routeTemplate = params => 
`
import List from './index'
 
export default [
  {
    path: '${params.path}',
    name: '${params.path}',
    meta: {
      title: '${params.title}'
    },
    component: List
  }
]
`

const indexTemplate = 
`
<template>
  <div></div>
</template>
 
<script>
import { ListSearch, ListTable } from './components'
import * as API from './api/index'
import utils from '@/utils'
export default {
  components: { ListSearch, ListTable },
  data() {
    return {
      },
    }
  },
  mounted() {
  },
  methods: {
  },
}
</script>
 
<style>
 
</style>
`
// 复制代码
const config = {
    routeTemplate: routeTemplate,
    indexTemplate: indexTemplate,
    configTemplate: configTemplate,
    apiTemplate: apiTemplate,
    comIndexTemplate: comIndexTemplate,
    searchTemplate: searchTemplate,
    tableTemplate: tableTemplate
  }
   
  module.exports = config
