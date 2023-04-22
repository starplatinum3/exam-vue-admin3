<template>
  <div class="table-container">
    <el-table :data="tableData" class="custom-table" stripe>
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="type" label="党员类型"></el-table-column>
      <el-table-column prop="joinDate" label="入党时间"></el-table-column>
    </el-table>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: "张三",
          type: "正式党员",
          joinDate: "2018-06-01",
        },
        {
          id: 2,
          name: "李四",
          type: "预备党员",
          joinDate: "2020-11-12",
        },
        {
          id: 3,
          name: "王五",
          type: "正式党员",
          joinDate: "2017-03-05",
        },
        {
          id: 4,
          name: "赵六",
          type: "预备党员",
          joinDate: "2021-09-30",
        },
      ],
    };
  },
};
// scoped
// 
</script>
  
  <style  scoped>
.custom-table {
  width: 100%;
  margin: 20px 0;
}

.custom-table th,
.custom-table td {
  text-align: center;
  padding: 10px;
}

.el-table__header-wrapper {
  background-color: #ff4a00; /* 红色 */
  color: #fffe65; /* 黄色 */
}

.el-table__row--striped {
  background-color: #ffe4cc; /* 浅红色 */
}

.el-table__row:hover {
  background-color: #ffcc99; /* 中间色调 */
  cursor: pointer;
}

.custom-table >>> .el-table__header-wrapper {
  background-color: #ff4a00; /* 红色 */
  color: #fffe65; /* 黄色 */
}

.custom-table .el-table__row--striped {
  background-color: #ffe4cc; /* 浅红色 */
}

.custom-table .el-table__row:hover {
  background-color: #ffcc99; /* 中间色调 */
  cursor: pointer;
}

</style>
  