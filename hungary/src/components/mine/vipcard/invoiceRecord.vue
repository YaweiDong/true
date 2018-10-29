<template>
    <div>
        <header class="m-top">     
           <img @click="$router.back(-1)" :src="timg" alt="">        
           <span>购买记录</span>
         </header>
       <div class="none">
         <img :src="nh" alt="">
         <p>没有购买记录</p>
       </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      timg: require("../imgs/back.png"),
      nh:require('../imgs/nH.png')
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
.none{
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.15rem;
  color: gray;
}
.none img{
width: 1.87rem;
height: 1.17rem;
margin-bottom: 0.1rem;
}
</style>