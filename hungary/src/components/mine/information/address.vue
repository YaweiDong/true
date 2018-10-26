<template>
    <div>
        <header class="m-top">
           <router-link to='/information'>
           <img :src="timg" alt="">
           </router-link>    
           <span>编辑地址</span>
         </header>
         <div class="line"></div>
         <div class="next">
             <span>新增地址</span>
             <img :src="next" alt="">
         </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      timg: require("../imgs/back.png"),
      next: require("../imgs/next.png")
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
.line{
    border: 0.005rem solid rgb(192, 184, 184);
    height: 0.43rem;
    margin: 0.1rem 0;
    display: flex;
    justify-content: space-between;
}
.next img{
    width: 0.3rem;
}
</style>