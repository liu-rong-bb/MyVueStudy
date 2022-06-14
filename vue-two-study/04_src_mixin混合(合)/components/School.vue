<!--组件的结构-->
<template>
    <div>
        <h2 @click="alertName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<!--组件交互的代码-->
<script>
    import {maxin, maxin2} from '../maxin'

    export default {
        name: 'School',
        data() {
            return {
                name: '大学',
                address: '辽宁沈阳'
            }
        },
        mixins:[maxin, maxin2]
    }
</script>


