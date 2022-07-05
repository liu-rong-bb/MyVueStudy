<template>
    <div>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入名称"></input>
        <button>添加</button>
        <ul>
            <li v-for="person in personList" :key="person.id">{{person.name}}</li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Person",
        computed: {
            ...mapState(['personList'])
        }
    }
</script>

<style scoped>

</style>
