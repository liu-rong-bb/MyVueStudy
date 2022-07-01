<!--汇总所有的组件-->
<template>
    <div class="container">
        <Category title="运动">
            <template scope="{games}">
                <ul slot="center">
                    <li v-for="(item, index) in games" :key="index">
                        {{item}}
                    </li>
                </ul>
            </template>

        </Category>
        <Category title="运动">
            <template scope="{games, msg}">
                <ol slot="center">
                    <li v-for="(item, index) in games" :key="index">
                        {{item}}
                    </li>
                </ol>
                <h1>{{msg}}</h1>
            </template>
        </Category>
        <Category title="运动">
            <template scope="{games}">
                <h4  v-for="(item, index) in games" :key="index">{{item}}</h4>
            </template>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category'
    export default {
        name: "App",
        components: {
            Category
        },
    }
</script>

<style>
    .container, .foot {
        /*表示横向排开*/
        display: flex;
        /*横向间隔*/
        justify-content: space-around;
    }
    img {
        width: 100%
    }
    video {
        width: 100%;
    }
    h4 {
        text-align: center;
    }
</style>
