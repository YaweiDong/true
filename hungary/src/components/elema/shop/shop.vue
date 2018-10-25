<template>
   <div class="wrapper">
    <div class="box">
       <router-link to="/elema">
       <div class="goback">
          <
       </div>  
       </router-link>
       <router-link to="/elema">
       <header class="shops-header">
           <img class="shop_header_img" src="../../../../static/img/1.jpg">
           <section class="descript_header">
               <a href="javascript" class="descript_top">
                  <section class="descript_left">
                      <img src="../../../../static/img/1.jpg">
                  </section>
                  <section class="descript_right">
                       <h4 class="description_title">效果演示</h4>
                       <p class="description_text">商家配送/分钟送达/配送费￥5</p>
                       <p class="description_text">公告:欢迎光临,用餐高峰请提前下单,谢谢</p>
                  </section>
                  <router-link to="/elema/shop/business">
                  <div class="svg_right">
                     >
                  </div>
                  </router-link>
               </a>
           </section>      
       </header>
       </router-link>
       <div class="shops_show">
            <a href="javasript" class="activity_show">商品</a>
            <a href="javasript">评价</a>
       </div>
    </div> 
       <div class="tab_con">
          <div class="food_container">
              <section class="menu_container">
                  <section class="menu_left">
                      <ul>
                          <li class="activity_menu" v-for="(data,index) in data" :key="data.id">
                              <span>{{data.name}}</span>
                          </li>
                      </ul>
                  </section>
                  <section class="menu_right">
                      <ul>
                          <li v-for="(data,index) in data" :key="data.id">
                              <header class="menu_detail_header">
                                   <section class="menu_detail_header_left">
                                       <strong class="menu_item_title">热销榜</strong> 
                                       <span class="menu_item_description">{{data.description}}</span>
                                   </section> 
                                    <el-tooltip class="meny_detail_header_right" effect="dark" content="热销榜 大家喜欢吃,才叫真好吃" placement="bottom-end">
                                       <el-button>...</el-button>
                                    </el-tooltip>
                              </header>
                              <section class="menu_detail_list">
                                   <div class="menu_detail_link">
                                      <section class="menu_food_img">
                                           <img :src="'//elm.cangdu.org/img/'+data.image_path" alt="">
                                      </section>
                                      <section class="menu_food_description">
                                            <h3 class="food_description_head">
                                                <strong class="description_foodname">是方式分</strong>
                                                <p class="description_food_title">招牌</p>
                                            </h3>
                                            <p class="food_description_content">是的方式分</p>
                                            <p class="food_sale_rating">
                                                <span>月售43份</span>
                                                <span>好评率54%</span>
                                            </p>
                                            <p class="food_activity">
                                                <span>但是方式分</span>
                                            </p>
                                      </section>
                                   </div>
                                   <footer class="menu_deatil_footer">
                                       <section class="food_price">
                                            <span>￥20</span>
                                       </section>
                                       <section class="cart_module">
                                               <a class="reduce" href="javascript">-</a>
                                               <span class="sum">0</span>
                                               <a class="plus" href="javascript">+</a>
                                       </section>
                                   </footer>
                              </section>
                          </li>
                      </ul>
                  </section>
              </section>                   
          </div>
          <div>
                评价
          </div>
       </div>  
       <!--路由出口-->
    <router-view></router-view>                                                          
   </div>
</template>
<script src="../../../../static/js/jquery-3.3.1.min.js" type="text/javascript" charset="utf-8"></script>
<script>
import $ from 'jquery'
    export default{
        name:"shop",
        data: () => ({
           data: [],
           return:{}
        }),
        //发请求
        created() {
        let api ="https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1";
        //promise写法
        this.$http.get(api).then(data => {
           //成功后的回调
           console.log(data.data);
           this.data = data.data;
        });
        },
        mounted:function(){
         $(function(){
		    $(".shops_show>a").mouseover(function(){
			     $(".tab_con>div").eq($(this).index()).addClass("food_container").show().siblings().hide();
                 $(this).addClass("activity_show").siblings().removeClass("activity_show");
		    });
         });

        }
    }
</script>
<style scoped>
.box{
    width: 100%;
    background-color: #f1f1f1;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 15;
}
.goback,.svg_right{
    position:fixed;
    top:0;
    left: 0;
    height: .3rem;
    z-index: 16;
    padding-top: .05rem;
    padding-left: .08rem;
    color: #f1f1f1;
    font-size: .2rem;
    font-weight: bold;
}
.goback img{
    height: .2rem;
}
.shops_header,.descript_header{
    width: 100%;
    height: .9rem;
    overflow: hidden;
    position: relative;
    z-index: 12;
}
header,section,nav,a,span,ul,li{
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    display: block;
}
.shop_header_img{
    width:100%;
    height: .9rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    /* 滤镜 */
    filter:blur(10px);
}
.descript_header{
    background-color: rgba(119, 103, 137, .43);
    padding: .1rem 0 .1rem 0;
    height: .78rem;
}
.descript_top{
    display: flex;
    height: .7rem;
    padding-left: .1rem;
}
.descript_left img{
    width:.75rem; 
    height: .7rem;
}
.descript_right{
    color:#f1f1f1;
    padding-left: .1rem;
}
.description_title{
    font-size: .2rem;
    font-weight: 700;
}
.description_text{
    font-size: .13rem;
    padding-top: .1rem;
}
.svg_right{
    position:fixed;
    top:.3rem;
    left: 3.3rem;
}
.shops_show{
    display: flex;
    justify-content:space-around;
    background-color: #fff;
    padding: .2rem 0 .2rem;
    border: 1px solid #ebebeb;
}
.shops_show,.activity_show{
    color:#3190e8;
}
.shops_show a{
    font-size: .2rem;
    border-bottom: .02rem solid #fff;
} 
.tab_con>div{
    display:none;
    position: relative;
    left: 0;
    top: 1.6rem;
}
.tab_con>div.food_container {
	display: block;
	width: 100%;
	text-align: center;
	font-size: .4rem;
	color: white;
}
.tab_con div:nth-child(2){
	background-color: palegreen;
}
.menu_container{
    display:flex;
    /* 让所有弹性盒模型对象的子元素都有相同的长度 */
    flex:1;
    overflow:hidden;
    position:relative;
}
.menu_left{
    width: 1rem;
}
.activity_menu{
    /* border-left:.03rem solid #3190e8; */
    background-color:#fff;
    padding:.2rem .1rem;
    border-bottom: .025rem solid #ededed;
    box-sizing:border-box;
    position:relative;
}
.activity_menu span{
    font-weight:700;
    font-size:.13rem;
    color:#666;
}
.menu_detail_header{
    display: flex;
    justify-content: space-between;
    align-items:center;
    background-color: #ededed;
    height: .5rem;
    width:100%;
    position: relative;
}
.menu_right{
    width:100%;
}
.menu_detail_header_left{
    margin: .08rem;
    overflow: hidden;
}
.menu_item_title{
    font-size: .16rem;
    color:#666;
    float: left;
}
.menu_item_description{
    font-size: .12rem;
    color:#999;
    float: left;
    padding: .04rem 0 0 0.1rem;
}
.meny_detail_header_right {
    float: right;
    background-color: #ededed;
    border-color: #ededed;
}
.menu_detail_list{
    background-color: #fff;
    border-bottom: .01rem solid #f8f8f8;
    position: relative;
    padding: .1rem .1rem;
    overflow: hidden;
    height: .9rem;
}
.menu_detail_link{
    display: flex;
}
.menu_food_img img{
    width:.46rem;
    height: .46rem;
    display: block;
}
.menu_food_description{
    width: 100%;
    margin-left: .05rem;
}
.food_description_head{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: .18rem;
}
.description_foodname{
    font-size: .15rem;
    font-weight: bold;
}
.description_food_title,.food_activity>span{
    font-size: .08rem;
    color: rgb(240, 115, 115);
    border:1px solid rgb(240, 115, 115);
    /* padding: .01rem .01rem; */
    border-radius: .05rem;
    line-height: .18rem;
}
.food_description_content{
    color:#999;
    font-size: .12rem;
    text-align: left;
    width: 100%;
}
.food_sale_rating{
    width:100%;
    height: .15rem;;
    font-size: .12rem;
    display: flex;
    padding-top: .03rem;
}
.food_activity>span{
    color:rgb(241, 136, 79);
    width:.6rem;
}
.menu_detail_footer{
    display: flex;
    margin-top: .1rem;
    width:100%;
    overflow: hidden;
}
.food_price span{
    font-size: .15rem;
    color:#f60;
    margin-left: .5rem;
    padding-top: .05rem;
    float: left;
}
.cart_module{
    float: right;
    display: flex;
    font-size: .15rem;
    padding-top: .05rem;
    margin-right: .03rem;
}
.reduce,.plus{
    width: .1rem;
    height: .1rem;
    line-height: .1rem;
    border-radius: .1rem;
    padding:.01rem .01rem; 
    border:#3190e8 1px solid;
    padding: .02rem;
    margin-right: .03rem;
}
.sum{
    margin-right: .05rem;
}
.plus{
    background-color: #3190e8;
    color:#f1f1f1;
}
.reduce{
    color:#3190e8;
}
</style>
