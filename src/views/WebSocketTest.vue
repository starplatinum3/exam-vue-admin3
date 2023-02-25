<template>
  <div>
    <div>initWebSocket</div>
    <el-input
      v-model="websocketSendData"
      placeholder="websocketSendData"
    ></el-input>
    <el-button type="primary" @click="websocketSendDataDo"
      >websocketSendDataDo</el-button
    >
    <el-button type="primary" @click="ArrowRightKeyDown"
      >ArrowRightKeyDown</el-button
    >
    <!-- WebSocketTest -->
    <!-- D:\proj\bishe\exam-vue-admin3\src\views\EchartsShowEyesight.vue -->
    <el-button type="primary" @click="EchartsShowEyesightLook">EchartsShowEyesightLook</el-button>
    <el-button type="primary" @click="EnterKeyDown">EnterKeyDown</el-button>
    <!--调整摄像头方向-->
    <!-- <div class="change_camera_direction">
			<div class="camera_title">摄像头方向控制</div>
			<div class="direction_content">
				<div class="direction_div top_direction" @click="ArrowRightKeyDown">
					<img class="camera_img_up" src="img/camera_up.png" />
				</div>
				<div class="direction_div left_direction">
					<img class="camera_img_left" src="img/camera_left.png" />
				</div>
				<div class="direction_div bottom_direction">
					<img class="camera_img_bottom" src="img/camera_down.png" />
				</div>
				<div class="direction_div right_direction"   @click="ArrowRightKeyDown">
					<img class="camera_img_right" src="img/camera_right.png" />
				</div>
			</div>
		</div> -->

    <div class="box">
      <ul class="box-inner">
        <!-- 九宫格1 -->
        <li @click="EscapeKeyDown"></li>
        <li  @click="ArrowUpKeyDown">↑</li>
        <li></li>
        <li @click="ArrowLeftKeyDown">←</li>
        <li @click="EnterKeyDown" >ok</li>
        <li @click="ArrowRightKeyDown">→</li>
        <li></li>
        <li @click="ArrowDownKeyDown">↓</li>
        <li></li>
      </ul>
    </div>

    <!-- 作者：下一个Tab
链接：https://juejin.cn/post/6914535397087248392
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 -->
  </div>
</template>
<script>
export default {
  components: {
    // VueQr
  },
  data() {
    return {
      websocketSendData: "",
      roomId: 1,
      lockReconnect: false, //是否真正建立连接
      timeout: 58 * 1000, //58秒一次心跳
      timeoutObj: null, //心跳心跳倒计时
      serverTimeoutObj: null, //心跳倒计时
      timeoutnum: null, //断开 重连倒计时
    };
  },
  created() {
    this.initWebSocket();
  },
  destroyed() {
    this.websock.close(); //离开路由之后断开websocket连接
  },
  methods: {
    EchartsShowEyesightLook(){

      this.$router.push({
        path: "/test/EchartsShowEyesight",
        query: {
          roomId: this.roomId,
        },
      });
    },
    currentTime() {
      setInterval(this.formatDate, 500);
    },
    EscapeKeyDown() {
      let data = {
    "type": "keydown",
    "timeStamp": 75615.80000007153,
    "altKey": false,
    "code": "Escape",
    "ctrlKey": false,
    "isComposing": false,
    "key": "Escape",
    "location": 0,
    "metaKey": false,
    "repeat": false,
    "shiftKey": false,
    "charCode": 0,
    "keyCode": 27,
    "which": 27
}
      let dataStr = JSON.stringify(data);
      this.websocketSend(dataStr);
    },
    ArrowUpKeyDown() {
      let data = {
    "type": "keydown",
    "timeStamp": 13785.700000047684,
    "altKey": false,
    "code": "ArrowUp",
    "ctrlKey": false,
    "isComposing": false,
    "key": "ArrowUp",
    "location": 0,
    "metaKey": false,
    "repeat": false,
    "shiftKey": false,
    "charCode": 0,
    "keyCode": 38,
    "which": 38
}
      let dataStr = JSON.stringify(data);
      this.websocketSend(dataStr);
    },
    ArrowDownKeyDown() {
      let data = {
    "type": "keydown",
    "timeStamp": 28536.600000023842,
    "altKey": false,
    "code": "ArrowDown",
    "ctrlKey": false,
    "isComposing": false,
    "key": "ArrowDown",
    "location": 0,
    "metaKey": false,
    "repeat": false,
    "shiftKey": false,
    "charCode": 0,
    "keyCode": 40,
    "which": 40
}   
 let dataStr = JSON.stringify(data);
      this.websocketSend(dataStr);
    },
    ArrowLeftKeyDown() {
      let data ={
    "type": "keydown",
    "timeStamp": 29483.200000047684,
    "altKey": false,
    "code": "ArrowLeft",
    "ctrlKey": false,
    "isComposing": false,
    "key": "ArrowLeft",
    "location": 0,
    "metaKey": false,
    "repeat": false,
    "shiftKey": false,
    "charCode": 0,
    "keyCode": 37,
    "which": 37
}
      let dataStr = JSON.stringify(data);
      this.websocketSend(dataStr);
    },
    ArrowRightKeyDown() {
      let data = {
    "type": "keydown",
    "timeStamp": 30081.700000047684,
    "altKey": false,
    "code": "ArrowRight",
    "ctrlKey": false,
    "isComposing": false,
    "key": "ArrowRight",
    "location": 0,
    "metaKey": false,
    "repeat": false,
    "shiftKey": false,
    "charCode": 0,
    "keyCode": 39,
    "which": 39
}
      let dataStr = JSON.stringify(data);
      this.websocketSend(dataStr);
    },
//     EscapeKeyDown() {
//       let data = {
//     "type": "keydown",
//     "timeStamp": 75615.80000007153,
//     "altKey": false,
//     "code": "Escape",
//     "ctrlKey": false,
//     "isComposing": false,
//     "key": "Escape",
//     "location": 0,
//     "metaKey": false,
//     "repeat": false,
//     "shiftKey": false,
//     "charCode": 0,
//     "keyCode": 27,
//     "which": 27
// }
//       let dataStr = JSON.stringify(data);
//       this.websocketSend(dataStr);
//     },
    // ArrowRightKeyDown() {
    //   let data = {
    //     type: "keydown",
    //     timeStamp: 12451.899999976158,
    //     altKey: false,
    //     code: "ArrowRight",
    //     ctrlKey: false,
    //     isComposing: false,
    //     key: "ArrowRight",
    //     location: 0,
    //     metaKey: false,
    //     repeat: false,
    //     shiftKey: false,
    //     charCode: 0,
    //     keyCode: 39,
    //     which: 39,
    //   };
    //   let dataStr = JSON.stringify(data);
    //   this.websocketSend(dataStr);
    //   //   this.websocketSend(    data)
    // },
    EnterKeyDown() {
      let data = {
        type: "keydown",
        timeStamp: 54161.300000071526,
        altKey: false,
        code: "Enter",
        ctrlKey: false,
        isComposing: false,
        key: "Enter",
        location: 0,
        metaKey: false,
        repeat: false,
        shiftKey: false,
        charCode: 0,
        keyCode: 13,
        which: 13,
      };
      let dataStr = JSON.stringify(data);
      this.websocketSend(dataStr);
    },
    websocketSendDataDo() {
      this.websocketSend(this.websocketSendData);
    },
    initWebSocket() {
      //初始化weosocket
      // /webSocket/{userId}"

      console.log("this.roomId initWebSocket");
      console.log(this.roomId);

      // const wsuri = "wss://xxxxxxx/xx/xx/" + this.roomId;
      // const wsuri = "ws://localhost:8003/webSocket/" + this.roomId;
      const wsuri = "ws://43.142.150.223:8003/webSocket/" + this.roomId;
      this.websock = new WebSocket(wsuri);
      // 客户端接收服务端数据时触发
      this.websock.onmessage = this.websocketonmessage;
      // 连接建立时触发
      this.websock.onopen = this.websocketonopen;
      // 通信发生错误时触发
      this.websock.onerror = this.websocketonerror;
      // 连接关闭时触发
      this.websock.onclose = this.websocketclose;
    },
    // 连接建立时触发
    websocketonopen() {
      console.log("websocketonopen");
      // console.log(websocketonopen);

      //开启心跳
      this.start();
      //连接建立之后执行send方法发送数据
      // let actions = {"room":"007854ce7b93476487c7ca8826d17eba","info":"1121212"};
      // this.websocketsend(JSON.stringify(actions));
    },
    // 通信发生错误时触发
    websocketonerror(err) {
      console.log("出现错误");
      console.log(err);
      this.reconnect();
    },
    // 客户端接收服务端数据时触发
    websocketonmessage(e) {
      console.log(e.data);
      //收到服务器信息，心跳重置
      this.reset();
    },
    websocketsend(Data) {
      //数据发送
      this.websock.send(Data);
    },
    websocketSend(Data) {
      //数据发送
      this.websock.send(Data);
    },
    // 连接关闭时触发
    websocketclose(e) {
      //关闭
      console.log("断开连接", e);
      //重连
      this.reconnect();
    },
    reconnect() {
      //重新连接
      var that = this;
      if (that.lockReconnect) {
        return;
      }
      that.lockReconnect = true;
      //没连接上会一直重连，设置延迟避免请求过多
      that.timeoutnum && clearTimeout(that.timeoutnum);
      that.timeoutnum = setTimeout(function () {
        //新连接
        that.initWebSocket();
        that.lockReconnect = false;
      }, 5000);
    },
    reset() {
      //重置心跳
      var that = this;
      //清除时间
      clearTimeout(that.timeoutObj);
      clearTimeout(that.serverTimeoutObj);
      //重启心跳
      that.start();
    },
    start() {
      //开启心跳
      console.log("开启心跳");
      var self = this;
      self.timeoutObj && clearTimeout(self.timeoutObj);
      self.serverTimeoutObj && clearTimeout(self.serverTimeoutObj);
      self.timeoutObj = setTimeout(function () {
        // log
        console.log("self.websock");
        console.log(self.websock);
        // self.websock
        //这里发送一个心跳，后端收到后，返回一个心跳消息，
        // self.ws
        // self.ws.close();
        if (self.websock.readyState == 1) {
          //如果连接正常
          // self.ws.send("heartCheck"); //这里可以自己跟后端约定
        } else {
          //否则重连
          self.reconnect();
        }
        self.serverTimeoutObj = setTimeout(function () {
          //超时关闭
          self.websock.close();
        }, self.timeout);
      }, self.timeout);
    },
  },
  mounted() {
    this.currentTime();
  },
  // 销毁定时器
  beforeDestroy() {
    if (this.formatDate) {
      clearInterval(this.formatDate); // 在Vue实例销毁前，清除时间定时器
    }
  },

  // 作者：刘_小_二
  // 链接：https://juejin.cn/post/6982078455722557448
  // 来源：稀土掘金
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
};
</script>

<style scoped>
/*摄像头方向控制*/
.change_camera_direction {
  background-color: sandybrown;
  text-align: center;
  position: absolute;
  /* top: 0%; */
  top: 40%;
  width: 200px;
  height: 200px;
}
.change_camera_direction .camera_title {
  color: white;
  font-size: 15px;
  margin: 5% auto;
}
.direction_content {
  width: 100%;
  height: 70%;
  position: relative;
}
.direction_div {
  position: relative;
  width: 30px;
  height: 30px;
}
.direction_div img {
  width: 100%;
  height: 100%;
}
/*left*/
.left_direction {
  top: 5%;
  left: 20%;
}
/*bottom*/
.bottom_direction {
  top: 5%;
  left: 40%;
}
/*right*/
.right_direction {
  top: -39%;
  left: 61%;
}
/*top*/
.top_direction {
  top: 2%;
  left: 40%;
}

.box {
  position: relative;
  width: 100%;
  height: 600px;
}
.box-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.box-inner > li {
  position: relative;
  float: left;
  width: 31%;
  /* height: 31%; */
  /* height: 200px; */

  /* height: 21%; */
  font-size: 40px;
  margin: 1%;
  list-style-type: none;
  background-color: springgreen;
  text-align: center;
  /* line-height: 200px; */
  line-height: 100px;
  height: 100px;
  /* line-height: 200px; */
}
.box-inner > li:nth-child(odd) {
  background-color: silver;
}

/* 作者：下一个Tab
链接：https://juejin.cn/post/6914535397087248392
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */
</style>