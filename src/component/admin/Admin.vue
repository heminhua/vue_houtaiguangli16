<template>
    <div class="admin">

        <el-container>
            <!-- 公共侧边栏 -->
            <el-aside width="200px">
                <app-aside></app-aside>
            </el-aside>
            <el-container>
                <!-- 公共头部 -->
                <el-header>
                    <app-header></app-header>
                </el-header>
                <!-- 主体部分 -->
                <el-main>
                    <app-main></app-main>
                </el-main>
            </el-container>
        </el-container>

        <router-view></router-view>
    </div>

</template>
<script>
import Header from "./subCom/Header.vue";
import Aside from "./subCom/Aside.vue";
import Main from "./subCom/Main.vue";

export default {
  components: {
    appHeader: Header,
    appAside: Aside,
    appMain:Main,
  },

  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.admin {
  height: 100%;
  .el-container {
    height: 100%;
    position: relative;

    .el-header {
    line-height: 60px;
      width: 100%;
      position: absolute;
      top: 0;
      background: #fafafa;
      border-bottom: 1px solid #ccc;
    }
    .el-aside {
      height: 100%;
      background: #267cb7;
    }
    .el-main {
      height: 100%;
      padding: 60px 10px 10px;
    }
  }
}
</style>