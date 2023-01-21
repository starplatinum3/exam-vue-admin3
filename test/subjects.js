
let subjects=[
    {
        "id": 3,
        "name": "C++",
        "level": 1,
        "levelName": "大一",
        "itemOrder": null,
        "deleted": false
    },
    {
        "id": 4,
        "name": "Java",
        "level": 1,
        "levelName": "大一",
        "itemOrder": null,
        "deleted": false
    },
    {
        "id": 5,
        "name": "数据结构",
        "level": 2,
        "levelName": "大二",
        "itemOrder": null,
        "deleted": false
    },
    {
        "id": 6,
        "name": "HTML5",
        "level": 1,
        "levelName": "大一",
        "itemOrder": null,
        "deleted": false
    },
    {
        "id": 7,
        "name": "操作系统",
        "level": 2,
        "levelName": "大二",
        "itemOrder": null,
        "deleted": false
    },
    {
        "id": 8,
        "name": "计算机网络",
        "level": 2,
        "levelName": "大二",
        "itemOrder": null,
        "deleted": false
    },
    {
        "id": 9,
        "name": "SpringBoot",
        "level": 3,
        "levelName": "大三",
        "itemOrder": null,
        "deleted": false
    },
    {
        "id": 10,
        "name": "Spring",
        "level": 3,
        "levelName": "大三",
        "itemOrder": null,
        "deleted": false
    },
    {
        "id": 11,
        "name": "Redis",
        "level": 3,
        "levelName": "大三",
        "itemOrder": null,
        "deleted": false
    },
    {
        "id": 12,
        "name": "Mysql",
        "level": 2,
        "levelName": "大二",
        "itemOrder": null,
        "deleted": false
    },
    {
        "id": 13,
        "name": "软件工程导论",
        "level": 4,
        "levelName": "大四",
        "itemOrder": null,
        "deleted": false
    },
    {
        "id": 14,
        "name": "css",
        "level": 1,
        "levelName": "大一",
        "itemOrder": null,
        "deleted": false
    },
    {
        "id": 15,
        "name": "面经",
        "level": 1,
        "levelName": "一年级",
        "itemOrder": null,
        "deleted": false
    }
]

// node  写出 json文件 保存到本地

// import { dataSource } from "./dataSource.js";
// const fs = require("fs"); //文件模块
// const path = require("path"); //系统路径模块
import fs from "fs"; //文件模块
import path from "path"; //系统路径模块
//指定创建目录及文件名称，__dirname为执行当前js文件的目录
// const file = path.join(__dirname, "/shop.json");
const content = JSON.stringify(subjects, null, "\t");
//写入文件
let filepath="subjects.json"
fs.writeFile(filepath, content, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("文件创建成功，地址：" + filepath);
});
// 生成的JSON文件是和我们执行的文件同级，具体路径请更改shop.json的路径即可

// SyntaxError: Cannot use import statement outside a module

// ReferenceError: subjects is not defined
// 文件创建成功，地址：subjects.json