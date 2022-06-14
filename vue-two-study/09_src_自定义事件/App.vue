<!--汇总所有的组件-->
<template>
    <div class="app">
        <h2>{{msg}}</h2>
        <!--通过父组件给子组件传递函数类型的props实现： 子给父传递数据 -->
        <Student :get-student-name="getStudentName"></Student>
        <!--通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
<!--        事件名称是 sendSchoolName，回调名称是 getSchoolName-->
        <School @sendSchoolName="getSchoolName" @demo="demo"></School>
        <!--通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
<!--        组件上要用原生的click事件需要这么写 click.native 。告诉组件这不是自定义事件-->
        <School ref="student" @click.native="show"></School>
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
        },
        data() {
            return {
                msg: '你好'
            }
        },
        methods: {
            getStudentName(name) {
                console.log('获取到了学生名称：' + name)
            },
            // 传多个参数，主要获取一个，其他的（...a）都默认转成数组
            getSchoolName(name, ...a) {
                console.log('获取到了学校名称：' + name + JSON.stringify(a))
            },
            demo(){
                console.log('测试数据')
            },
            show() {
                alert(1234)
            }
        },
        mounted() {
            this.$refs.student.$on('sendSchoolName', this.getSchoolName)
        }
    }
</script>

<style scoped>
.app{
    background: gray;
    padding: 5px;
    margin-top: 30px;
}
</style>
