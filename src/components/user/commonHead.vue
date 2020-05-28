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
                       <span>{{level}}</span>
                       <span>{{gender}}</span>
                   </div>
                   <div class="t-r">
                       编辑个人资料
                   </div>
               </div>
               <div class="bottom">
                   <div class="b-t">
                       <span class="event"></span>
                       <span class="follows"></span>
                       <span class="fans"></span>
                   </div>
                   <div class="b-b">
                       <div class="signature"></div>
                       <div class="location"></div>
                       <div class="socialNetWork"></div>
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
    avatarUrl:string = ''
    level:number = 0;
    nickname:string = '';
    gender:number = 1;
    eventCount:number = 0;
    follows:number = 0;
    fans:number = 0;
    signature:string = '';
    provinceCode:number = 0;
    cityCode:number = 0;
    location:string = '';
    age:string | number = '';



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



        console.log('用户详情',res)
    }
    beforeRouteLeave(){
        console.log('%cbeforeRouteLeave','font-size:36px;color:red')
    }

    mounted():void{
        console.log('%c$router是路由实例','font-size:36px;color:red',this.$router)
        console.log('%c$route当前路由','font-size:36px;color:red',this.$route)
        // this.$router.push({path:"/discover"})
        setTimeout(() => {
            this.$router.push({path:"/discover"})
        }, 2000);

    }
}
</script>

<style scoped lang='less'>
    .user-profile-common-wrapper{
        width: 100%;
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
                            span:nth-child(1){
                                font-size:26px;
                                // font-weight: bold;
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
                }
            }
    }
</style>
