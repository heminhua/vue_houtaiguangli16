//1、导入第三方库
import Vue from 'vue'
import App from './component/App.vue'
import router from './router/index.js'// 引用路由 /index.js可以省略
//导入vuex的store对象
import store from './stores/vueXIndex.js'
//引入element-ui插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//处理全局样式 插件
import 'normalize.css'

// 路由钩子,实现菜单的改变给全局变量赋值
router.beforeEach((to, from, next) => {
    console.log('钩子未处理的');
    // console.log('meta.menuno='+to.meta.menuno);
    if (to.meta.menuno) {
        // store.state.global.menuActiveNo = to.meta.menuno;
    // 触发store中的action实现当前菜单id的改变
         store.dispatch(store.state.global.ChangeMenuActiveNoFlag,to.meta.menuno);
        // console.log(store.state.global.menuActiveNo);
    }
  // 继续路由跳转
  next();
});

//2、启用Vue插件 
//使用element-ui
Vue.use(ElementUI)

//3.引入全局样式
import './less/index.less'

// 4.1 导入配置后的axios与api, 并注入到Vue原型中 将来在实例通过this.$http调用
import axios from './js/axios_config.js';
import api from './js/api_config.js';
Vue.prototype.$http = axios;
Vue.prototype.$api = api;



new Vue({
    el:'#app',  
    router,//路由注入Vue的实例中
    // store,//使用store对象
    routes:[
        {name:'index',path:'/index',component:App}//定义主路由
    ],
    //下面使用的箭头函数也是Es6 的语法
    render:createElement=>createElement(App)//渲染数据
}) 