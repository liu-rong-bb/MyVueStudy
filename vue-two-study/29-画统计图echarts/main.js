// 引用vue
import Vue from 'vue'
// app组件是所有组件的父组件
import App from './App.vue'
// 引入ElementUI
import ElementUI from 'element-ui';
// 引入ElementUI样式
import 'element-ui/lib/theme-chalk/index.css';

// 关闭Vue中的生产提示
Vue.config.productionTip = false

Vue.use(ElementUI)


// 创建Vue实例对象
new Vue({
  el: '#app',
  render:h => h(App),
})
