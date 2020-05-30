import Vue from 'vue'
import VueRouter from 'vue-router'
import MyMusic from '../views/MyMusic.vue'
import Friends from '../views/Friends.vue'
import Discover from '../views/Discover.vue'
import UserHome from '../components/user/home.vue';
import UserPrivate from "../components/Msg/private.vue";
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
                path:"home",
                component:UserHome,
                name:"home"
                // redirect:"event",
                // redirect:{name:"event"}, //重定向的目标也可以是一个命名的路由
                // redirect:() => "event",  // 可以是一个方法，返回重定向的方法 
                // redirect:() => ({ path:"event" }),  
                
                // props:true  //布尔模式，如果props被设置为true route.params将会被设置为组件属性
                // props:{
                //     id:'true',
                //     hello:"world"
                // },
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
    },
    {
        path:"/msg",
        name:"msg",
        component:() => import("../views/Msg.vue"),
        children:[
            {
                path:"m/private",
                component:UserPrivate,
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

// 全局前置守卫
router.beforeEach((to,from,next)=>{
    console.log("%c全局前置守卫","font-size:36px;color:pink",to,from)
    next(false)
    /*
        导航表示路由正在发生改变
        当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫resolve完之前一直处于等待中
        每个守卫方法接受三个参数：
        to: Route: 即将要进入的目标 路由对象
        from: Route: 当前导航正要离开的路由
        next: Function: 一定要调用该方法来resolve这个钩子。执行效果依赖next方法的调用参数
            next()：进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是confirmed(确认的)
            next(false): 中断当前的导航。如果浏览器的URL改变了（可能是用户手动或者浏览器后退按钮），那么URL地址地址会重置到from路由对应的地址
            next('/')或者next({path:'/'}): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向next传递任意对象，且允许设置诸如 replace:true、name:'home'之类的选项以及任何用在 router-link的 to 、prop、或者router.push中的选项
            next(error)如果传入next的参数是一个Error实例，则导航会被终止且该错误会被传递给router.onError()注册过的回调
    */
})
export default router
