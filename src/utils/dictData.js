// xlsx中文字段和后端数据库的映射
export const messageColumns = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "标题", key: "title"
   },
 {
     label: "内容", key: "content"
   },
 {
     label: "创建时间", key: "createTime"
   },
 {
     label: "发送者用户ID", key: "sendUserId"
   },
 {
     label: "发送者用户名", key: "sendUserName"
   },
 {
     label: "发送者真实姓名", key: "sendRealName"
   },
 {
     label: "接收人数", key: "receiveUserCount"
   },
 {
     label: "已读人数", key: "readCount"
   },
 {
     label: "tenantId", key: "tenantId"
   },
  ]
 export const question2Columns = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "1.单选题  2.多选题  3.判断题 4.填空题 5.简答题", key: "questionType"
   },
 {
     label: "学科", key: "subjectId"
   },
 {
     label: "章节", key: "chapterId"
   },
 {
     label: "题目总分(千分制)", key: "score"
   },
 {
     label: "级别", key: "gradeLevel"
   },
 {
     label: "题目难度", key: "difficult"
   },
 {
     label: "正确答案", key: "correct"
   },
 {
     label: "题目  填空、 题干、解析、答案等信息", key: "infoTextContentId"
   },
 {
     label: "创建人", key: "createUser"
   },
 {
     label: "1.正常", key: "status"
   },
 {
     label: "创建时间", key: "createTime"
   },
 {
     label: "deleted", key: "deleted"
   },
 {
     label: "tenantId", key: "tenantId"
   },
  ]
 export const userEventLogColumns = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "用户id", key: "userId"
   },
 {
     label: "用户名", key: "userName"
   },
 {
     label: "真实姓名", key: "realName"
   },
 {
     label: "内容", key: "content"
   },
 {
     label: "时间", key: "createTime"
   },
 {
     label: "tenantId", key: "tenantId"
   },
  ]
 export const examPaperAnswerColumns = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "考试id", key: "examPaperId"
   },
 {
     label: "试卷名称", key: "paperName"
   },
 {
     label: "试卷类型( 1固定试卷  2临时试卷 3班级试卷 4.时段试卷 )", key: "paperType"
   },
 {
     label: "学科", key: "subjectId"
   },
 {
     label: "系统判定得分", key: "systemScore"
   },
 {
     label: "最终得分(千分制)", key: "userScore"
   },
 {
     label: "试卷总分", key: "paperScore"
   },
 {
     label: "做对题目数量", key: "questionCorrect"
   },
 {
     label: "题目总数量", key: "questionCount"
   },
 {
     label: "做题时间(秒)", key: "doTime"
   },
 {
     label: "试卷状态(1待判分 2完成)", key: "status"
   },
 {
     label: "学生", key: "createUser"
   },
 {
     label: "提交时间", key: "createTime"
   },
 {
     label: "taskExamId", key: "taskExamId"
   },
 {
     label: "tenantId", key: "tenantId"
   },
  ]
 export const physicalTestColumns = [ 
  {
     label: "学号", key: "studentId"
   },
 {
     label: "姓名", key: "fullName"
   },
 {
     label: "性别", key: "gender"
   },
 {
     label: "学院", key: "college"
   },
 {
     label: "专业班级", key: "professionalClass"
   },
 {
     label: "总分", key: "totalScore"
   },
 {
     label: "等级", key: "grade"
   },
 {
     label: "学籍状态", key: "studentStatus"
   },
 {
     label: "tenantId", key: "tenantId"
   },
  ]
 export const userTokenColumns = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "token", key: "token"
   },
 {
     label: "用户Id", key: "userId"
   },
 {
     label: "微信openId", key: "wxOpenId"
   },
 {
     label: "createTime", key: "createTime"
   },
 {
     label: "endTime", key: "endTime"
   },
 {
     label: "用户名", key: "userName"
   },
 {
     label: "tenantId", key: "tenantId"
   },
  ]
 export const taskExamColumns = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "title", key: "title"
   },
 {
     label: "级别", key: "gradeLevel"
   },
 {
     label: "任务框架 内容为JSON", key: "frameTextContentId"
   },
 {
     label: "createUser", key: "createUser"
   },
 {
     label: "createTime", key: "createTime"
   },
 {
     label: "deleted", key: "deleted"
   },
 {
     label: "createUserName", key: "createUserName"
   },
 {
     label: "tenantId", key: "tenantId"
   },
  ]
 export const examPaperColumns = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "试卷名称", key: "name"
   },
 {
     label: "学科", key: "subjectId"
   },
 {
     label: "试卷类型( 1固定试卷  2临时试卷 3班级试卷 4.时段试卷 5.推送试卷)", key: "paperType"
   },
 {
     label: "级别", key: "gradeLevel"
   },
 {
     label: "试卷总分(千分制)", key: "score"
   },
 {
     label: "题目数量", key: "questionCount"
   },
 {
     label: "建议时长(分钟)", key: "suggestTime"
   },
 {
     label: "时段试卷 开始时间", key: "limitStartTime"
   },
 {
     label: "时段试卷 结束时间", key: "limitEndTime"
   },
 {
     label: "试卷框架 内容为JSON", key: "frameTextContentId"
   },
 {
     label: "创建的用户", key: "createUser"
   },
 {
     label: "创建时间", key: "createTime"
   },
 {
     label: "是否删除", key: "deleted"
   },
 {
     label: "任务考试id", key: "taskExamId"
   },
 {
     label: "userId", key: "userId"
   },
 {
     label: "tenantId", key: "tenantId"
   },
  ]
 export const taskExamCustomerAnswerColumns = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "taskExamId", key: "taskExamId"
   },
 {
     label: "createUser", key: "createUser"
   },
 {
     label: "createTime", key: "createTime"
   },
 {
     label: "任务完成情况(Json)", key: "textContentId"
   },
 {
     label: "tenantId", key: "tenantId"
   },
  ]
 export const userColumns = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "userUuid", key: "userUuid"
   },
 {
     label: "用户名", key: "userName"
   },
 {
     label: "password", key: "password"
   },
 {
     label: "真实姓名", key: "realName"
   },
 {
     label: "age", key: "age"
   },
 {
     label: "1.男 2女", key: "sex"
   },
 {
     label: "birthDay", key: "birthDay"
   },
 {
     label: "学生年级(1-12)", key: "userLevel"
   },
 {
     label: "phone", key: "phone"
   },
 {
     label: "1.学生 2.老师 3.管理员", key: "role"
   },
 {
     label: "1.启用 2禁用", key: "status"
   },
 {
     label: "头像地址", key: "imagePath"
   },
 {
     label: "createTime", key: "createTime"
   },
 {
     label: "modifyTime", key: "modifyTime"
   },
 {
     label: "lastActiveTime", key: "lastActiveTime"
   },
 {
     label: "是否删除", key: "deleted"
   },
 {
     label: "微信openId", key: "wxOpenId"
   },
 {
     label: "tenantId", key: "tenantId"
   },
  ]
 export const messageUserColumns = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "消息内容ID", key: "messageId"
   },
 {
     label: "接收人ID", key: "receiveUserId"
   },
 {
     label: "接收人用户名", key: "receiveUserName"
   },
 {
     label: "接收人真实姓名", key: "receiveRealName"
   },
 {
     label: "是否已读", key: "readed"
   },
 {
     label: "createTime", key: "createTime"
   },
 {
     label: "阅读时间", key: "readTime"
   },
 {
     label: "tenantId", key: "tenantId"
   },
  ]
 export const tenantExamPaperColumns = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "tenantId", key: "tenantId"
   },
 {
     label: "examPaperId", key: "examPaperId"
   },
  ]
 export const chapterColumns = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "章节知识点", key: "name"
   },
 {
     label: "学科id", key: "subjectId"
   },
 {
     label: "所属学科名", key: "subjectName"
   },
 {
     label: "所属年级", key: "gradeLevel"
   },
 {
     label: "年级名称", key: "levelName"
   },
 {
     label: "是不是删除", key: "deleted"
   },
 {
     label: "tenantId", key: "tenantId"
   },
  ]
 export const textContentColumns = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "content", key: "content"
   },
 {
     label: "createTime", key: "createTime"
   },
 {
     label: "tenantId", key: "tenantId"
   },
  ]
 export const examPaperQuestionCustomerAnswerColumns = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "题目Id", key: "questionId"
   },
 {
     label: "答案Id", key: "examPaperId"
   },
 {
     label: "考试卷答案id", key: "examPaperAnswerId"
   },
 {
     label: "题型", key: "questionType"
   },
 {
     label: "学科", key: "subjectId"
   },
 {
     label: "得分", key: "customerScore"
   },
 {
     label: "题目原始分数", key: "questionScore"
   },
 {
     label: "问题内容", key: "questionTextContentId"
   },
 {
     label: "做题答案", key: "answer"
   },
 {
     label: "做题内容", key: "textContentId"
   },
 {
     label: "是否正确", key: "doRight"
   },
 {
     label: "做题人", key: "createUser"
   },
 {
     label: "创建时间", key: "createTime"
   },
 {
     label: "题目顺序", key: "itemOrder"
   },
 {
     label: "tenantId", key: "tenantId"
   },
 {
     label: "drawIo", key: "drawIo"
   },
  ]
 export const subjectColumns = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "语文 数学 英语 等", key: "name"
   },
 {
     label: "年级 (1-12) 小学 初中 高中  大学", key: "level"
   },
 {
     label: "一年级、二年级等", key: "levelName"
   },
 {
     label: "排序", key: "itemOrder"
   },
 {
     label: "deleted", key: "deleted"
   },
 {
     label: "tenantId", key: "tenantId"
   },
  ]
 export const tenantColumns = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "name", key: "name"
   },
 {
     label: "tenantId", key: "tenantId"
   },
  ]
 export const questionColumns = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "1.单选题  2.多选题  3.判断题 4.填空题 5.简答题", key: "questionType"
   },
 {
     label: "学科", key: "subjectId"
   },
 {
     label: "题目总分(千分制)", key: "score"
   },
 {
     label: "级别", key: "gradeLevel"
   },
 {
     label: "题目难度", key: "difficult"
   },
 {
     label: "正确答案", key: "correct"
   },
 {
     label: "题目  填空、 题干、解析、答案等信息", key: "infoTextContentId"
   },
 {
     label: "创建人", key: "createUser"
   },
 {
     label: "1.正常", key: "status"
   },
 {
     label: "创建时间", key: "createTime"
   },
 {
     label: "deleted", key: "deleted"
   },
 {
     label: "视频链接", key: "videoLink"
   },
 {
     label: "tenantId", key: "tenantId"
   },
  ]
 
//   let tableNameExcelColsMap={
//    'message':messageColumns,
//  'question2':question2Columns,
//  'userEventLog':userEventLogColumns,
//  'examPaperAnswer':examPaperAnswerColumns,
//  'physicalTest':physicalTestColumns,
//  'userToken':userTokenColumns,
//  'taskExam':taskExamColumns,
//  'examPaper':examPaperColumns,
//  'taskExamCustomerAnswer':taskExamCustomerAnswerColumns,
//  'user':userColumns,
//  'messageUser':messageUserColumns,
//  'tenantExamPaper':tenantExamPaperColumns,
//  'chapter':chapterColumns,
//  'textContent':textContentColumns,
//  'examPaperQuestionCustomerAnswer':examPaperQuestionCustomerAnswerColumns,
//  'subject':subjectColumns,
//  'tenant':tenantColumns,
//  'question':questionColumns,}

 
//  let tableNameExcelColsMap={
//   'message':messageColumns,
// 'message':messageColumnsUnderScore,
// 'question2':question2Columns,
// 'question2':question2ColumnsUnderScore,
// 'userEventLog':userEventLogColumns,
// 'userEventLog':userEventLogColumnsUnderScore,
// 'examPaperAnswer':examPaperAnswerColumns,
// 'examPaperAnswer':examPaperAnswerColumnsUnderScore,
// 'physicalTest':physicalTestColumns,
// 'physicalTest':physicalTestColumnsUnderScore,
// 'userToken':userTokenColumns,
// 'userToken':userTokenColumnsUnderScore,
// 'taskExam':taskExamColumns,
// 'taskExam':taskExamColumnsUnderScore,
// 'examPaper':examPaperColumns,
// 'examPaper':examPaperColumnsUnderScore,
// 'taskExamCustomerAnswer':taskExamCustomerAnswerColumns,
// 'taskExamCustomerAnswer':taskExamCustomerAnswerColumnsUnderScore,
// 'user':userColumns,
// 'user':userColumnsUnderScore,
// 'messageUser':messageUserColumns,
// 'messageUser':messageUserColumnsUnderScore,
// 'tenantExamPaper':tenantExamPaperColumns,
// 'tenantExamPaper':tenantExamPaperColumnsUnderScore,
// 'chapter':chapterColumns,
// 'chapter':chapterColumnsUnderScore,
// 'textContent':textContentColumns,
// 'textContent':textContentColumnsUnderScore,
// 'examPaperQuestionCustomerAnswer':examPaperQuestionCustomerAnswerColumns,
// 'examPaperQuestionCustomerAnswer':examPaperQuestionCustomerAnswerColumnsUnderScore,
// 'subject':subjectColumns,
// 'subject':subjectColumnsUnderScore,
// 'tenant':tenantColumns,
// 'tenant':tenantColumnsUnderScore,
// 'question':questionColumns,
// 'question':questionColumnsUnderScore,}






 export const messageColumnsUnderScore = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "标题", key: "title"
   },
 {
     label: "内容", key: "content"
   },
 {
     label: "创建时间", key: "create_time"
   },
 {
     label: "发送者用户ID", key: "send_user_id"
   },
 {
     label: "发送者用户名", key: "send_user_name"
   },
 {
     label: "发送者真实姓名", key: "send_real_name"
   },
 {
     label: "接收人数", key: "receive_user_count"
   },
 {
     label: "已读人数", key: "read_count"
   },
 {
     label: "tenantId", key: "tenant_id"
   },
  ]
 
 export const question2ColumnsUnderScore = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "1.单选题  2.多选题  3.判断题 4.填空题 5.简答题", key: "question_type"
   },
 {
     label: "学科", key: "subject_id"
   },
 {
     label: "章节", key: "chapter_id"
   },
 {
     label: "题目总分(千分制)", key: "score"
   },
 {
     label: "级别", key: "grade_level"
   },
 {
     label: "题目难度", key: "difficult"
   },
 {
     label: "正确答案", key: "correct"
   },
 {
     label: "题目  填空、 题干、解析、答案等信息", key: "info_text_content_id"
   },
 {
     label: "创建人", key: "create_user"
   },
 {
     label: "1.正常", key: "status"
   },
 {
     label: "创建时间", key: "create_time"
   },
 {
     label: "deleted", key: "deleted"
   },
 {
     label: "tenantId", key: "tenant_id"
   },
  ]
 
 export const userEventLogColumnsUnderScore = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "用户id", key: "user_id"
   },
 {
     label: "用户名", key: "user_name"
   },
 {
     label: "真实姓名", key: "real_name"
   },
 {
     label: "内容", key: "content"
   },
 {
     label: "时间", key: "create_time"
   },
 {
     label: "tenantId", key: "tenant_id"
   },
  ]
 
 export const examPaperAnswerColumnsUnderScore = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "考试id", key: "exam_paper_id"
   },
 {
     label: "试卷名称", key: "paper_name"
   },
 {
     label: "试卷类型( 1固定试卷  2临时试卷 3班级试卷 4.时段试卷 )", key: "paper_type"
   },
 {
     label: "学科", key: "subject_id"
   },
 {
     label: "系统判定得分", key: "system_score"
   },
 {
     label: "最终得分(千分制)", key: "user_score"
   },
 {
     label: "试卷总分", key: "paper_score"
   },
 {
     label: "做对题目数量", key: "question_correct"
   },
 {
     label: "题目总数量", key: "question_count"
   },
 {
     label: "做题时间(秒)", key: "do_time"
   },
 {
     label: "试卷状态(1待判分 2完成)", key: "status"
   },
 {
     label: "学生", key: "create_user"
   },
 {
     label: "提交时间", key: "create_time"
   },
 {
     label: "taskExamId", key: "task_exam_id"
   },
 {
     label: "tenantId", key: "tenant_id"
   },
  ]
 
 export const physicalTestColumnsUnderScore = [ 
  {
     label: "学号", key: "student_id"
   },
 {
     label: "姓名", key: "full_name"
   },
 {
     label: "性别", key: "gender"
   },
 {
     label: "学院", key: "college"
   },
 {
     label: "专业班级", key: "professional_class"
   },
 {
     label: "总分", key: "total_score"
   },
 {
     label: "等级", key: "grade"
   },
 {
     label: "学籍状态", key: "student_status"
   },
 {
     label: "tenantId", key: "tenant_id"
   },
  ]
 
 export const userTokenColumnsUnderScore = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "token", key: "token"
   },
 {
     label: "用户Id", key: "user_id"
   },
 {
     label: "微信openId", key: "wx_open_id"
   },
 {
     label: "createTime", key: "create_time"
   },
 {
     label: "endTime", key: "end_time"
   },
 {
     label: "用户名", key: "user_name"
   },
 {
     label: "tenantId", key: "tenant_id"
   },
  ]
 
 export const taskExamColumnsUnderScore = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "title", key: "title"
   },
 {
     label: "级别", key: "grade_level"
   },
 {
     label: "任务框架 内容为JSON", key: "frame_text_content_id"
   },
 {
     label: "createUser", key: "create_user"
   },
 {
     label: "createTime", key: "create_time"
   },
 {
     label: "deleted", key: "deleted"
   },
 {
     label: "createUserName", key: "create_user_name"
   },
 {
     label: "tenantId", key: "tenant_id"
   },
  ]
 
 export const examPaperColumnsUnderScore = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "试卷名称", key: "name"
   },
 {
     label: "学科", key: "subject_id"
   },
 {
     label: "试卷类型( 1固定试卷  2临时试卷 3班级试卷 4.时段试卷 5.推送试卷)", key: "paper_type"
   },
 {
     label: "级别", key: "grade_level"
   },
 {
     label: "试卷总分(千分制)", key: "score"
   },
 {
     label: "题目数量", key: "question_count"
   },
 {
     label: "建议时长(分钟)", key: "suggest_time"
   },
 {
     label: "时段试卷 开始时间", key: "limit_start_time"
   },
 {
     label: "时段试卷 结束时间", key: "limit_end_time"
   },
 {
     label: "试卷框架 内容为JSON", key: "frame_text_content_id"
   },
 {
     label: "创建的用户", key: "create_user"
   },
 {
     label: "创建时间", key: "create_time"
   },
 {
     label: "是否删除", key: "deleted"
   },
 {
     label: "任务考试id", key: "task_exam_id"
   },
 {
     label: "userId", key: "user_id"
   },
 {
     label: "tenantId", key: "tenant_id"
   },
  ]
 
 export const taskExamCustomerAnswerColumnsUnderScore = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "taskExamId", key: "task_exam_id"
   },
 {
     label: "createUser", key: "create_user"
   },
 {
     label: "createTime", key: "create_time"
   },
 {
     label: "任务完成情况(Json)", key: "text_content_id"
   },
 {
     label: "tenantId", key: "tenant_id"
   },
  ]
 
 export const userColumnsUnderScore = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "userUuid", key: "user_uuid"
   },
 {
     label: "用户名", key: "user_name"
   },
 {
     label: "password", key: "password"
   },
 {
     label: "真实姓名", key: "real_name"
   },
 {
     label: "age", key: "age"
   },
 {
     label: "1.男 2女", key: "sex"
   },
 {
     label: "birthDay", key: "birth_day"
   },
 {
     label: "学生年级(1-12)", key: "user_level"
   },
 {
     label: "phone", key: "phone"
   },
 {
     label: "1.学生 2.老师 3.管理员", key: "role"
   },
 {
     label: "1.启用 2禁用", key: "status"
   },
 {
     label: "头像地址", key: "image_path"
   },
 {
     label: "createTime", key: "create_time"
   },
 {
     label: "modifyTime", key: "modify_time"
   },
 {
     label: "lastActiveTime", key: "last_active_time"
   },
 {
     label: "是否删除", key: "deleted"
   },
 {
     label: "微信openId", key: "wx_open_id"
   },
 {
     label: "tenantId", key: "tenant_id"
   },
  ]
 
 export const messageUserColumnsUnderScore = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "消息内容ID", key: "message_id"
   },
 {
     label: "接收人ID", key: "receive_user_id"
   },
 {
     label: "接收人用户名", key: "receive_user_name"
   },
 {
     label: "接收人真实姓名", key: "receive_real_name"
   },
 {
     label: "是否已读", key: "readed"
   },
 {
     label: "createTime", key: "create_time"
   },
 {
     label: "阅读时间", key: "read_time"
   },
 {
     label: "tenantId", key: "tenant_id"
   },
  ]
 
 export const tenantExamPaperColumnsUnderScore = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "tenantId", key: "tenant_id"
   },
 {
     label: "examPaperId", key: "exam_paper_id"
   },
  ]
 
 export const chapterColumnsUnderScore = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "章节知识点", key: "name"
   },
 {
     label: "学科id", key: "subject_id"
   },
 {
     label: "所属学科名", key: "subject_name"
   },
 {
     label: "所属年级", key: "grade_level"
   },
 {
     label: "年级名称", key: "level_name"
   },
 {
     label: "是不是删除", key: "deleted"
   },
 {
     label: "tenantId", key: "tenant_id"
   },
  ]
 
 export const textContentColumnsUnderScore = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "content", key: "content"
   },
 {
     label: "createTime", key: "create_time"
   },
 {
     label: "tenantId", key: "tenant_id"
   },
  ]
 
 export const examPaperQuestionCustomerAnswerColumnsUnderScore = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "题目Id", key: "question_id"
   },
 {
     label: "答案Id", key: "exam_paper_id"
   },
 {
     label: "考试卷答案id", key: "exam_paper_answer_id"
   },
 {
     label: "题型", key: "question_type"
   },
 {
     label: "学科", key: "subject_id"
   },
 {
     label: "得分", key: "customer_score"
   },
 {
     label: "题目原始分数", key: "question_score"
   },
 {
     label: "问题内容", key: "question_text_content_id"
   },
 {
     label: "做题答案", key: "answer"
   },
 {
     label: "做题内容", key: "text_content_id"
   },
 {
     label: "是否正确", key: "do_right"
   },
 {
     label: "做题人", key: "create_user"
   },
 {
     label: "创建时间", key: "create_time"
   },
 {
     label: "题目顺序", key: "item_order"
   },
 {
     label: "tenantId", key: "tenant_id"
   },
 {
     label: "drawIo", key: "draw_io"
   },
  ]
 
 export const subjectColumnsUnderScore = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "语文 数学 英语 等", key: "name"
   },
 {
     label: "年级 (1-12) 小学 初中 高中  大学", key: "level"
   },
 {
     label: "一年级、二年级等", key: "level_name"
   },
 {
     label: "排序", key: "item_order"
   },
 {
     label: "deleted", key: "deleted"
   },
 {
     label: "tenantId", key: "tenant_id"
   },
  ]
 
 export const tenantColumnsUnderScore = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "name", key: "name"
   },
 {
     label: "tenantId", key: "tenant_id"
   },
  ]
 
  
  export
   const questionColumnsUnderScore = [ 
  {
     label: "id", key: "id"
   },
 {
     label: "1.单选题  2.多选题  3.判断题 4.填空题 5.简答题", key: "question_type"
   },
 {
     label: "学科", key: "subject_id"
   },
 {
     label: "题目总分(千分制)", key: "score"
   },
 {
     label: "级别", key: "grade_level"
   },
 {
     label: "题目难度", key: "difficult"
   },
 {
     label: "正确答案", key: "correct"
   },
 {
     label: "题目  填空、 题干、解析、答案等信息", key: "info_text_content_id"
   },
 {
     label: "创建人", key: "create_user"
   },
 {
     label: "1.正常", key: "status"
   },
 {
     label: "创建时间", key: "create_time"
   },
 {
     label: "deleted", key: "deleted"
   },
 {
     label: "视频链接", key: "video_link"
   },
 {
     label: "tenantId", key: "tenant_id"
   },
  ]


  
  // 要写在最下面
let tableNameExcelColsMap={
  //   'message':messageColumns,
  // 'question2':question2Columns,
  // 'userEventLog':userEventLogColumns,
  // 'examPaperAnswer':examPaperAnswerColumns,
  // 'physicalTest':physicalTestColumns,
  // 'userToken':userTokenColumns,
  // 'taskExam':taskExamColumns,
  // 'examPaper':examPaperColumns,
  // 'taskExamCustomerAnswer':taskExamCustomerAnswerColumns,
  // 'user':userColumns,
  // 'messageUser':messageUserColumns,
  // 'tenantExamPaper':tenantExamPaperColumns,
  // 'chapter':chapterColumns,
  // 'textContent':textContentColumns,
  // 'examPaperQuestionCustomerAnswer':examPaperQuestionCustomerAnswerColumns,
  // 'subject':subjectColumns,
  // 'tenant':tenantColumns,
  // 'question':questionColumns,
  'message':messageColumnsUnderScore,
  'question2':question2ColumnsUnderScore,
  'userEventLog':userEventLogColumnsUnderScore,
  'examPaperAnswer':examPaperAnswerColumnsUnderScore,
  'physicalTest':physicalTestColumnsUnderScore,
  'userToken':userTokenColumnsUnderScore,
  'taskExam':taskExamColumnsUnderScore,
  'examPaper':examPaperColumnsUnderScore,
  'taskExamCustomerAnswer':taskExamCustomerAnswerColumnsUnderScore,
  'user':userColumnsUnderScore,
  'messageUser':messageUserColumnsUnderScore,
  'tenantExamPaper':tenantExamPaperColumnsUnderScore,
  'chapter':chapterColumnsUnderScore,
  'textContent':textContentColumnsUnderScore,
  'examPaperQuestionCustomerAnswer':examPaperQuestionCustomerAnswerColumnsUnderScore,
  'subject':subjectColumnsUnderScore,
  'tenant':tenantColumnsUnderScore,
  'question':questionColumnsUnderScore,
  
  't_message':messageColumnsUnderScore,
  't_question_2':question2ColumnsUnderScore,
  't_user_event_log':userEventLogColumnsUnderScore,
  't_exam_paper_answer':examPaperAnswerColumnsUnderScore,
  'physical_test':physicalTestColumnsUnderScore,
  't_user_token':userTokenColumnsUnderScore,
  't_task_exam':taskExamColumnsUnderScore,
  't_exam_paper':examPaperColumnsUnderScore,
  't_task_exam_customer_answer':taskExamCustomerAnswerColumnsUnderScore,
  't_user':userColumnsUnderScore,
  't_message_user':messageUserColumnsUnderScore,
  'tenant_exam_paper':tenantExamPaperColumnsUnderScore,
  't_chapter':chapterColumnsUnderScore,
  't_text_content':textContentColumnsUnderScore,
  't_exam_paper_question_customer_answer':examPaperQuestionCustomerAnswerColumnsUnderScore,
  't_subject':subjectColumnsUnderScore,
  'tenant':tenantColumnsUnderScore,
  't_question':questionColumnsUnderScore,
  
  }

  // export const questionColumnsUnderScore
 // 通过上述columns转换成{label:value}形式
 export function getDict(columns) {
   const res = {};
   for (let column of columns) {
     res[column['label']] = column['key'];
   }
   return res;
 }
 

 
// D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\utils\dictData.js
export function getProperties(type){
  console.log("type");
  console.log(type);
  type=type.trim()
  console.log("tableNameExcelColsMap");
  console.log(tableNameExcelColsMap);
  let  Columns=tableNameExcelColsMap[type]
  console.log("Columns");
  console.log(Columns);
  if (!Columns) {
    return false;
  }
  // let  Columns=tableNameExcelColsMap[type]
 return  getDict(Columns)
  // if (type === "user") {
  //   this.properties = getDict(userColumns);
  // } else if (type === "writer") {
  //   this.properties = getDict(writerColumns);
  // } else if (type === "work") {
  //   this.properties = getDict(workColumns);
  // } else if (type === "album") {
  //   this.properties = getDict(albumColumns);
  // } else {
  //   return false;
  // }
}