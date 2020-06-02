<template>
   <div class="user-msg-relative-page-wrapper">
       <div class="siderbar">
           <div class="top">我的消息</div>
           <ul>
               <li v-for="(item,index) in typeList" :key="index">

               </li>
           </ul>
       </div>
       <div class="content">
           <router-view></router-view>
       </div>
   </div>
</template>

<script lang='ts'>
interface dataList{
    [index:number]:{
        icon:string;
        text:string;
    };
}
import {Vue, Component, Prop} from 'vue-property-decorator';
import Component1 from "vue-class-component";

// 要在类的语法组件内调用组件路由守卫必须先调用Component.registerHooks()方法，向组件内注册这些方法
Component.registerHooks([
    "beforeRouteEnter",
    "beforeRouteUpdate",
    "beforeRouteLeave"
])
@Component
export default class Hello extends Vue{
    typeList:dataList = [
        {icon:"icon-aite",text:"我的"},
        {icon:"icon-msg",text:"私信"},
        {icon:"icon-comment",text:"评论"},
        {icon:"icon-inform",text:"通知"},
    ]

    // 组件内的守卫
    beforeRouteEnter(to,from,next){
        // 在渲染该组件的对应路由被confirm前调用
        // 不能获取组件实例this
        // 因为当守卫执行前，组件实例还没有被创建
        console.log('%cMsg组件beforeRouteEnter','font-size:36px;color:red',to,from)
        next()
    }

    beforeRouteUpdate(to,from,next){
        console.log('%cMsg组件beforeRouteUpdate','font-size:36px;color:purple',to,from)
        // 在当前路由改变，但是该组件被复用时调用
        /*
            举例来说，对于一个带有动态参数的路径 /foo/:id 在 /foo/1 和 /foo/2 之间跳转的时候，
            由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在情况下被调用
        */
        // 可以访问组件实例this 
        next()
    }

    beforeRouteLeave(to,from,next){
        console.log('%cMsg组件beforeRouteLeave','font-size:36px;color:green',to,from)
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例this
        next()
    }
}
</script>

<style scoped lang='less'>
    .user-msg-relative-page-wrapper{

    }
</style>
