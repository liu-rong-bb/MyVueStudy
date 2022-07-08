// 专门创建路由器
import vueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail'

// 创建并暴露路由器
const router =  new vueRouter({
    routes:[
        {
            name: 'About',
            path: '/about',
            component: About,
            meta:{title: '关于'}
        },
        {
            name: 'Home',
            path: '/home',
            component: Home,
            meta:{title: '主页'},
            children:[
                {
                    name: 'news',
                    path:'news',
                    component: News,
                    meta:{title: '新闻'},
                },
                {
                    name: 'messages',
                    path:'messages',
                    component: Message,
                    meta:{title: '消息'},
                    children:[
                        {
                            name:'xiangqing',
                            // 使用params传参必须使用占位符
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta:{title: '消息详情'},
                        }
                    ]
                }
            ]
        }
    ]
})

// 全局前置路由守卫--初始化的时候被调用，每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    console.log(to, from)
    // 放行
    if(localStorage.getItem('school') === 'school') {
        next()
    } else if(to.name === 'news' || to.name === 'messages'){
        alert("学校名不对")
    } else {
        next()
    }
})

// 全局后置路由守卫--初始化的时候被调用，每次路由切换之后被调用
router.afterEach((to, from) =>{
    document.title = to.meta.title || '系统'
})

export default router
