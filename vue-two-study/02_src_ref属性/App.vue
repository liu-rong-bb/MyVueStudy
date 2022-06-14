<!--汇总所有的组件-->
<template>
    <div>
        <h1 ref="title" v-text="msg" ></h1>
        <button ref="btn" @click="getData" >点击获取信息</button>
        <School ref="sch"></School>
    </div>
</template>

<script>

    import School from './components/School'

    export default {
        name: "App",
        components: {
            School
        },
        data() {
            return {
                msg: "欢迎学习Vue!"
            }
        },
        methods: {
            getData() {
                console.log(this.$refs.title) // 获取dome元素
                console.log(this.$refs.btn) // 获取dome元素
                console.log(this.$refs.sch) // School组件的实例对象（vc）
            }
        }
    }
</script>
