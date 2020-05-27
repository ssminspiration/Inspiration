<template>
   <div class="user-info-dialog-wrap">
       <ul class="info-list">
           <li v-for="(item,index) in infoList" :key="index">
               <router-link :to="item.path"></router-link>
               <span class="iconfont iconBox" :class="item.icon"></span>
               <span class="text">{{item.text}}</span>
               <!-- <span class="text">{{item.text}}</span> -->
               <span class="num">{{item.num}}</span>
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
           path:"/home",
       },
       {
           icon:"icon-msg",
           text:"我的消息",
           num:0,
           path:"/msg",
       },
       {
           icon:"icon-level",
           text:"我的等级",
           path:"/level"
       },
       {
           icon:"icon-vip",
           text:"VIP会员",
           path:"/member",
       },
       {
           icon:"icon-set",
           text:"个人设置",
           path:"/update",
       },
       {
           icon:"icon-loginout",
           text:"退出",
           path:"/loginout",
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
                flex:1;
                width:100%;
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
                // flex-direction: row | row-reverse | column | column-reverse;
                // flex-wrap:nowrap(默认) | wrap | wrap-reverse;
                // flex-flow 属性是flex-direction属性和flex-wrap属性的简写形式，默认值为 row nowrap
                // flex-flow:column wrap-reverse;
                // justify-content属性定义了项目在主轴上的对齐方式
                // justify-content: flex-start | flex-end | center | space-between | space-around;
                // align-items 属性定义项目在交叉轴上如何对齐
                // align-items:flex-start | flex-end | center | baseline | stretch;
                // align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
                // align-content: flex-start | flex-end | center | space-between | space-around | stretch;

                // 项目上的属性
                // order  属性定义项目的排列顺序。数值越小，排列越靠前，默认为0
                // flex-grow 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
                // flex-shrink 属性定义了项目的缩小比例，默认为1 ,即如果空间不足，该项目将缩小.如果其中一个item设置为0，其他item 都为1 ， 则空间不足时，前者不缩小

                // flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto ,即项目的本来大小
                // flex属性是flex-grow,flex-shrink和flex-basis的简写，默认值为 0 1 auto，后两个属性可选

                // align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch.
                
                /**    
                    flex容器身上的属性：
                        flex-direction
                        flex-wrap
                        flex-flow
                        justify-content
                        align-items
                        align-content
                    
                    项目上的属性：
                        order
                        flex-grow
                        flex-shrink
                        flex-basis 
                        flex
                        align-self

                */

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
</style>
