<template>
    <div>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入名称" v-model="name"></input>
        <button @click="add(name)">添加</button>
        <ul>
            <li v-for="person in personList" :key="person.id">{{person.name}}</li>
        </ul>
        <h3 style="color: red">Count组件求和为：{{sum}}</h3>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex'
    export default {
        name: "Person",
        computed: {
            ...mapState(['personList', 'sum'])
        },
        data() {
            return {
                name:'',
            }
        },
        methods: {
            ...mapActions({add: 'addPerson'})
        }
    }
</script>

<style scoped>

</style>
