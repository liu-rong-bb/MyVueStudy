<!--组件的结构-->
<template>
    <div class="demo">
        <h2>姓名：{{name}}</h2>
        <h2>性别：{{sex}}</h2>
    </div>
</template>

<!--组件交互的代码-->
<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                sex: '男',
            }
        },

    }
</script>

<!-- scoped 表示只用于本条VUE让样式局部生效，防止冲突-->
<style scoped>
    .demo{
        background: #42b983;
    }
</style>


