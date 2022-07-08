<template>
    <div class="row">
        <div class="col-xs-8 col-xs-offset-2">
            <div class="page-header"><h2>Vue Router Dome</h2> </div>
            <button @click="back">后退</button>
            <button @click="forward">前进</button>
            <button @click="test">测试一下go</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        methods: {
            back() {
                this.$router.back()
            },
            forward() {
                this.$router.forward()
            },
            test(){
                // 整数表示前进x步，负数表示后退x步
                this.$router.go(2)
            }
        }
    }
</script>

<style scoped>

</style>
