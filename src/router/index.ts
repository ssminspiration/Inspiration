import Vue from 'vue'
import VueRouter from 'vue-router'
import MyMusic from '../views/MyMusic.vue'
import Friends from '../views/Friends.vue'
import Discover from '../views/Discover.vue'
import UserHome from '../components/user/home.vue';
import UserPrivate from "../components/Msg/private.vue";
import axios from 'axios';
import store from '../store/index'
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
                name:"home",
                // 路由独享的守卫
                beforeEnter:(to,from,next)=>{
                    // 这些守卫与全局前置守卫的方法参数是一样的

                    console.log('%c/user/home路由独享守卫beforeEnter','font-size:36px;color:purple',to,from)
                    next()
                }
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
                beforeEnter:(to,from,next)=>{
                    // 这些守卫与全局前置守卫的方法参数是一样的
        
                    console.log('%c/msg/m/private路由独享守卫beforeEnter','font-size:36px;color:purple',to,from)
                    next()
                },
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
    console.log("%c全局前置守卫","font-size:36px;color:pink",to,from,store)
    axios.post("/login/status")
    .then((res)=>{
        // console.log('%c已登录','font-size:36px;color:green',res)
        if(res.data.code === 200){
            console.log('%c已登录','font-size:36px;color:green',res)
            const  userId:string = res.data.profile.userId,
                    nickName:string = res.data.profile.nickname,
                    avatarUrl:string = res.data.profile.avatarUrl;

                    store.commit('changeLoginStatus',true)
                    store.commit('changeUserInfo',{
                        userId,
                        nickName,
                        avatarUrl
                    })
        }else{
            // 未登录
            console.log("%c未登录","font-size:36px;color:blue")
        }
    })
    .catch((err)=>{
        console.log('请求出错',err)
    })
    .finally(()=>{
        next()
    })
    /*
        导航表示路由正在发生改变
        当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫resolve完之前一直处于等待中
        
        
        to: Route: 即将要进入的目标 路由对象
        from: Route: 当前导航正要离开的路由
        next: Function: 一定要调用该方法来resolve这个钩子。执行效果依赖next方法的调用参数
            next()：进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是confirmed(确认的)
            next(false): 中断当前的导航。如果浏览器的URL改变了（可能是用户手动或者浏览器后退按钮），那么URL地址地址会重置到from路由对应的地址
            next('/')或者next({path:'/'}): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向next传递任意对象，且允许设置诸如 replace:true、name:'home'之类的选项以及任何用在 router-link的 to 、prop、或者router.push中的选项
            next(error)如果传入next的参数是一个Error实例，则导航会被终止且该错误会被传递给router.onError()注册过的回调
    */
})

// 全局解析守卫
router.beforeResolve((to,from,next)=>{
      console.log('%c全局解析守卫',"font-size:36px;color:red")
      next()
})

// 全局后置钩子
router.afterEach((to,from)=>{
    console.log("%c全局后置钩子","font-size:36px;color:green")
})


export default router
/*
    导航被触发
    在失活的组件里调用beforeRouteLeave守卫
    调用全局的beforeEach守卫
    在重用的组件里调用beforeRouteUpdate守卫
    在路由配置里调用beforeEnter
    解析异步路由组件
    在被激活的组件里调用beforeRouteEnter
    调用全局的beforeResolve守卫
    导航被确认
    调用全局的afterEach钩子
    触发DOM更新
    用创建好的实例调用beforeRouteEnter守卫中传给next的回调函数
*/

/*
    全局：
    beforeEach() 全局前置守卫
    beforeResolve() 全局解析守卫
    afterEach()     全局后置钩子

    路由：
    beforeEnter()  路由独享的守卫，与全局前置守卫的方法参数是一样的

    组件：
    beforeRouteEnter()
    beforeRouteUpdate()
    beforeRouteLeave()


    beforeEach()
    beforeResolve()
    afterEach()

    beforeEnter()

    beforeRouteEnter()
    beforeRouteUpdate()
    beforeRouteLeave()
*/
