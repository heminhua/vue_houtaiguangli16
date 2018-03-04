<template>
    <div class="main">
        <div class="main_top">
            <!-- Breadcrumb 面包屑 -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">购物商城</el-breadcrumb-item>
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>内容管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="main_handle">
            <el-button icon="el-icon-plus" size="small">搜索</el-button>
            <el-button icon="el-icon-check" size="small">全选</el-button>
            <el-button icon="el-icon-delete" size="small">删除</el-button>
            <el-input prefix-icon="el-icon-search" placeholder="请输入内容" v-model="input21">
            </el-input>
        </div>
    
    </div>


</template>

<script>


export default {
  
    data() {
        return {
            input21: '',
        }
    },
};
</script>

<style scoped lang="less">
.main_top {
  border-bottom: 1px solid #ccc;
  height: 50px;
  position: relative;
  margin-bottom: 15px;
  .el-breadcrumb {
    position: absolute;
    bottom: 10px;
  }
}
.main_handle {
  height: 70px;
  line-height: 70px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding-left: 10px;
  position: relative;
  .el-input{
      position: absolute;
      width: 200px;
      top: 0;
      right: 10px;
  }
}
</style>