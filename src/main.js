import Vue from 'vue'
import App from './App.vue'

import '@/style/style.css'
import '@/style/flewStyle.css'

import router from './router/router'

import store from './store/index'

import '@/axios/http.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/element.stylus'
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),  
  router,
  store,
}).$mount('#app')
