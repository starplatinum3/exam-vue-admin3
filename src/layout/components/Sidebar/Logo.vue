<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade">
      <div>

   
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <!-- <img  src="@/assets/logo.png" class="sidebar-logo"> -->
        <img  src="@/assets/miku_back.jpg" class="sidebar-logo">
        <!-- D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\assets\miku_back.jpg -->
        <h1  class="sidebar-title">{{ title }} </h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <!-- <img  src="@/assets/logo.png" class="sidebar-logo"> -->
        <img  src="@/assets/miku_back.jpg" class="sidebar-logo"></img>
        <h1 class="sidebar-title">{{ title }} </h1>
      </router-link>
      <el-button type="" @click="to_dbmanager">toDbmanager</el-button>
    </div>
    </transition>
  
  </div>
</template>

<script>
import Common from "@/utils/Common"
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data () {
    
    return {
      // title: '考试管理系统'
      title:   Common.sysTitle
      // 中共青田县委党校
   
    }
  },
  // methods(){
  //   // debugger()
  // }
  // methods vue 
  methods:{
    to_dbmanager(){
this.$router.push({path:'/dbmanager'})
    }

  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  // background: #2b2f3a;
  // background:#ba070b;
  // background:#ba070b;
  background: #fef4b6;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 45px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      // color: #fff;
      color: #f12711;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
