<!--组件的结构-->
<template>
    <div class="student">
        <h2>姓名：{{name}}</h2>
        <h2>性别：{{sex}}</h2>
        <button @click="sendNameToSchool">把学生名给school组件</button>
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
       methods: {
           sendNameToSchool() {
               this.$bus.$emit('hello',this.name)
           }
       }
    }
</script>

<!-- scoped 表示只用于本条VUE让样式局部生效，防止冲突-->
<style scoped>
    .student{
        background: #42b983;
        padding: 5px;
        margin-top: 30px;
    }
</style>


