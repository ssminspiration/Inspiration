<template>
   <div class="login_register_dialog_wrapper">
        <div class="dialog_top">
            <span class="text">{{onLogin ? '登录' :'注册'}}</span>
            <span class="closeDialog" @click.stop="closeDialog">关闭</span>
            </div>
        <div class="form_chart">
            <div class="login_page" v-if="onLogin">
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
                    <el-button type="primary" @click.stop="login">登录</el-button>
                </p>
                <p class="register">
                    <span>没有账号，去</span>
                    <el-button type="text" @click.stop="goToregister">注册</el-button>
                </p>
            </div>
            <div class="register_page" v-else>
                <p class="phone_item">
                    <label for="" class="phone">手机号：</label>
                    <input type="text" placeholder="请输入手机号" v-model="register_phone">
                </p>
                <p class="psw_item">
                    <label for="" class="psw">密码：</label>
                    <input 
                    type="password" 
                    placeholder="设置登录密码，不得少于6位" 
                    v-model="pswValue" 
                    @focus.stop="handleFocus" 
                    @input.stop="checkInput"
                    :class="{warningBorder:!pswType || !pswLen}">
                </p>
                
                <div v-if="isShowPrompt" class="promptMsg">
                    <div class="phoneError" v-show="phoneError">
                        <span class="iconfont icon-jinggao"></span>
                        &nbsp;
                        <span>请输入正确的手机号码</span>
                    </div>
                    <div class="vCodeError" v-show="vCodeError">
                        <span class="iconfont icon-jinggao"></span>
                        &nbsp;
                        <span>请输入正确的验证码</span>
                    </div>
                    <div>   
                        <span class="iconfont icon-zhengque"></span>
                        &nbsp;
                        <span>密码不能包含空格</span>
                    </div>
                    <div :class="{warning:!pswType}">   
                        <span class="iconfont" :class="pswType ? 'icon-zhengque' : 'icon-jinggao'"></span>
                        &nbsp;
                        <span>包含字母、数字、符号中至少两种</span>
                    </div>
                    <div :class="{warning:!pswLen}">   
                        <span class="iconfont" :class="pswLen ? 'icon-zhengque' : 'icon-jinggao'"></span>
                        &nbsp;
                        <span>密码长度为6-16位</span>
                    </div>
                </div>

                <p class="code_item">
                    <label for="">验证码：</label>
                    <input 
                        type="text" 
                        placeholder="输入验证码"
                        class="verificationCode"
                        v-model="vertifyCode">
                    <el-button type="text" @click.stop="sendVCode">点击发送验证码</el-button>
                </p>
                <el-button type="primary" :disabled="!pswLen || !pswType" @click.stop="register">注册</el-button>
                <br/>
                <el-button type="text" @click.stop="backToLogin">返回登录页</el-button>
            </div>
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
    onLogin:boolean = true;
    isShowPrompt:boolean = false;
    pswType:boolean = false;
    pswLen:boolean = false;
    pswValue:string = '';
    register_phone:string = '';
    phoneError:boolean = false;
    vCodeError:boolean = false;
    vertifyCode:string = '';
    phoneReg:any = /^1[34578]\d{9}$/;

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
            // console.log('登录请求',res)
            if(res.data.code === 200 && res.data.loginType == 1){
                // 登录成功
                this.$store.commit("changeLoginStatus",true)
                const token = res.data.token;
                const userId = res.data.profile.userId;
                const nickName = res.data.profile.nickname; 
                const avatarUrl = res.data.profile.avatarUrl;
                this.$store.commit("changeUserInfo",{
                    userId,
                    nickName,
                    avatarUrl
                })
                // console.log('%c登录状态','font-size:38px;color:red;',this.$store.state.loginStatus)
            }
            else{
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
            // console.log('错误')
             this.$message({
                message:"登录失败",
                center:true,
                type:'error',
                offset:450
            })
        })
    }
    register():void{
        const phone = this.register_phone.trim();
        const vCode = this.vertifyCode.trim();
        let num = 0;
        if(!this.phoneReg.test(phone)){
            this.phoneError = true;
            num++;
        }
        else this.phoneError = false;
        
        if(!vCode) {
            this.vCodeError = true;
            num++
        }
        else this.vCodeError = false;

        if(num > 0) return;
        
        // 验证验证码是否正确
        this.axios.post("/captcha/verify",{
            phone:phone,
            captcha:vCode
        })
        .then((res)=>{
            // console.log('yanzhenma',vCode)
            if(res.data.code == 200){
                // console.log('验证码正确')
            }else{
                throw new Error('验证码错误')
            }
            return true;  //
        })
        .catch((err)=>{
            // console.log('11111111',err)
            return false;
        })
        .then((v)=>{
            // console.log(22222222,v)
            if(v){
                this.axios.post("/register/cellphone",{
                    captcha:vCode,
                    phone:phone,
                    password:this.pswValue,
                    nickname:'wyy游客'
                })
                .then((data)=>{
                    console.log('注册成功',data)
                })
            }
            
        })
     
    }

    goToregister():void{
        this.onLogin = false;
    }

    backToLogin():void{
        this.onLogin = true;
        this.isShowPrompt = false;
    }

    handleFocus():void{
        // console.log('focus啦')
        this.isShowPrompt = true;
        this.phoneError = false;
    }
    checkInput():void{
        const reg1 = /\d+/;
        const reg2 = /[a-zA-Z]+/;
        const reg3 = /[`~!@#\$%\^&*\(\)\|\-\_\+\=\.\{\}\[\]\;\:\'\"<>\?\/\,\\]+/; //特殊符号
        
        let num = 0;
        let arr = [reg1,reg2,reg3];
        arr.forEach((item)=>{
            if(item.test(this.pswValue)) num++;
        })
       
        if(num < 2) this.pswType = false;
        else this.pswType = true;

        if(this.pswValue.length < 6 || this.pswValue.length > 32) this.pswLen = false;
        else this.pswLen = true;
       
    }
    
    sendVCode():void{
        if(!this.phoneReg.test(this.register_phone)){
            this.$message({
                type:"warning",
                message:"请输入正确的手机号码",
                offset:500
            })
            return;
        }
        this.axios.post('/captcha/sent',{
            phone:this.register_phone,
            ctcode:'86'
        })
        .then((res)=>{
            // console.log('%c验证码发送成功','font-size:36px;color:red',res)
            if(res.data.code == 200){
                // console.log('验证码发送成功')
            }
        })
        .catch((err)=>{
            // console.log('验证码发送失败',err)
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
            margin: 0 auto;
            .login_page{
                margin:50px 0;
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
                    margin: 0 auto;
                }
                
                .register{
                    .el-button{
                        font-size:16px;
                    }
                }
            }
            .register_page{
                margin:0 auto;
                width: 300px;
                p{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 50px;
                    margin-bottom: 6px;
                    font-size:14px;
                    input{
                        width: 70%;
                        height: 26px;
                        &::-webkit-input-placeholder{
                            font-size:12px;
                        }
                    }
                    &.code_item{
                        .verificationCode{
                            width: 125px;
                            height: 26px;
                        }
                    }
                    
                }
                .psw_item{
                    .warningBorder:focus{
                        outline:none;
                        border: solid 1px #e33232;
                    }
                }
                .promptMsg{
                    font-size:12px;
                    color:#ccc;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin-bottom: 10px;
                    .warning,.phoneError,.vCodeError{
                        color: #e33232;
                    }
                }
            }
            
        }
    }
</style>
