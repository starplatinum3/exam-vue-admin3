let dataPost = {
    id: null,
    examPaperId: null,
    paperName: null,
    paperType: null,
    subjectId: null,
    systemScore: null,
    userScore: null,
    paperScore: null,
    questionCorrect: null,
    questionCount: null,
    doTime: null,
    status:" Common.examStatusMap[ this.query.status],",
    createUser: "createUserId",
    //  createUser
    createTime: null,
    taskExamId: null,
    tenantId: null,
  };
  for(let fieldName in dataPost){

    // console.log(fieldName);
     let  querySetRow=
    `${fieldName}: this.query.${fieldName},`
    console.log(querySetRow);
  }


  let res=
`
id: this.query.id,
examPaperId: this.query.examPaperId,
paperName: this.query.paperName,
paperType: this.query.paperType,
subjectId: this.query.subjectId,
systemScore: this.query.systemScore,
userScore: this.query.userScore,
paperScore: this.query.paperScore,
questionCorrect: this.query.questionCorrect,
questionCount: this.query.questionCount,
doTime: this.query.doTime,
status: this.query.status,
createUser: this.query.createUser,
createTime: this.query.createTime,
taskExamId: this.query.taskExamId,
tenantId: this.query.tenantId,

`