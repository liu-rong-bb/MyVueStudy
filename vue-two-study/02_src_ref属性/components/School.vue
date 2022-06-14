<!--组件的结构-->
<template>
    <div class="demo">
        <h1>学校地址：{{schoolAddress}}</h1>
        <h1>学校名称：{{schoolName}}</h1>
        <button @click="sendMsg">点击出信息</button>
    </div>
</template>

<!--组件交互的代码-->
<script>
    export default {
        name: 'School',
        data() {
            return {
                schoolName: '* * * 大学',
                schoolAddress: '湖南',
            }
        },
        methods: {
            sendMsg() {
                console.log(this)
            }
        }
    }
</script>

<!--组件的样式-->
<style scoped>
    .demo {
        background-color: aqua;
    }
</style>


