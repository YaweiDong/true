<template>
    <div>
        <header class="m-top">     
           <img @click="$router.back(-1)" :src="timg" alt="">        
           <span>兑换会员</span>
         </header>
         <div class="for">
            <span>成功兑换后将关联到当前账号：</span>
            <span>974598795</span>
         </div>
         <div class="input">
                <input type="text" placeholder="请输入10位卡号"> 
            <div class="line"></div>          
                <input type="text" placeholder="请输入6位卡密">
                       
         </div>
         <p class="dui">兑换</p>
         <h3>——温馨提示——</h3>
         <footer>
              
             <p>新兑换的会员服务，权益以「会员说明」为准。</p> 
             <p>月卡：<b >30次</b>减免配送费。</p> 
             <p>季卡：<b>90次</b>减免配送费。</p> 
             <p>年卡：<b>360</b>次减免配送费。</p> 
             <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
         </footer>
    </div>
</template>

<script>
export default {
  data() {
    return {
      timg: require("../imgs/back.png")
    };
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
.input{
    background-color: white;
}
.line{
    height: 0.01rem;
border-top:0.001rem solid rgb(204, 200, 200); 
}
.input input{ 
    margin: auto 0;
    border: none;
    outline: none;
    height: 0.47rem;
    font-size: 0.16rem;
    margin-left: 0.15rem;
}
.dui{
    margin: 0.15rem;
    line-height: 0.42rem;
    border-radius: 0.09rem;
    text-align: center;
    color: white;
    font-size: 0.17rem;
    font-weight:bold; 
    background-color: rgb(194, 192, 192);
}
footer{
    text-align: left;
    margin-left:0.4rem; 
    font-size:0.12rem; 
    color: rgb(128, 122, 122); 
}
footer p{
    line-height: 0.2rem;
}
h3{
    color: rgb(128, 122, 122);
    text-align: center;
    font-size:0.18rem;
    margin: 0.3rem;
}
</style>