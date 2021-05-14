<template>
    <div class="login">
        <div class="logo">
            <div class="my_logo"></div>
        </div>
        <div class="login_input_id">
            <input type="text" placeholder="手机号/邮箱/会员名">
        </div>
        <div class="login_input_password">
            <input type="password" placeholder="请输入登录密码">
            <div class="iconfont_open"></div>
            <div class="iconfont_close"></div>
        </div>
        <div class="login-links">
            <a href="javascript:void(0);" target="_self" class="sms-login-link">短信验证码登录</a>
            <a href="#">免费注册</a>
        </div>
        <button @click="btn()" class="login_btn" type="subbmit">登录</button>
    </div>
</template>
<script>
export default {
    methods:{
        btn(){
            console.log(this.$router)
            console.log(this.$route)
            this.$route.meta.isLogin = true
            this.$router.push('/')
        }
    }
}
</script>
<style scoped>
    .my_logo {
        width: 80px;
        height: 80px;
        background-image: url('../assets/img/my_logo.png');
        background-size: contain;
        background-repeat: no-repeat;
        margin: 40px auto 0;
    }
    .login_input_id,.login_input_password {
         margin: 40px 0 0;
         position: relative;
    }
    .login_input_id input {
        border: 0;
        border-bottom: 1px solid #ff5000;
        padding-left: 5px;
        font-size: 16px;
        color: #333;
        width: 90%;
        height: 30px;
    }
    .login_input_password input {
        border: 0;
        border-bottom: 1px solid #ff5000;
        padding-left: 5px;
        font-size: 16px;
        color: #333;
        width: 90%;
        height: 30px;
    }
    .login_input_password .iconfont_open {
        position: absolute;
        right: 20px;
        top: 10px;
        width: 25px;
        height: 25px;
        background-image: url('../assets/img/icon_eye_open.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
    .login_input_password .iconfont_close {
        display: none;
        position: absolute;
        right: 20px;
        top: 10px;
        width: 25px;
        height: 25px;
        background-image: url('../assets/img/icon_eye_close.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
    .login-links {
        margin: 20px auto;
        width: 90%;
        display: flex;
        justify-content: space-between;
    }
    .login-links a {
        color: #555;
        font-size: 14px;
    }
    .login_btn {
        width: 90%;
        background: -webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat;
        color: #fff;
        box-shadow: 0 2px 4px #f7c7b1;
        height: 45px;
        border: none;
        border-radius: 35px;
        margin-top: 15px;
        font-size: 16px;
    }
</style>