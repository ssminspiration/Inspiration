import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import './assets/style/index.less'
import {Message,Button,Avatar} from 'element-ui'
// import VueAwesomeSwiper from 'vue-awesome-swiper';
// import 'swiper/css/swiper.css';

// import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// Vue.prototype.$axios = axios;
Vue.use(Vueaxios,axios);
Vue.use(Button);
Vue.use(Avatar);
// Vue.use(VueAwesomeSwiper);  //全局使用swiper
Vue.prototype.$message = Message;

let wyy = new Vue({
  router,
  store,
  render: h => h(App),
  beforeRouteEnter(){
      console.log('%cmain.tsbeforeRouteEnter','font-size:36px;color:purple')
  },
  beforeRouteLeave(){
      console.log('%cmain.tsbeforeRouteLeave','font-size:36px;color:purple')
  },
}).$mount('#app')

window['wyy'] = wyy;
export default wyy;
