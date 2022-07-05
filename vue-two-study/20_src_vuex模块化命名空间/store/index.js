// 用于创建Vuex中最核心的store

// 引入vuex
import Vuex from 'vuex'
import Vue from 'vue'
import countOptions from './count'
import personOptions from './person'
Vue.use(Vuex)

// 创建并导出store
export default new Vuex.Store({
    modules:{
        countAbout: countOptions,
        personAbout: personOptions,
    }
})


