<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        
        <h3 class="title">考试管理系统</h3>
        <!-- <h3 class="title">{{ title }}</h3> -->
      </div>

      <el-form-item prop="userName">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="userName"
          v-model="loginForm.userName"
          placeholder="用户名"
          name="userName"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-tooltip
        v-model="capsTooltip"
        content="Caps lock is On"
        placement="right"
        manual
      >
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="密码"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-checkbox
        v-model="loginForm.remember"
        style="margin-bottom: 20px; margin-left: 5px"
        >记住密码</el-checkbox
      >

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.native.prevent="handleLogin"
        >登录</el-button
      >

      <!-- <el-button @click="toDbManager">toDbManager</el-button>
      D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\WangEdiorFormula.vue
      <el-button @click="toWangEdiorFormula">toWangEdiorFormula</el-button>
      toCodeMirrorTest
      <el-button @click="toCodeMirrorTest">toCodeMirrorTest</el-button>
      <el-button @click="toFlowChart">toFlowChart</el-button>
      <el-button @click="toBusinessFlowChart">toBusinessFlowChart</el-button> -->
      <!-- <></ a></a> -->
      <!-- <a href="http://139.196.8.79/">计算题 mod 计算，笔试题计算</a> -->
      <!-- BusinessFlowChart -->
      <!-- D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\FlowChart.vue -->
    </el-form>

    <div class="account-foot-copyright">
      <span>
        <a href="http://139.196.8.79/">计算题 mod 计算，笔试题计算</a>
       
      </span>
<span>
  <a href="#/test">test</a>
</span>
    
      <!-- <span>Copyright © 2021 starplatinumora 版权所有</span> -->
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import loginApi from "@/api/login";
import Common from "@/utils/Common"

export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error("用户名不能少于5个字符"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error("密码不能少于5个字符"));
      } else {
        callback();
      }
    };
    return {
      title:Common.sysTitle,
      loginForm: {
        userName: "",
        password: "",
        remember: false,
      },
      loginRules: {
        userName: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
      },
      passwordType: "password",
      capsTooltip: false,
      loading: false,
      showDialog: false,
    };
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.userName === "") {
      this.$refs.userName.focus();
    } else if (this.loginForm.password === "") {
      this.$refs.password.focus();
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    toDbManager() {
      this.$router.push({
        path: "/test/DbManager",
      });
    },
    toWangEdiorFormula() {
      this.$router.push({
        path: "/test/WangEdiorFormula",
      });
    },
    toCodeMirrorTest() {
      this.$router.push({
        path: "/test/CodeMirrorTest",
      });
    },
    toBusinessFlowChart() {
      this.$router.push({
        path: "/test/BusinessFlowChart",
      });
    },
    // BusinessFlowChart
    toFlowChart(){
      this.$router.push({
        path: "/test/FlowChart",
      });
    },


    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        // eslint-disable-next-line no-mixed-operators
        if (
          (shiftKey && key >= "a" && key <= "z") ||
          (!shiftKey && key >= "A" && key <= "Z")
        ) {
          this.capsTooltip = true;
        } else {
          this.capsTooltip = false;
        }
      }
      if (key === "CapsLock" && this.capsTooltip === true) {
        this.capsTooltip = false;
      }
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      let _this = this;
      if(  Common.debug){
        _this.$router.push({ path: "/" });
        return
       }
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          console.log("this.$refs.loginForm.validate login");
          loginApi
            .login(this.loginForm)
            .then(function (result) {
             
          
              console.log("result 登录");
              console.log(result);
              if (result && result.code === 1) {
                console.log("去root目录");
                _this.setUserName(_this.loginForm.userName);
                _this.$router.push({ path: "/" });
              } else {
                _this.loading = false;
                _this.$message({
                  message: result.message,
                  type: "error",
                });
              }
            })
            .catch(function (reason) {
              _this.loading = false;
            });
        } else {
          return false;
        }
      });
    },
    ...mapMutations("user", ["setUserName"]),
  },
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

// css div 背景图片
/* reset element-ui css */
// "D:\proj\bishe\exam-vue-admin3\src\assets\dang.webp"
.login-container {
  // background-image: '@/assets/dang.webp';
  // background-image: url("@/assets/dang.webp");
  background-image: url("../../assets/dang.webp");

  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      // color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        opacity:50%;
        // box-shadow: 0 0 0px 1000px $bg inset !important;
        // box-shadow: 0 0 0px 1000px white inset !important;
        // -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 30px 50px 10px 50px;
    margin: 120px auto auto auto;
    overflow: hidden;
    background: rgba(252, 254, 255, 0.11);
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
