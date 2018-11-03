
<template>
    <div class="body">
       <header class="m-top">
     <a src='#' @click="$router.back(-1)">
             <img :src="timg" alt="">
           </a>          
           <span>密码登录</span>
       </header>
       <div class="login">
           <form class="login-form">
               <section>
                   <input type="text" v-model="usernmae" placeholder="账号">
               </section>
               <section>
                   <input v-model="password" v-show="ty" type="password" placeholder="密码">
                   <input v-model="password" v-show="!ty" type="text" placeholder="密码">
                   <div  class="login-sel" :class="{style2:!ty}">
                       <div @click="but()" :class="{style1:!ty}" class="button-sel"></div>
                        <span>abc</span>
                        <span>...</span>
                   </div>              
               </section>
               <section>
                   <input maxlength="4"  v-model="codeNumer" type="text" placeholder="验证码">
                   <div class="login-code">
                       <img :src="code" />
                       <div>
                         <p>看不清</p>
                         <p @click="change()">换一张</p>
                       </div>
                   </div>
               </section>
               <input value="提交00" type="submit">
           </form>
           <div class="advice">
              <p>温馨提示:未注册过的账号,登录时将自动注册</p>
              <p>注册过的用户可凭账号密码登录</p>
           </div>          
           <div class='login-container' @click="give()">
             登录
             </div>    
           <router-link class="forget" to="/information/forget">重置密码?</router-link>     
       </div>
    </div>   
</template>
<script>
import { mapState } from "vuex";
import {Loading} from 'element-ui';
export default {
  data() {
    return {
      usernmae: "",
      password: "",
      codeNumer: "",
      ty: true,
      timg: require("../imgs/back.png"),
      code: ""
    };
  },
  methods: {
    but() {
      this.ty = !this.ty;
    },
    change() {
      this.$emit("bian");
    },
    give() {
let load = Loading.service({ fullscreen: true });
      var api = "https://elm.cangdu.org/v2/login/";
      this.$http({
        method: "post",
        url: api,
        withCredentials: true,
        data: {
          captcha_code: this.codeNumer,
          password: this.password,
          username: this.usernmae
        }
      }).then(res => {
        load.close();
        if (res.data.status == "") {
          alert(res.data.message);
          this.codeNumer = '';
          this.$emit("bian");
        } else {
          alert("登陆成功");
          this.$store.commit("logining", res.data);
          this.$router.push({ name: "mine" });
        }
      });
    }
  },
  created() {
    let api = "https://elm.cangdu.org/v1/captchas";
    var changes = () => {
      this.$http({
        method: "post",
        url: api,
        withCredentials: true
      }).then(res => {
        this.code = res.data.code;
      });
    };
    changes();
    this.$on("bian", () => {
      changes();
    });
  }
};
</script>


<style scoped="scoped">
.body {
  background-color: rgb(245, 245, 245);
}
.m-top {
  background-color: dodgerblue;
  height: 0.457rem;
  line-height: 0.457rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 0.18rem;
  color: aliceblue;
  margin-bottom: 0.15rem;
}
.m-top a {
  position: absolute;
  left: 0.05rem;
  overflow: hidden;
}
.m-top span {
  font-weight: bold;
  font-size: 0.19rem;
}
.m-top a img {
  width: 0.2109rem;
  height: 0.2109rem;
  float: left;
  top: 50%;
  bottom: 50%;
}

.login-form section {
  background-color: white;
  padding-left: 0.2rem;
}
.login-form section input {
  width: 100%;
  height: 0.4813rem;
  background-color: none;
  border: 0;
  outline: none;
  border-bottom: 0.02rem solid #f5f5f5;
  font-size: 0.17rem;
}
.login-form section:nth-child(2) {
  color: white;
  font-size: 0.15rem;
  display: flex;
  align-items: center;
  position: relative;
}
.login-sel {
  position: absolute;
  right: 0.02rem;
  height: 0.16rem;
  width: 0.5rem;
  background-color: rgba(204, 204, 204, 1);
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
}
.button-sel {
  position: absolute;
  left: 0;
  width: 0.25rem;
  height: 0.25rem;
  background-color: rgb(199, 197, 197);
  border-radius: 50%;
}
/* @keyframes style1 {
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(0.28rem);
  }
} */
.style1 {
  transform: translateX(0.28rem);
  transition: all 0.5s;
}
.style2 {
  background-color: rgba(76, 217, 100, 1);
  transition: all 1s;
}
.login-form section:nth-child(3) {
  position: relative;
}
.login-code {
  position: absolute;
  right: 0;
  top: 0;
  width: 1.6rem;
  height: 0.4813rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.15rem;
}
.login-code p:last-child {
  color: blue;
  margin-top: 0.02rem;
}
.login-code img {
  height: 0.3rem;
  margin-right: 0.1rem;
}
.advice {
  color: red;
  font-size: 0.12rem;
  margin: 0.1rem 0.15rem;
}
.advice p:first-child {
  margin-bottom: 0.15rem;
}
.login-container {
  margin: 0 0.2rem;
  padding: 0.1rem 0;
  font-size: 0.2rem;
  text-align: center;
  background-color: #4cd964;
  color: #fff;
  border-radius: 0.05rem;
}
.forget {
  color: red;
  margin-top: 0.3rem;
  margin-right: 0.2rem;
  float: right;
}
</style>
