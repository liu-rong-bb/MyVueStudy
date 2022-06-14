<template>
    <li>
        <label>
            <input type="checkbox"></input>
            <span>{{todo.name}}</span>
        </label>
        <button >删除</button>
    </li>
</template>

<script>
    export default {
        name: "MyItems",
        props:['todo']
    }
</script>

<style scoped>

</style>
