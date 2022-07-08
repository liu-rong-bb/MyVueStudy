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
                    meta:{title: '新闻',isAuth:true},
                    // 独享路由守卫只有前置，没有后置
                    beforeEnter: (to, from ,next) => {
                        if(to.meta.isAuth) { // 判断是否需要鉴权
                            // 放行
                            if(localStorage.getItem('school') === 'school') {
                                next()
                            } else {
                                alert("学校名不对")
                            }
                        } else {
                            next()
                        }
                    }
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

export default router
