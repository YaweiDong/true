<template>
    <div class="body">
        <header class="m-top">
          
           <img @click="$router.back(-1)" :src="timg" alt="">
             
           <span>代金券说明</span>
         </header>
        <div class="word">
            <h3>Q1: 什么是商家代金券？</h3> 
               <p>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p>
            <h3>Q2: 怎么获得商家代金券？</h3>
            <ul>
                <li>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</li> 
                <li>「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</li>
            </ul> 
                <h3>Q3: 商家代金券使用条件</h3> 
            <ul>
                 <li>商家代金券仅限在指定商家使用</li> 
                 <li>商家代金券仅限在线支付使用</li> 
                 <li>每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</li>
              </ul>
        </div>
           
    </div>
</template>

<script>


export default {
  data() {
    return {
      timg: require("../../imgs/back.png")
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
.word{
    margin-top: 0.457rem;
}
h3{
    margin:0 0.2rem;
    line-height: 0.4rem;
    font-size: 0.17rem;
}
.word ul li,.word p{
    font-size: 0.14rem;
    line-height: 0.3rem;
    margin:0 0.2rem;
    color:gray;
}
</style>