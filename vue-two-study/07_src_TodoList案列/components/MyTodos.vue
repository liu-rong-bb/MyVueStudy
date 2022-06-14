<template>
    <div>
        <ul v-for="todo in todoList" :key="todo.id">
            <my-items :todo="todo"></my-items>
        </ul>
    </div>
</template>

<script>
    import MyItems from './MyItems'

    export default {
        name: "MyTodos",
        components: {
            MyItems
        },
        props:['todoList']
    }
</script>

<style scoped>

</style>
