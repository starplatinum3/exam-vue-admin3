# -*- coding: utf-8 -*-

import requests

jsonDir=r"D:\netTest"
import os


# os.path.join(jsonDir)

# res=requests.post('http://localhost:8003/api/admin/question/edit', data={})

# print(res.text)
# {"code":401,"message":"用户未登录","response":null}

# SELECT * from t_text_content where id=448
# /question/edit

#   {
#         "id": 8,
#         "name": "计算机网络",
#         "level": 2,
#         "levelName": "大二",
#         "itemOrder": null,
#         "deleted": false
#     },
import json


def netUploadQuestion(jsonFilePath):
    
    计算机网络Id=8
    # r"D:\download\作业10_计算机网络.json"
    with open(jsonFilePath, "r",encoding="utf-8") as f:
        data = f.read()

    # with open(r'D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\subjects.json',"r" ,encoding="utf-8") as f:
    #     subjectsData=f.read()


    # print(subjectsData)

    

    # subjects=json.loads(subjectsData)

    # print(subjects)

    # res=requests.post('http://localhost:8003/api/all/question/edit', data={})
    print(data)

    # import json

    data = json.loads(data)

    # data['data']['question']['content'] = "test"

    # data['question']
    # 'myAns'
    createUserIdStu1=7
    # "subjectId": 5,
    postData = {
    "id": None,
    "questionType": 5,
    "gradeLevel": 1,
    "subjectId": 计算机网络Id,
    "title": data['question'],
    "items": [],
    "analyze": data['comment'],
    "correct": data['myAns'],
    "score": 1,
    "difficult": 3,
    "createUserId":createUserIdStu1
    }

    print(postData)
    # requests.post json 
    headers= {
        "Content-Type": "application/json",
    }
    # jsonStr=json.dumps(postData,ensure_ascii=False,indent=4)
    jsonStr=json.dumps(postData,indent=4)
    print("jsonStr")
    print(jsonStr)

    # json.dump(postData, open("D:\\download\\postData.json", "w",encoding="utf-8"),ensure_ascii=False,indent=4)
    # requests.post
    res=requests.post('http://localhost:8003/api/all/question/edit', data=jsonStr,headers=headers)

    # Caused by: com.fasterxml.jackson.core.JsonParseException: Unrecognized token 'questionType': was expecting ('true', 'false' or 'null') requests.post
    # res=requests.post('http://localhost:8003/api/all/question/edit', data=postData,headers=headers)
    print(res.text)


    # titleContent_id_448={"titleContent":"<div class=\"qaIndex j-qaindex f-fl f-dn\"></div>                                                        <div class=\"qaCate j-qacate f-fl\"> ( 6分 ) </div>                                                        <div class=\"f-richEditorText j-richTxt f-fl edueditor_styleclass_0 edueditor_styleclass_2\"><p style=\"font-size: 11.818181991577148px; line-height: 21.988636016845703px; white-space: normal;\">若单码替代密码的替代关系（密钥）如下：</p>‌<p style=\"font-size: 11.818181991577148px; line-height: 21.988636016845703px; white-space: normal;\"><span style=\"color: rgb(229, 51, 51);\">明文:abcdefghijklmnopqrstuvwxyz</span></p>‌<p style=\"font-size: 11.818181991577148px; line-height: 21.988636016845703px; white-space: normal;\"><span style=\"color: rgb(229, 51, 51);\">密文:mnbvcxzasdfghjklpoiuytrewq</span></p>‌<p style=\"font-size: 11.818181991577148px; line-height: 21.988636016845703px; white-space: normal;\">1）请加密报文“This is an easy problem”；</p>‌<p style=\"font-size: 11.8182px; line-height: 21.9886px; white-space: normal;\">2）解密报文“rmij'u uamu xyj”。</p>‌</div>                                                        <br><div class=\"qaMark j-qamark f-fr f-dn\"></div>","analyze":"<div class=\"j-qscore tit\">该题得分：6</div>                                                            <span class=\"j-addComment add\" style=\"display:none;\">点评</span>                                                            <div class=\"j-commentRichOrText detail\"><div class=\"tit\">整体评价：</div><p class=\"\"><span class=\"stu\">student1：</span>好</p><p class=\"\"><span class=\"stu\">student2：</span>步骤清晰，答案简洁，继续努力。</p><p class=\"last\"><span class=\"stu\">student3：</span>读题认真，回答正确</p><p><span>自评评价：</span>好耶</p></div>                                                            <div class=\"j-answerVisible f-cb av\">                                                                <label class=\"answerVisible f-fl\"><input type=\"checkbox\" class=\"j-acb\"><span>答题者可见</span></label>                                                                <div class=\"j-fb f-fl\"></div>                                                            </div>","questionItemObjects":[],"correct":"<span class=\"tit f-fc3\">回答：</span><p>1)uasi si mj cmiw lokngch</p><p>&nbsp; &nbsp; &nbsp; &nbsp; 2)wasn't that fun</p><p><br></p><p><code>\n\n#&nbsp;明文:\nmingwen=\"abcdefghijklmnopqrstuvwxyz\"\n\n#&nbsp;密文:\nmiwen=\"mnbvcxzasdfghjklpoiuytrewq\"\n\n#&nbsp;1）请加密报文“This&nbsp;is&nbsp;an&nbsp;easy&nbsp;problem”；\n\n#&nbsp;2）解密报文“rmij'u&nbsp;uamu&nbsp;xyj”。\n\ndef&nbsp;jiaMi(mingWenInput):\n&nbsp;&nbsp;&nbsp;&nbsp;res=\"\"\n&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;ch&nbsp;in&nbsp;mingWenInput:\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try:\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;idx=mingwen.index(str.lower(ch))\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res+=miwen[idx]\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;except:\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res+=ch\n&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;print(res)\n\ndef&nbsp;jieMi(miWenInput):\n&nbsp;&nbsp;&nbsp;&nbsp;res=\"\"\n&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;ch&nbsp;in&nbsp;miWenInput:\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try:\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;idx=miwen.index(str.lower(ch))\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res+=mingwen[idx]\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;except:\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res+=ch\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;print(res)\n\n\njiaMi(\"This&nbsp;is&nbsp;an&nbsp;easy&nbsp;problem\")\njieMi(\"rmij'u&nbsp;uamu&nbsp;xyj\")</code></p>"}

# 计算机网络Id=8
# with open(r"D:\download\作业10_计算机网络.json", "r",encoding="utf-8") as f:
#     data = f.read()

# with open(r'D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\subjects.json',"r" ,encoding="utf-8") as f:
#     subjectsData=f.read()


# print(subjectsData)

# import json

# subjects=json.loads(subjectsData)

# print(subjects)

# # res=requests.post('http://localhost:8003/api/all/question/edit', data={})
# print(data)

# # import json

# data = json.loads(data)

# # data['data']['question']['content'] = "test"

# # data['question']
# # 'myAns'
# createUserIdStu1=7
# # "subjectId": 5,
# postData = {
#   "id": None,
#   "questionType": 5,
#   "gradeLevel": 1,
#   "subjectId": 计算机网络Id,
#   "title": data['question'],
#   "items": [],
#   "analyze": data['comment'],
#   "correct": data['myAns'],
#   "score": 1,
#   "difficult": 3,
#   "createUserId":createUserIdStu1
# }

# print(postData)
# # requests.post json 
# headers= {
#     "Content-Type": "application/json",
# }
# # jsonStr=json.dumps(postData,ensure_ascii=False,indent=4)
# jsonStr=json.dumps(postData,indent=4)
# print("jsonStr")
# print(jsonStr)

# # json.dump(postData, open("D:\\download\\postData.json", "w",encoding="utf-8"),ensure_ascii=False,indent=4)
# # requests.post
# res=requests.post('http://localhost:8003/api/all/question/edit', data=jsonStr,headers=headers)

# # Caused by: com.fasterxml.jackson.core.JsonParseException: Unrecognized token 'questionType': was expecting ('true', 'false' or 'null') requests.post
# # res=requests.post('http://localhost:8003/api/all/question/edit', data=postData,headers=headers)
# print(res.text)


# titleContent_id_448={"titleContent":"<div class=\"qaIndex j-qaindex f-fl f-dn\"></div>                                                        <div class=\"qaCate j-qacate f-fl\"> ( 6分 ) </div>                                                        <div class=\"f-richEditorText j-richTxt f-fl edueditor_styleclass_0 edueditor_styleclass_2\"><p style=\"font-size: 11.818181991577148px; line-height: 21.988636016845703px; white-space: normal;\">若单码替代密码的替代关系（密钥）如下：</p>‌<p style=\"font-size: 11.818181991577148px; line-height: 21.988636016845703px; white-space: normal;\"><span style=\"color: rgb(229, 51, 51);\">明文:abcdefghijklmnopqrstuvwxyz</span></p>‌<p style=\"font-size: 11.818181991577148px; line-height: 21.988636016845703px; white-space: normal;\"><span style=\"color: rgb(229, 51, 51);\">密文:mnbvcxzasdfghjklpoiuytrewq</span></p>‌<p style=\"font-size: 11.818181991577148px; line-height: 21.988636016845703px; white-space: normal;\">1）请加密报文“This is an easy problem”；</p>‌<p style=\"font-size: 11.8182px; line-height: 21.9886px; white-space: normal;\">2）解密报文“rmij'u uamu xyj”。</p>‌</div>                                                        <br><div class=\"qaMark j-qamark f-fr f-dn\"></div>","analyze":"<div class=\"j-qscore tit\">该题得分：6</div>                                                            <span class=\"j-addComment add\" style=\"display:none;\">点评</span>                                                            <div class=\"j-commentRichOrText detail\"><div class=\"tit\">整体评价：</div><p class=\"\"><span class=\"stu\">student1：</span>好</p><p class=\"\"><span class=\"stu\">student2：</span>步骤清晰，答案简洁，继续努力。</p><p class=\"last\"><span class=\"stu\">student3：</span>读题认真，回答正确</p><p><span>自评评价：</span>好耶</p></div>                                                            <div class=\"j-answerVisible f-cb av\">                                                                <label class=\"answerVisible f-fl\"><input type=\"checkbox\" class=\"j-acb\"><span>答题者可见</span></label>                                                                <div class=\"j-fb f-fl\"></div>                                                            </div>","questionItemObjects":[],"correct":"<span class=\"tit f-fc3\">回答：</span><p>1)uasi si mj cmiw lokngch</p><p>&nbsp; &nbsp; &nbsp; &nbsp; 2)wasn't that fun</p><p><br></p><p><code>\n\n#&nbsp;明文:\nmingwen=\"abcdefghijklmnopqrstuvwxyz\"\n\n#&nbsp;密文:\nmiwen=\"mnbvcxzasdfghjklpoiuytrewq\"\n\n#&nbsp;1）请加密报文“This&nbsp;is&nbsp;an&nbsp;easy&nbsp;problem”；\n\n#&nbsp;2）解密报文“rmij'u&nbsp;uamu&nbsp;xyj”。\n\ndef&nbsp;jiaMi(mingWenInput):\n&nbsp;&nbsp;&nbsp;&nbsp;res=\"\"\n&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;ch&nbsp;in&nbsp;mingWenInput:\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try:\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;idx=mingwen.index(str.lower(ch))\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res+=miwen[idx]\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;except:\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res+=ch\n&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;print(res)\n\ndef&nbsp;jieMi(miWenInput):\n&nbsp;&nbsp;&nbsp;&nbsp;res=\"\"\n&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;ch&nbsp;in&nbsp;miWenInput:\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try:\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;idx=miwen.index(str.lower(ch))\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res+=mingwen[idx]\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;except:\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res+=ch\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;print(res)\n\n\njiaMi(\"This&nbsp;is&nbsp;an&nbsp;easy&nbsp;problem\")\njieMi(\"rmij'u&nbsp;uamu&nbsp;xyj\")</code></p>"}
for jsonName in  os.listdir(jsonDir):
    abs_path=os.path.join(jsonDir,jsonName)
    print("uploading file")
    print(abs_path)
    netUploadQuestion(abs_path)
