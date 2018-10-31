<template>
    <div>
        <header class="m-top">
           <router-link to='/information/address/add'>
           <img :src="timg" alt="">
           </router-link>    
           <span>搜索地址</span>
         </header>
        <div class="input">
          <input type="text" placeholder="请输入小区/写字楼/学校等">
          <div>确认</div>
        </div>
        <p class="p">为了满足商家的送餐要求，建议从列表中选择地址</p>
        <div class="three">
           <p>找不到地址</p>
           <p>请尝试输入小区，写字楼或学校名</p>
           <p>详细地址（如门牌号）可稍后输入哦。</p>
        </div>
        
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
.input{
  background-color: white;
  padding: 0.2rem 0;
  display: flex;
  justify-content: center;
}
.input input{
  outline: none;
  border: none; 
  width: 2.7rem;
  height: 0.35rem;
  border-radius:0.05rem;
  font-size: 0.15rem;
  background-color: #f5f5f5;
  border: 0.01rem solid rgb(209, 202, 202);
}
.input div{
  text-align: center;
  line-height: 0.35rem;
  background-color: dodgerblue;
  border-radius:0.07rem; 
  width: 0.7rem;
  height: 0.35rem;
  color: white;
  margin-left: 0.1rem;
}
.p{
  text-align: center;
  background-color:wheat;  
  padding: 0.08rem 0;
  color: rgb(235, 107, 107);
  font-size: 0.15rem;
}
.three{
  margin: 1.5rem auto;
  text-align: center;
  font-size: 0.17rem;
  color: gray;
}
.three p{
  line-height: 0.3rem;
}
</style>