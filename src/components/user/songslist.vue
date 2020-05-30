<template>
    <div class="songs-relative-list-wrapper">
        <songs-rank></songs-rank>
        <div class="created-list"></div>
        <div class="subscribed-list"></div>
    </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { songsRecord } from "@/components/interface/userInfo.ts";
import songsRank from "./songsRank.vue";
@Component({
    components:{
        songsRank
    }
})
export default class Hello extends Vue{
    @State( state => state.userInfo.userId) uid;
    songsCount:number = 0;
    recordList:songsRecord = [];
   
    async created(){
        const res = await this.axios.post("/user/subcount");
                // console.log('用户信息',res)
        const playlist = await this.axios.post("/user/playlist",{
            uid:this.uid
        })

        // console.log('歌单',playlist)
    }
}
</script>

<style scoped lang='less'>
    .songs-relative-list-wrapper{
        width:100%;
        
    }
</style>
