<!--汇总所有的组件-->
<template>
    <div class="container">
        <Category title="食物" :listDate="foods">
            <img slot="center" src="https://gimg3.baidu.com/rel/src=https%3A%2F%2Fgips3.baidu.com%2Fit%2Fu%3D2578145039%2C2879767815%26fm%3D3028%26app%3D3028%26f%3DJPEG%26fmt%3Dauto%26q%3D100%26size%3Df1138_640&refer=http%3A%2F%2Fwww.baidu.com&app=2010&size=w560&n=0&g=0n&q=100&fmt=auto?sec=1656694800&t=f49d447f4816fe219284b112a32c8adc"
                 alt="">
            <a slot="footer" href="https://www.baidu.com/">更多美食</a>
        </Category>
        <Category title="运动" :listDate="games">
            <ul slot="center">
                <li v-for="(item, index) in games" :key="index">
                    {{item}}
                </li>
            </ul>
            <div class="foot" slot="footer">
                <a href="https://www.baidu.com/">有氧运动</a>
                <a href="https://www.baidu.com/">无氧运动</a>
            </div>
        </Category>
        <Category title="电影" :listDate="moves">
            <video slot="center" controls src="http://vd3.bdstatic.com/mda-nfv51czc2ex3z950/360p/h264/1656560014298842421/mda-nfv51czc2ex3z950.mp4"></video>
<!--       使用template可以用最新的写法 v-slot: footer   -->
            <template slot="footer">
               <div class="foot" >
                   <a href="https://www.baidu.com/">经典</a>
                   <a href="https://www.baidu.com/">热门</a>
                   <a href="https://www.baidu.com/">推介</a>
               </div>
               <h4>欢迎前来观看</h4>
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
