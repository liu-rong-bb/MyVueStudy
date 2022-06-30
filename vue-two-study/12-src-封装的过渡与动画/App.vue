<!--汇总所有的组件-->
<template>
    <div class="app">
        <test></test>
        <test2></test2>
        <test3></test3>
    </div>
</template>

<script>
    import test from './components/test'
    import test2 from './components/test2'
    import test3 from './components/test3'

    export default {
        name: "App",
        components: {
            test,
            test2,
            test3
        },
        data() {
            return {
                msg: '你好'
            }
        },
    }
</script>

<style scoped>
</style>
