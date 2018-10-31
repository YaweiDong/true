<template>
    <div>
        <header class="m-top">     
           <img @click="$router.back(-1)" :src="timg" alt="">        
           <span>在线支付</span>
         </header>
        <div class='pay'>
            <p>支付剩余时间</p>
            <p class="jishi">{{timer}}</p>
        </div>
        <p class="pay-p">选择支付方式</p>
        <ul class='pay-way'>
            <li>
                <div>
                     <img class="left" :src="zhi" alt="">
                     <span>支付宝</span>
                </div>
                
                <img @click="btn1()" :class="{color:color1}" class="right" :src="you" alt="">
            </li>
            <li>
                <div>
                      <img class="left" :src="wechat" alt="">
                      <span>微信</span>
                </div>               
                <img @click="btn2()" :class="{color:color2}" class="right" :src="you" alt="">
            </li>
        </ul>     
        <p class="pay-i">确认支付</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      timg: require("../imgs/back.png"),
      nh: require("../imgs/nH.png"),
      wechat: require("../balance/Bdetail/imgs/wechat.png"),
      zhi: require("../imgs/zhifubao.png"),
      you: require("../imgs/you.png"),
      color1: true,
      color2: false,
      timer:''
    };
  },
  methods: {
    btn1() {
      this.color1 = true;
      this.color2 = false;
    },
    btn2() {
      this.color1 = false;
      this.color2 = true;
    }
  },
  beforeMount(){
    var _this = this;
        var to = setInterval(getTotelNumber,1000)
         var newtime = 15*60;
         function getTotelNumber() {
            var m= Math.floor(newtime/60);
			var s = Math.floor(newtime%60);
			var msg1 = "00:" + m + ":" + s;
            --newtime;
            if(newtime>=0){                
			   _this.timer = msg1;
            }else{
                clearInterval(to);
                alert('支付超时，请重新支付')
            }
         }
         getTotelNumber();

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
  position: fixed;
  top: 0;
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
.pay {
  margin-top: 0.457rem;
  height: 1.08rem;
  padding-top: 0.4rem;
  text-align: center;
  background-color: white;
}
.pay-p {
  height: 0.42rem;
  line-height: 0.42rem;
  margin-left: 0.15rem;
  font-size: 0.16rem;
  color: gray;
}
.pay p:first-child{
    margin-bottom: 0.1rem;
    color: gray;
}
.pay-way {
  background-color: white;
}
.pay-way li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.15rem;
  color: gray;
}
.pay-way li:first-child {
  border-bottom: 0.001rem solid rgb(185, 176, 176);
}
.pay-way li div {
  display: flex;
  align-items: center;
}
.left {
  width: 0.4688rem;
  height: 0.4688rem;
  margin-right: 0.1rem;
}
.right {
  width: 0.2344rem;
  height: 0.2344rem;
  border-radius: 50%;
  background-color: #ccc;
}
.pay-i {
  margin: 0.15rem;
  text-align: center;
  line-height: 0.42rem;
  background-color: #4cd964;
  font-weight: bold;
  color: white;
  font-size: 0.16rem;
  border-radius: 0.05rem;
}
.color {
  background-color: #4cd964;
}
.jishi{
    font-size: 0.4rem;
}
</style>