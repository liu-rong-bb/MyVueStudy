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
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>
