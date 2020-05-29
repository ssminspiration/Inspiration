<template>
    <div class="user-home-wrapper">
        <h1>{{this.$route.params.id}}</h1>
        <h2>{{id}}</h2>
        <h2>{{query}}</h2>
        <h2>{{hello}}</h2>
        <common-head></common-head>
        <songs-list></songs-list>
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
    @Prop(String) private id!:string;
    @Prop(String) private query!:string;
    @Prop(String) private name!:string;

    created(){
        console.log('home组件路由参数',)
    }
    
}
</script>

<style scoped lang='less'>
    .user-home-wrapper{
        width: 100%;
    }
</style>
