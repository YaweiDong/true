<template>
   <div>
       <div class="business_header">
           <router-link :to="{name:'shop',params:{id:data2.id}}">
           <span class="header_span">
               <
           </span>
           </router-link>
           <h3 class="header_h3">{{data.description}}</h3>
       </div>
       <div class="shop_business" v-for="(k,index) in data.foods" :key="index">
           <img :src="'//elm.cangdu.org/img/'+k.image_path" alt="">
           <p class="name">是的方式分</p>
           <p class="title">{{data.description}}</p>
           <div class="business_rating">
               <span>评分</span>
                  <el-rate
                   v-model=k.rating
                   disabled
                   show-score
                   text-color="#ff9900"
                   score-template="{value}">
                </el-rate>
           </div>
           <div class="number">
               <span>月售43单</span>
               <span class="shop_price">售价￥20起</span>
           </div>
           <div class="des">
               <span>评论数498</span>
               <span>好评率63%</span>
           </div>
       </div>
   </div>
</template>
<script>
export default {
  name: "shop_business",
  data: () => ({
    data: [],
    data2:[],
    aa:'',
    return: {}
  }),
  created() {
    this.aa=this.$route.params.id;
    //16、获取食品列表
    let api = "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1";
    //promise写法
    this.$http.get(api).then(data => {
      //成功后的回调
      this.data = data.data.filter(k => this.aa == k.id )[0];
      // this.data = data.data;
      console.log(this.data);
    });
    //6、获取商铺列表
    let api1 =
      "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
    //promise写法
    this.$http.get(api1).then(data2 => {
      //成功后的回调
      this.data2 = data2.data.filter(k => this.aaa == k.id)[0];
      console.log(this.data2);
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
  display: flex;
  line-height: 0.46rem;
}
.header_span {
  margin-left: 0.2rem;
  color: #f1f1f1;
}
.header_h3 {
  padding-top: 0.02rem;
  margin-left: .7rem;
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