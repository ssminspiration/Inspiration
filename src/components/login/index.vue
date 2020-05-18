<template>
   <div class="login_register_dialog_wrapper">
        <div class="dialog_top">
            <span class="text">登录</span>
            <span class="closeDialog" @click.stop="closeDialog">关闭</span>
            </div>
        <div class="form_chart">
            <p class="input_item">
                <label for="">账号：</label>
                <input type="text" placeholder="手机号" :class="{warning:isShowWarning}" v-model="phone" @focus.stop="isShowWarning = false">
                <span class="warn_text" v-show="isShowWarning">请输入正确的手机号码</span>
            </p>
            <p class="input_item">
                <label for="">密码：</label>
                <input type="password" placeholder="密码" v-model="password" :class="{warning:blankPsw}" @focus.stop="blankPsw = false">
                <span class="warn_text" v-show="blankPsw">请输入密码</span>
            </p>

            <p class="btn">
                <!-- <button class="login_btn" @click.stop="login">登录</button>
                <button class="register_btn" @click.stop="register">注册</button> -->
                <el-button type="primary" @click.stop="login">登录</el-button>
                
            </p>
            <p class="register">
                <span>没有账号，去</span>
                <el-button type="text" @click.stop="register">注册</el-button>
            </p>
        </div>
   </div>
</template>

<script lang='ts'>
import {Vue, Component, Prop} from 'vue-property-decorator'
// import {Message} from 'element-ui'
@Component
export default class Login extends Vue{
    isShowWarning:boolean = false;
    blankPsw:boolean = false;
    phone:string = '';
    password:string = '';

    login():void{
        const phone = this.phone.trim();
        const psw = this.password.trim();
        // 发送请求之前先验证手机号码格式是否正确
        const reg = /^1[34578]\d{9}$/;

        !reg.test(phone) && (this.isShowWarning = true);
        !psw && (this.blankPsw = true);
        if(!reg.test(phone) || !psw) return; 
       
        this.axios.post('/login/cellphone',{
            phone,
            password:psw,
        })
        .then((res)=>{
            console.log('登录请求',res)
            if(res.data.code === 502){
                // 表示手机号或密码不正确，或者该手机未注册
                this.$message({
                    message:"用户名或密码错误",
                    center:true,
                    type:'error',
                    offset:450
                })
            }
        })
        .catch((err)=>{
            console.log('错误')
             this.$message({
                message:"登录失败",
                center:true,
                type:'error',
                offset:450
            })
        })
    }

    closeDialog():void{
        this.$emit('upDateLoginShow',false)
    }
}
</script>

<style scoped lang='less'>
    .login_register_dialog_wrapper{
        width: 530px;
        height: 370px;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        .dialog_top{
            height: 40px;
            background-color: #191919;
            color: #fff;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .closeDialog{
                cursor: pointer;
            }
        }

        .form_chart{
            width: 240px;
            margin: 60px auto;
            .input_item{
                margin-bottom: 40px;
                text-align: left;
                position: relative;
                display: flex;
                justify-content: space-between;
                align-items: center;
               
                label{
                    width: 80px;
                }
                input{
                    height: 25px;
                    &.warning{
                        border:solid 1px rgb(255,0,0,);
                    }
                }
                .warn_text{
                    font-size:12px;
                    position: absolute;
                    left:245px;
                    width:120px;
                    color:rgb(255,0,0,);
                }
            }

            .btn{
                // width:120px;
                margin: 0 auto;
                // button{
                //     cursor: pointer;
                //     background-color: #3089d5;
                //     color: #fff;
                //     width:45px;
                //     height: 28px;
                //     text-align: center;
                //     border-radius: 5px;
                //     outline: none;
                //     border:solid 1px #3089d5;
                //     &:nth-child(1){
                //         margin-right: 30px;
                //     }
                // }
            }
            
            .register{
                .el-button{
                    font-size:16px;
                }
            }
        }
    }
</style>
