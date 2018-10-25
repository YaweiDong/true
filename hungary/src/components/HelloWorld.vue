<template>
  <div>
  <div class="warp">
  <router-link to="/elema">
      <div class='search'>
         <img class='img2' src="../../static/imgs/elema.png" alt="">
         外卖
      </div>
  </router-link>
   
  <router-link to="/search">
    <div class='search'>
       <img class='img2' src="../../static/imgs/search.png" alt="">
       搜索
    </div>
  </router-link>
      
  <router-link to="/order">
     <div class='search'>
         <img class='img2' src="../../static/imgs/order.png" alt="">
          订单
      </div>
  </router-link>
    <router-link to="/mine">
      <div class='search'>
         <img class='img2' src="../../static/imgs/mine.png" alt="">
         我的
      </div>
  </router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped ="scoped">
.warp {
  width: 100%;
  padding: 0.1rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background-color:white;
  z-index: 5;
}
.search {
  display: flex;
  flex-direction: column;
  align-items: center;
  color:gray;
}
.img2 {
  width: 0.3rem;
  margin-bottom: 0.02rem;
}

</style>
