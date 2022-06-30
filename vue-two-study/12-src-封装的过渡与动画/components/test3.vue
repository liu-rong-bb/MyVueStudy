<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
<!--        appear 表示一刷新页面也显示动画-->
<!--        没有name的情况下用v-enter-active，有name的情况用（name-enter-active）-->
        <transition-group
                appear
                name="animate_animated animate_bounce"
                enter-active-class="animate__swing"
                leave-active-class="animate__backOutDown"
        >
            <h1 v-if="!isShow" key="1">你好啊,123</h1>
            <h1 v-if="isShow" key="2">你好12</h1>
        </transition-group>
    </div>
</template>

<script>
    import 'animate.css'

    export default {
        name: "test",
        data() {
            return {
                isShow: true
            }
        }
    }
</script>

<style scoped>
    h1 {
        background: #42b983;
        transition: 0.5s linear     ;
    }
</style>
