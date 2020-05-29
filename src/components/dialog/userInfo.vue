<template>
   <div class="user-info-dialog-wrap">
       <ul class="info-list">
           <li v-for="(item,index) in infoList" :key="index">
                <router-link :to="item.path">
                    <span class="iconfont iconBox" :class="item.icon"></span>
                    <span class="text">{{item.text}}</span>
                    <span class="num">{{item.num}}</span>
                </router-link>
           </li>
       </ul>
   </div>
</template>

<script lang='ts'>
import {Vue, Component, Prop} from 'vue-property-decorator';
import { infoList } from '@/components/interface/userInfo.ts';
@Component
export default class UserInfo extends Vue{
   infoList:infoList = [
       {
           icon:"icon-home",
           text:"我的主页",
           path:"/user/home/k?q=ssm",
       },
       {
           icon:"icon-msg",
           text:"我的消息",
           num:0,
           path:"/msg/m/private",
       },
       {
           icon:"icon-level",
           text:"我的等级",
           path:"/user/level"
       },
       {
           icon:"icon-vip",
           text:"VIP会员",
           path:"/member",
       },
       {
           icon:"icon-set",
           text:"个人设置",
           path:"/user/update",
       },
       {
           icon:"icon-loginout",
           text:"退出",
           path:"/logout",
       },
   ]
}
</script>

<style scoped lang='less'>
    .user-info-dialog-wrap{
        width:100%;
        height:100%;
        ul{
            width:100%;
            height:100%;
            display: flex;
            flex-direction: column;
            li{
                width: 100%;
                height: 100%;
                a{
                    flex:1;
                    width:100%;
                    height:100%;
                    padding: 0 20px;
                    color:#fff;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    font-size:14px;
                    cursor: pointer;
                    &:hover{
                        background-color: rgba(255,255,255,0.2);
                    }
                    .iconBox{
                        margin-right: 10px;
                        width: 28px;
                        height: 28px;
                        line-height: 30px;

                    }
                    .text{
                        margin-right: 7px;
                        font-size:12px;
                    }
                }
            }
        }
    }
</style>
