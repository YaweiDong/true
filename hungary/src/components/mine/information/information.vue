<template>
    <div>
        <header class="m-top">
           <router-link to='/mine'>
           <img :src="timg" alt="">
           </router-link>    
           <span>账户信息</span>
         </header>
         <ul calss="list">
             <li>
                 <span>头像</span>
                 <div>
                     <img class="one" :src="user" alt="">
                     <img class="one"  :src="next" alt="">
                 </div>
             </li>
             <li>
                 <span>用户名</span>
                 <div>
                     <span>username</span>
                     <img :src="next" alt="">
                 </div>
             </li>
             <li>
                   <span>用户名</span>
                 <div>
                     <span>username</span>
                     <img :src="next" alt="">
                 </div>
             </li>
             <li>
                   <span>收货地址</span>
                 <div>
                 
                     <img :src="next" alt="">
                 </div>
             </li>
             <li>
                <span>账号绑定</span>
             </li>
             <li>
                <img :src="phone" alt="">
                <span>手机</span>           
             </li>
             <li>
                   <span>安全设置</span>
                 <div>
                     <span>登陆密码</span>
                     <div>
                         <span>修改</span>
                          <img :src="next" alt="">
                     </div>              
                 </div>
             </li>
         </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      timg: require("../imgs/back.png"),
      next: require("../imgs/next.png"),
      phone:require('../imgs/phone.png'),
      user:require('../imgs/user.png')
    };
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
.list{
    color: red;
}
.list li{
    width: 100%;
    height: 0.5rem;
    border: 0.01rem solid black; 
}

</style>
