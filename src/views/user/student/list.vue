<template>
  <div class="app-container">
    <el-form :model="queryParam" ref="queryForm" :inline="true">
      <el-form-item label="用户名：">
        <el-input v-model="queryParam.userName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">查询</el-button>
        <router-link :to="{ path: '/user/student/edit' }" class="link-left">
          <el-button type="primary">添加</el-button>
        </router-link>
      </el-form-item>

      <el-form-item label="tenantId">
        <el-input v-model="queryParam.tenantId"></el-input>
      </el-form-item>
    </el-form>

    <!-- doUpload -->
    <!-- :action=""  -->
    <!-- :action="" -->
    <!-- beforeUploadSetData -->
    <!-- :before-upload="handleBeforeUpload" -->
    <!-- :headers="headers" -->
    <el-upload
      class="upload"
      name="file"
      action="#"
      :before-remove="beforeRemove"
      :limit="3"
      :on-exceed="handleExceed"
      :before-upload="beforeUploadSetData"
      :on-success="uploadSuccess"
      :multiple="true"
    >
      <!-- :file-list="fileList" -->
      <el-button type="text" size="small" icon="el-icon-upload"
        >点击上传</el-button
      >
    </el-upload>
    <!-- ————————————————
版权声明：本文为CSDN博主「juny0302」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/juny0302/article/details/107493800 -->

    <!-- <el-upload
  action=""
  :on-preview=""
  :on-remove=""
  :before-remove=""
  multiple
  :limit="3"
  :on-exceed=""
  :file-list="[{name: 'name', url: 'url'}]">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
    <Upload action="" :before-upload="function (file) { return upload(file, card.type) }">
              <Button icon="ios-cloud-upload-outline" type="primary" long>数据导入</Button>
            </Upload> -->

    <!-- 筛选按钮 -->
    <el-popover placement="bottom" title="筛选列" trigger="click" width="40">
      <el-checkbox-group v-model="checkedColumns" size="mini">
        <el-checkbox
          v-for="item in checkBoxGroup"
          :key="item"
          :label="item"
          :value="item"
        ></el-checkbox>
      </el-checkbox-group>
      <div title="筛选列" class="filter-table-col" slot="reference">
        <i class="el-icon-c-scale-to-original"></i>
      </div>
    </el-popover>
    <!-- ————————————————
版权声明：本文为CSDN博主「球球和皮皮」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_40252368/article/details/124380861 -->

    <!-- el-table 排序 -->
    <el-table
      v-loading="listLoading"
      :data="tableData"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column sortable prop="userName" label="用户名" />
      <el-table-column sortable prop="realName" label="真实姓名" />
      <el-table-column
        sortable
        prop="userLevel"
        label="学级"
        :formatter="levelFormatter"
      />
      <!-- width="60px;" -->
      <el-table-column
        sortable
        prop="sex"
        label="性别"
       
        :formatter="sexFormatter"
      />
      <el-table-column sortable prop="phone" label="手机号" />

      <!-- width="200" -->
      <el-table-column sortable prop="tenantId" label="tenantId" align="center">
        <template slot-scope="scope">
          <div v-html="scope.row.tenantId"></div>
        </template>
      </el-table-column>

      <!-- width="70px" -->
      <el-table-column sortable label="状态" prop="status" >
        <template slot-scope="{ row }">
          <el-tag :type="statusTagFormatter(row.status)">
            {{ statusFormatter(row.status) }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column width="270px" label="操作" align="center">
        <template slot-scope="{ row }">
          <el-button size="mini" @click="changeStatus(row)" class="link-left">
            {{ statusBtnFormatter(row.status) }}
          </el-button>
          <router-link
            :to="{ path: '/user/student/edit', query: { id: row.id } }"
            class="link-left"
          >
            <el-button size="mini">编辑</el-button>
          </router-link>
          <router-link
            :to="{ path: '/log/user/list', query: { userId: row.id } }"
            class="link-left"
          >
            <el-button size="mini">日志</el-button>
          </router-link>
          <el-button
            size="mini"
            type="danger"
            @click="deleteUser(row)"
            class="link-left"
            >删除</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="seeRecord(row)"
            class="link-left"
            >seeRecord</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="seeStatistics(row)"
            class="link-left"
            >seeStatistics</el-button
          >
        </template>
      </el-table-column>

      <el-table-column
        sortable
        prop="createTime"
        label="创建时间"
        width="160px"
      />
      <el-table-column sortable prop="id" label="Id" />
    </el-table>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="queryParam.pageIndex"
      :limit.sync="queryParam.pageSize"
      @pagination="search"
    />


  </div>
</template>

<script>
// user/student/list
import { mapGetters, mapState } from "vuex";
import Pagination from "@/components/Pagination";
// import userApi from "@/api/user";
// import ExcelUtil from '@/utils/ExcelUtil'
// src\utils\ExcelUtil.js
// D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\utils\dictData.js
import { getDict, userColumns } from "@/utils/dictData";
import { formatDateTime, formatDateNumber } from "@/utils/DateUtil";
// import XLSX from 'xlsx';
// import {userApi,insertBatch} from '@/api/user'
// import userApi from '@/api/user'
import userApi from '@/api/user'
// import insertBatch from '@/api/user'
// insertBatch
import * as XLSX from "xlsx";
// import * as XLSX from 'xlsx/xlsx.mjs'
// 即可
export default {
  components: { Pagination },
  data() {
    return {
      list: [],
      showWord: "",
      editButton: "确认上传excel文件",
      cardList: [
        { title: "用户数据导入", icon: "md-person", type: "user" },
        { title: "作家数据导入", icon: "md-ribbon", type: "writer" },
        { title: "作品数据导入", icon: "ios-book", type: "work" },
        { title: "专辑数据导入", icon: "ios-albums", type: "album" },
      ],
      fileList: [
        { fileName: "用户数据模板.xlsx" },
        { fileName: "作家数据模板.xlsx" },
        { fileName: "作品数据模板.xlsx" },
        { fileName: "专辑数据模板.xlsx" },
      ],
      fileBasePath: "../template/",
      // 展示的数据，xls导入的数据将中文对应的字段和值展示，最多取十条数据，当数据太大时，DOM生成会造成内存溢出
      showData: [],
      // 传给后端的数据
      importData: [],
      columns: [],
      properties: [],
      type: "",
      percent: 0,
      errorList: [],
      excelData: null,
      // colData中列出表格中的每一列，默认都展示
      colData: [
        { title: "编号", istrue: true },
        { title: "内网IP", istrue: true },
        { title: "设备状态", istrue: true },
        { title: "持续时间", istrue: true },
        { title: "更新时间", istrue: true },
        { title: "服务状态", istrue: true },
        { title: "工作状态", istrue: true },
        { title: "是否请允许关机", istrue: true },
        { title: "服务器类型", istrue: true },
      ],

      // 多选框的列表，列出表格的每一列
      checkBoxGroup: [
        "编号",
        "内网IP",
        "设备状态",
        "持续时间",
        "更新时间",
        "服务状态",
        "工作状态",
        "是否请允许关机",
        "服务器类型",
      ],
      // 当前选中的多选框，代表当前展示的列
      checkedColumns: [
        "编号",
        "内网IP",
        "设备状态",
        "持续时间",
        "更新时间",
        "服务状态",
        "工作状态",
        "是否请允许关机",
        "服务器类型",
      ],

      // ————————————————
      // 版权声明：本文为CSDN博主「球球和皮皮」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
      // 原文链接：https://blog.csdn.net/weixin_40252368/article/details/124380861

      queryParam: {
        tenantId: null,
        userName: "",
        role: 1,
        pageIndex: 1,
        pageSize: 10,
      },
      listLoading: true,
      tableData: [],
      total: 0,
    };
  },
  created() {
    this.search();
    this.initData();
  },
  watch: {
    checkedColumns(val) {
      let arr = this.checkBoxGroup.filter((i) => !val.includes(i));
      this.colData.filter((i) => {
        if (arr.indexOf(i.title) != -1) {
          i.istrue = false;
        } else {
          i.istrue = true;
        }
      });
      this.reload = Math.random();
    },
  },

  methods: {
    setSelectRows() {},
    initData() {
      const res = {
        code: 200,
        msg: null,
        data: {
          total: 2,
          records: {
            tbTable: {
              createBy: "",
              createTime: "2022-05-15 23:30:04",
              updateBy: "",
              updateTime: "2022-05-16 09:44:12",
              deleted: 0,
              remark: "string",
              id: 1525861075613278209,
              name: "区局实效督察",
              tbTypeId: 1525860700046909441,
              tbType: {
                createBy: "",
                createTime: "2022-05-15 23:28:34",
                updateBy: "",
                updateTime: "2022-05-15 23:28:34",
                deleted: 0,
                remark: "string",
                id: 1525860700046909441,
                name: "网上督察",
              },
              processDefinitionId:
                "未定义:16:d5698e05-dc03-11ec-9afd-4ed577b80fb9",
            },
            tbFieldList: [
              {
                createBy: "",
                createTime: "2022-05-16 14:24:19",
                updateBy: "",
                updateTime: "2022-05-16 14:24:19",
                deleted: 0,
                remark: "",
                id: 1526086121770401793,
                name: "督察Guid",
                code: "GUID",
                required: 1,
                indexed: 1,
                type: 1,
                showed: 1,
                tableId: 1525861075613278209,
                dicTypeId: null,
              },
              {
                createBy: "",
                createTime: "2022-05-16 14:28:44",
                updateBy: "",
                updateTime: "2022-05-16 14:28:44",
                deleted: 0,
                remark: "",
                id: 1526087232057196545,
                name: "区局",
                code: "DisOrgan",
                required: 1,
                indexed: 2,
                type: 17,
                showed: 1,
                tableId: 1525861075613278209,
                dicTypeId: null,
              },
              {
                createBy: "",
                createTime: "2022-05-16 14:29:46",
                updateBy: "",
                updateTime: "2022-05-16 14:29:46",
                deleted: 0,
                remark: "",
                id: 1526087494117310466,
                name: "督察日期",
                code: "InSpecialDay",
                required: 1,
                indexed: 3,
                type: 8,
                showed: 1,
                tableId: 1525861075613278209,
                dicTypeId: null,
              },
              {
                createBy: "",
                createTime: "2022-05-16 14:30:24",
                updateBy: "",
                updateTime: "2022-05-16 14:30:24",
                deleted: 0,
                remark: "",
                id: 1526087653790269442,
                name: "出动人员",
                code: "OutStaffs",
                required: 1,
                indexed: 4,
                type: 15,
                showed: 1,
                tableId: 1525861075613278209,
                dicTypeId: null,
              },
              {
                createBy: "",
                createTime: "2022-05-16 14:31:12",
                updateBy: "",
                updateTime: "2022-05-16 14:31:12",
                deleted: 0,
                remark: "",
                id: 1526087856211574786,
                name: "道路（门牌号）",
                code: "RoadNumber",
                required: 1,
                indexed: 5,
                type: 1,
                showed: 1,
                tableId: 1525861075613278209,
                dicTypeId: null,
              },
              {
                createBy: "",
                createTime: "2022-05-16 14:31:58",
                updateBy: "",
                updateTime: "2022-05-16 14:31:58",
                deleted: 0,
                remark: "",
                id: 1526088045756366849,
                name: "道路类型",
                code: "RoadType",
                required: 1,
                indexed: 6,
                type: 4,
                showed: 1,
                tableId: 1525861075613278209,
                dicTypeId: null,
              },
              {
                createBy: "",
                createTime: "2022-05-16 14:33:12",
                updateBy: "",
                updateTime: "2022-05-16 14:33:12",
                deleted: 0,
                remark: "",
                id: 1526088357221187586,
                name: "督察大类",
                code: "DL_Kind",
                required: 1,
                indexed: 8,
                type: 18,
                showed: 1,
                tableId: 1525861075613278209,
                dicTypeId: null,
              },
              {
                createBy: "",
                createTime: "2022-05-16 14:33:33",
                updateBy: "",
                updateTime: "2022-05-16 14:33:33",
                deleted: 0,
                remark: "",
                id: 1526088444466905090,
                name: "督察小类",
                code: "XL_Kind",
                required: 1,
                indexed: 9,
                type: 18,
                showed: 1,
                tableId: 1525861075613278209,
                dicTypeId: null,
              },
              {
                createBy: "",
                createTime: "2022-05-16 14:34:20",
                updateBy: "",
                updateTime: "2022-05-16 14:34:20",
                deleted: 0,
                remark: "",
                id: 1526088641456586754,
                name: "问题描述",
                code: "Content",
                required: 1,
                indexed: 10,
                type: 1,
                showed: 1,
                tableId: 1525861075613278209,
                dicTypeId: null,
              },
              {
                createBy: "",
                createTime: "2022-05-16 14:34:52",
                updateBy: "",
                updateTime: "2022-05-16 14:34:52",
                deleted: 0,
                remark: "",
                id: 1526088776399929346,
                name: "问题照片",
                code: "FJ",
                required: 1,
                indexed: 11,
                type: 6,
                showed: 1,
                tableId: 1525861075613278209,
                dicTypeId: null,
              },
              {
                createBy: "",
                createTime: "2022-05-16 14:35:21",
                updateBy: "",
                updateTime: "2022-05-16 14:35:21",
                deleted: 0,
                remark: "",
                id: 1526088897292353537,
                name: "备注",
                code: "BZ",
                required: 1,
                indexed: 12,
                type: 1,
                showed: 1,
                tableId: 1525861075613278209,
                dicTypeId: null,
              },
              {
                createBy: "",
                createTime: "2022-05-16 14:36:02",
                updateBy: "",
                updateTime: "2022-05-16 14:36:02",
                deleted: 0,
                remark: "",
                id: 1526089071641182209,
                name: "五边",
                code: "FiveSide",
                required: 1,
                indexed: 7,
                type: 17,
                showed: 1,
                tableId: 1525861075613278209,
                dicTypeId: null,
              },
              {
                createBy: "",
                createTime: "2022-05-16 14:36:02",
                updateBy: "",
                updateTime: "2022-05-16 14:36:02",
                deleted: 0,
                remark: "",
                id: 1526089071641182209,
                name: "sibala",
                code: "FiveSide",
                required: 1,
                indexed: 7,
                type: 17,
                showed: 1,
                tableId: 1525861075613278209,
                dicTypeId: null,
              },
            ], //表头数组
            markTbValueSvTaskNodeVoList: [
              {
                mark: "c49a762e-0597-46df-9af1-e3bf8477d0af",
                tbValueList: [
                  {
                    id: 1531445197274492930,
                    value: "开始---我是1组督察值",
                    tbFieldId: 1526086121770401793,
                    mark: "c49a762e-0597-46df-9af1-e3bf8477d0af",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531445197295464449,
                    value: "我是1组区局值",
                    tbFieldId: 1526087232057196545,
                    mark: "c49a762e-0597-46df-9af1-e3bf8477d0af",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531445197308047361,
                    value: "我是1组督察日期值",
                    tbFieldId: 1526087494117310466,
                    mark: "c49a762e-0597-46df-9af1-e3bf8477d0af",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531445197312241665,
                    value: "我是1组出动人员值",
                    tbFieldId: 1526087653790269442,
                    mark: "c49a762e-0597-46df-9af1-e3bf8477d0af",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531445197324824578,
                    value: "我是1组道路门牌值",
                    tbFieldId: 1526087856211574786,
                    mark: "c49a762e-0597-46df-9af1-e3bf8477d0af",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531445197324824579,
                    value: "我是1组道路类型值",
                    tbFieldId: 1526088045756366849,
                    mark: "c49a762e-0597-46df-9af1-e3bf8477d0af",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531445197324824580,
                    value: "我是1组督察大类值",
                    tbFieldId: 1526088357221187586,
                    mark: "c49a762e-0597-46df-9af1-e3bf8477d0af",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531445197324824581,
                    value: "我是1组督察小类值",
                    tbFieldId: 1526088444466905090,
                    mark: "c49a762e-0597-46df-9af1-e3bf8477d0af",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531445197337407490,
                    value: "我是1组问题描述值",
                    tbFieldId: 1526088641456586754,
                    mark: "c49a762e-0597-46df-9af1-e3bf8477d0af",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531445197337407491,
                    value: "我是1组问题照片值",
                    tbFieldId: 1526088776399929346,
                    mark: "c49a762e-0597-46df-9af1-e3bf8477d0af",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531445197337407492,
                    value: "我是1组备注值",
                    tbFieldId: 1526088897292353537,
                    mark: "c49a762e-0597-46df-9af1-e3bf8477d0af",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531445197345796098,
                    value: "我是1组五边值",
                    tbFieldId: 1526089071641182209,
                    mark: "c49a762e-0597-46df-9af1-e3bf8477d0af",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                ],
                tbValuePub: {
                  id: 1531445251452317697,
                  createTime: "2022-05-31 09:19:35",
                  createBy: "admin",
                  updateTime: "2022-05-31 09:19:35",
                  updateBy: "admin",
                  deleted: 0,
                  tbValueMark: "c49a762e-0597-46df-9af1-e3bf8477d0af",
                  tbTableId: 1525861075613278209,
                  flowAccomplish: "-1",
                  flowMark: "bb2957d2-e07f-11ec-835a-0c8bfde448c8",
                },
                svTaskNodeDto: {
                  processDefinitionId:
                    "未定义:16:d5698e05-dc03-11ec-9afd-4ed577b80fb9",
                  nodeName: "区局督察开单/区级督察派单",
                  taskId: "bb45444c-e07f-11ec-835a-0c8bfde448c8",
                  formKeys: "75ef80ba-d74b-46bc-ba1d-037623551519",
                  createDate: "2022-05-31 09:19:34",
                  dueDate: "2022-05-31 11:19:33",
                  businessKey: "c49a762e-0597-46df-9af1-e3bf8477d0af",
                  nodeId: "sid-2EE380AB-A916-4DD0-B54D-44B4B166A197",
                },
              },
              {
                mark: "8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",
                tbValueList: [
                  {
                    id: 1531211476122398721,
                    value: "开始---我是2组督察值",
                    tbFieldId: 1526086121770401793,
                    mark: "8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531211476172730369,
                    value: "我是2组区局值",
                    tbFieldId: 1526087232057196545,
                    mark: "8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531211476172730370,
                    value: "我是2组督察日期值",
                    tbFieldId: 1526087494117310466,
                    mark: "8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531211476172730371,
                    value: "我是2组出动人员值",
                    tbFieldId: 1526087653790269442,
                    mark: "8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531211476181118978,
                    value: "我是2组道路门牌值",
                    tbFieldId: 1526087856211574786,
                    mark: "8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531211476189507585,
                    value: "我是2组道路类型值",
                    tbFieldId: 1526088045756366849,
                    mark: "8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531211476189507586,
                    value: "我是2组督察大类值",
                    tbFieldId: 1526088357221187586,
                    mark: "8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531211476189507587,
                    value: "我是2组督察小类值",
                    tbFieldId: 1526088444466905090,
                    mark: "8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531211476202090497,
                    value: "我是2组问题描述值",
                    tbFieldId: 1526088641456586754,
                    mark: "8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531211476202090498,
                    value: "我是2组问题照片值",
                    tbFieldId: 1526088776399929346,
                    mark: "8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531211476202090499,
                    value: "我是2组备注值",
                    tbFieldId: 1526088897292353537,
                    mark: "8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                  {
                    id: 1531211476210479105,
                    value: "我是2组五边值",
                    tbFieldId: 1526089071641182209,
                    mark: "8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",
                    tbTableId: 1525861075613278209,
                    tbField: null,
                  },
                ],
                tbValuePub: {
                  id: 1531211579855925249,
                  createTime: "2022-05-30 17:51:03",
                  createBy: "admin",
                  updateTime: "2022-05-30 17:51:04",
                  updateBy: "admin",
                  deleted: 0,
                  tbValueMark: "8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",
                  tbTableId: 1525861075613278209,
                  flowAccomplish: "-1",
                  flowMark: "03886447-dffe-11ec-a51b-0c8bfde448c8",
                },
                svTaskNodeDto: {
                  processDefinitionId:
                    "未定义:16:d5698e05-dc03-11ec-9afd-4ed577b80fb9",
                  nodeName: "区局督察开单/区级督察派单",
                  taskId: "03e74d31-dffe-11ec-a51b-0c8bfde448c8",
                  formKeys: "75ef80ba-d74b-46bc-ba1d-037623551519",
                  createDate: "2022-05-30 17:51:01",
                  dueDate: "2022-05-30 19:50:53",
                  businessKey: "8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",
                  nodeId: "sid-2EE380AB-A916-4DD0-B54D-44B4B166A197",
                },
              },
            ], //表格内容
          },
          pageSize: 20,
          currentPage: 1,
        },
      };

      this.list = res.data.records;
    },
    formatDataMethod(columnArray, labelId) {
      for (let a = 0; a < columnArray.length; a++) {
        if (columnArray[a].tbFieldId === labelId) {
          return columnArray[a].value;
        }
      }
    },
    getCellData(columnArray, idx) {
    // console.log("idx");
    // console.log(idx);
    let  val=columnArray[idx]?.value
    // console.log("val");
    // console.log(val);
      return val
      // for (let a = 0; a < columnArray.length; a++) {
      //   if (columnArray[a].tbFieldId === labelId) {
      //     return columnArray[a].value;
      //   }
      // }
    },
    // ————————————————
    // 版权声明：本文为CSDN博主「Greg_Zhong」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
    // 原文链接：https://blog.csdn.net/qq_41930094/article/details/125088900
    beforeRemove() {},
    handleExceed() {},
    handleExceed() {},
    uploadSuccess() {},
    beforeUploadSetData(file, type) {
      type = type || "user";
      return this.upload(file, type);
    },

    readXLSX(file) {
      let fileNames = file.name.split(".");
      // 获取文件格式
      let format = fileNames[fileNames.length - 1];
      if (!["xls", "xlsx", "csv"].includes(format)) {
        // this.$Message.error('导入文件格式错误，只支持xls、xlsx或csv格式的文件');
        this.$message.error("导入文件格式错误，只支持xls、xlsx或csv格式的文件");
        return false;
      }
      console.log("fileNames");
      console.log(fileNames);
      return new Promise((resolve) => {
        let reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = function (evt) {
          let data = evt.target.result; // 读到的数据
          //     console.log("data");
          // console.log(data);
          console.log("XLSX");
          console.log(XLSX);
          console.log("XLSX.read");
          console.log(XLSX.read);
          let workbook = XLSX.read(data, { type: "binary" });
          resolve(workbook);
        };
      });
    },

    // excel文件上传, 预加载
    async upload(file, type) {
      console.log("file");
      console.log(file);
      if (!file) {
        return;
      }

      // 准备工作
      this.columns.splice(0, this.columns.length);
      this.showData.splice(0, this.showData.length);
      this.importData.splice(0, this.showData.length);

      // 前端表示的 中文 对应到 后端需要的 英文 字段
      this.type = type;
      if (type === "user") {
        this.properties = getDict(userColumns);
      } else if (type === "writer") {
        this.properties = getDict(writerColumns);
      } else if (type === "work") {
        this.properties = getDict(workColumns);
      } else if (type === "album") {
        this.properties = getDict(albumColumns);
      } else {
        return false;
      }
      console.log(" this.properties");
      console.log(this.properties);
      // let workBook = await  ExcelUtil.readXLSX(file)
      // 读取xlsx
      let workBook = await this.readXLSX(file);
      console.log("workBook");
      console.log(workBook);
      let workSheet = workBook.Sheets[workBook.SheetNames[0]];
      console.log("workSheet");
      console.log(workSheet);
      // 读取xlsx
      // let workBook = await this.readXLSX(file);
      if (!window) {
        return;
      }

      // let workSheet = workBook.Sheets[workBook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(workSheet);
      // outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {header:1,defval:''});//outdata就是你想要的东西
      // outdata = XLSX.utils.sheet_to_json(workSheet, {header:1,defval:''});//outdata就是你想要的东西
      // https://blog.csdn.net/ifmushroom/article/details/109002131
      console.log("data");
      console.log(data);

      // console.log("outdata");
      // console.log(outdata);
      if (data.length === 0) {
        // this.$Message.error('文件内容为空');
        this.$message.error("文件内容为空");
        return false;
      }
      // 第一行中文转换成对应的字段
      const isDigit = /^[0-9]*$/;
      // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
      // 标题
      // el-table 动态 表
      let tbFieldList = [];
      let that = this;
      let idxNum=0
      for (let key of Object.keys(data[0])) {
        let titleCol = key;
        // console.log("key");
        // console.log(key);
        let codeCol = that.properties[key];
        if (!!that.properties[key]) {
          // that.columns.push({
          //   title: key,
          //   key: that.properties[key],
          //   width: 200,
          // });
          // id: 1526086121770401793,
          tbFieldList.push({
            createBy: "",
            createTime: "2022-05-16 14:24:19",
            updateBy: "",
            updateTime: "2022-05-16 14:24:19",
            deleted: 0,
            remark: "",
            id: idxNum,
            name: titleCol,
            code: codeCol,
            required: 1,
            indexed: 1,
            type: 1,
            showed: 1,
            tableId: 1525861075613278209,
            dicTypeId: null,
          });

          idxNum++
        }
      }

      // 获取具体数据
      let num = 0;
      let markTbValueSvTaskNodeVoList = [];
      // let that=this
      for (let row of data) {
        console.log("row");
        console.log(row);
        // if (num === 0) {
        //   // 跳过第0行，标题
        //   num++;
        //   continue;
        // }
        let obj = {};
        let  tbValueList=[]
        for (let key of Object.keys(row)) {
          if (!!that.properties[key]) {
            if (key === "出生年月" && isDigit.test(row[key])) {
              row[key] = formatDateNumber(row[key], "-");
            } else if (key === "加入协会日期" && isDigit.test(row[key])) {
              //   加入协会日期: 37612
              //
              row[key] = formatDateNumber(row[key], "/");
            }
            // console.log("row[key]");
            // console.log(row[key]);
            let cellVal = row[key];
            console.log("cellVal");
            console.log(cellVal);
            // properties 哪里来的
            obj[that.properties[key]] = row[key];
            console.log("obj");
            console.log(obj);
            tbValueList.push({
              id: 1531211476122398721,
              value: cellVal,
              tbFieldId: 1526086121770401793,
              mark: "8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",
              tbTableId: 1525861075613278209,
              tbField: null,
            });

            console.log("tbValueList row  get");
            console.log(tbValueList);
          }
        }

        console.log("tbValueList");
        console.log(tbValueList);
        let node = {
          mark: "8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",
          tbValueList: tbValueList,
          // tbValuePub: {
          //   id: 1531211579855925249,
          //   createTime: "2022-05-30 17:51:03",
          //   createBy: "admin",
          //   updateTime: "2022-05-30 17:51:04",
          //   updateBy: "admin",
          //   deleted: 0,
          //   tbValueMark: "8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",
          //   tbTableId: 1525861075613278209,
          //   flowAccomplish: "-1",
          //   flowMark: "03886447-dffe-11ec-a51b-0c8bfde448c8",
          // },
          // svTaskNodeDto: {
          //   processDefinitionId:
          //     "未定义:16:d5698e05-dc03-11ec-9afd-4ed577b80fb9",
          //   nodeName: "区局督察开单/区级督察派单",
          //   taskId: "03e74d31-dffe-11ec-a51b-0c8bfde448c8",
          //   formKeys: "75ef80ba-d74b-46bc-ba1d-037623551519",
          //   createDate: "2022-05-30 17:51:01",
          //   dueDate: "2022-05-30 19:50:53",
          //   businessKey: "8b56223f-f2b7-4fe2-8ef7-49dc04b33aed",
          //   nodeId: "sid-2EE380AB-A916-4DD0-B54D-44B4B166A197",
          // },
        };

        markTbValueSvTaskNodeVoList.push(node);
        if (num <= 10) {
          that.showData.push(obj);
          num++;
        }
        // 一个obj 是包含好多个列的，就是一行
        that.importData.push(obj);
      }

      let records = {
        tbTable: {
          createBy: "",
          createTime: "2022-05-15 23:30:04",
          updateBy: "",
          updateTime: "2022-05-16 09:44:12",
          deleted: 0,
          remark: "string",
          id: 1525861075613278209,
          name: "区局实效督察",
          tbTypeId: 1525860700046909441,
          tbType: {
            createBy: "",
            createTime: "2022-05-15 23:28:34",
            updateBy: "",
            updateTime: "2022-05-15 23:28:34",
            deleted: 0,
            remark: "string",
            id: 1525860700046909441,
            name: "网上督察",
          },
          processDefinitionId: "未定义:16:d5698e05-dc03-11ec-9afd-4ed577b80fb9",
        },
        tbFieldList: tbFieldList,
        //表头数组
        markTbValueSvTaskNodeVoList: markTbValueSvTaskNodeVoList,
        //表格内容
      };
      this.list = records;

      console.log("this.importData");
      console.log(this.importData);

      userApi.
      insertBatch(this.importData).then(res=>{
        console.log("res insertBatch");
        console.log(res);
      })
    },

    handleBeforeUpload(file) {
      const uploadLimit = 2;
      const uploadTypes = [
        "jpg",
        "png",
        "doc",
        "docx",
        "xlsx",
        "zip",
        "rar",
        "pdf",
      ];
      const filetype = file.name.replace(/.+\./, "");
      const isRightSize = (file.size || 0) / 1024 / 1024 < uploadLimit;
      if (!isRightSize) {
        this.$message.error("文件大小超过 " + uploadLimit + "MB");
        return false;
      }

      if (uploadTypes.indexOf(filetype.toLowerCase()) === -1) {
        this.$message.warning({
          message:
            "请上传后缀名为jpg、png、txt、pdf、doc、docx、xlsx、zip或rar的附件",
        });
        return false;
      }

      return true;
    },

    search() {
      this.listLoading = true;
      userApi.getUserPageList(this.queryParam).then((data) => {
        const re = data.response;
        this.tableData = re.list;
        this.total = re.total;
        this.queryParam.pageIndex = re.pageNum;
        this.listLoading = false;
      });
    },
    changeStatus(row) {
      let _this = this;
      userApi.changeStatus(row.id).then((re) => {
        if (re.code === 1) {
          row.status = re.response;
          _this.$message.success(re.message);
        } else {
          _this.$message.error(re.message);
        }
      });
    },
    deleteUser(row) {
      let _this = this;
      userApi.deleteUser(row.id).then((re) => {
        if (re.code === 1) {
          _this.search();
          _this.$message.success(re.message);
        } else {
          _this.$message.error(re.message);
        }
      });
    },
    seeRecord(user){

      // D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\ExamRecord.vue
      this.$router.push({
        path: "/test/ExamRecord",
        query: {
          createUserId: user.id,
        },
      });
    
    },
    seeStatistics(user){
// D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\ExamRecord.vue
this.$router.push({
  path: "/test/Statistics",
  query: {
    createUserId: user.id,
  },
});

},
    // D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\Statistics.vue
    submitForm() {
      this.queryParam.pageIndex = 1;
      this.search();
    },
    levelFormatter(row, column, cellValue, index) {
      return this.enumFormat(this.levelEnum, cellValue);
    },
    sexFormatter(row, column, cellValue, index) {
      return this.enumFormat(this.sexEnum, cellValue);
    },
    statusFormatter(status) {
      return this.enumFormat(this.statusEnum, status);
    },
    statusTagFormatter(status) {
      return this.enumFormat(this.statusTag, status);
    },
    statusBtnFormatter(status) {
      return this.enumFormat(this.statusBtn, status);
    },
  },
  computed: {
    ...mapGetters("enumItem", ["enumFormat"]),
    ...mapState("enumItem", {
      sexEnum: (state) => state.user.sexEnum,
      statusEnum: (state) => state.user.statusEnum,
      statusTag: (state) => state.user.statusTag,
      statusBtn: (state) => state.user.statusBtn,
      levelEnum: (state) => state.user.levelEnum,
    }),
  },
};
</script>
