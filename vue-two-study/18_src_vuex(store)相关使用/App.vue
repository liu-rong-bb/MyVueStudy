<!--汇总所有的组件-->
<template>
    <div>
        <Count></Count>
    </div>
</template>

<script>
    import Count from './components/Count'
    export default {
        name: "App",
        components: {
            Count,
        },
        mounted() {
        }
    }
</script>

<style>

</style>
