<template>
    <div>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入名称" v-model="name"></input>
        <button @click="add(name)">添加</button>
        <button @click="addWan()">添加小王</button>
        <ul>
            <li v-for="person in personList" :key="person.id">{{person.name}}</li>
        </ul>
        <h3 style="color: red">Count组件求和为：{{sum}}</h3>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex'
    import {nanoid}  from 'nanoid'
    export default {
        name: "Person",
        computed: {
            ...mapState('personAbout',['personList']),
            ...mapState('countAbout',['sum'])
        },
        mounted() {
          console.log(this.$store)
        },
        data() {
            return {
                name:'',
            }
        },
        methods: {
            // ...mapActions('personAbout',{add: 'addPerson'}),
            add(name) {
                this.$store.dispatch('personAbout/addPerson', name)
            },
            addWan() {
                let person = {
                    id: nanoid() ,
                    name: '小王'
                }
                this.$store.commit('personAbout/ADD_PERSON', person)
            }
        }
    }
</script>

<style scoped>

</style>
