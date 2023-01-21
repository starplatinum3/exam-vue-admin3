// import { post } from '@/utils/request'

import Common from '@/utils/Common';
import {
  post,
  postWithQuery
} from '@/utils/request'
// import questionDrawApi from "@/api/questionDraw";
// let apiPreffix=`/api/admin/questionDraw`
let apiPreffix = `/api/questionDraw`
// axios
// Common
export default {
  save: (query, data) => postWithQuery(`${apiPreffix}/save`, query, data),
  saveAll: (query, data) => postWithQuery(`${apiPreffix}/saveAll`, query, data),
  deleteBy: (query, data) => postWithQuery(`${apiPreffix}/deleteBy`, query, data),
  selectPageEqual: (query, data) => postWithQuery(`${apiPreffix}/selectPageEqual`, query, data),
  selectByExample: (query, data) => postWithQuery(`${apiPreffix}/selectByExample`, query, data),
  selectPage: (query, data) => postWithQuery(`${apiPreffix}/selectPage`, query, data),
  removeByIds: (query, data) => postWithQuery(`${apiPreffix}/removeByIds`, query, data),
  selectPlusPage: (query, data) => postWithQuery(`${apiPreffix}/selectPlusPage`, query, data),
  select: (query, data) => postWithQuery(`${apiPreffix}/select`, query, data),
  // dd: (query, data) => {
  //     postWithQuery(`${apiPreffix}/dd`, query, data)},
  /**
   *  let questionId = this.$route.query?.question_id;
   * @param {*} drawObj 
   * @param {*} messageDo 
   * @param {*} questionId 
   * @param {*} drawContent 
   */
  saveDrawOfQuestion(drawObj, messageDo, questionId,drawContent) {
    let baseUrl = Common.examUrl;
    var content = JSON.stringify(drawContent);

    if (drawObj) {
      // 保存 不是新建
      
    //   var content = JSON.stringify(this.draw);
      // var params = new URLSearchParams()
      // params.append('content', content)
      drawObj.content = content;
      // let params = {
      //   content,
      // };

      //   axios.
      post(Common.examUrl + "draw/save", drawObj).then((res) => {
        console.log("res draw save saveDrawDo");
        console.log(res);
        if (res?.code||res?.data?.code === 1) {
          messageDo({
            message: "画布保存成功",
            type: "success",
          });

          //   this.$message({
          //     message: "画布保存成功",
          //     type: "success",
          //   });

        //   let drawId = res.data.response.id
          let drawId =  res?.response?.id||res?.data?.response?.id

          //   let questionId = this.$route.query?.question_id;
          let postData = {
            drawId: drawId,
            id: null,
            questionId: questionId,
          };
          console.log("postData saveNewQuestionDraw");
          console.log(postData);
          this.saveNewQuestionDraw(postData, messageDo);
          // this.saveNewQuestionDraw(postData);
          // this.saveNewQuestionDraw()
        } else {
          //   this.$message.error("画布保存失败");
          messageDo({
            message: "画布保存失败",
            type: "error",
          })
        }
      });
    } else {
    //   var content = JSON.stringify(this.draw);
      // var params = new URLSearchParams()
      // params.append('content', content)
      let params = {
        content,
      };
      this.saveDrawSpb(params, questionId, messageDo);
      // 新建一个
    }
    // this.selectPageQuestionDraw();
  },
  saveNewQuestionDraw(postData, messageDo) {
    let baseUrl = Common.examUrl;
    // axios
    //   .
    post(baseUrl + "questionDraw/save", postData)
      // this.$axios.post("/questionDraw/save", postData)
      .then((res) => {
        console.log("res");
        console.log(res);
        // let resultData = res.data.data;
        let  resData = res?.data||res
        let response =resData?.response;

        // let response = res.data.response;
        if (response) {
          messageDo.success("保存成功 saveNewQuestionDraw");
          //   this.$message.success("保存成功 saveNewQuestionDraw");
        }
      });
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
  saveDrawSpb(postData, questionId, messageDo) {
    // let  questionId=    this.$router.query?.question_id
    // let  questionId=  this?.$query?.question_id
    // this.$route.query
    // let questionId = this.$route.query?.question_id;
    console.log("questionId");
    console.log(questionId);
    // axios
    //   .
    post(Common.examUrl + "draw/save", postData)
      // this.$axios.post( "/draw/save",postData)
      .then((res) => {
        console.log("res");
        console.log(res);
        let resData=res?.data||res
        // let resultData = res.data.data;
        let resultData = resData?.data;

        // res.response?.java
        console.log("res.response");
        console.log(res.response);
        // res.response?.id

        let drawId = res ?.data ?.response ?.id || res ?.data ?.results ?.insertId;
        let postData = {
          drawId: drawId,
          id: null,
          questionId: questionId,
        };
        this.saveNewQuestionDraw(postData, messageDo);
        // this.$message
        messageDo({
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

}
