<template>
 

   <div class="drag-w" v-drag>东北大米真好吃，你想吃几碗</div>
</template>
  
  <script>
// @ is an alias to /src
import List from "@/components/List.vue";
import Content from "@/components/Content.vue";
import Info from "@/components/Info.vue";
import LineControl from "@/components/LineControl.vue";
import "@/assets/css/base.css";
import Common from "@/utils/Common";
import axios from "axios";
import ObjUtil from "@/utils/ObjUtil";
import drawApi from "@/api/draw";
import componentApi from "@/api/component";
// 如果后台要求cookies的话，一定要把axios.default.withCredentials设置为true
axios.default.withCredentials = true;
export default {
    directives: {
      drag (el) {
        let oDiv = el // 当前元素
        // let self = this // 上下文
 
        oDiv.onclick = function (e) {
            console.log("e onclick" );
            console.log(e);
          if(oDiv.className == 'drag-w'){
            oDiv.className = 'drag-d';
            return true;
          }
          oDiv.className = 'drag-w';
        }
        // 禁止选择网页上的文字
        document.onselectstart = function () {
          return false
        }
        oDiv.onmousedown = function (e) {
          if(oDiv.className == 'drag-d'){
            return true;
          }
          // 鼠标按下，计算当前元素距离可视区的距离
          let disX = e.clientX - oDiv.offsetLeft
          let disY = e.clientY - oDiv.offsetTop
          document.onmousemove = function (e) {
            // 通过事件委托，计算移动的距离
            let l = e.clientX - disX
            let t = e.clientY - disY
            // 移动当前元素
            oDiv.style.left = l + 'px'
            oDiv.style.top = t + 'px'
          }
          document.onmouseup = function (e) {
            document.onmousemove = null
            document.onmouseup = null
          }
          // return false不加的话可能导致黏连，就是拖到一个地方时div粘在鼠标上不下来，相当于onmouseup失效
          return false
        }
      }
    },

  name: "Main",
  components: {
    List,
    Content,
    Info,
    LineControl,
  },
  directives: {
    move(el, bindings) {
      el.onmousedown = function (e) {
        var init = e.clientX;
        var parent = document.getElementById("silderLeft");
        var initWidth = parent.offsetWidth;
        document.onmousemove = function (e) {
          var end = e.clientX;
          var newWidth = end - init + initWidth;
          parent.style.width = newWidth + "px";
        };
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null;
        };
      };
    },
    drag (el) {
        let oDiv = el // 当前元素
        // let self = this // 上下文
 
        oDiv.onclick = function (e) {
            console.log("e onclick" );
            console.log(e);
          if(oDiv.className == 'drag-w'){
            oDiv.className = 'drag-d';
            return true;
          }
          oDiv.className = 'drag-w';
        }
        // 禁止选择网页上的文字
        document.onselectstart = function () {
          return false
        }
        oDiv.onmousedown = function (e) {
          if(oDiv.className == 'drag-d'){
            return true;
          }
          // 鼠标按下，计算当前元素距离可视区的距离
          let disX = e.clientX - oDiv.offsetLeft
          let disY = e.clientY - oDiv.offsetTop
          document.onmousemove = function (e) {
            // 通过事件委托，计算移动的距离
            let l = e.clientX - disX
            let t = e.clientY - disY
            // 移动当前元素
            oDiv.style.left = l + 'px'
            oDiv.style.top = t + 'px'
          }
          document.onmouseup = function (e) {
            document.onmousemove = null
            document.onmouseup = null
          }
          // return false不加的话可能导致黏连，就是拖到一个地方时div粘在鼠标上不下来，相当于onmouseup失效
          return false
        }
      }
  },
  // ————————————————
  // 版权声明：本文为CSDN博主「凌晨两点半`」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
  // 原文链接：https://blog.csdn.net/qq_43201542/article/details/107576997

  data: function () {
    return {
      drawObj: null,
      nowItem: null,
      list: Array,
      draw: {
        text: Array,
        begin: Array,
        circle: Array,
        lines: Array,
      },
      createNodesNum: 2,
      lineRules: {
        type: "broken",
        theta: 30,
        width: 1,
        headlen: 10,
        color: "#225618",
        controlX: 150,
        controlY: 550,
      },
      info: JSON,
      beginNum: "",
      textNum: "",
      circleNum: "",
      saveFlag: true,
      lineFlag: false,
      lineBeginNode: JSON,
    };
  },
  destroyed() {
    this.drawObj = null;
  },
  methods: {
    nowcoderCommunityJump() {
      // window.href
      location.href = "http://localhost:8081/community/index";
      // window.history.
    },
    getExpressDemo() {
      // let users='user/users'
      let users = "users";
      // http://localhost:3001/api/article/articles
      axios.get(Common.expressDemoBaseUrl + users).then((res) => {
        console.log("res expressDemoBaseUrl");
        console.log(res);
      });
    },
    get_articles() {
      // let users='user/users'
      // let users='users'
      let articles = "article/articles";
      // http://localhost:3001/api/article/articles
      axios.get(Common.expressDemoBaseUrl + articles).then((res) => {
        console.log("res expressDemoBaseUrl");
        console.log(res);
      });
    },
    getList() {
      let resDemo = {
        code: 1,
        message: "成功",
        response: {
          records: [
            {
              id: 1,
              componentName: "开始节点",
              height: 50,
              icon: null,
              left: 0,
              top: 0,
              type: "begin",
              width: 200,
            },
            {
              id: 2,
              componentName: "文本节点",
              height: 50,
              icon: null,
              left: 0,
              top: 0,
              type: "text",
              width: 200,
            },
            {
              id: 3,
              componentName: "圆形节点",
              height: 100,
              icon: null,
              left: 0,
              top: 0,
              type: "circle",
              width: 100,
            },
          ],
          total: 3,
          size: 10,
          current: 1,
          orders: [],
          optimizeCountSql: true,
          hitCount: false,
          countId: null,
          maxLimit: null,
          searchCount: true,
          pages: 1,
        },
      };

      this.componentButtonsSetUp(resDemo);

      // componentApi
      //   .selectPageEqual(
      //     { pageNumber: 1, pageSize: 10 },
      //     // {id:1}
      //     {}
      //   )
      //   .then((res) => {
      //     console.log("res getList");
      //     console.log(res);
      //     this.list = res.data || res.response?.records;
      //     console.log("this.list ");
      //     console.log(this.list);

      //     this.list.map((item) => {
      //       item.name = item.componentName;
      //     });
      //   });

      // axios.
      // axios.get(Common.drawUrl + "component").then((res) => {
      //   this.list = res.data.data;
      // });
    },

    componentButtonsSetUp(res) {
      this.list = res.data || res.response?.records;
      // console.log("this.list ");
      // console.log(this.list);

      this.list.map((item) => {
        item.name = item.componentName;
      });
    },
    getListByNodeJs() {
      // axios.
      axios.get(Common.drawUrl + "component").then((res) => {
        this.list = res.data.data;
      });
    },
    getList_fetch() {
      // axios.
      // fetch(Common.drawUrl+'component')
      axios.get(Common.drawUrl + "component").then((res) => {
        this.list = res.data.data;
      });
    },

    getDrawByExpressJs() {
      // axios.
      axios.get(Common.drawUrl + "draw").then((res) => {
        console.log("res");
        console.log(res);
        let content = res.data.content || res.data.data.content;
        console.log("content");
        console.log(content);
        // var data = JSON.parse(res.data.content)
        var data = JSON.parse(content);
        this.draw = data;
        this.beginNum =
          data.begin.length === 0 ? 0 : data.begin[data.begin.length - 1].id;
        this.textNum =
          data.text.length === 0 ? 0 : data.text[data.text.length - 1].id;
        this.circleNum =
          data.circle.length === 0 ? 0 : data.circle[data.circle.length - 1].id;
      });
    },

    getDraw() {
      drawApi
        .selectPageEqual({ pageNumber: 1, pageSize: 10 }, { id: 1 })
        .then((res) => {
          // console.log("res");
          // console.log(res);

          console.log("res");
          console.log(res);
          // res.data
          let content =
            res.data?.content ||
            res.data?.data.content ||
            res.response?.records[0]?.content;

          console.log("content");
          console.log(content);
          // var data = JSON.parse(res.data.content)
          var data = JSON.parse(content);
          this.draw = data;
          this.beginNum =
            data.begin.length === 0 ? 0 : data.begin[data.begin.length - 1].id;
          this.textNum =
            data.text.length === 0 ? 0 : data.text[data.text.length - 1].id;
          this.circleNum =
            data.circle.length === 0
              ? 0
              : data.circle[data.circle.length - 1].id;
        });

      // axios.
      // axios.get(Common.drawUrl + "draw").then((res) => {
      //   console.log("res");
      //   console.log(res);
      //   let content = res.data.content || res.data.data.content;
      //   console.log("content");
      //   console.log(content);
      //   // var data = JSON.parse(res.data.content)
      //   var data = JSON.parse(content);
      //   this.draw = data;
      //   this.beginNum =
      //     data.begin.length === 0 ? 0 : data.begin[data.begin.length - 1].id;
      //   this.textNum =
      //     data.text.length === 0 ? 0 : data.text[data.text.length - 1].id;
      //   this.circleNum =
      //     data.circle.length === 0 ? 0 : data.circle[data.circle.length - 1].id;
      // });
    },
    getDrawById() {
      // axios.
      axios.post(Common.drawUrl + "draw/getDrawById", { id: 1 }).then((res) => {
        console.log("res");
        console.log(res);
        let content = res.data.content || res.data.data.content;
        console.log("content");
        console.log(content);
        // var data = JSON.parse(res.data.content)
        var data = JSON.parse(content);
        this.draw = data;
        this.beginNum =
          data.begin.length === 0 ? 0 : data.begin[data.begin.length - 1].id;
        this.textNum =
          data.text.length === 0 ? 0 : data.text[data.text.length - 1].id;
        this.circleNum =
          data.circle.length === 0 ? 0 : data.circle[data.circle.length - 1].id;
      });
    },

    getDraw_fetch() {
      // axios.
      // fetch( Common.drawUrl+'draw').then(res => {
      // console.log("res");
      // console.log(res);
      // })

      console.log("getDraw_fetch");
      fetch(Common.drawUrl + "draw", {
        method: "GET",
        // method: "POST",
        // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // body: JSON.stringify({})
      })
        // .then(response => response.json())
        .then((res) => {
          console.log("rss", res);
          // res = res.text()
        })
        .catch((err) => {
          console.log(err);
        });
    },
    clearDraw() {
      this.draw = {
        text: [],
        begin: [],
        circle: [],
        lines: [],
      };
    },
    /*
  let  postData=  {  
           "content":null ,
           "id":null 
                    }
     */
    /*
   postData : {  
           "content":null ,
           "id":null 
                    }
     */
    saveDrawSpb(postData) {
      // let  questionId=    this.$router.query?.question_id
      // let  questionId=  this?.$query?.question_id
      // this.$route.query
      let questionId = this.$route.query?.question_id;
      console.log("questionId");
      console.log(questionId);
      axios
        .post(Common.examUrl + "draw/save", postData)
        // this.$axios.post( "/draw/save",postData)
        .then((res) => {
          console.log("res");
          console.log(res);
          let resultData = res.data.data;

          // res.response?.java
          console.log("res.response");
          console.log(res.response);
          // res.response?.id

          let drawId = res?.data?.response?.id || res?.data?.results?.insertId;
          let postData = {
            drawId: drawId,
            id: null,
            questionId: questionId,
          };
          this.saveNewQuestionDraw(postData);
          this.$message({
            message: "画布保存成功",
            type: "success",
          });

          // if (res.data.code === 1) {
          //   let drawId = res.data.results.insertId;
          //   let postData = {
          //     drawId: drawId,
          //     id: null,
          //     questionId: this.$query.question_id,
          //   };
          //   this.save(postData);
          //   this.$message({
          //     message: "画布保存成功",
          //     type: "success",
          //   });
          // } else {
          //   this.$message.error("画布保存失败");
          // }
        });
    },

    drawGet(records) {
      // 旧的 要  更新
      let questionDraw = records[0];
      let drawId = questionDraw.drawId;

      console.log("drawId");
      console.log(drawId);
      let data = {
        content: null,
        id: drawId,
      };
      //         axios.post(Common.baseUrl + `/draw/selectPage?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`,data).then(res => {
      axios
        .post(
          Common.examUrl + `draw/selectPage?pageNumber=${0}&pageSize=${1}`,
          data
        )
        .then((res) => {
          console.log("res");
          console.log(res);
          let recordsDraw = res.data.response.records;
          if (recordsDraw.length == 0) {
            let recordDrawObj = {
              id: null,
              content: "{}",
            };
            this.drawObj = recordDrawObj;

            let data = JSON.parse(draw.content);
            console.log("data");
            console.log(data);
            this.drawInit(data);
          } else {
            let draw = recordsDraw[0];
            console.log("draw");
            console.log(draw);
            this.drawObj = draw;
            // var data = JSON.parse(draw);
            // let data=draw
            // this.draw.content=JSON.parse(draw.content)
            let data = JSON.parse(draw.content);
            console.log("data");
            console.log(data);
            this.draw = data;
            //  this.draw=draw

            console.log(" this.draw");
            console.log(this.draw);
            this.beginNum =
              data.begin.length === 0
                ? 0
                : data.begin[data.begin.length - 1].id;
            this.textNum =
              data.text.length === 0 ? 0 : data.text[data.text.length - 1].id;
            this.circleNum =
              data.circle.length === 0
                ? 0
                : data.circle[data.circle.length - 1].id;
          }
        });
    },
    drawInit(data) {
      this.draw = data;
      //  this.draw=draw

      console.log(" this.draw");
      console.log(this.draw);
      this.beginNum =
        data.begin.length === 0 ? 0 : data.begin[data.begin.length - 1].id;
      this.textNum =
        data.text.length === 0 ? 0 : data.text[data.text.length - 1].id;
      this.circleNum =
        data.circle.length === 0 ? 0 : data.circle[data.circle.length - 1].id;
    },

    selectPageQuestionDrawGet(questionId) {
      // let questionId = this.$route.query?.question_id;
      let data = {
        drawId: null,
        id: null,
        questionId: questionId,
      };
      let baseUrl = Common.examUrl;
      //         axios.post(Common.baseUrl + `/questionDraw/selectPage?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`,data).then(res => {
      axios
        .post(
          baseUrl +
            `questionDraw/selectPageEqual?pageNumber=${0}&pageSize=${1}`,
          data
        )
        .then((res) => {
          console.log("res");
          console.log(res);
          let records = res.data.response.records;
          //  response
          if (records.length == 0) {
            let recordDrawObj = {
              id: null,
              content: '{"text":[],"begin":[],"circle":[],"lines":[]}',
            };
            this.drawObj = recordDrawObj;

            let data = JSON.parse(recordDrawObj.content);
            console.log("data");
            console.log(data);
            this.drawInit(data);

            // 新建
            // var content = JSON.stringify(this.draw);
            // // var params = new URLSearchParams()
            // // params.append('content', content)
            // let params = {
            //   content,
            // };
            // // let  params=  {
            // //    "content":null ,
            // //    "id":null
            // //             }
            // this.saveDrawSpb(params);
          } else {
            this.drawGet(records);
          }
        });
    },

    selectPageQuestionDraw() {
      let questionId = this.$route.query?.question_id;
      let data = {
        drawId: null,
        id: null,
        questionId: questionId,
      };
      let baseUrl = Common.examUrl;
      //         axios.post(Common.baseUrl + `/questionDraw/selectPage?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`,data).then(res => {
      axios
        .post(
          baseUrl + `questionDraw/selectPage?pageNumber=${0}&pageSize=${1}`,
          data
        )
        .then((res) => {
          console.log("res");
          console.log(res);
          let records = res.data.response.records;
          //  response
          if (records.length == 0) {
            // 新建
            var content = JSON.stringify(this.draw);
            // var params = new URLSearchParams()
            // params.append('content', content)
            let params = {
              content,
            };
            // let  params=  {
            //    "content":null ,
            //    "id":null
            //             }
            this.saveDrawSpb(params);
          } else {
            // 旧的 要  更新
            let questionDraw = records[0];
            let drawId = questionDraw.drawId;
          }
        });
    },

    saveDrawDo() {
      let baseUrl = Common.examUrl;
      if (this.drawObj) {
        // 保存 不是新建
        var content = JSON.stringify(this.draw);
        // var params = new URLSearchParams()
        // params.append('content', content)
        this.drawObj.content = content;
        // let params = {
        //   content,
        // };

        axios.post(Common.examUrl + "draw/save", this.drawObj).then((res) => {
          console.log("res draw save saveDrawDo");
          console.log(res);
          if (res.data.code === 1) {
            this.$message({
              message: "画布保存成功",
              type: "success",
            });

            let drawId = res.data.response.id;

            let questionId = this.$route.query?.question_id;
            let postData = {
              drawId: drawId,
              id: null,
              questionId: questionId,
            };
            console.log("postData saveNewQuestionDraw");
            console.log(postData);
            this.saveNewQuestionDraw(postData);
            // this.saveNewQuestionDraw(postData);
            // this.saveNewQuestionDraw()
          } else {
            this.$message.error("画布保存失败");
          }
        });
      } else {
        var content = JSON.stringify(this.draw);
        // var params = new URLSearchParams()
        // params.append('content', content)
        let params = {
          content,
        };
        this.saveDrawSpb(params);
        // 新建一个
      }
      // this.selectPageQuestionDraw();
    },

    saveDraw() {
      var content = JSON.stringify(this.draw);
      // var params = new URLSearchParams()
      // params.append('content', content)
      let params = {
        content,
      };
      axios.post(Common.drawUrl + "draw/save", params).then((res) => {
        if (res.data.code === 1) {
          this.$message({
            message: "画布保存成功",
            type: "success",
          });
        } else {
          this.$message.error("画布保存失败");
        }
      });
    },

    /*
  let  postData=  {  
           "drawId":null ,
           "id":null ,
           "questionId":null 
                    }
     */
    /*
   postData : {  
           "drawId":null ,
           "id":null ,
           "questionId":null 
                    }
     */
    save(postData) {
      // http://localhost:8002/#/exam/DrawIo?question_id=131
      // this.$query("question_id");

      // let  postData=  {
      //    "drawId":null ,
      //    "id":null ,
      //    "questionId": this.$query.question_id
      //             }
      //  axios.post(Common.baseUrl + "/questionDraw/save",data)
      // Common.drawUrl
      // examUrl
      // let baseUrl=Common.drawUrl
      let baseUrl = Common.examUrl;
      axios
        .post(baseUrl + "questionDraw/save", postData)
        // this.$axios.post("/questionDraw/save", postData)
        .then((res) => {
          console.log("res");
          console.log(res);
          let resultData = res.data.data;
          let response = res.data.response;
          if (response) {
            this.$message("保存成功 saveNewQuestionDraw");
          }
        });
    },

    saveNewQuestionDraw(postData) {
      let baseUrl = Common.examUrl;
      axios
        .post(baseUrl + "questionDraw/save", postData)
        // this.$axios.post("/questionDraw/save", postData)
        .then((res) => {
          console.log("res");
          console.log(res);
          // let resultData = res.data.data;
          let response = res.data.response;
          if (response) {
            this.$message.success("保存成功 saveNewQuestionDraw");
          }
        });
    },

    //     save(postData){
    //       /*
    //       let  data= {
    //      "drawId":null ,
    //      "id":null ,
    //      "questionId":null
    //               }
    //               */
    // //         axios.post(Common.baseUrl + "/questionDraw/save",data)
    //      this.$axios.post( "/questionDraw/save",postData)
    //      .then((res) => {

    //      console.log("res");
    //      console.log(res);
    //      let  data= res.data.data
    //      });
    //     },

    saveQuestionDraw() {
      var content = JSON.stringify(this.draw);
      // var params = new URLSearchParams()
      // params.append('content', content)
      let params = {
        content,
      };
      // let  params=  {
      //    "content":null ,
      //    "id":null
      //             }
      this.saveDrawSpb(params);

      // axios.post(Common.drawUrl + "draw/saveNew", params).then((res) => {
      //   let resDemo = {
      //     code: 1,
      //     msg: "画布保存成功",
      //     results: {
      //       fieldCount: 0,
      //       affectedRows: 1,
      //       insertId: 2,
      //       serverStatus: 2,
      //       warningCount: 0,
      //       message: "",
      //       protocol41: true,
      //       changedRows: 0,
      //     },
      //   };

      //   if (res.data.code === 1) {
      //     let drawId = res.data.results.insertId;
      //     let postData = {
      //       drawId: drawId,
      //       id: null,
      //       questionId: this.$query.question_id,
      //     };
      //     this.save(postData);
      //     this.$message({
      //       message: "画布保存成功",
      //       type: "success",
      //     });
      //   } else {
      //     this.$message.error("画布保存失败");
      //   }
      // });
    },
    // save
    saveNew_do() {
      var content = JSON.stringify(this.draw);
      // var params = new URLSearchParams()
      // params.append('content', content)
      let params = {
        content,
      };
      axios.post(Common.drawUrl + "draw/saveNew", params).then((res) => {
        let resDemo = {
          code: 1,
          msg: "画布保存成功",
          results: {
            fieldCount: 0,
            affectedRows: 1,
            insertId: 2,
            serverStatus: 2,
            warningCount: 0,
            message: "",
            protocol41: true,
            changedRows: 0,
          },
        };

        if (res.data.code === 1) {
          let drawId = res.data.results.insertId;
          let postData = {
            drawId: null,
            id: null,
            questionId: this.$query.question_id,
          };
          this.$message({
            message: "画布保存成功",
            type: "success",
          });
        } else {
          this.$message.error("画布保存失败");
        }
      });
    },
    setNodeInfo(item) {
      // console.log("item");
      // console.log(item);
      this.info = item;
      this.draw.lines = this.draw.lines.map((line) => {
        if (
          line.beginNode.id === item.id &&
          line.beginNode.type === item.type
        ) {
          line.fromX =
            // item.type === "circle" ? item.left + 3333 : item.left + 100;
            item.type === "circle" ? item.left + 75 : item.left + 100;
          line.fromY = item.type === "circle" ? item.top + 75 : item.top + 25;
        } else if (
          line.endNode.id === item.id &&
          line.endNode.type === item.type
        ) {
          // line.toX = item.left;
          // 拖动 之后 这里更新
          // line.toX = item.left+555;
          // line.toX = item.left+20;
          // line.toX = item.left+100;
          // line.toX = item.left+150;
          line.toX = item.left + 50;
          // line.toY = item.top;
          // line.toY = item.top+200;
          // line.toY = item.top+110;
          line.toY = item.top + 50;
        }
        return line;
      });
      if (item.updata) {
        this.saveFlag = false;
      } else {
        this.saveFlag = true;
      }
    },
    saveNodeInfoFront(node) {
      console.log("node");
      console.log(node);
      // this.info=node

      console.log("this.draw");
      console.log(this.draw);
      // if(   node.type=="circle"){

      // }

      let drawFind = this.draw[node.type].filter((item) => {
        if (
          item.id === node.id
          //  && item.type === node.type
        ) {
          return true;
        }
      });

      console.log("drawFind");
      console.log(drawFind);

      let data = {
        height: null,
        icon: null,
        id: null,
        left: null,
        name: null,
        top: null,
        type: null,
        width: null,
      };
      //     axios.post(Common.examUrl + "component/save",node)
      // //  this.$axios.post( "/component/save",node)
      //  .then((res) => {

      //  console.log("res");
      //  console.log(res);
      //  let  data= res.data.data
      //  this.getList();
      //  });

      // var params = new URLSearchParams();
      // node = JSON.stringify(node);
      // params.append("component", node);
      // axios
      //   .post(Common.drawUrl + "component/updata", params)
      //   .then((res) => {
      //     if (res.data.code === 1) {
      //       this.$message({
      //         message: "节点更新成功",
      //         type: "success",
      //       });
      //     } else {
      //       this.$message.error("节点更新失败");
      //     }
      //   })
      //   .then(() => {
      //     this.getList();
      //   });
    },
    saveNodeInfo(node) {
      var params = new URLSearchParams();
      node = JSON.stringify(node);
      params.append("component", node);
      axios
        .post(Common.drawUrl + "component/updata", params)
        .then((res) => {
          if (res.data.code === 1) {
            this.$message({
              message: "节点更新成功",
              type: "success",
            });
          } else {
            this.$message.error("节点更新失败");
          }
        })
        .then(() => {
          this.getList();
        });
    },
    removeNode(val) {
      const type = val.type;
      if (type === "text") {
        this.draw.text = this.draw.text.filter((item) => {
          return item !== val.delItem;
        });
      } else if (type === "begin") {
        this.draw.begin = this.draw.begin.filter((item) => {
          return item !== val.delItem;
        });
      } else if (type === "circle") {
        this.draw.circle = this.draw.circle.filter((item) => {
          return item !== val.delItem;
        });
      }
      this.draw.lines = this.draw.lines.filter((item) => {
        return (
          !(
            item.beginNode.id === val.delItem.id &&
            item.beginNode.type === val.delItem.type
          ) &&
          !(
            item.endNode.id === val.delItem.id &&
            item.endNode.type === val.delItem.type
          )
        );
      });
      this.$message({
        message: "节点删除成功",
        type: "success",
      });
    },

    makeStyle(item) {
      // item.style.left = item.leftNumber + '' + 'px'
      // item.style.top = item.topNumber + '' + 'px'
      // item={..item,}

      item = ObjUtil.deepCloneByExtend(this.nowItem);
      // item= ObjUtil.deepCloneByExtend(item)
      item.id++;
      // item.left+=100
      // conf.left=conf.left+100
      item.style.left = item.left + "" + "px";
      item.style.top = item.top + "" + "px";
      // item.key=item.id + item.type+'-' + item.style.left + '-' + item.style.top
      item.key = item.id + item.type + "-" + item.left + "-" + item.top;
      // ret
      // Obj
      this.nowItem = item;
      return item;
    },
    makeStyleList(conf) {
      // this.nowItem=item
      let cnt = this.createNodesNum;
      for (let i = 0; i < cnt; i++) {
        //  this.createOneNode(conf)
        // conf.style.left=conf.style.left+100
        // conf.left=conf.left+100

        conf = this.makeStyle(conf);
        conf.left += 100;
        confList.push(conf);
        // conf.style.leftNumber=conf.style.leftNumber+100
        // conf.style.left=conf.leftNumber + '' + 'px'
        // conf.key=item.id + item.type+'-' + item.style.left + '-' + item.style.top
      }
    },
    createNodes(conf) {
      let cnt = this.createNodesNum;

      console.log("conf");
      console.log(conf);
      //  item = { ...item, style: { left: '', top: '' } }
      //  item = { ...item, style: { left: '', top: '' } }
      //   item.style.left = item.left + '' + 'px'
      //   item.style.top = item.top + '' + 'px'
      //   // item.style.left = item.leftNumber + '' + 'px'
      //   // item.style.top = item.topNumber + '' + 'px'
      //   item.key=item.id + item.type+'-' + item.style.left + '-' + item.style.top
      // :key="item.id + 'begin-' + item.width + '-' + item.height"

      this.nowItem = conf;
      // let  conf=  this.makeStyle(item)
      // this.nowItem=  this.makeStyle(item)
      // this.makeStyle()
      // this.nowItem= ObjUtil.deepCloneByExtend(  this.nowItem)
      // let  conf=item
      let confList = [];
      for (let i = 0; i < cnt; i++) {
        //  this.createOneNode(conf)
        // this.makeStyle()
        this.nowItem = ObjUtil.deepCloneByExtend(this.nowItem);
        this.nowItem.left += 100;
        this.nowItem.id += 1;
        let item = this.nowItem;
        // item.key=item.id + item.type+'-' + item.style.left + '-' + item.style.top
        item.key = item.id + item.type + "-" + item.left + "-" + item.top;
        this.createOneNode(this.nowItem);
        // conf.style.left=conf.style.left+100
        // conf.left=conf.left+100

        // conf= this.makeStyle(conf)
        // conf.left+=100
        // confList.push(conf)
        // conf.style.leftNumber=conf.style.leftNumber+100
        // conf.style.left=conf.leftNumber + '' + 'px'
        // conf.key=item.id + item.type+'-' + item.style.left + '-' + item.style.top
      }
      console.log("confList");
      console.log(confList);
      // this.
      // this.saveFlag = true
      // item = { ...item, style: { left: '', top: '' } }
      // item.style.left = item.left + '' + 'px'
      // item.style.top = item.top + '' + 'px'
      // if (item.type === 'text') {
      //   item.id = ++this.textNum
      //   this.draw.text.push(item)
      // } else if (item.type === 'begin') {
      //   item.id = ++this.beginNum
      //   this.draw.begin.push(item)
      // } else if (item.type === 'circle') {
      //   item.id = ++this.circleNum
      //   this.draw.circle.push(item)
      // }
      // this.$message({
      //   message: '节点创建成功',
      //   type: 'success'
      // })
    },
    createOneNode(item) {
      this.saveFlag = true;
      item = { ...item, style: { left: "", top: "" } };
      item.style.left = item.left + "" + "px";
      item.style.top = item.top + "" + "px";
      if (item.type === "text") {
        item.id = ++this.textNum;
        this.draw.text.push(item);
      } else if (item.type === "begin") {
        item.id = ++this.beginNum;
        this.draw.begin.push(item);
      } else if (item.type === "circle") {
        item.id = ++this.circleNum;
        this.draw.circle.push(item);
      }
      this.$message({
        message: "节点创建成功",
        type: "success",
      });
      return item;
    },
    createNode(item) {
      this.saveFlag = true;
      item = { ...item, style: { left: "", top: "" } };
      item.style.left = item.left + "" + "px";
      item.style.top = item.top + "" + "px";
      if (item.type === "text") {
        item.id = ++this.textNum;
        this.draw.text.push(item);
      } else if (item.type === "begin") {
        item.id = ++this.beginNum;
        this.draw.begin.push(item);
      } else if (item.type === "circle") {
        item.id = ++this.circleNum;
        this.draw.circle.push(item);
      }
      this.$message({
        message: "节点创建成功",
        type: "success",
      });
      return item;
    },
    setLine(item) {
      if (this.lineFlag && item !== this.lineBeginNode) {
        // let  fromXDiff=100
        let fromXDiff = 75;
        // 开始的 左边的 圆形的 点  左边开始的线
        // let   fromYDiff=200
        let fromYDiff = 75;
        var line = {
          beginNode: this.lineBeginNode,
          endNode: item,
          fromX:
            this.lineBeginNode.type === "circle"
              ? this.lineBeginNode.left + fromXDiff
              : this.lineBeginNode.left + 100,
          fromY:
            this.lineBeginNode.type === "circle"
              ? this.lineBeginNode.top + fromYDiff
              : this.lineBeginNode.top + 25,
          // toX: item.left+550,
          toX: item.left,
          // 没有 +数字的
          toY: item.type === "circle" ? item.top + 75 : item.top + 25,
          // toY: item.type === "circle" ? item.top + 750 : item.top + 25,
          ...this.lineRules,
        };
        this.draw.lines.push(line);
        console.log("line");
        console.log(line);
        this.lineFlag = false;
      } else {
        // 开始的
        this.lineBeginNode = item;
        this.lineFlag = true;
      }
    },
    updataLinerules(lineRules) {
      // console.log(lineRules)
    },
  },
  mounted: function () {
    // console.log( "this?.$query");
    // console.log( this?.$query);
    // console.log( "this?.$query");
    // console.log( this?.$query);
    // this?.$query 是undefined
    // this.$router.query
    console.log("   this.$route.query");
    console.log(this.$route.query);
    // console.log(   "   this.$router.query");
    // console.log(     this.$router.query);
    // console.log(   "this.$router.query?.question_id");
    // console.log(   this.$router.query?.question_id);
    // this.getDraw();
    this.getList();

    let questionId = this.$route.query?.question_id;
    if (questionId) {
      this.selectPageQuestionDrawGet(questionId);
    }
    // this.selectPageQuestionDrawGet();
    // http://localhost:8002/#/exam/DrawIo?question_id=131
  },
};
</script>
  
  <style scoped>
.button-success,
.button-error,
.button-warning,
.button-secondary {
  text-align: center;
  line-height: 60px;
  color: white;

  border-radius: 4px;
  height: 60px;
  width: 100px;

  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

/* .button-success, */

.button-error,
.button-warning,
.button-secondary:hover {
  /* filter: alpha(Opacity=60); */
  opacity: 0.6;
}

.button-success:hover {
  /* filter: alpha(Opacity=60); */
  opacity: 0.6;
  cursor: pointer;
}
/* 
  a：hover{
  cursor:pointer
   
  } */
/* //选择你需变化的盒子类名 */

/* .el-button{
    usesel
  } */

.el-button {
  user-select: unset;
}
.button-success {
  background: rgb(28, 184, 65); /* this is a green */
}

.button-error {
  background: rgb(202, 60, 60); /* this is a maroon */
}

.button-warning {
  background: rgb(223, 117, 20); /* this is an orange */
}

.button-secondary {
  background: rgb(66, 184, 221); /* this is a light blue */
}
/* 
  成功按钮
  
  错误按钮
  
  警告按钮
  
  次级按钮 */

.myBox {
  width: 100%;
  height: 700px;
  /* border: 1px solid red; */
  display: flex;
}
#silderLeft {
  width: 250px;
  height: 100%;
  /* background-color: #999; */
  position: relative;
  /* overflow-y: auto; */
}
/* 拖动条 */
.moveBtn {
  height: 100%;
  width: 10px;
  /* opacity: 0; */
  position: absolute;
  right: 0px;
  top: 0;
  cursor: col-resize;
  background-color: yellow;
}
.menuList {
  /* background-color: yellowgreen; */
  /* height: 120%; */
}
.silderRight {
  height: 100%;
  /* background-color: sandybrown; */
  flex: 1;
}

.drag-w{
    padding: 5px 10px;
    background: rgb(10, 118, 164);
    border: 1px solid #3b80b7;
    color: rgb(255, 255, 255);
    display: inline-block;
    position: absolute;
    text-align: center;
  }
  .drag-d{
    resize: both;
    overflow: auto;
    border: 1px solid #980c1c;
    padding: 5px 10px;
    background: rgb(10, 118, 164);
    color: rgb(255, 255, 255);
    display: inline-block;
    position: absolute;
    text-align: center;
  }

</style>

