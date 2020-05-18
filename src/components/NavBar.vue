<template>
    <div class="nav-bar-wrapper">
        <div class="nav-bar-main mainContent">
            <div class="ins-music-icon">
                <span class="wangyiyun-icon"></span>
                <strong>Inspiration</strong>
            </div>
            <ul class="menu-list">
                <li v-for="(item,index) in menuList" :key="index" :class="{selected:((curPath === '/' || curPath.indexOf('/discover') == 0) && index == 0) || (curPath.indexOf(item.path) == 0) && index != 0}">
                    <router-link :to="item.path">{{item.text}}</router-link>
                    <span class="selected-icon" v-show="((curPath === '/' || curPath.indexOf('/discover') == 0) && index == 0) || (curPath.indexOf(item.path) == 0 && index != 0)"></span>
                </li>
            </ul>
            <div class="search">
                <input type="text" placeholder="搜索">
            </div>
            
            
            <el-avatar v-if="isLogin" :src="imgUrl"></el-avatar>
            <el-button v-else type="text" @click.stop="goToLogin">登录</el-button>
            <!-- <div class="login" v-if="!isLogin">登录</div>
            <div class="userAvatar iconfont avator" v-else> -->
               
            <!-- </div> -->
        </div>
    </div>
</template>

<script lang="ts">
/** 
 * vue-class-component 和 vue-property-decorator
 * vue-class-component强化Vue组件，使用装饰器语法使Vue组件更好的跟TS结合使用
 * vue-property-decorator 在vue-class-component的基础上增加了更多与Vue相关的装饰器
 */
import {Vue, Component,  Prop, Watch} from 'vue-property-decorator';
interface dataList{
    [index:number]: {
        path:string,
        text:string
    }
}
@Component
export default class NavBar extends Vue{
    
    @Prop(String) name!:string;
    @Prop(Number) age!:number;
    isLogin:boolean = false;
    hobby:string = 'running';
    menuList:dataList = [
        {
            text:'发现音乐',
            path:'/'
        },
        {
            text:'我的音乐',
            path:'/my'
        },
        {
            text:'朋友',
            path:'/friends'
        },
    ]

    get curPath(){
        return this.$route.path;
    }

    get imgUrl(){
        return require('../assets/img/fairytales.jpg')
    }
    changeHobby(){
        this.hobby = 'reading'
    }

    goToLogin(){
        this.$emit("upDateLoginShow",true)
    }

    @Watch("$route")
        routeChange(n: Object){
            console.log('%c路由变化','font-size:34px;color:red',n,
            this.curPath)
        }
} 
</script>

<style scoped lang="less">
    .nav-bar-wrapper{
        height: 70px;
        background-color: #242424;
        .nav-bar-main{
            .ins-music-icon{
                font-size:30px;
                color:#fff;
                display: flex;
                align-items: center;
                .wangyiyun-icon{
                    width: 35px;
                    height: 35px;
                    display: inline-block;
                    background-image:url("../assets/img/wyy.png");
                    background-size:cover;
                    background-position:center;
                    vertical-align: middle;
                    margin-right:5px;
                }
            }
            // width: 1200px;
            height: 100%;
            margin:0 auto;
            // background-image:linear-gradient(pink,red);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 10px;
            .menu-list{
                display:flex;
                justify-content: space-between;
                height:100%;
                margin-left:-200px;
                li{
                    padding: 0 20px;
                    position: relative;
                    &.selected{
                        background-color: #000;
                    }
                    a{
                        display: inline-block;
                        height:100%;
                        line-height: 70px;
                        color: #ccc;   
                    }
                    .selected-icon{
                        position: absolute;
                        bottom:0;
                        left:50%;
                        margin-left:-3px;
                        width: 0;
                        height: 0;
                        border:solid 6px #c20c0c;
                        border-color:transparent transparent #c20c0c transparent;
                    }
                }
            }
            .search{
                input{
                    width: 160px;
                    height: 32px;
                    padding:10px;
                    border-radius: 16px;
                    border:none;
                    outline: none;
                }
            }
            .login{
                color:#3089d5;
                cursor: pointer;
            }
            .userAvatar{
                width: 40px;
                height: 40px;
                line-height: 40px;
                border-radius: 50%;
                overflow: hidden;
                box-shadow: 0 0 5px #3089d5;
                font-size:40px;
                color:#3089d5;
            }
        }
    }
</style>
