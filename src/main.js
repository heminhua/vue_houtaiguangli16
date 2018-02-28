import Vue from 'vue'
import App from './component/App.vue'
import router from './router/index.js'// 引用路由 /index.js可以省略

//引入element-ui插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//使用element-ui
Vue.use(ElementUI)

// 3.1 导入配置后的axios与api, 并注入到Vue原型中 将来在实例通过this.$http调用
import axios from './js/axios_config.js';
import api from './js/api_config.js';
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

new Vue({
    el:'#app',  
    router,//路由注入Vue的实例中
    routes:[
        {name:'index',path:'/index',component:App}//定义主路由
    ],
    //下面使用的箭头函数也是Es6 的语法
    render:createElement=>createElement(App)//渲染数据
}) 