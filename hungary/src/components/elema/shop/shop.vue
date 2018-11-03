<template>
   <div class="wrapper">
    <div class="box">
       <router-link to="/elema">
       <div class="goback">
         <img src="../../../../static/imgs/back.png" alt="">
       </div>  
       </router-link>
       <router-link to="/elema">
       <header class="shops-header" >
           <img class="shop_header_img" v-if="data4" :src="'//elm.cangdu.org/img/'+data4.image_path">
           <section class="descript_header">
               <a class="descript_top">
                  <section class="descript_left">
                      <img v-if="data4" :src="'//elm.cangdu.org/img/'+data4.image_path">
                  </section>
                  <section class="descript_right" v-if="data4">
                       <h4 v-if="data4" class="description_title">{{data4.name}}</h4>
                       <p class="description_text" v-if="data4.piecewise_agent_fee">商家配送/分钟送达/{{data4.piecewise_agent_fee.tips}}</p>
                       <p class="description_text">公告:{{data4.promotion_info}}</p>
                  </section>
                  <router-link :to="{name:'business',params:{id:data4.id}}">
                  <div class="svg_right">
                     >
                  </div>
                  </router-link>
               </a>
               <footer class="description_footer" v-for="(kkkk,index) in data4.activities" :key="index">
                     <p>
                       <span class="tip_icon" :style="{backgroundColor: '#'+kkkk.icon_color}">{{kkkk.icon_name}}</span>
                       <span>{{kkkk.description}}(APP专享)</span>
                     </p>
                     <router-link :to="{name:'shop_activity',params:{id:data4.id}}">
                     <p>
                       1个活动> 
                     </p>
                     </router-link>
               </footer>
           </section>      
       </header>
       </router-link>
       <div class="shops_show">
            <a href="#" class="activity_show">商品</a>
            <a href="javascript:;">评价</a>
       </div>
    </div> 
    <!-- 商品 -->
       <div class="tab_con">
          <div class="food_container">
              <section class="menu_container">
                  <!-- 商品左边 -->
                  <section class="menu_left">
                      <ul>
                          <li class="activity_menu" v-for="(data,index) in data" :key="index">
                              <a :href="'#header_top'+index"><span>{{data.name}}</span></a>
                              <p class="cart_list_mount" v-show="ka.specfoods[0].count>0" v-for="(ka,inds) in data.foods" :key="inds">{{ka.specfoods[0].count.length}}</p>
                          </li>
                      </ul>
                  </section>
                  <!-- 商品右边 -->
                  <section class="menu_right">
                      <ul>
                          <li v-for="(data1,index1) in data" :key="index1">
                              <!-- 商品头部 热销榜 -->
                              <header :id="'header_top'+index1" class="menu_detail_header">
                                   <section class="menu_detail_header_left">
                                       <strong class="menu_item_title">{{data1.name}}</strong> 
                                       <span class="menu_item_description">{{data1.description}}</span>
                                   </section> 
                                    <el-tooltip class="meny_detail_header_right" effect="dark" content="热销榜 大家喜欢吃,才叫真好吃" placement="bottom-end">
                                       <el-button>...</el-button>
                                    </el-tooltip>
                              </header>
                              <!-- 商品信息 -->
                              <section class="menu_detail_list" v-for="(value,ind) in data1.foods" :key="ind">
                                  <router-link to="/shop_business" @click="shopes()">
                                   <div class="menu_detail_link">
                                      <section class="menu_food_img">
                                           <img :src="'//elm.cangdu.org/img/'+value.image_path" alt=""> 
                                      </section>
                                      <section class="menu_food_description">
                                            <h3 class="food_description_head">
                                                <strong class="description_foodname">{{value.name}}</strong>
                                                <p class="description_food_title">招牌</p>
                                            </h3>
                                            <p class="food_description_content">{{value.description}}</p>
                                            <p class="food_sale_rating">
                                                <span>{{value.tips}}</span>
                                            </p>
                                            <span class="food_activity">{{value.description}}</span>
                                      </section>
                                   </div>
                                   </router-link>
                                   <!-- 按钮 -->
                                   <footer class="menu_deatil_footer">
                                       <section class="food_price">
                                            <span v-if="value.specfoods">￥{{value.specfoods[0].price}}</span>
                                       </section>
                                       <section class="cart_module" >
                                               <button class="reduce" v-show="value.specfoods[0].count>0" @click="reduce(value.specfoods[0])">-</button>
                                               <span class="sum" v-show="value.specfoods[0].count>0">{{value.specfoods[0].count}}</span>
                                               <button class="plus" @click="add(value.specfoods[0])">+</button>
                                       </section>
                                   </footer>
                              </section>
                          </li>
                      </ul>
                  </section>
              </section>    
              <!-- 购物车 -->
              <section class="buy_car_container">
                 <section>
                      <div class="cart_icon_container">
                            <img class="cart_icon_img" @click="cart(show=!show)" src="../../../../static/imgs/购物车.png" alt="">
                            <!-- <span class="cart_list_length"></span> -->
                      </div>
                      <section class="cart_money" v-if="data4">
                          <p >￥{{numberes}}.00</p>
                          <span v-if="data4.piecewise_agent_fee">{{data4.piecewise_agent_fee.tips}}</span>
                      </section>
                 </section>
                 <section class="gotopay">
                    <span class="gotopay_button">还差￥20起送</span>
                    <router-link to="/pay_money" @click="money()">
                        <span class="goto_pay">去结算</span>
                    </router-link>
                 </section>
              </section> 
              <!-- 购物车清空 -->
              <section class="cart_food_list" v-if="show">
                  <header>
                     <h4>购物车</h4>
                     <div class="clear_cart" @click="clear()">清空</div>
                  </header>
                  <section class="cart_food_detail">
                      <ul>
                        <li class="cart_food_li" v-for="(arres,indexes) in array" :key="indexes">
                          <div class="cart_food_name">{{arres.name}}</div>
                          <div class="cart_food_price">
                            <span>￥{{arres.price}}</span>
                          </div>
                          <section class="cart_food_btn">
                                <button class="reduce" @click="reduce(arres)">-</button>
                                <span class="sum">{{arres.count}}</span>
                                <button class="plus" @click="add(arres)">+</button>
                          </section>
                        </li> 
                      </ul>
                  </section>
              </section>
          </div>
          <!-- 评价 -->
          <div>
             <section class="rating_container">
                  <header class="rating_header">
                      <section class="rating_session_left">
                          <p>{{number}}</p>
                          <p>综合评价</p>
                          <p>高于周边商家{{rate}}%</p>
                      </section>
                      <section class="rating_session_right">
                           <p>
                             <span>服务态度</span>
                             <el-rate
                                v-model=arr
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                            </el-rate>
                           </p>
                           <p>
                             <span>菜品评价</span>
                             <el-rate
                                v-model=num
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                            </el-rate>
                           </p>
                           <p>
                             <span>送达时间{{data5.deliver_time}}分钟</span>
                           </p>
                      </section>
                  </header>
                  <div>
                     <ul class="tag_list_ul">
                        <li class="tagActivity" v-if="data2" v-for="(data2,index) in data2" :key="data2.id">
                            {{data2.name}}({{data2.count}})
                        </li>
                     </ul>
                  </div>
                  <div>
                      <ul class="rating_list_ul">
                          <li class="rating_list_li" v-for="(data3,index) in data3" :key="data3.id">
                              <img class="user_avatar" src="../../../../static/imgs/download.jpg" alt="">
                              <section class="rating_list_detail">
                                  <header>
                                     <section class="username_start">
                                          <p class="username">{{data3.username}}</p>
                                          <p class="rating_star">
                                            <el-rate
                                                v-model=data3.rating_star
                                                disabled
                                                show-score
                                                text-color="#ff9900" 
                                                score-template="">
                                            </el-rate>
                                            <span class="time_spent_desc">{{data3.time_spent_desc}}</span>
                                          </p>
                                     </section>
                                     <time class="reted_at">{{data3.rated_at}}</time>
                                  </header>
                                  <div class="food_img_div">
                                     <ul class="food_img_ul">
                                         <li class="food_img_li" v-for="(kkk,index) in data3.item_ratings[0]" :key="index">
                                             <img v-if="kkk.image_hash" :src="'//fuss10.elemecdn.com/img/'+kkk.image_hash+'.jpeg'" alt="">
                                         </li>
                                     </ul>
                                  </div>
                                  <div class="food_name_div">
                                     <ul class="food_name_ul">
                                         <li class="food_name_li" v-for="(kkk,index) in data3.item_ratings" :key="index">
                                             {{kkk.food_name}}
                                         </li>
                                     </ul>
                                  </div>
                              </section>
                          </li>
                      </ul>
                  </div>
             </section>
          </div>
       </div>  
       <!--路由出口-->
    <router-view></router-view>                                                          
   </div>
</template>
<script src="../../../../static/js/jquery-3.3.1.min.js" type="text/javascript" charset="utf-8"></script>
<script>
import Vue from "vue";
import $ from "jquery";
export default {
  name: "shop",
  data: () => ({
    data2: [],
    data3: [],
    data4: [],
    data5:[],
    show:false,
    arr:0,
    num:0,
    rate:0,
    number:0,
    return: {},
    aaa: ""
  }),
  computed:{
    data(){
      return this.$store.state.api1
    },
    numberes(){
      return this.$store.state.number;
    },
    array(){
      return this.$store.state.arrnum
    }
  },
  methods: {
    //增加
    add(a) { 
      this.$store.commit("plus",a);
    },
    //减少
    reduce(a) {
      this.$store.commit("minus",a);
    },
    //购物车增加
    jia(aa){
      this.$store.commit("addCart",aa);
    },
    //购物车减少
    jian(bb){
      this.$store.commit("redCart",bb);
    },
    cart(){

    },
    clear(){
      //  this.show = !show;
       this.$store.commit("clearCart");
    },
    //点击btn2传值给photo
    // btn2(photo) {
    //   console.log("---------------------");
    //   this.$store.commit("photoname", photo);
    //  },
    shopes(){
      this.$route.push("/shop/shop_business"); 
    },
    money(){
      this.$route.push("/shop/pay_money");
    }
  },
  //发请求
  created() {
    this.aaa = this.$route.params.id;
    //6、获取商铺列表
    let api3 =
      "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
    //promise写法
    this.$http.get(api3).then(data4 => {
      //成功后的回调
      this.data4 = data4.data.filter(k => this.aaa == k.id)[0];
      // console.log(this.data4);
    });
    // 16、获取食品列表
    let api =
      "https://elm.cangdu.org/shopping/v2/menu?restaurant_id="+this.$route.params.id;
    //promise写法
    this.$http.get(api).then(data => {
      //成功后的回调
      for(var i=0;i<data.data.length;i++){
        for(var ii=0;ii<data.data[i].foods.length;ii++){
           Vue.set(data.data[i].foods[ii].specfoods[0],"count",0);
        }
      }
      this.$store.commit("api1",data.data);
    });
    //19、获取评价分类
    let api1 = "https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags";
    this.$http.get(api1).then(data2 => {
      //成功后的回调
      this.data2 = data2.data;
    });
    //17、获取评价信息
    let api2 =
      "https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10";
    this.$http.get(api2).then(data3 => {
      //成功后的回调
      // console.log(data3.data);
      this.data3 = data3.data;
    });
    //18、获取评价分数
    let api4 =
      "https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/scores";
    this.$http.get(api4).then(data5 => {
      //成功后的回调
      this.data5 = data5.data;
      // console.log(this.data5.service_score)
      this.arr = Math.round(Math.round(this.data5.service_score*100)/10)/10;
      this.num = Math.round(Math.round(this.data5.food_score*100)/10)/10;
      this.rate = Math.round(Math.round(this.data5.compare_rating*10000)/10)/10;
      this.number = Math.ceil(this.arr + this.num)/2;
    });
  },
  mounted() {
    $(function() {
      $(".shops_show>a").mouseover(function() {
        $(".tab_con>div")
          .eq($(this).index())
          .addClass("food_container")
          .show()
          .siblings()
          .hide();
        $(this)
          .addClass("activity_show")
          .siblings()
          .removeClass("activity_show");
      });
    });
  },
  updated() {}
};
</script>

<style scoped ="scoped">
.box {
  width: 100%;
  background-color: #f1f1f1;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 15;
}
.goback,
.svg_right {
  position: fixed;
  top: 0;
  left: 0;
  height: 0.3rem;
  z-index: 16;
  padding-top: 0.05rem;
  padding-left: 0.08rem;
  color: #f1f1f1;
  font-size: 0.2rem;
  font-weight: bold;
}
.goback img {
  height: 0.2rem;
}
.shops_header,
.descript_header {
  width: 100%;
  height: 0.9rem;
  overflow: hidden;
  position: relative;
  z-index: 12;
}
header,
section,
nav,
a,
span,
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  border: none;
  color: #333;
  font-weight: 400;
  display: block;
}
.shop_header_img {
  width: 100%;
  height: 0.9rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  /* 滤镜 */
  filter: blur(10px);
}
.descript_header {
  background-color: rgba(119, 103, 137, 0.43);
  padding: 0.1rem 0 0.1rem 0;
  height: 0.78rem;
}
.descript_top {
  display: flex;
  height: 0.7rem;
  padding-left: 0.1rem;
}
.descript_left img {
  width: 0.75rem;
  height: 0.7rem;
}
.descript_right {
  color: #f1f1f1;
  padding-left: 0.1rem;
}
.description_title {
  font-size: 0.2rem;
  font-weight: 700;
}
.description_text {
  font-size: 0.13rem;
  padding-top: 0.1rem;
}
.description_footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.description_footer p {
  font-size: 0.13rem;
  color: #f1f1f1;
  padding: 0.02rem 0.1rem;
  display: flex;
}
.description_footer p span {
  color: #f1f1f1;
  display: flex;
}
.tip_icon {
  border: 1px;
  border-radius: 0.02rem;
}
.svg_right {
  position: fixed;
  top: 0.3rem;
  left: 3.3rem;
}
.shops_show {
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  padding: 0.2rem 0 0.2rem;
  border: 1px solid #ebebeb;
}
.shops_show,
.activity_show {
  color: #3190e8;
}
.shops_show a {
  font-size: 0.2rem;
  padding-bottom: 0.06rem;
}
.shops_show a:hover {
  border-bottom: 0.02rem solid #3190e3;
} 
.tab_con {
  position: relative;
  left: 0;
  top: 1.6rem;
}
.tab_con,.food_container {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 0.4rem;
  color: white;
}
.menu_container {
  display: flex;
  background-color: #ffffff;
  width: 100%;
  /* 让所有弹性盒模型对象的子元素都有相同的长度 */
  flex: 1;
  position: fixed;
  z-index: 10;
}
.menu_left {
  width: 1rem;
  overflow: scroll;
  height: 6rem;
}
/* 隐藏滚动条 */
.menu_left::-webkit-scrollbar {
  display: none;
}
.activity_menu {
  background-color: #fff;
  padding: 0.15rem 0.05rem;
  border-bottom: 0.025rem solid #ededed;
  box-sizing: border-box;
  position: relative;
}
.activity_menu:hover {
  border-left: 0.02rem solid #3190e8;
  background-color: #ededed;
}
.activity_menu span {
  font-weight: 700;
  font-size: 0.1rem;
  color: #666;
}
.menu_right {
  width: 100%;
  height: 6rem;
  overflow: scroll;
}
/* 隐藏滚动条 */
.menu_right::-webkit-scrollbar {
  display: none;
}
.menu_detail_header_left {
  margin: 0.08rem;
  overflow: hidden;
}
.menu_detail_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ededed;
  height: 0.5rem;
  width: 100%;
  position: relative;
} 
.menu_item_title {
  font-size: 0.16rem;
  color: #666;
  float: left;
}
.menu_item_description {
  font-size: 0.12rem;
  color: #999;
  float: left;
  padding: 0.04rem 0 0 0.1rem;
}
.meny_detail_header_right {
  float: right;
  background-color: #ededed;
  border-color: #ededed;
}
.menu_detail_list {
  background-color: #fff;
  border-bottom: 0.01rem solid #f8f8f8;
  position: relative;
  padding: 0.1rem 0.1rem;
  overflow: hidden;
  height: 0.9rem;
}
.menu_detail_link {
  display: flex;
}
.menu_food_img img {
  width: 0.46rem;
  height: 0.46rem;
  display: block;
}
.menu_food_description {
  width: 100%;
  margin-left: 0.05rem;
}
.food_description_head {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 0.18rem;
}
.description_foodname {
  font-size: 0.15rem;
  font-weight: bold;
}
.description_food_title{
  font-size: .1rem;
  color: rgb(240, 115, 115);
  border: 1px solid rgb(240, 115, 115);
  border-radius: .05rem;
  line-height: .18rem;
}
.food_description_content {
  color: #999;
  font-size: 0.12rem;
  text-align: left;
  width: 100%;
}
.food_sale_rating {
  width: 100%;
  height: 0.15rem;
  font-size: 0.12rem;
  display: flex;
  padding-top: 0.03rem;
}
.food_activity{
  color: rgb(241, 136, 79);
  font-size: .1rem;
  float:left;
  border: 1px solid rgb(240, 115, 115);
  border-radius: .05rem;
}
.menu_detail_footer {
  overflow: hidden;
  margin-top: 0.1rem;
  width: 100%;
}
.food_price span {
  font-size: 0.15rem;
  color: #f60;
  float: left;
}
.cart_module {
  display: flex;
  font-size: 0.15rem;
  padding-left: 1.6rem;
}
.reduce,
.plus {
  width: 0.15rem;
  height: 0.15rem;
  line-height: 0.15rem;
  border-radius: 0.15rem;
  padding: 0 0.01rem;
  border: #3190e8 1px solid;
  margin-right: .03rem;
}
.sum {
  margin-right: 0.05rem;
}
.plus {
  background-color: #3190e8;
  color: #f1f1f1;
}
.reduce {
  color: #3190e8;
}
.buy_car_container {
  position: fixed;
  background-color: #3d3d3f;
  bottom: 0;
  left: 0;
  z-index: 13;
  display: flex;
  width: 100%;
  height: 0.6rem;
}
.cart_icon_container {
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  border: 0.04rem solid #444;
  background-color: #444;
  border-radius: 50%;
  left: 0.3rem;
  top: -0.2rem;
}
.cart_list_length,
.cart_list_mount {
  width: 0.12rem;
  height: 0.12rem;
  font-size: 0.12rem;
  position: relative;
  left: 0.34rem;
  top: -0.65rem;
  border: 1px solid #ff461d;
  background-color: #ff461d;
  padding: 0.05rem;
  border-radius: 50%;
  color: #fff;
}
.cart_list_mount {
  padding: 0.01rem;
  color: #fff;
  background-color: #ff461d;
  position: absolute;
  left: 0.6rem;
  top: -0.42rem;
}
.cart_icon_img {
  width: 0.4rem;
  height: 0.4rem;
  margin: 0.05rem 0.06rem;
}
.cart_money {
  font-size: 0.2rem;
  color: #f1f1f1;
  position: absolute;
  left: 0.9rem;
  top: 0.05rem;
}
.cart_money span {
  color: #f1f1f1;
  font-size: 0.12rem;
  padding-top: 0.05rem;
}
.gotopay {
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  width: 1.8rem;
  line-height: 0.6rem;
}
.gotopay_button {
  font-size: 0.2rem;
  background-color: black;
  color: #ebebeb;
}
.goto_pay{
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.2rem;
  width: 100%;
  background-color: #4cd964;
  color: #ebebeb;
}
.cart_food_list {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 12;
  background-color: #fff;
  padding-bottom: 1rem;
}
.cart_food_list header {
  display: flex;
  justify-content: space-between;
  background-color: #eceff1;
  padding: 0.1rem 0.2rem;
  font-size: 0.15rem;
}
.cart_food_detail {
  background-color: #fff;
  /* 设置段落的最大高度： */
  max-height: 1rem;
}
.cart_food_li {
  font-size: 0.15rem;
  display: flex;
  justify-content: space-between;
  padding: 0.1rem 0.2rem;
}
.cart_food_name {
  font-size: 0.16rem;
  color: #666;
  font-weight: 700;
}
.cart_food_price span {
  color: #f60;
  font-weight: 700;
  margin-left: 1.5rem;
}
.cart_food_btn {
  display: flex;
}
.rating_container {
  width: 100%;
}
.rating_header {
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  padding: 0.2rem 0;
  border-bottom: 0.1rem solid #ebebeb;
}
.rating_session_left p {
  font-size: 0.25rem;
  color: #f60;
  padding-top: 0.1rem;
}
.rating_session_left p:nth-child(2) {
  color: #666;
  font-size: 0.18rem;
}
.rating_session_left p:nth-child(3) {
  color: #999;
  font-size: 0.1rem;
}
.rating_session_right p {
  font-size: 0.17rem;
  color: #666;
  padding-top: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.tag_list_ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #fff;
  margin-top: 0.1rem;
}
.tagActivity {
  font-size: 0.15rem;
  text-align: center;
  padding: 0.1rem 0.07rem;
  color: #6d7885;
  background-color: #ebf5ff;
  border-radius: 0.04rem;
  margin-top: 0.05rem;
}
.rating_list_ul {
  background-color: #fff;
  padding: 0 0.1rem;
  margin-top: 0.1rem;
}
.rating_list_li {
  border-top: 0.02rem solid #f1f1f1;
  display: flex;
  padding: 0.2rem 0;
}
.user_avatar {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 100%;
}
.rating_list_detail {
  flex: 1;
  width: 100%;
  overflow: hidden;
}
.rating_list_detail header {
  width: 100%;
}
.username {
  width: 100%;
  text-align: left;
}
.username_start {
  font-size: 0.1rem;
  color: #666;
  float: left;
  margin-left: 0.2rem;
}
.reted_at {
  font-size: 0.1rem;
  color: #666;
  float: right;
}
.time_spent_desc {
  padding-top: 0.05rem;
  font-size: 0.15rem;
}
.food_img_div,
.food_name_div,
.food_img_ul,
.food_name_ul,
.rating_star {
  width: 100%;
  display: flex;
}
.food_img_li img {
  width: 0.8rem;
  height: 0.8rem;
  margin-left: 0.2rem;
  margin-top: 0.1rem;
}
.food_name_li {
  color: #999;
  font-size: 0.16rem;
  border: 0.02rem solid #ebebeb;
  border-radius: 0.03rem;
  padding: 0 0.05rem;
  width: 0.5rem;
  margin-left: 0.2rem;
  margin-top: 0.1rem;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
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