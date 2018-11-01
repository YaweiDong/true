<template>
   <div>
       <div class="business_header">
           <router-link :to="{name:'shop',params:{id:data.id}}">
           <span class="header_span">
             <
           </span>
           </router-link>
           <h3 class="header_h3">{{$route.params.usename}}</h3>
       </div>
       <div class="shop_business">            
           <img :src="'//elm.cangdu.org/img/'+$route.params.Image" alt="">
           <!-- <img class="user_avatar" src="../../../../static/imgs/download.jpg" alt=""> -->
           <p class="name">{{$route.params.dataname}}</p>
           <p class="title">{{$route.params.usename}}</p>
           <div class="business_rating">
               <span>评分</span>
                  <el-rate
                   v-model=$route.params.rate
                   disabled
                   show-score
                   text-color="#ff9900"
                   score-template="{value}">
                </el-rate>
           </div>
           <div class="number">
               <span>月售{{$route.params.month}}单</span>
               <span class="shop_price">售价￥{{$route.params.price}}起</span>
           </div>
           <div class="des">
               <span>评论数{{$route.params.count}}</span>
               <span>好评率{{$route.params.rating}}%</span>
           </div>
       </div>
   </div>
</template>
<script>
export default {
  name: "shop_business",
  data: () => ({
    data: [],
    // aa:'',
    return: {}
  }),
  created() {
     let api =
      "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1";
    //promise写法
    this.$http.get(api).then(data => {
      //成功后的回调
    this.data=data.data;
    });
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
.header_span {
  margin-left: .2rem;
  color: #f1f1f1;
  float:left;
}
.header_h3 {
  padding-top: 0.02rem;
}
.shop_business {
  width: 100%;
  height: 100%;
  margin-top: 0.46rem;
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