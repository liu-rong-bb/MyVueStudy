<!--组件的结构-->
<template>
    <div>
        <h2>姓名：{{name | mySlice}}</h2>
        <h2>性别：{{sex}}</h2>
        <input type="text" v-fbig:name="name"></input>
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


