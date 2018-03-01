<template>
    <div class="header">
        <i class="el-icon-menu"></i>
        <!-- 组件 -->
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                <i class="el-icon-arrow-down"></i>
                功能
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">修改密码</el-dropdown-item>
                <el-dropdown-item command="b">注销登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <!-- 组件 -->

        <div class="userName">你好{{admin}}</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      admin: localStorage.getItem("admin")
    };
  },
   methods: {
       logout(){
        //    console.log(11);
        this.$http.get(this.$api.logout).then((res)=>{
            // console.log(res);
            if(res.data.status==0){
                /* 退出登录，指向登录页面  ---  路由重定向 */
                this.$router.push({name:'login'})
            }

        })
       },
      handleCommand(command) {
        if(command=='b'){
            this.logout()
        }
      }
    }
};
</script>

<style scoped lang="less">
.header {
  .userName {
    float: right;
    border-right: 1px solid #ccc;
    padding-right: 5px;
  }
  .el-dropdown {
    float: right;
    margin-left: 5px;
    .el-dropdown-link {
      cursor: pointer;
    }
  }
}
</style>