import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);

import global from './global/globalIndex.js';

export default new vuex.Store({
    modules:{
        global:{
            // state,mutations,actions,getters
        }
    }
});
  // 实例化store对象
  const store = new vuex.Store({
    modules:{
    
  }
  });
