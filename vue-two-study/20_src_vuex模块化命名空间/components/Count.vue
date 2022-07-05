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
        <h3 style="color: red">下列人员的总数:{{personList.length}}</h3>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
    export default {
        name: "Count",
        computed: {
            ...mapState('countAbout', ['sum', 'address', 'work']),
            ...mapState('personAbout', [ 'personList']),
            ...mapGetters('countAbout',['bigSum'])
        },
        data() {
            return {
                n:1
            }
        },
        methods: {
            ...mapMutations('countAbout',{increment: 'INCREMENT', decrement: 'DECREMENT' }),
             /**************/
            ...mapActions('countAbout',{incrementOdd: 'incrementOdd', incrementWait: 'incrementWait'}),
        }
    }
</script>

<style scoped>
    button {
        margin-left: 5px;
    }
</style>
