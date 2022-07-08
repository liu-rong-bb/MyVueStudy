<template>
    <div>
        <ul>
            <h1 :style="{opacity}">欢迎学习VUE</h1>
            <li>new001<input type="text"></input></li>
            <li>new002<input type="text"></input></li>
            <li>new003<input type="text"></input></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "News",
        data() {
            return {
                opacity : 1,
                timer : ''
            }
        },
        // 钩子函数
        activated() {
            console.log("New组件被激活了")
            this.timer = setInterval(() => {
                this.opacity -= 0.01
                if(this.opacity <= 0) this.opacity = 1
            }, 16)
        },
        // 钩子函数，不影响 include 缓存
        deactivated() {
            console.log("New组件失效了")
            clearInterval(this.timer)
        }
    }
</script>

<style scoped>

</style>
