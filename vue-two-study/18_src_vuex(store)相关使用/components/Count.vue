<template>
<!--    Vue-->
    <div>
        <h1>当前求和为： {{sum}}</h1>
        <h1>当前求和放大十倍为： {{bigSum}}</h1>
        <h1>我在{{address}}, 是一名{{work}}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>

    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
    export default {
        name: "Count",
        computed: {
            // 自己写计算属性
            // sum() {
            //     return this.$store.state.sum
            // },
            // address() {
            //     return this.$store.state.address
            // },
            // work() {
            //     return this.$store.state.work
            // },
            // vuex自己生成计算属性，从state中拿数据（对象写法）
            // 将多个数组对象展开插入数组中
            ...mapState({sum: 'sum', address: 'address', work: 'work'}),

            //// vuex自己生成计算属性，从state中拿数据（数组写法）
            ...mapState(['sum', 'address', 'work']),
            // bigSum() {
            //     return this.$store.getters.bigSum
            // }

            // vuex自己生成计算属性，从getters中拿数据（数组写法）
            // ...mapGetters(['bigSum']),

            // vuex自己生成计算属性，从getters中拿数据（对象写法）
            ...mapGetters({bigSum:'bigSum'})
        },
        data() {
            return {
                n:1
            }
        },
        mounted() {
            // console.log(this)
        },
        methods: {
            // increment() {
            //     // 没啥业务逻辑可以直接调用commit
            //     this.$store.commit('INCREMENT', this.n)
            // },
            // decrement() {
            //     this.$store.commit('DECREMENT', this.n)
            // },

            // vuex自己生成方法，方法会调用commit去联系mutations（对象写法）
            ...mapMutations({increment: 'INCREMENT', decrement: 'DECREMENT' }),
             /**************/
            // incrementOdd() {
            //     this.$store.dispatch('incrementOdd', this.n)
            // },
            // incrementWait() {
            //     this.$store.dispatch('incrementWait', this.n)
            // },
            // vuex自己生成方法，方法会调用dispatch去联系actions（对象写法）
            ...mapActions({incrementOdd: 'incrementOdd', incrementWait: 'incrementWait'})
        }
    }
</script>

<style scoped>
    button {
        margin-left: 5px;
    }
</style>
