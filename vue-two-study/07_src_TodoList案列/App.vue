<!--汇总所有的组件-->
<template>
    <div>
        <my-head></my-head>
        <my-todos :todoList="todoList"></my-todos>
        <my-ends></my-ends>
    </div>
</template>

<script>

    import MyHead from './components/MyHead'
    import MyTodos from './components/MyTodos'
    import MyEnds from './components/MyEnds'

    export default {
        name: "App",
        components: {
            MyEnds,
            MyTodos,
            MyHead
        },
        data() {
            return{
                todoList:[
                    {id: 1, name: '前端', dome: true},
                    {id: 2, name: '中台', dome: false},
                    {id: 3, name: '后台', dome: true}
                ]
            }
        }
    }
</script>

<style scoped>

</style>
