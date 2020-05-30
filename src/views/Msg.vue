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
@Component
export default class Hello extends Vue{
    typeList:dataList = [
        {icon:"icon-aite",text:"我的"},
        {icon:"icon-msg",text:"私信"},
        {icon:"icon-comment",text:"评论"},
        {icon:"icon-inform",text:"通知"},
    ]
}
</script>

<style scoped lang='less'>
    .user-msg-relative-page-wrapper{

    }
</style>
