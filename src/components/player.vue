<template>
   <div class="player-wrapper">
       <div class="background-bar">
           <div class="main">
               <div class="left">
                   <span class="prev-btn iconfont icon-prev"></span>
                   <span class="play-btn iconfont icon-play"></span>
                   <span class="next-btn iconfont icon-next"></span>
               </div>
               <div class="middle">
                   <span class="song-img"></span>
                   <span class="progress">
                       <audio :src="musicUrl" controls loop="loop" ref="audioEle" v-show="false">
                           您的浏览器不支持audio标签
                       </audio>
                   </span>
                   <span class="time"></span>
               </div>
               <div class="right">
                   <div class="sub-btn"></div>
                   <div class="tansform-btn"></div>
                   <div class="sound"></div>
                   <div class="play-ways"></div>
                   <div class="play-list"></div>
               </div>
           </div>
       </div>
   </div>
</template>

<script lang='ts'>
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
import { State } from 'vuex-class';
@Component({
    components:{
    }
})
export default class Player extends Vue{
    audioEle:object = null;
    get musicUrl():void{
        return require('../assets/music/eason.mp3')
    }

    @State( state => state.userInfo.userId) userId;

    created(){
    }
    mounted():void{
        this.audioEle = this.$refs.audioEle;

        // console.log('用户id',this.userId)
        
        // this.axios.post("/user/playlist",{
        //     uid:userId
        // })
        // .then((res)=>{
        //     console.log('歌单',res)
        // })
    }

    @Watch("userId")
        idChange(n,o){
            if(n){
                // console.log('用户id',this.userId)
                this.axios.post("/user/playlist",{
                    uid:this.userId
                })
                .then((res)=>{
                    // console.log('歌单',res)
                })
            }
        }
}
</script>

<style scoped lang='less'>
    .player-wrapper{
        position:fixed;
        width:100%;
        bottom:0;
        .background-bar{
            height: 53px;
            background-color: #333;
            .main{
                width: 1200px;
                height:100%;
                margin:0 auto;
                display: flex;
                align-items: center;
                .left{
                    width:137px;
                    color:#fff;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-right: 15px;
                    span{
                        font-size:30px;
                        &.play-btn{
                            font-size:38px;
                        }
                        &.prev-btn,&.next-btn{
                            color: rgba(255,255,255,0.6);
                        }
                    }
                }
            }
        }
    }
</style>
