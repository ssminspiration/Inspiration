<template>
  <div id="app">
    <div id="ins-nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <nav-bar name="Lucy"></nav-bar>
    </div>

    <div id="ins-content">
        <div class="line"></div>
        <router-view/>
    </div>

    <div id="ins-foot"></div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
    data(){
        return {

        }
    },
    components:{
        NavBar
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
