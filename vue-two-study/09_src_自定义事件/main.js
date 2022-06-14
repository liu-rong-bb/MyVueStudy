// 引用vue
import Vue from 'vue'
// app组件是所有组件的父组件
import App from './App.vue'

// 关闭Vue中的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象
new Vue({
  el: '#app',
  render:h => h(App),
  // mounted() {
  //   // 定时任务，3秒后销毁
  //   setTimeout(() => {
  //     this.$destroy()
  //   }, 3000)
  // }
})
