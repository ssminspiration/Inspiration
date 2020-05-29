<template>
    <div class="songs-relative-list-wrapper">
        <div class="songs-rank"></div>
        <div class="created-list"></div>
        <div class="subscribed-list"></div>
    </div>
</template>

<script lang='ts'>
import {Vue, Component, Prop} from 'vue-property-decorator';
import { State } from 'vuex-class';
@Component
export default class Hello extends Vue{
    @State( state => state.userInfo.userId) uid;
    
   
    async created(){
        const res = await this.axios.post("/user/subcount");
                console.log('用户信息',res)
        const playlist = await this.axios.post("/user/playlist",{
            uid:this.uid
        })

        console.log('歌单',playlist)

        const record = await this.axios.post("/user/record",{
            uid:this.uid,
            type:1  //返回最近一周播放记录
        })

        console.log('record',record)
    }
}
</script>

<style scoped lang='less'>

</style>
