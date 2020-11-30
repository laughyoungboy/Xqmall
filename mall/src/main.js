import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import Vant from 'vant';
import 'vant/lib/index.css';
import api from '@/assets/config/api.js'
// 全局导入api

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  data:{
    api
  },
  render: h => h(App)
}).$mount('#app')
