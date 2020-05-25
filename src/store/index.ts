import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginStatus:false,  //用户登录状态
    },
    mutations: {
        changeLoginStatus(state,value){
            state.loginStatus = value;
        }
    },
    actions: {
    },
    modules: {
    }
})
