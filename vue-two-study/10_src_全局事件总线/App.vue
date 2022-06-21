<!--汇总所有的组件-->
<template>
    <div class="app">
        <h2>{{msg}}</h2>
        <Student></Student>
        <School></School>
    </div>
</template>

<script>

    import School from './components/School'
    import Student from './components/Student'

    export default {
        name: "App",
        components: {
            Student,
            School
        },
        data() {
            return {
                msg: '你好'
            }
        },
    }
</script>

<style scoped>
.app{
    background: gray;
    padding: 5px;
    margin-top: 30px;
}
</style>
