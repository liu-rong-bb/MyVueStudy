<!--组件的结构-->
<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>姓名：{{name}}</h2>
        <h2>性别：{{sex}}</h2>
        <h2>年龄：{{updateAge}}</h2>
        <button @click="updateAge++">增加年龄</button>
    </div>
</template>

<!--组件交互的代码-->
<script>
    export default {
        name: 'School',
        // 简单接收
        // props: ['name', 'age', 'sex'],

        // 接收的同时对数值类型进行限制
        // props:{
        //     name:String,
        //     age:Number,
        //     sex:String
        // },

        // 接收的同时对数值：进行类型限制+默认的指定值+必要性的限制
        props: {
            name: {
                type: String,
                required: true // 是否必传
            },
            age: {
                type: Number,
                default: 99 // 默认值
            },
            sex: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                msg:'我是一名学生',
                updateAge: this.age,
            }
        }
    }
</script>


