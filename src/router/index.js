//1、导入第三方库   路由配置
import Vue from 'vue'
import VueRouter from 'vue-router'//这是基于vue的一个插件
import Login from '../component/login/Login.vue'
import Admin from '../component/admin/Admin.vue'
//2、启用Vue插件 
Vue.use(VueRouter)//启用插件（是插件就必须要启用）

//导出路由实例
export default new VueRouter({
    // linkActiveClass:'',

    routes: [
        { name: 'login', path: '/login', component: Login },
        { name: 'admin', path: '/admin', component: Admin },
        {path:'/',redirect:'/admin'},//默认跳转到/admin下面
    ]
})
