// 引用vue
import Vue from 'vue'
// app组件是所有组件的父组件
import App from './App.vue'

// 关闭Vue中的生产提示
Vue.config.productionTip = false

Vue.prototype.x = {a:3,b:4}

// 创建Vue实例对象
new Vue({
  el: '#app',
  render:h => h(App),
  // 安装全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})
