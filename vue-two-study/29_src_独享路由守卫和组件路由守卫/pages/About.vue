<template>
    <div>
        <h2>我是about内容</h2>
    </div>
</template>

<script>
    export default {
        name: "About",

        // 组件路由守卫
        // 通过路由规则，进入组件被调用
        beforeRouteEnter(to, from, next){
            console.log("app---beforeRouteEnter")
            if(localStorage.getItem('school') === 'school') {
                next()
            } else {
                alert("学校名不对")
            }

        },
        // 通过路由规则，推出组件被调用
        beforeRouteLeave(to, from, next) {
            console.log("app---beforeRouteLeave")
            next()
        }
    }
</script>

