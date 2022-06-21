<!--组件的结构-->
<template>
    <div class="school">
        <h2 >学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <h2>{{number}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'School',
        data() {
            return {
                name: '大学',
                address: '辽宁沈阳铁西区',
                number: 0
            }
        },
        mounted() {
            this.$bus.$on('hello',(data) => {
                console.log('我是school组件我收到了数据：' + data)
            })
        },
        // 组件销毁之前，销毁本组件上的全局的自定义事件
        beforeDestroy() {
            this.$bus.$off(['hello'])
        }
    }
</script>

<style scoped>
    .school{
        background: antiquewhite;
        padding: 5px;
        margin-top: 30px;
    }
</style>


