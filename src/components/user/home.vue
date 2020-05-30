<template>
    <div class="user-home-wrapper">
        <!-- <common-head></common-head> -->
        <!-- <songs-list></songs-list> -->
    </div>
</template>

<script lang='ts'>
import {Vue, Component, Prop} from 'vue-property-decorator';
import CommonHead from './commonHead.vue';
import SongsList from './songslist.vue';
@Component({
    components:{
        CommonHead,
        SongsList
    }
})
export default class Hello extends Vue{
    created(){
        console.log('%chome组件路由$route','font-size:36px;color:blue',this.$route)
    }
    
}
</script>

<style scoped lang='less'>
    .user-home-wrapper{
        width: 100%;
    }
</style>
