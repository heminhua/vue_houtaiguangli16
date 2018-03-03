//1、导入第三方库
import Vue from 'vue'
import Vuex from 'vuex'
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
        store.dispatch(store.state.global.ChangeMenuActiveNoFlag, to.meta.menuno);
        // console.log(store.state.global.menuActiveNo);
    }
    // 继续路由跳转
    next();
});

//2、启用Vue插件 
//使用element-ui
Vue.use(ElementUI)
Vue.use(Vuex)

//3.引入全局样式
import './less/index.less'

// 4.1 导入配置后的axios与api, 并注入到Vue原型中 将来在实例通过this.$http调用
import axios from './js/axios_config.js';
import api from './js/api_config.js';
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

new Vue({
    el: '#app',
    data() {

        //定义vuex的状态,可以通过 store.state.模块名称.state中定义的属性名进行具体的操作,例如：store.state.global.list.push(1);
        const state = {
            list: []
        };
        // 更改 Vuex 的 store 中的state中变量的值
        const mutations = {
            addData(state, num) {
                state.list.push(num);
            }
        };
        // 提交mutation，而不是直接变更状态,可以通过store.dispatch('key')或者this.$store.dispatch('key')来触发某个action，例如store.dispatch('addData1') 可以触发addData1这个方法
        const actions = {
            addData1({ commit }, num) {
                // 触发mutations里面的名称为addData函数
                commit('addData', num);
            }
        };
        // 针对state的属性进行一些自定义操作可以定义在这里面，但是注意一定要依赖于state中的具体属性，否则不会触发，
        // 可以通过： store.getList 或者 this.$store.getList调用
        const getters = {
            getList() {
                return state.list;
            }
        };

        return {
            menu: [
                { title: '学员问题', submenu:
                    [
                        { text: '内容管理', path: '/admin/student/content/list' },
                        { text: '类别管理', path: '/admin/student/category/list' },
                        { text: '评论管理', path: '/admin/student/comment/list' },
                    ]
                },
                { title: '前端技术', submenu:
                    [
                        { text: '内容管理', path: '/admin/web/content/list' },
                        { text: '类别管理', path: '/admin/web/category/list' },
                        { text: '评论管理', path: '/admin/web/comment/list' },
                    ]
                },
                { title: '难点答疑', submenu:
                    [
                        { text: '内容管理', path: '/admin/difficulty/content/list' },
                        { text: '类别管理', path: '/admin/difficulty/category/list' },
                        { text: '评论管理', path: '/admin/difficulty/comment/list' },
                    ]
                },
                { title: '资源下载', submenu:
                    [
                        { text: '内容管理', path: '/admin/assets/content/list' },
                        { text: '类别管理', path: '/admin/assets/category/list' },
                        { text: '评论管理', path: '/admin/assets/comment/list' },
                    ]
                },
                { title: '商品管理', submenu:
                    [
                        { text: '内容管理', path: '/admin/goods/content/list' },
                        { text: '类别管理', path: '/admin/goods/category/list' },
                        { text: '评论管理', path: '/admin/goods/comment/list' },
                    ]
                },
                { title: '订单管理', submenu:
                    [
                        { text: '订单列表', path: '/admin/order/content/list' },
                    ]
                },
            ]
        }
    },
    router,//路由注入Vue的实例中
    store,//使用store对象
    routes: [
        { name: 'index', path: '/index', component: App }//定义主路由
    ],
    //下面使用的箭头函数也是Es6 的语法
    render: createElement => createElement(App)//渲染数据
}) 