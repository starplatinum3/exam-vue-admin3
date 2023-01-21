<template>
    <el-card>
        <div slot="header" class="clearfix">
            <span>编辑</span>
            点击保存 可以修改图形
        </div>
        <el-main>
            <div>info.id</div>
            <div>{{ info.id }}</div>
            <el-form ref="form" label-width="40px">
                <el-form-item label="类型">
                    <el-input disabled v-model="info.type"></el-input>
                </el-form-item>
                <el-form-item label="id">
                    <el-input disabled v-model="info.id"></el-input>
                </el-form-item>
                <el-form-item label="名称">
                    <el-input v-model="info.name"></el-input>
                </el-form-item>
                <el-form-item label="left">
                    <el-input v-model="info.left"></el-input>
                </el-form-item>
                <el-form-item label="top">
                    <el-input v-model="info.top"></el-input>
                </el-form-item>
                <el-form-item label="图标">
                    <el-input v-model="info.icon"></el-input>
                </el-form-item>
                <el-form-item>
                    <!-- 保存 -->
                    <el-button type="primary" 
                    @click="$emit('save-node-info', info)" 
                    :disabled="!saveFlag">修改数据确定</el-button>
                    <!-- :disabled="saveFlag">修改数据确定</el-button> -->
                    <el-button :disabled="!saveFlag">重置</el-button>
                    <!-- <el-button :disabled="saveFlag">重置</el-button> -->
                </el-form-item>
            </el-form>
        </el-main>
    </el-card>
</template>

<script>
export default {
  name: 'List',
  props: ['info', 'saveFlag'],
  mounted(){
    // console.log("this.info");
    // console.log(this.info);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
