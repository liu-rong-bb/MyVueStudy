<!--组件的结构-->
<template>
    <div class="school">
        <h2 >学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <h2>{{number}}</h2>
        <button @click="addNumber">number++</button>
        <button @click="sendSchoolName">点击传递学校名称给APP</button>
        <button @click="unbind">点击解绑事件</button>
        <button @click="death">销毁School组件</button>
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
        methods: {
            sendSchoolName() {
                this.$emit('sendSchoolName',this.name, 8888,'hahahha',66666)
                this.$emit('demo')
            },
            unbind(){
                // 解绑单条数据
                // this.$off('sendSchoolName')
                // 解绑多条数据
                // this.$off(['sendSchoolName', 'demo'])
                // 解绑所有的数据
                this.$off()
            },
            death() {
                // 销毁后所有School自定义事件全部都不奏效了。
                this.$destroy()
            },
            addNumber() {
                console.log('addNumber函数回调了！')
                this.number++
            }

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


