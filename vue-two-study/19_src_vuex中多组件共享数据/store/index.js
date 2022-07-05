// 用于创建Vuex中最核心的store

// 引入vuex
import Vuex from 'vuex'
import Vue from 'vue'
import {nanoid}  from 'nanoid'

Vue.use(Vuex)
// 准备actions-用于相应组件中的动作
const actions = {
    incrementOdd(context, value) {
        if(state.sum % 2) {
            context.commit('INCREMENT', value)
        }
    },
    incrementWait(context, value) {
        // 定时器
        setTimeout(() => {
            context.commit('INCREMENT', value)
        }, 500)
    },
    addPerson(context, value) {
        let person = {
            id: nanoid() ,
            name: value
        }
        context.commit('ADD_PERSON', person)
    }
}
// 准备mutations-用于操作数据（state）
// 方法都用大写
const mutations = {
    INCREMENT(state, value) {
        state.sum += value
    },
    DECREMENT(state, value) {
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        state.personList.unshift(value)
    }
}
// 准备state-用于存储数据
const state = {
    sum : 0,
    address: '沈阳',
    work: '程序员',
    personList: [
        {id: '001', name: '张三'},
    ]
}

const getters =  {
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建并导出store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})


