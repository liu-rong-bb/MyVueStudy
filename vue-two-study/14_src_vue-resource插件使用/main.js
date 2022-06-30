// 引用vue
import Vue from 'vue'
// app组件是所有组件的父组件
import App from './App.vue'
// 引入插件
import vueResource from 'vue-resource'

// 关闭Vue中的生产提示
Vue.config.productionTip = false
Vue.use(vueResource)

// 创建Vue实例对象
new Vue({
  el: '#app',
  render:h => h(App),
})
