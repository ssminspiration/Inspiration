<template>
  <div id="app">
    <div id="ins-nav">
      <nav-bar name="Lucy" @upDateLoginShow="upDateLoginShow"></nav-bar>
    </div>

    <div id="ins-content">
        <div class="line"></div>
        <router-view/>
    </div>
    <div id="ins-foot">
        <div class="ins-foot-content">
            页脚
        </div>
    </div>

    <div v-if="isShowDialog" id="ins-dialog-wrapper">
        <login  @upDateLoginShow="upDateLoginShow"></login>
    </div>
    <player></player>
  </div>
</template>
<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import Login from "@/components/login/index.vue";
import Player from "@/components/player.vue";
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { Mutation, Action } from 'vuex-class';

@Component({
    components:{
        NavBar,
        Login,
        Player
    }
})
export default class App extends Vue{
    isShowDialog:boolean = false;
    upDateLoginShow(value:boolean):void{
        this.isShowDialog = value;
    }
}

</script>

<style lang="less">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    #ins-content{
        min-height:700px;
        .line{
            height: 5px;
            background-color: #c20c0c;
        }
    }
    #ins-foot{
        width:100%;
        height: 168px;
        background-color: rgba(204,204,204,.3);
        .ins-foot-content{
            width: 980px;
            height:100%;
            margin: 0 auto;
        }
    }
    #ins-dialog-wrapper{
        width: 100%;
        height:100%;
        position:fixed;
        top:0;
        background-color: rgba(0,0,0,0.3);
        z-index: 10;
    }
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
