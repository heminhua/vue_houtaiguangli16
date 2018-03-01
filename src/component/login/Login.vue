<template>
    <div class="login">
        <section>
            <!-- element-ui插件 表单验证-->
            <el-form label-position="top" :model="loginCheck" status-icon :rules="loginRules" ref="loginCheck" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="uname">
                    <el-input type="text" v-model="loginCheck.uname" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="upwd">
                    <el-input type="password" v-model="loginCheck.upwd" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginCheck')">提交</el-button>
                    <el-button @click="resetForm('loginCheck')">重置</el-button>
                </el-form-item>
            </el-form>
            <!-- element-ui插件 表单验证-->

        </section>
    </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        //   console.log("请输入密码");
        callback(new Error("请输入用户名"));
      }
      callback();
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        //   console.log('请输入密码');
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      // labelPosition: 'top',
      // class:'position',
      loginCheck: {
        uname: "",
        upwd: ""
      },
      loginRules: {
        uname: [{ validator: validatePass, trigger: "blur" }],
        upwd: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      this.$http.post(this.$api.login, this.loginCheck).then(res => {
        // console.log(res);

        if (res.data.status == 0) {
          this.$alert("确定登录", "登录", {
            confirmButtonText: "确定",
            callback: () => {
                //将用户名存到本地中
              localStorage.setItem("admin", res.data.message.uname);
              // console.log(res.data);
              this.$router.push({ name: "admin" });
            }
          });
        } else {
          this.$alert(res.data.message);
        }
      });
    },
    //验证
    submitForm(formName) {
      // console.log(123123);
      // var _this = this;
      // console.log(self);
      this.$refs[formName].validate(valid => {
        if (valid) {
          //   alert("submit!");
          this.login();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }

  //   methods: {
  //     // 登陆
  //     login() {
  //       this.$http.post(this.$api.login, this.user).then(res => {});
  //     },

  //     // 判断是否已登陆
  //     isLogin() {
  //       this.$http.get(this.$api.islogin).then(rsp => alert(rsp.data.code));
  //     }
  //   }
};
</script>
<style scoped lang="less">
.login {
  height: 100%;
  background: skyblue;
  section {
    width: 400px;
    // height: 300px;
    padding: 30px 20px;
    // border: 2px solid rgba(0, 4, 240, 0.358);
    border-radius: 10px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
 