import Vue from 'vue'
import VueRouter from 'vue-router'
import MyMusic from '../views/MyMusic.vue'
import Friends from '../views/Friends.vue'
import Discover from '../views/Discover.vue'

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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
