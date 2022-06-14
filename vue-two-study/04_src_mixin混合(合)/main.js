// 引用vue
import Vue from 'vue'
// app组件是所有组件的父组件
import App from './App.vue'
// 全局的混合，所有Vue都会用
import {maxin, maxin2} from './maxin'

// 关闭Vue中的生产提示
Vue.config.productionTip = false
Vue.mixin(maxin)
Vue.mixin(maxin2)

// 创建Vue实例对象
new Vue({
  el: '#app',

  // render(h) {
  //   return h(App)
  // }
  // 没有用到this就可以用箭头函数
  render:h => h(App)

  // template:'<App></App>',
  // components: {App},
  // 将app组件放入容器中
  // render: h => h(App),
})
    // .$mount('#app')
