<template>
    <div class="discover-music-wrapper">
        <div class="discover-music-nav">
            <ul class="mainContent discover-music-nav-list">
                <li class="discover-music-nav-item" :class="{selected:(curPath.indexOf(item.path) == 0 && index != 0) || ((curPath === '/' || curPath === '/discover') && index == 0)}" v-for="(item,index) in dataList" :key="index">
                    <router-link :to="item.path">{{item.title}}</router-link>
                </li>
            </ul>
        </div>
        <div class="discover-music-main mainContent">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang='ts'>
import Route from 'vue-router';
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
@Component
export default class Discover extends Vue {
    dataList:Array<Object>=[
        {
            title:"推荐",
            path:"/discover"
        },
        {
            title:"排行榜",
            path:"/discover/toplist"
        },
        {
            title:"歌单",
            path:"/discover/playlist"
        },
    ];

    get curPath():string{
        return this.$route.path;
    }

    @Watch('$route',{
        immediate:true,
    })
    routeChange(n:Route,o:Route):void{
        console.log('%cDiscover组件路由watch','font-size:38px;color:yellow',n,o)

    }


    async created(){
        const data = await this.axios.get('/search?keywords=海阔天空')
        console.log('%c请求结果','font-size:48px;color:green',data)
    }
    mounted(){
        console.log('%c路由','font-size:32px;color:red',this.$route)
    }
}
</script>

<style scoped lang='less'>
    .discover-music-wrapper{
        .discover-music-nav{
            background-color: #c20c0c;
            height: 30px;
            .discover-music-nav-list{
                height: 100%;
                padding-left:250px;
                padding-bottom:5px;
                display: flex;
                align-items:center;
                .discover-music-nav-item{
                    padding: 2px 10px;
                    border-radius: 10px;
                    &.selected{
                        background-color: rgba(255,255,255,0.3);
                    }
                    margin-right:10px;
                    a{
                        font-size:14px;
                    }
                }
            }
            
        }
    }
</style>
