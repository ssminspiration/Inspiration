import Vue from 'vue'
import VueRouter from 'vue-router'
import MyMusic from '../views/MyMusic.vue'
import Friends from '../views/Friends.vue'
import Discover from '../views/Discover.vue'
import UserHome from '../components/user/home.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Discover,
        children:[
            {
                path:'/',
                component:()=>import('../components/discover/recommend.vue')
            }
        ]
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path:"/discover",
        name:'discover',
        //   component:() => import ('../views/MyMusic.vue')
        component:Discover,
        children:[
            {
                path:'/',
                component:()=>import('@/components/discover/recommend.vue')
            },
            {
                path:"toplist",
                component:()=>import('../components/discover/toplist.vue')
            },
            {
                path:"playlist",
                component:()=>import('../components/discover/playlist.vue')
            },
        ]
    },
    {
        path:"/my",
        name:'my',
        //   component:() => import ('../views/MyMusic.vue')
        component:MyMusic
    },
    {
        path:"/friends",
        name:"friends",
        component:Friends,
    },
    {
        path:"/user",
        name:"user",
        component:() => import("../views/User.vue"),
        children:[
            {
                path:"home/:id",
                // redirect:"event",
                // redirect:{name:"event"}, //重定向的目标也可以是一个命名的路由
                // redirect:() => "event",  // 可以是一个方法，返回重定向的方法 
                // redirect:() => ({ path:"event" }),  
                component:UserHome,
                // props:true  //布尔模式，如果props被设置为true route.params将会被设置为组件属性
                props:{
                    id:'true',
                    hello:"world"
                },
                // props:(route)=> ({query:route.query.q})

            },
            {
                path:"event",
                // name:"event", //命名路由
                component:Event
            },
            {
                path:"follows",
                alias:"myFollows", //别名
                // component:Follows
            },
            {
                path:"fans",
                // component:Follows
            },
            {
                path:"follows",
                // component:Follows
            },
        ]
        
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
