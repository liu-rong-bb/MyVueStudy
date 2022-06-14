<!--汇总所有的组件-->
<template>
    <div>
        <Student name="张三" sex="男" :age="18"></Student>
    </div>
</template>

<script>

    import Student from './components/Student'

    export default {
        name: "App",
        components: {
            Student
        }
    }
</script>

<style scoped>

</style>
