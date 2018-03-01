import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);

import global from './global/globalIndex.js';

export default new vuex.Store({
    modules:{
        global
    }
});