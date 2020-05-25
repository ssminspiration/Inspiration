<template>
   <div class="player-wrapper">
       <div class="background-bar">
           <div class="main">
               <audio :src="musicUrl" controls></audio>
           </div>
       </div>
   </div>
</template>

<script lang='ts'>
import {Vue, Component, Prop} from 'vue-property-decorator'
@Component
export default class Player extends Vue{
   get musicUrl():void{
       return require('../assets/music/eason.mp3')
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
            }
        }
    }
</style>
