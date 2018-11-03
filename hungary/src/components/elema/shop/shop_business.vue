<template>
   <div>
       <div class="business_wrap">
       <div class="business_header">
           <span class="header_span">
                <img @click="$router.go(-1)" class="pay_img" src="../../../../static/imgs/back.png" alt="">
           </span>
           <h3 class="header_h3">{{data[0].foods[0].name}}</h3>
       </div>
       <div class="shop_business">            
           <img :src="'//elm.cangdu.org/img/'+data[0].foods[0].image_path" alt="">
           <p class="name">{{data[0].foods[0].name}}</p>
           <p class="title">{{data[0].description}}</p>
           <div class="business_rating">
               <span>评分</span>
                  <el-rate
                   v-model=data[0].foods[0].rating
                   disabled
                   show-score
                   text-color="#ff9900"
                   score-template="{value}">
                </el-rate>
           </div>
           <div class="number">
               <span>月售单{{data[0].foods[0].month_sales}}</span>
               <span class="shop_price">售价￥{{data[0].foods[0].specfoods[0].price}}起</span>
           </div>
           <div class="des">
               <span>评论数{{data[0].foods[0].satisfy_count}}</span>
               <span>好评率{{data[0].foods[0].satisfy_rate}}%</span>
           </div>
       </div>
       </div>
   </div>
</template>
<script>
export default {
  name: "shop_business",
  data: () => ({
    return: {}
  }),
  computed:{
     data(){
      return this.$store.state.api1
    },
    
  },
  created:{

  }
};
</script>
<style scoped='scoped'>
.business_header {
  width: 100%;
  height: 0.46rem;
  background-color: #3190e8;
  position: fixed;
  z-index: 12;
  left: 0;
  top: 0;
  color: #f1f1f1;
  font-size: 0.2rem;
  line-height: 0.46rem;
  overflow:hidden;
  text-align:center;
}
.pay_img {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 17;
  height: 0.2rem;
  padding: 0.14rem 0 0 0.1rem;
}
.header_h3 {
  padding-top: 0.02rem;
}
.shop_business {
  margin-top: .3rem;
}
.shop_business img {
  width: 100%;
}
.name,
.title,
.business_rating,   
.number,
.des {
  color: 666;
  font-size: 0.12rem;
  margin-top: 0.1rem;
  padding-left: 0.1rem;
}
.title {
  font-size: 0.16rem;
}
.business_rating {
  display: flex;
}
.shop_price {
  color: #f60;
}
</style>
<style>
.el-rate__icon {
  font-size: 0.002rem;
  font-weight: 400;
  width: 0.09rem;
  height: 0.09rem;
}
</style>
