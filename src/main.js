import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false
// 引入axios
import axios from 'axios'
// 创建一个实例,写一个接口根地址,放到vue实例上
Vue.prototype.$http = axios.create({
  baseURL:'http://localhost:3001/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
