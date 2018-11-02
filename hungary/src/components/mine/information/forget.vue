<template>
    <div>
        <header class="m-top">
           <a src="#" @click='$router.back(-1)'>
           <img :src="timg" alt="">
           </a>    
           <span>重置密码</span>
         </header>
         <ul class='input'>
            <li>  
                 <input type="text" placeholder="账号" v-model="username"> 
            </li>
            <li>
                <input type="text" placeholder="旧密码" v-model="oldpassWord">
            </li>     
            <li>
                 <input type="text" placeholder="请输入新密码" v-model="newpassword">
            </li>
            <li>
                 <input type="text" placeholder="请确认密码" v-model=" confirmpassword">
            </li>
            <li>
                <input type="text" placeholder="验证码" v-model="captcha_code"> 
                   <div class="judge">
                      <img :src="imgs" alt="">
                      <div>
                          <p>看不清</p>
                          <p @click="change()">换一张</p>
                      </div>
                  </div> 
            </li>
         </ul>
         <div class="add" @click="btn()">
             <span>确认修改</span>
         </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      timg: require("../imgs/back.png"),
      next: require("../imgs/next.png"),
      imgs: "",
      username: "", //用户名
      oldpassWord: "", //旧密码
      newpassword: "", //新密码
      confirmpassword: "", //确认密码
      captcha_code: "" //验证码
    };
  },
  methods: {
    change() {
      this.$emit("bian");
    },
    btn() {
      let api = "https://elm.cangdu.org/v2/changepassword";
      this.$http({
        method: "post",
        url: api,
        data: {
          username: this.username, //用户名
          oldpassWord: this.oldpassWord, //旧密码
          newpassword: this.newpassword, //新密码
          confirmpassword: this.confirmpassword, //确认密码
          captcha_code: this.captcha_code //验证码
        },
        withCredentials: true
      }).then(res => {
        if(res.data.status == 1){
           alert(res.data.success)
        }else{
           alert(res.data.message);
           this.$emit("bian");
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
        this.imgs = res.data.code;
      });
    };
    changes();
    this.$on("bian", () => {
      changes();
    });
  }
};
</script>
<style scoped='secoped'>
.m-top {
  background-color: dodgerblue;
  width: 100%;
  height: 0.457rem;
  line-height: 0.457rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 0.18rem;
  color: aliceblue;
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

.input {
  margin-top: 0.1rem;
  background-color: white;
}
.input li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 0.5rem;
  border-bottom: 0.01rem solid rgb(180, 172, 172);
}
.input li input {
  height: 0.3rem;
  margin-left: 0.2rem;
  font-size: 0.17rem;
  border: none;
  outline: none;
}

.add {
  margin: 0.2rem auto;
  width: 3.4rem;
  height: 0.45rem;
  text-align: center;
  line-height: 0.45rem;
  border-radius: 0.05rem;
  background-color: rgb(93, 218, 93);
  color: rgb(240, 248, 240);
  font-size: 0.18rem;
}
.judge {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.13rem;
}
.judge img {
  width: 0.8rem;
  height: 0.4rem;
  margin-right: 0.1rem;
}
.judge div p:last-child {
  color: blue;
  margin-top: 0.1rem;
}
</style>