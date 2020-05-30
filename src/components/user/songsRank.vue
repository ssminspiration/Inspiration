<template>
   <div class="user-songs-rank-wrapper">
       <div class="songs-rank">
            <div class="title">
                <h3>听歌排行</h3>
                <h4>累积听歌{{songsCount}}首</h4>
                <span class="warning iconfont" title="实际播放时间过短的歌曲将不纳入计算"></span>
                <div class="time-range">
                    <span>最近一周</span>
                    <span>所有时间</span>
                </div>
            </div>
            <ul class="list">
                <li v-for="(item,index) in songsList" :key="index">
                    <span class="rankNum">{{index + 1}}.</span>
                    <span class="playBtn iconfont"></span>
                    <span class="songName">{{}}</span>
                    <span>-</span>
                    <span class="singer">{{}}</span>
                    <span class="palyNum">{{}}</span>
                </li>
            </ul>
        </div>
   </div>
</template>

<script lang='ts'>
import {Vue, Component, Prop} from 'vue-property-decorator';
import { State } from "vuex-class";
@Component
export default class Hello extends Vue{
    songsList:Array<object> = [
        
    ]
    @State( state => state.userInfo.userId) 'uid';

    async created(){
        const record = await this.axios.post("/user/record",{
            uid:this.uid,
            type:1  //返回最近一周播放记录
        })
        
        this.songsList = record.data.weekData;
    }
}
</script>

<style scoped lang='less'>
    .user-songs-rank-wrapper{
        width:100%;
        .songs-rank{
            .title{
                height:35px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
        }
    }
</style>
