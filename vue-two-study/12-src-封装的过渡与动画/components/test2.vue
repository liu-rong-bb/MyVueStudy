<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
<!--        appear 表示一刷新页面也显示动画-->
<!--        没有name的情况下用v-enter-active，有name的情况用（name-enter-active）-->
        <transition-group name="hello" appear>
            <h1 v-if="isShow" key="1">你好啊,haha</h1>
            <h1 v-if="isShow" key="2">你好</h1>
        </transition-group>
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
        transition: 0.5s linear     ;
    }
/**进入的起点**/ /**离开的终点**/
    .hello-enter,.hello-leave-to {
        transform: translateX(-100%);
    }

    /**进入的终点**//**离开的起点**/
    .hello-enter-to, .hello-leave {
        transform: translateX(0%);
    }

</style>
