<template>
    <div class="body">
        <header class="m-top">
          
           <img @click="$router.back(-1)" :src="timg" alt="">
             
           <span>推荐有奖</span>
         </header>
        <div class="img">
            <img :src="adv" alt="">
        </div>
           <ul class='last'>
               <li>
                   <img :src="wechat" alt="">
                   <p>邀请微信好友</p>
               </li>
               <li>
                   <img :src="qq" alt="">
                   <p>邀请QQ好友</p>
               </li>
               <li>
                   <img :src="er" alt="">
                   <p>面对面邀请</p>
               </li>
           </ul>
           <ul class="invitation">
               <li>
                   <p>累计收益</p>
                   <div>
                       <span class="leftw">0</span>
                       <span>元</span>
                   </div>
                   
               </li>
               <li>
                   <p>成功邀请</p>
                   <div>
                       <span class="rightw">0</span>
                       <span>人</span>
                   </div>
               </li>
           </ul>
           <div class='bottom'>
              <p>-收益明细-</p>
              <img :src="money" alt="">
              <p>还不快去邀请好友</p>
           </div>
           
    </div>
</template>

<script>


export default {
  data() {
    return {
      timg: require("../imgs/back.png"),
      adv:require('./Bdetail/imgs/activity.png'),
      wechat:require('./Bdetail/imgs/wechat.png'),
      qq:require('./Bdetail/imgs/qq.png'),
      er:require('./Bdetail/imgs/erweima.png'),
      money:require('./Bdetail/imgs/money.png')
    };
  }
};
</script>
<style scoped='scoped'>
.body{
    color: rgb(99, 95, 95);
}
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
  position: fixed;
  top:0;
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
.img{
    margin-top: 0.457rem;
    height: 2.3438rem;
}
.img img{
    width: 100%;
    height: 100%;
}
.last{ 
    background-color: white;
    padding: 0.15rem;
    display: flex;
}
.last li{
    width: 100%;
    text-align: center;
}
.last li img{ 
    width: 0.5859rem;
    height: 0.5859rem;  
}
.last li p{
    margin-top: 0.1rem;
    font-size: 0.13rem;
}
.invitation{
    display: flex;
    margin: 0.2rem 0;
}
.invitation li{
    width: 100%;
    text-align: center;
    font-size: 0.13rem;
} 
.invitation li p{
    margin-bottom: 0.1rem;
}
 .leftw{
    color: red;
    font-size:0.16rem;
    font-weight:bold;
} 
 .rightw{
     color: black;
     font-size:0.16rem;
     font-weight:bold;
 }
 .invitation li:first-child{
    border-right: 0.01rem solid rgb(209, 199, 199);
}
.bottom{
    margin-top: 1rem;
    text-align: center;
    font-size: 0.16rem;
}
.bottom img{
    width: 0.3rem;
}
.bottom p{
    margin:0.2rem 0; 
}
</style>