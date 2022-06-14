<!--组件的结构-->
<template>
    <div>
        <h2 @click="alertName">姓名：{{name}}</h2>
        <h2>性别：{{sex}}</h2>
    </div>
</template>

<!--组件交互的代码-->
<script>
    import {maxin, maxin2} from '../maxin'

    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                sex: '男',
                // 和混合的冲突，使用本文件的
                x:666
            }
        },
        mixins:[maxin, maxin2],
        // mounted 中和混合的冲突，都会用
        mounted() {
            console.log("你好啊!!!!!!!")
        }

    }
</script>


