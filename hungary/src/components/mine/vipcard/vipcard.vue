<template>
    <div>
        <header class="m-top">
          
           <img @click="$router.back(-1)" :src="timg" alt="">
             
           <span>会员中心</span>
         </header>
         <div v-show="sp">

         
         <div class="for">
            <span>为账户</span>
            <span>{{name}}</span>
            <span>购买会员</span>
         </div>
         <ul class="vip1">
             <li>
                 <span>会员特权</span>
                 <router-link class="vip1-a" :to="{name:'vipDescription'}">
                     <span>会员说明</span>
                     <img class="next" :src="next" alt="">
                 </router-link>
             </li>
             <li>
                 <img class="logo" :src="sheng" alt="">
                 <div>
                     <p>减免配送费</p>
                     <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                     <p>蜂鸟专送专享</p>
                 </div>
             </li>
              <li>
                 <img class="logo" :src="jian" alt="">
                 <div>
                     <p>减免配送费</p>
                     <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                     <p>蜂鸟专送专享</p>
                 </div>
             </li>
         </ul>
         <div class="usevip">
             <p>开通会员</p>
         </div>
         <ul class="vip2">
             
             <li>
                 <div>
                     <span>1个月</span>
                     <span>￥20</span>
                 </div>
                 <router-link to='/vipcard/pay'>
                 <p class="vip2-p">购买</p>
                 </router-link>
                 
             </li>
             <li class="li3">
                 <span>兑换会员</span>
                 <router-link :to="{name:'useCard'}">
                     <span>使用卡号卡密</span>
                     <img class="next" :src="next" alt="">
                 </router-link>
             </li>
             <li class="li3">
                 <span>购买记录</span>
                 <router-link :to="{name:'invoiceRecord'}">
                     <span>开发票</span>
                     <img class="next" :src="next" alt="">
                 </router-link>
             </li>
         </ul>
         </div>
         <p class="tip" v-show="!sp">请登录查看详情</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      timg: require("../imgs/back.png"),
      next: require("../imgs/next.png"),
      jian: require("../imgs/jian.png"),
      sheng: require("../imgs/sheng.png"),
      name:'',
      sp:''
    };
  },
  created(){
    let aa = JSON.parse(localStorage.getItem('ui'));
    if(aa == null){
        this.sp = false;
    }else{
      this.sp = true;
       this.name = aa.username;
    }
  }
};
</script>
<style scoped='scoped'>
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
.m-top img {
  position: absolute;
  left: 0.05rem;
}
.m-top span {
  font-weight: bold;
  font-size: 0.19rem;
}
.m-top img {
  width: 0.2109rem;
  height: 0.2109rem;
}
.for {
  height: 0.47rem;
  line-height: 0.47rem;
  color: gray;
  font-size: 0.15rem;
  padding-left: 0.15rem;
}
.for span:nth-child(2) {
  font-weight: bold;
  color: black;
}
.next {
  width: 0.2rem;
}
.logo {
  width: 0.37rem;
  height: 0.42rem;
  margin-right: 0.1rem;
}
.vip1 {
  background-color: white;
}
.vip1 li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 0.9rem;
  font-size: 0.13rem;
  color: gray;
  border-top: 0.001rem solid rgb(199, 196, 196);
  margin-left: 0.15rem;
}
.vip1 li:nth-child(1) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.47rem;
  font-size: 0.18rem;
  color: black;
  border-top: none;
  margin-right: 0.15rem;
}
.vip1 li div p:first-child {
  color: black;
  font-size: 0.17rem;
  margin-bottom: 0.05rem;
}
.vip1-a,
.li3 a {
  color: gray;
  font-size: 0.15rem;
  display: flex;
  align-items: center;
}
.usevip {
  background-color: white;
  height: 0.47rem;
  line-height: 0.47rem;
  margin-top: 0.15rem;
}

.usevip p {
  margin-left: 0.15rem;
  border-bottom: 0.001rem solid rgb(199, 196, 196);
}
.vip2 li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.47rem;
  padding: 0 0.15rem;
  font-size: 0.15rem;
  background-color: white;
}
.vip2 li:nth-child(1) {
  line-height: 0.6rem;
  height: 0.6rem;
}
.vip2 > li:nth-child(1) > div > span:last-child {
  color: orangered;
  font-weight: bold;
}
.vip2-p {
  color: orangered;
  width: 0.61rem;
  height: 0.28rem;
  text-align: center;
  line-height: 0.28rem;
  border: 0.009rem solid orangered;
  border-radius: 0.05rem;
  margin-right: 0.15rem;
}
.li3 {
  margin-top: 0.15rem;
}
.tip{
  font-size: 0.2rem;
  text-align: center;
  padding-top: 1.5rem;
  color: gray;
}
</style>