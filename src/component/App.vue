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
        <p>我是{{counts}}</p>
        <!-- <button @click="getLoginPage">计算</button> -->
        <button @click="getLoginPage">计算</button>
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
      counts: 1,
      isShow: true
    };
  },
  methods: {
    getLoginPage() {
      this.counts = this.counts + 1;
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