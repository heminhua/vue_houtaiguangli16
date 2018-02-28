<template>
  <div>
    <div class="red">{{val}}</div>
    <!-- switch 开关 -->
    <el-switch style="display: block" v-model="payWay" active-color="#13ce66" inactive-color="#ff4949" active-text="按月" inactive-text="按年">
    </el-switch>
    <!-- button -->
    <el-button type="primary" round>
      <router-link to="./index">index</router-link>
    </el-button>
    <el-button type="primary" round>
      <router-link to="./login">登录</router-link>
    </el-button>
    <el-button type="primary" round>
      <router-link to="./register">注册</router-link>
    </el-button>
    <!-- ** -->
    <input type="text" v-model="firstNum">
    <select v-model="checked">
      <option value="1">+</option>
      <option value="2">-</option>
      <option value="3">*</option>
      <option value="4">/</option>
    </select>
    <input type="text" v-model="lastNum">
    <!-- <button @click="getLoginPage">计算</button> -->
    <button @click="getLoginPage">计算</button>
    <input type="text" v-model="result">
    <!-- 使用自定义组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: "hello word",
      payWay: true,
      checked: "1",
      firstNum: "",
      lastNum: "",
      result: ""
    };
  },
  methods: {
    getLoginPage() {
      switch (this.checked) {
        case "1":
          this.result = parseInt(this.firstNum) + parseInt(this.lastNum);
          break;
        case "2":
          this.result = parseInt(this.firstNum) - parseInt(this.lastNum);
          break;
        case "3":
          this.result = parseInt(this.firstNum) * parseInt(this.lastNum);
          break;
        case "4":
          this.result = parseInt(this.firstNum) / parseInt(this.lastNum);
          break;

        default:
          break;
      }
    },
    toggle() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style scoped>
.red {
  color: rgb(107, 1, 63);
  font-size: 40px;
}
button {
  margin-top: 10px;
}
a {
  color: #fff;
  text-decoration: none;
}
</style>