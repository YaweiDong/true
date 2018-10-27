<template>
    <div>
        <div class="header">
            <router-link to="/elema/city">
                <h3 class="header_h3">{{address}}</h3>
            </router-link> 
        </div> 
        <div>
          <Ele></Ele>
        </div>
        <div class="wrap">
          <div class="wrap-header">
            <span class="shop_header_title">附近商家</span>    
          </div> 
          <ul class="center">
            <router-link to="/elema/shop">
            <li class="shop" v-for="(data,index) in data" :key="data.id">
               <section>
                   <img class="shop-img" :src="'//elm.cangdu.org/img/'+data.image_path">    
               </section>
               <div class="shop_right">
                   <div class="shop_right_top">
                       <h6 class="shop_right_h6">品牌</h6>
                       <h4 class="shop_right_h4">{{data.name}}</h4>    
                       <ul class="shop_right_ul">
                           <li class="shop_right_li">保</li>   
                           <li class="shop_right_li">准</li>
                           <li class="shop_right_li">票</li>
                       </ul>   
                   </div>
                   <div class="shop_right_center">
                        <div class="shop_rate">
                            <el-rate
                                v-model=data.rating
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                            </el-rate>
                        </div>
                        <div class="order_section">月售{{data.recent_order_num}}单</div>
                        <div class="order_right">
                           <span class="delivery_style delivery_left">蜂鸟专送</span>
                           <span class="delivery_style delivery_right">准时达</span>
                        </div>  
                   </div>
                   <div class="shop_right_bottom">
                       <p class="fee">
                           ￥20起送
                           <span>/</span>
                           {{data.piecewise_agent_fee.tips}}
                       </p>
                       <p class="distance_time">
                           <span>{{data.distance}}</span>
                           <span>/</span>
                           <span class="order_time">{{data.order_lead_time}}</span>
                       </p>
                   </div>
               </div>
            </li>
            </router-link>
          </ul>  
        </div>
    <!--路由出口-->
    <router-view></router-view>
    </div>
</template>
<script>
import Ele from "./Ele";
// import { Loading } from "element-ui";
export default {
  data: () => ({
    data: [],
    // datab:[],
    return: {}
  }),

  components: {
    Ele
  },
  //发请求
  created() {
     this.address = this.$route.params.address;
    // let loadingInstance1 = Loading.service({
    //   fullscreen: true
    // });
    let api =
      "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&limit:100&order_by:5";
    //promise写法
    this.$http.get(api).then(data => {
      // loadingInstance1.close();
      //成功后的回调
      console.log(data.data);
      this.data = data.data;
    });
  }
};
</script>
<style scoped ="scoped">
.header {
  width: 100%;
  position: fixed;
  height: 0.457rem;
  background-color: #3190e8;
  z-index: 5;
}
.header_h3 {
  color: #f1f1f1;
  text-align: center;
  padding-top: 0.14rem;
}
.scroll {
  border-bottom: 0.1px solid rgba(111, 111, 111, 0.9);
  padding-bottom: 0.1rem;
}
.top {
  background-color: dodgerblue;
  width: 100%;
  height: 0.457rem;
}
.swiper-slide {
  height: 1.9rem;
}
.swiperdiv {
  display: flex;
  justify-content: space-around;
}
.linkdiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.14rem;
  color: gray;
  /* width: 50%; */
}
.wrap {
  width: 100%;
  position: relative;
  top: 0px;
}
.wrap-header {
  color: gray;
  font-size: 14px;
  width: 100%;
  height: 38px;
}
.shop_header_title {
  color: #999;
  line-height: 0.38rem;
  font-size: 0.055rem;
}
ul,
li,
session,
h5,
h4,
span,
p {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  color: #333;
  font-weight: 400;
  box-sizing: border-box;
}
.shop {
  display: flex;
  padding: 0.18rem 0.08rem;
  border-bottom: 0.025rem solid #f1f1f1;
}
.shop-img {
  width: 0.7rem;
  height: 0.7rem;
  display: block;
  margin-right: 0.05rem;
}
.shop_right {
  width: 100%;
  display: flex;
  display: inline-block;
}
.shop_right_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.shop_right_h6 {
  display: inline-block;
  font-size: 0.07rem;
  line-height: 0.14rem;
  color: #333;
  background-color: #ffd930;
  padding: 0.01rem 0.02rem;
  border-radius: 0.04rem;
  font-weight: bold;
}
.shop_right_h4 {
  color: #333;
  padding-top: 0.01rem;
  margin-right: 0.8rem;
  font-size: 0.1rem;
  font-weight: bold;
}
.shop_right_ul {
  display: flex;
  transform: scale(0.8);
  margin-right: -0.1rem;
}
.shop_right_li {
  font-size: 0.1rem;
  color: #999;
  border: 0.025rem solid #f1f1f1;
  padding: 0 0.02rem;
  border-radius: 0.08rem;
  margin-left: 0.05rem;
}
.shop_right_center {
  height: 0.2rem;
  margin-top: 0.1rem;
  overflow: hidden;
}
.shop_rate {
  float: left;
  padding-top: 0.03rem;
  line-height: 0.2rem;
  font-size: 0.1rem;
}
.order_section {
  transform: scale(0.8);
  font-size: 0.1rem;
  color: #666;
  border: 0;
  padding-top: 0.03rem;
  line-height: 0.2rem;
  float: left;
}
.order_right {
  text-align: right;
  transform: scale(0.7);
  padding-top: 0.03rem;
  margin-right: -0.5rem;
  line-height: 0.2rem;
}
.delivery_left {
  color: #fff;
  background-color: #3190e8;
  border: 0.015rem solid #3190e8;
}
.delivery_right {
  background-color: #ffffff;
  border: 0.015rem solid #3190e8;
  color: #3190e8;
}
.delivery_style {
  font-size: 0.1rem;
  padding: 0.01rem 0.04rem 0;
  border-radius: 0.03rem;
  margin-left: 0.01rem;
}
.shop_right_bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 0.1rem;
  font-size: 0.1rem;
  color: #999;
}
.fee {
  color: #666;
}
.order_time {
  color: #3190e8;
}
</style>