import Vue from 'vue'
import App from './App.vue'
//引入vueRouter
import VueRouter from 'vue-router'
//引入element-ui
// import ElementUI from 'element-ui'
//引入路由器
import router from "./router"
//引入axios
import axios from "axios"

Vue.config.productionTip = false


import Plugins from "./plugins/element"
Vue.use(Plugins)
//配置请求的根路径
axios.defaults.baseURL = "http://localhost:8080/api/"
//添加请求拦截器，保证数据获取权限
axios.interceptors.request.use(config => {
  const token = window.sessionStorage.getItem('token')
  //为请求头字段添加token验证的Authorization字段
  config.headers['Authorization'] = `Bearer ${token}`
  return config
}),
  //将axio绑定到Vue原型对象上
  Vue.prototype.$http = axios
//应用vueRouter
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
