
    <!-- 提交申报材料界面 -->
    <el-dialog :title="uploadDialogTitle" :visible.sync="uploadDialogVisible" width="500px" append-to-body>
      <!-- 表单上传控件 -->
      <div v-for="(file, index) in toUploadFileList" :key="index" class="upload-item">

        <div class="file-row">
          <div class="file-name">{{ file.type }}：</div>
          <el-upload class="upload-demo" :ref="`upload_${index}`" :action="getUploadUrl(file.type)" :auto-upload="false"
            :file-list="[file]" :on-exceed="handleExceed" :on-remove="handleRemove" :before-upload="beforeUpload">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </div>
        <!-- <div class="file-name" v-show="file.name">{{ file.name }}</div> -->
      </div>
    </el-dialog>

    .upload-demo{
        width:200px;
        wrap 啥的
        
    }