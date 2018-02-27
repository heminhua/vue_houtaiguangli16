<template>
    <div>
        <div class="red">{{val}}</div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  data() {
    return {
      val: "hello word",

      
    };
  },
  
};
</script>

<style scoped>
.red{
    color:rgb(107, 1, 63);
    font-size: 40px;
}
</style>