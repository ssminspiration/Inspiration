<template>
   <div class="user-relative-page-wrapper">
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
        width:980px;
        margin: 0 auto;
        min-height: 780px;
        padding: 40px;
        border-left:solid 1px #ccc;
        border-right:solid 1px #ccc;
    }
</style>
