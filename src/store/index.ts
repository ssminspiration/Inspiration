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
        requestDone:false,      // App.vue 的created生命周期函数内的请求是否完成
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
        changeRequestStatus(state,v){
            console.log('执行了',v)
            state.requestDone = v;
        }

    },
    actions: {
        // action提交的是mutation.而不是直接变更状态
        changeRequestStatus({commit},v){
            commit('changeRequestStatus',v)
        }
    },
    modules: {
    }
})
