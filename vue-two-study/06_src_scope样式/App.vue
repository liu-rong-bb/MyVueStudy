<!--汇总所有的组件-->
<template>
    <div>
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
        }
    }
</script>

<style scoped>

</style>
