<template>
    <div>
    <header class="m-top">
        <img  @click="($router.back(-1))" src="../../../static/imgs/back.png" alt="">
        <span>我的</span>
    </header>
       <router-link :to='choise' class="register">           <div class="register-div">
            <div class="register-photo">
                <img src="../../../static/imgs/mine.png" alt="">
            </div>
            <div class="register-p">
                <p>{{name}}</p>
                <div>
                   <img :src="phone" alt="">  
                   <p>暂无绑定手机号</p>
                </div>
            </div>       
          </div>
        <img class="next" :src="next" alt="">  
    </router-link> 
    <ul class='treasure'>
        <li>
            <router-link to="/yet">
               <strong class="treasure-s1">{{yu}}</strong>
               <span>元</span>
               <p>我的余额</p>     
            </router-link>
        </li>
        <li>
            <router-link to="/discount" >   
               <strong class="treasure-s2">{{gift}}</strong>
               <span>个</span>
               <p>我的优惠</p>          
            </router-link>  
        </li>
        <li>
           <router-link to="/integral" >    
            <strong class="treasure-s3">{{point}}</strong>
            <span>分</span>
            <p>我的积分</p>   
           </router-link>    
        </li>
    </ul>
    <div class="list-div">
        <router-link  class="lists" :to='k.router' :key="k.lis" v-for="k in lists">
            <aside>
                <img :src="k.im" alt="">
            </aside> 
            <div class="lists-right">
                <span>{{k.lis}}</span>              
                <img :src="next" alt="">
            </div>               
        </router-link>
    </div>
       
    <div class="Dwarp">

       <router-link :key="index" v-for="(k,index) in Dimg" :to="k.ad">
           <div class='Dsearch'>
               <img class='Dimg2' :src="k.im" />
               {{k.na}}
            </div>
       </router-link>
    </div>
    </div>
</template>


<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      choise: "/register",
      phone: require("./imgs/phone.png"),
      next: require("./imgs/next.png"),
      name: "登陆/注册",
      yu: "0.00",
      gift: "0.00",
      point: "0.00",
      lists: [
        { im: require("./imgs/order3.png"), lis: "我的订单", router: "/order" },
        {
          im: require("./imgs/store.png"),
          lis: "积分商城",
          router: "/integralStore"
        },
        {
          im: require("./imgs/crow.png"),
          lis: "饿了吗会员卡",
          router: "/vipcard"
        },
        {
          im: require("./imgs/sever.png"),
          lis: "服务中心",
          router: "/service"
        },
        {
          im: require("./imgs/download.png"),
          lis: "下载饿了吗APP",
          router: "/download"
        }
      ],
      Dimg: [
        {
          na: "外卖",
          ad: "/elema",
          im: require("../../himg/ele.png")
        },
        {
          na: "搜索",
          ad: "/search",
          im: require("../../himg/search.png")
        },
        {
          na: "订单",
          ad: "/order",
          im: require("../../himg/order.png")
        },
        {
          na: "我的",
          ad: "/mine",
          im: require("../../himg/mine1.png")
        }
      ]
    };
  },
  created() {
    var aa = this.$store.state.login1;
    //获取本地存储
    var localData = JSON.parse(localStorage.getItem('ui'))
    console.log('本地',localData)
    if (localData == null) {
      this.choise = "/register";
      this.name = "登陆/注册";
    } else {
      this.name = localData.username;
      this.point = localData.point;
      this.gift = localData.gift_amount;
      this.choise = "/information";
      this.yu = localData.balance;
      this.$router.push({ name: "mine" });
    }
  }
};
</script>
<style scoped="scoped">
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
  border-bottom: 0.0002rem solid white;
  position: fixed;
  top:0;
}
.m-top img {
  position: absolute;
  top: 0.13rem;
  left: 0.1rem;
  width: 0.2rem;
}
.m-top span {
  font-weight: bold;
  font-size: 0.19rem;
}
.register {
  margin-top: 0.457rem;
  height: 0.8984rem;
  background-color: dodgerblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
}
.register-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.register-photo {
  width: 0.5859rem;
  height: 0.5859rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.15rem;
}
.register-photo img {
  width: 100%;
  height: 100%;
  background-color: aliceblue;
}
.register-p p:first-child {
  font-size: 0.21rem;
  font-weight: bold;
  color: aliceblue;
}
.register-p p {
  font-size: 0.15rem;
  color: aliceblue;
}
.register-p div {
  margin-top: 0.09rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.register-p img {
  width: 0.2rem;
  height: 0.21rem;
}
.next {
  width: 0.2rem;
  height: 0.2rem;
}
.treasure {
  display: flex;
  background-color: #ffffff;
  font-size: 0.15rem;
}
.treasure li strong {
  font-size: 0.3rem;
  font-weight: bold;
}
.treasure-s1 {
  color: orange;
}
.treasure-s2 {
  color: red;
}
.treasure-s3 {
  color: green;
}
.treasure p {
  margin-top: 0.1rem;
}
.treasure li {
  width: 100%;
  height: 0.842rem;
  border-right: 0.00016rem solid rgb(168, 167, 167);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.treasure li a {
  color: black;
}
.treasure li:last-child {
  border-right: 0;
}
.lists {
  height: 0.4128rem;
  font-size: 0.17rem;
  display: flex;
  align-items: center;
  justify-items: flex-start;
  background-color: #ffffff;
  color: black;
}
aside img {
  width: 0.18rem;
  height: 0.18rem;
  margin: 0 0.1rem;
}

.list-div,
.list-div > .lists:nth-child(4) {
  margin-top: 0.2rem;
}
.lists-right {
  width: 100%;
  height: 0.4128rem;
  line-height: 0.4128rem;
  border-bottom: 0.0006rem solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-div > .lists:nth-child(3) > .lists-right {
  border-bottom: 0;
}
.list-div > .lists:last-child > .lists-right {
  border-bottom: 0;
}
.lists-right img {
  width: 0.17rem;
}

.Dwarp {
  width: 100%;
  height: 0.5rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  font-size: 0.13rem;
  z-index: 100;
  box-shadow: 0.01rem 0.01rem 0.02rem 0.02rem rgb(207, 201, 201);
}
.Dsearch {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(26, 25, 25);
}
.Dimg2 {
  width: 0.25rem;
  margin-bottom: 0.02rem;
}
</style>
