import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginStatus:false,  //用户登录状态
        loginToken:'',      // 登录成功后返回的token
        userInfo:{
            userId:'',          //用户ID
            nickName:'',        //昵称
            avatarUrl:'',       //头像
        },
    },
    mutations: {
        changeLoginStatus(state,value){
            state.loginStatus = value;
        },
        changeUserInfo(state,obj){
            for(var k in state.userInfo){
                state.userInfo[k] = obj[k];
            }
        },
       

    },
    actions: {
       
    },
    modules: {
    }
})
