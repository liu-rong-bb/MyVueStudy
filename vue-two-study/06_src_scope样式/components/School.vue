<!--组件的结构-->
<template>
    <div class="demo">
        <h2 >学校名称：{{name}}</h2>
<!--        使用全局过滤器-->
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<!--组件交互的代码-->
<script>
    export default {
        name: 'School',
        data() {
            return {
                name: '大学',
                address: '辽宁沈阳铁西区'
            }
        },
    }
</script>

<style scoped>
    .demo{
        background: antiquewhite;
    }
</style>


