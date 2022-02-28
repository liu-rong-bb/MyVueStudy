// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'; // 导入element-ui包
import 'element-ui/lib/theme-chalk/index.css'; // 导入相关样式


Vue.config.productionTip = false

Vue.use(ElementUI); // 引用
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
