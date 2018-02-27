import Vue from 'vue'
import App from './component/App.vue'
import router from './router/index.js'// 引用路由 /index.js可以省略
new Vue({
    el:'#app',  
    router,//路由注入Vue的实例中

    //下面使用的箭头函数也是Es6 的语法
    render:createElement=>createElement(App)//渲染数据
})