<template>

    <div class="aside">
        <!-- logo -->
        <img src="../../images/share.png" alt="">
        <!-- element-ui -->
      
            <el-aside width="200px">
                <el-menu  background-color="#267cb7" text-color="#fff" active-text-color="orange "  >
                    <!-- index -1 -->
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-message"></i>学员问题汇总</template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><i class="el-icon-document"></i>内容管理</el-menu-item>
                            <el-menu-item index="1-2"><i class="el-icon-document"></i>类别管理</el-menu-item>
                            <el-menu-item index="1-3"><i class="el-icon-document"></i>评论管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <!-- index -1 -->
                   
                    <!-- index -2 -->
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-message"></i>前端常用功能</template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1"><i class="el-icon-document"></i>内容管理</el-menu-item>
                            <el-menu-item index="2-2"><i class="el-icon-document"></i>类别管理</el-menu-item>
                            <el-menu-item index="2-3"><i class="el-icon-document"></i>评论管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <!-- index -2 -->
                   
                    <!-- index -3 -->
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-message"></i>重难点专区</template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1"><i class="el-icon-document"></i>内容管理</el-menu-item>
                            <el-menu-item index="3-2"><i class="el-icon-document"></i>类别管理</el-menu-item>
                            <el-menu-item index="3-3"><i class="el-icon-document"></i>评论管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <!-- index -3 -->
                   
                    <!-- index -4 -->
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-message"></i>资源下载</template>
                        <el-menu-item-group>
                            <el-menu-item index="4-1"><i class="el-icon-document"></i>内容管理</el-menu-item>
                            <el-menu-item index="4-2"><i class="el-icon-document"></i>类别管理</el-menu-item>
                            <el-menu-item index="4-3"><i class="el-icon-document"></i>评论管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <!-- index -4 -->
                    <!-- index -5 -->
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-message"></i>购物商城</template>
                        <el-menu-item-group>
                            <el-menu-item index="5-1"><i class="el-icon-document"></i>内容管理</el-menu-item>
                            <el-menu-item index="5-2"><i class="el-icon-document"></i>类别管理</el-menu-item>
                            <el-menu-item index="5-3"><i class="el-icon-document"></i>评论管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <!-- index -5 -->
                   
                    <!-- index -6 -->
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-message"></i>订单管理</template>
                        <el-menu-item-group>
                            <el-menu-item index="6-1"><i class="el-icon-document"></i>订单列表</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <!-- index -6 -->
                   
                   
                </el-menu>
            </el-aside>
            <!-- element-ui -->
    </div>

</template>

<script>
export default {
  data() {
    return {
      // tableData: Array(20).fill(item)
    };
  }
};
</script>

<style scoped lang="less">
.aside {
  text-align: center;
  .el-aside{
      .el-icon-message{
          color:#fff;
      }
      .el-icon-document{
          color:#fff;
      }
  }
}
</style>