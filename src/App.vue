<template>
  <div id="app">
    <div id="ins-nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <nav-bar name="Lucy" @upDateLoginShow="upDateLoginShow"></nav-bar>
    </div>

    <div id="ins-content">
        <div class="line"></div>
        <router-view/>
    </div>

    <div id="ins-foot"></div>

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
    async created(){
        const res = await this.axios.get("/login/status");
        if(res.data.code === 200){
            // 已登录
            const userId:string = res.data.profile.userId,
                    nickName:string = res.data.profile.nickname,
                    avatarUrl:string = res.data.profile.avatarUrl;
            this.$store.commit("changeLoginStatus",true)
            this.$store.commit("changeUserInfo",{
                userId,
                nickName,
                avatarUrl
            })

            // const detail = await this.axios.post("/user/detail",{
            //     uid:userId
            // })

            // if(detail.data.code === 200){

            // }

            const userPlayList = await this.axios.post("/user/subcount")
            console.log('用户歌单',userPlayList)
        }else{
            console.log("未登录")
        }
       
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
      .line{
          height: 5px;
          background-color: #c20c0c;
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
