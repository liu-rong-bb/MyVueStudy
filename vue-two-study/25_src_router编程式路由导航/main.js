// 引用vue
import Vue from 'vue'
// app组件是所有组件的父组件
import App from './App.vue'
import vueRouter from 'vue-router'
// 引用路由器
import router from './router/index'
// import $ from 'jquery'
// import 'bootstrap'


// 引入bootstrap样式
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

// 全局注册 $
// Vue.prototype.$ = $

// 关闭Vue中的生产提示
Vue.config.productionTip = false
// 应用插件
Vue.use(vueRouter)

// 创建Vue实例对象
new Vue({
  el: '#app',
  render:h => h(App),
  router: router
})
