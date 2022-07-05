// 专门创建路由器
import vueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'

// 创建并暴露路由器
export default new vueRouter({
    routes:[
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children:[
                {
                    path:'news',
                    component: News
                },
                {
                    path:'messages',
                    component: Message
                }
            ]
        }
    ]
})
