<!--汇总所有的组件-->
<template>
    <div class="app">
        <button @click="getMessage">获取信息</button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "App",
        methods: {
            getMessage() {
                    // 解决跨域：cors
                axios.post('http://localhost:8080/api/PerfBondImplement/queryPerfBondImplementList', {
                    data:{
                        isPage: "1",
                        marketId: "PXNCQ"
                    }
                }).then(
                    response => {
                        console.log('成功', response.data)
                    },
                    error => {
                        console.log('失败', error.message)
                    }
                )
            }
        }
    }
</script>

<style scoped>
</style>
