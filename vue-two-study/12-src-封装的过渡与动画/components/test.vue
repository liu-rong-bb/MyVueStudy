<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
<!--        appear 表示一刷新页面也显示动画-->
<!--        没有name的情况下用v-enter-active，有name的情况用（name-enter-active）-->
        <transition name="hello" appear>
            <h1 v-if="isShow">你好啊</h1>
        </transition>
    </div>
</template>

<script>
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
    }
    .hello-enter-active {
        animation: dinghua 1s linear;
    }

    .hello-leave-active {
        animation: dinghua 1s linear reverse;
    }

    @keyframes dinghua {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0%);
        }
    }
</style>
