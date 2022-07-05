export default {
    namespaced: true,
    actions : {
        incrementOdd(context, value) {
            if(context.state.sum % 2) {
                context.commit('INCREMENT', value)
            }
        },
        incrementWait(context, value) {
            // 定时器
            setTimeout(() => {
                context.commit('INCREMENT', value)
            }, 500)
        },
    },
    mutations : {
        INCREMENT(state, value) {
            state.sum += value
        },
        DECREMENT(state, value) {
            state.sum -= value
        },
    },
    state : {
        sum : 0,
        address: '沈阳',
        work: '程序员',
    },
    getters : {
        bigSum(state) {
            return state.sum * 10
        }
    },
}
