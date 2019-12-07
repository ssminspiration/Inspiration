<template>
    <div class="discover-music-wrapper">
        <div class="discover-music-nav">
            <ul class="mainContent">
                <li v-for="(item,index) in dataList" :key="index">
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
import {Vue, Component, Prop} from 'vue-property-decorator';
@Component
export default class Hello extends Vue {
    dataList:Array<Object>=[
        {
            title:"推荐",
            path:"/discover/recommend"
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
            ul{
                height: 100%;
                padding-left:250px;
                padding-bottom:5px;
                display: flex;
                align-items:center;
                li{
                    padding: 0 20px;
                    a{
                        font-size:14px;
                    }
                }
            }
            
        }
    }
</style>
