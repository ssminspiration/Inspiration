<template>
   <div class="user-profile-common-wrapper">
       <div class="user-profile">
           <div class="profile">
               <img :src="avatarUrl" alt="">
           </div>
           <div class="other-info">
               <div class="top">
                   <div class="t-l">
                       <span>{{nickname}}</span>
                       <span>Lv.{{level}}</span>
                       <span class="iconfont" :class="gender == 1 ? 'icon-male' : 'icon-female'"></span>
                   </div>
                   <div class="t-r">
                       编辑个人资料
                   </div>
               </div>
               <div class="bottom">
                   <div class="b-t">
                        <span class="event">
                            <span class="count">{{eventCount}}</span>
                            <span class="text">动态</span>
                        </span>
                        <span class="follows">
                            <span class="count">{{follows}}</span>
                            <span class="text">关注</span>
                        </span>
                        <span class="fans">
                            <span class="count">{{fans}}</span>
                            <span class="text">粉丝</span>
                        </span>
                   </div>
                   <div class="b-b">
                       <p class="signature">
                           个人介绍：{{signature}}
                       </p>
                       <p class="location">
                           所在地区：
                       </p>
                       <p class="socialNetWork">
                           社交网络：
                       </p>
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>

<script lang='ts'>
import {Vue, Component, Prop} from 'vue-property-decorator';
import { State } from "vuex-class";
@Component
export default class Hello extends Vue{
    avatarUrl:string = null;
    level:number = 0;
    nickname:string = null;
    gender:number = 1;
    eventCount:number = 0;
    follows:number = 0;
    fans:number = 0;
    signature:string = null;
    provinceCode:number = 0;
    cityCode:number = 0;
    location:string = null;
    age:string | number = null;



   @State(state => state.userInfo.userId) "uId";

    async created(){
        const res = await this.axios.post("/user/detail",{
            uid:this.uId
        })
            const data = res.data;
            this.level = data.level;
            this.avatarUrl = data.profile.avatarUrl;
            this.nickname = data.profile.nickname;
            this.gender = data.profile.gender;
            this.eventCount = data.profile.eventCount;
            this.follows = data.profile.follows;
            this.fans = data.profile.followeds;
            this.signature = data.profile.signature;
            this.provinceCode = data.profile.province;
            this.cityCode = data.profile.city;



        // console.log('用户详情',res)
    }
    // beforeRouteLeave(){
    //     // console.log('%cbeforeRouteLeave','font-size:36px;color:red')
    // }

    mounted():void{
        // console.log('%c$router是路由实例','font-size:36px;color:red',this.$router)
        // console.log('%c$route当前路由','font-size:36px;color:red',this.$route)
        // this.$router.push({path:"/discover"})

    }
}
</script>

<style scoped lang='less'>
    .user-profile-common-wrapper{
        width: 100%;
        margin-bottom: 43px;
        .user-profile{
                display:flex;
                justify-content: space-between;
                .profile{
                    width: 190px;
                    height: 190px;
                    padding:5px;
                    border:solid 1px #ccc;
                    margin-right: 40px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .other-info{
                    flex: 1;
                    .top{
                        height: 50px;
                        border-bottom: solid 1px #ccc;
                        display: flex;
                        justify-content:space-between;
                        align-items: center;
                        .t-l{
                            display: flex;
                            align-items:center;
                            span{
                                margin-right: 10px;
                            }
                            span:nth-child(1){
                                font-size:26px;
                                // font-weight: bold;
                            }
                            span:nth-child(2){
                                display: inline-block;
                                width: 50px;
                                height: 20px;
                                border-radius:20px;
                                color: red;
                                border:solid 1px red;
                                font-style:italic;
                                font-weight: bold;
                            }

                            span:nth-child(3){
                                font-size:20px;
                                &.icon-male{
                                    color:skyblue;
                                }
                                &.icon-female{
                                    color:pink;
                                }
                            }
                        }
                        .t-r{
                            width: 110px;
                            height: 30px;
                            line-height: 28px;
                            border: solid 1px #ccc;
                            border-radius: 5px;
                            font-size:14px;
                        }
                    }
                    .bottom{
                        .b-t{
                            margin:10px 0;
                            display: flex;
                            .event,.follows,.fans{
                                width: 65px;
                                display: flex;
                                flex-direction: column;
                                justify-content:space-between;
                                .count{
                                    font-size:24px;
                                }
                                .text{
                                    font-size:12px;
                                }
                            }
                            .follows{
                                border-left:solid 1px #ccc;
                                border-right:solid 1px #ccc;
                            }
                        }
                        .b-b{
                            text-align: left;
                            margin-top: 15px;
                            p{
                                font-size:12px;
                                margin-bottom: 10px;
                            }
                        }
                    }
                }
            }
    }
</style>
