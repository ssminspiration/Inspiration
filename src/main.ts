import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import './assets/style/index.less'

Vue.config.productionTip = false
// Vue.prototype.$axios = axios;
Vue.use(Vueaxios,axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
