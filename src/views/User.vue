<template>
   <div class="user-relative-page-wrapper">
       <div class="user-profile">
           <div class="profile"></div>
           <div class="other-info">
               <div class="top"></div>
               <div class="bottom"></div>
           </div>
       </div>
       <router-view></router-view>
   </div>
</template>

<script lang='ts'>
import {Vue, Component, Prop} from 'vue-property-decorator'
@Component
export default class User extends Vue{
    
}
</script>

<style scoped lang='less'>
    .user-relative-page-wrapper{
        width:100%;
        padding: 40px;
        .user-profile{
            .profile{
                width: 190px;
                height: 190px;
            }
        }
    }
</style>
