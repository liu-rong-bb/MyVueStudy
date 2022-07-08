<template>
    <div>
        <h2>我是home内容</h2>
        <div>
            <ul class="nav nav-tabs">
<!--                replace替换掉当前记录-->
                <li>
                    <router-link replace class="list-group-item" active-class="active" to="/home/news">news</router-link>
                </li>
                <li>
                    <router-link replace class="list-group-item" active-class="active" to="/home/messages">message</router-link>
                </li>
            </ul>
            <!--    keep-alive表示包含的组件里的数据切换后将会被保存， include表示指定的组件缓存（里面写的是组件名-组件中的name对应的名称）   -->
            <keep-alive include="News">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>
