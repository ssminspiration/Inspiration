import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import './assets/style/index.less'
import {Message,Button,Avatar} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// Vue.prototype.$axios = axios;
Vue.use(Vueaxios,axios)
Vue.use(Button)
Vue.use(Avatar)
Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
