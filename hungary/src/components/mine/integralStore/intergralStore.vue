<template>
    <div>
        <header class="m-top">
           <router-link to='/mine'>
           <img :src="timg" alt="">
           </router-link>    
           <span>积分商城</span>
         </header>
         <p>抱歉！暂无法查询！</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      timg: require("../imgs/back.png")
    }
  }

}
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
p{
    margin-top: 1.5rem;
    font-size: 0.25rem;
    color: gray;
    text-align: center;
}
</style>