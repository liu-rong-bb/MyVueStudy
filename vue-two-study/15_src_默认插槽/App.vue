<!--汇总所有的组件-->
<template>
    <div class="container">
        <Category title="食物1" :listDate="foods">
            <img src="https://gimg3.baidu.com/rel/src=https%3A%2F%2Fgips3.baidu.com%2Fit%2Fu%3D2578145039%2C2879767815%26fm%3D3028%26app%3D3028%26f%3DJPEG%26fmt%3Dauto%26q%3D100%26size%3Df1138_640&refer=http%3A%2F%2Fwww.baidu.com&app=2010&size=w560&n=0&g=0n&q=100&fmt=auto?sec=1656694800&t=f49d447f4816fe219284b112a32c8adc"
                 alt="">
        </Category>
        <Category title="运动" :listDate="games">
            <ul>
                <li v-for="(item, index) in games" :key="index">
                    {{item}}
                </li>
            </ul>
        </Category>
        <Category :listDate="moves">
            <video slot="center" controls src="http://vd3.bdstatic.com/mda-nfv51czc2ex3z950/360p/h264/1656560014298842421/mda-nfv51czc2ex3z950.mp4"></video>
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
        data() {
            return {
                foods: ['辣条', '雪糕', '奶茶'],
                games: ['跳绳', '骑行', '跑步'],
                moves: ['《你好，李焕英》', '《人生大事》', '《哪吒》']
            }
        }

    }
</script>

<style>
    .container {
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
</style>
