<!--组件的结构-->
<template>
    <div>
        <h2 >学校名称：{{name}}</h2>
<!--        使用全局过滤器-->
        <h2>学校地址：{{address | mySlice}}</h2>
        <button @click="test">点我测试一下hello方法</button>
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
        methods: {
            test() {
                this.hello()
            }
        }
    }
</script>


