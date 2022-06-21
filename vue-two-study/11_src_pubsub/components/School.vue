<!--组件的结构-->
<template>
    <div class="school">
        <h2 >学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <h2>{{number}}</h2>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name: 'School',
        data() {
            return {
                name: '大学',
                address: '辽宁沈阳铁西区',
                number: 0,
                pubId: ''
            }
        },
        mounted() {
            // 订阅消息, 要么写箭头函数，要么写在methods中
            this.pubId = pubsub.subscribe('hello',(MsgName, data) => {
                console.log('有人发布了消息.hello: '+ data )
            })
        },
        // 组件销毁之前，销毁本组件上的全局的自定义事件
        beforeDestroy() {
            pubsub.unsubscribe(this.pubId)
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


