// 请求网址: http://localhost:8003/api/admin/question/edit
// 请求方法: POST
// 简答 题目 5 questionType
// insertFullQuestion  updateFullQuestion
let postData = {
  "id": null,
  "questionType": 5,
  "gradeLevel": 1,
  "subjectId": 5,
  "title": "<p>大大</p>",
  "items": [],
  "analyze": "是的呀",
  "correct": "你小子",
  "score": 1,
  "difficult": 3
}

// http://localhost:8003/api/admin/question/edit


// http://localhost:8080/api/admin/question/edit

fetch('http://localhost:8003/api/admin/question/edit', {}).then(res => {
    console.log(res);

    res.json().then(data => {
        console.log(data);
    })
  }

)

// let  res=await fetch('http://localhost:8003/api/admin/question/edit', {})
// let  resJson= await  res.json()

// console.log(resJson);
