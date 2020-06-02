<template>
    <div class="user-home-wrapper">
        <common-head></common-head>
        <!-- <songs-list></songs-list> -->
    </div>
</template>

<script lang='ts'>
import {Vue, Component, Prop} from 'vue-property-decorator';
import CommonHead from './commonHead.vue';
import SongsList from './songslist.vue';

Component.registerHooks([
    "beforeRouteEnter",
    "beforeRouteUpdate",
    "beforeRouteLeave"
])
@Component({
    components:{
        CommonHead,
        SongsList
    }
})
export default class Hello extends Vue{
    created(){
        // console.log('%chome组件路由$route','font-size:36px;color:blue',this.$route)
    }
    
    // 组件内的守卫
    beforeRouteEnter(to,from,next){
        // 在渲染该组件的对应路由被confirm前调用
        // 不能获取组件实例this
        // 因为当守卫执行前，组件实例还没有被创建
        console.log('%chome组件beforeRouteEnter','font-size:36px;color:red',to,from)
        next()
    }

    beforeRouteUpdate(to,from,next){
        console.log('%chome组件beforeRouteUpdate','font-size:36px;color:purple',to,from)
        // 在当前路由改变，但是该组件被复用时调用
        /*
            举例来说，对于一个带有动态参数的路径 /foo/:id 在 /foo/1 和 /foo/2 之间跳转的时候，
            由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在情况下被调用
        */
        // 可以访问组件实例this 
        next()
    }

    beforeRouteLeave(to,from,next){
        console.log('%chome组件beforeRouteLeave','font-size:36px;color:green',to,from)
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例this
        next()
    }
}
</script>

<style scoped lang='less'>
    .user-home-wrapper{
        width: 100%;
    }
</style>
