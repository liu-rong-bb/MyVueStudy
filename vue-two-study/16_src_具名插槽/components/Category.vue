<template>
    <div class="category">
        <h3>{{this.title}}分类</h3>
        <!--        组件标签的标签体放在这-->
        <slot name="center">暂无数据</slot>
        <slot name="footer">暂无数据</slot>
    </div>
</template>

<script>
    export default {
        name: "Category",
        props:['listDate', 'title']
    }
</script>

<style scoped>
    .category {
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3 {
        text-align: center;
        background-color: orange;
    }
</style>
