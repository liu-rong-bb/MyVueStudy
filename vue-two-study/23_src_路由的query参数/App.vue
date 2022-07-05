<!--汇总所有的组件-->
<template>
<!--    安装npm i vue-router@3 vue2安装3，vue3安装4-->
    <div>
<!--        一般组件-->
        <banner></banner>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
<!--                    原始页面中A标签实现页面跳转-->
<!--                    <a class="list-group-item active" href="./about.html">About</a>-->
<!--                    <a class="list-group-item" href="./home.html">Home</a>-->

                        <!--Vue中通过router-link实现路由的切换-->
                        <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
                        <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
<!--                    this.$router.push({ path: '/pxf-service-omarketservice-sycyh/powerUser/powerUserInfo' })-->
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <!--指定路由组件的呈现位置， 路由组件（路由器渲染的组件）-->
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    export default {
        name: "App",
        components: {
            Banner,
        }
    }
</script>

<style>

</style>
