<template>
    <div>
        <header class="m-top">
           <router-link to='/mine'>
           <img :src="timg" alt="">
           </router-link>    
           <span>账户信息</span>
         </header>
         <ul class="list">
            <div class="li">
                 <span>头像</span>
                 <div>
                     <div class="photo">
                          <img class="two" :src="user" alt="">
                     </div>                 
                     <img class="one"  :src="next" alt="">
                 </div>
            </div>

             
            <router-link class="li" to='/information/setname'>
                <span>用户名</span>
                 <div>
                     <span>{{name}}</span>
                     <img class="one" :src="next" alt="">
                 </div>
            </router-link>
           
             
            <router-link class="li" to='/information/address'>
                   <span>收货地址</span>
                 <div>
                     <img class="one" :src="next" alt="">
                 </div>
            </router-link>
             
             <div class="li">
                <span>账号绑定</span>
             </div>

             <div @click="app()" class="li">               
                 <div>
                     <img class="two" :src="phone" alt="">
                     <span>手机</span>  
                 </div>
                 <img class="one" :src="next" alt="">
             </div>

             <div class="li">
                   <span>安全设置</span>
             </div>
               
             <router-link class="li" to='/information/forget'>
                     <span>登陆密码</span>
                     <div>
                         <span class='last-p'>修改</span>
                          <img class="one" :src="next" alt="">
                     </div>              
             </router-link>
         </ul>
         <div class="out">
             <span>退出登陆</span>
         </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      timg: require("../imgs/back.png"),
      next: require("../imgs/next.png"),
      phone: require("../imgs/phone.png"),
      user: require("../imgs/userH.jpg"),
      name: ""
    };
  },
  methods:{
      app(){
          alert('请在手机APP中设置')
      }
  },
  created() {
    this.name = this.$store.state.login1.username;
    console.log("ssss" + this.username);
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
  margin-bottom: 0.1rem;
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
.list .li {
  border-top: 0.001rem solid gray;
  height: 0.5rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.15rem;
  padding: 0 0.05rem 0 0.1rem;
  color: black;
}
.list .li div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list .li:first-child {
  height: 0.72rem;
}
.list .li:first-child div > div {
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  background-color: rgb(219, 202, 202);
}

.list .li:nth-child(4),
.list .li:nth-child(6) {
  background-color: transparent;
  height: 0.45rem;
}
.list .li:last-child {
  border-bottom: 0.001rem solid gray;
}
.list .li:nth-child(5) img:first-child {
  margin-right: 0.1rem;
}
.one {
  margin-left: 0.05rem;
}
.one,
.two {
  width: 0.2rem;
}
.out {
  text-align: center;
  line-height: 0.35rem;
  height: 0.35rem;
  color: aliceblue;
  margin: 0.3rem 0.1rem;
  background-color: rgb(197, 26, 26);
  border-radius: 0.06rem;
  font-size: 0.15rem;
}
.last-p {
  font-size: 0.17rem;
}
.photo{
    width: 0.5rem;
    height: 0.5rem;
    border-radius:50%; 
    overflow: hidden;
}
.photo img{
    width: 100%;
    height: 100%;
}
</style>
