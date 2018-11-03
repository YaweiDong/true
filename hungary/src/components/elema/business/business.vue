<template>
   <div>
       <div class="business_header">
           <router-link :to="{name:'shop',params:{id:data.id}}">
           <span class="header_span">
               <img src="../../../../static/imgs/back.png" alt="">
           </span>
           </router-link>
           <h3 class="header_h3">商家详情</h3>
       </div>
       <section class="activies_container">
            <header>活动属性</header>
            <ul class="actibities_ul" v-if="data">
                <li v-for="(k,index) in data.supports" :key="index">
                    <span class="reduce" :style="{backgroundColor: '#'+k.icon_color}">{{k.icon_name}}</span>
                    <span class="li_text">{{k.description}}(APP专享)</span>
                </li>
            </ul>
       </section>
       <section class="shop_status_container">
           <a class="shop_status_header">
               <span class="shop_detail_title">食品监督安全公示</span>
               <div>
                   <span class="identification_detail">企业认证详情</span>
                   <router-link :to="{name:'shop_detail',params:{id:data.id}}">
                   <span class="identification">
                       >
                   </span>
                   </router-link>
               </div>
           </a>
           <section class="shop_statu_detail">
                <div class="shop_status">
                    <img src="../../../../static/imgs/dowm.png" alt="">
                </div>
                <div class="check_date">
                     <p>
                         <span>监督检查结果:</span>
                         <span class="shop_status_well">良好</span>
                     </p>
                     <p>
                         <span>检查日期:</span>
                         <span></span>
                     </p>
                </div>
           </section>
       </section>
       <section class="shop_status_info" v-if="data">
             <header>商家信息</header>
             <p>{{data.name}}</p>
             <p>地址:{{data.address}}</p>
             <p v-if="data.opening_hours">营业时间:{{data.opening_hours[0]}}</p>
             <p>
                <span>营业执照</span>
                <span>
                    >
                </span>
             </p>
             <p>
                <span>餐饮服务许可证</span>
                <span>
                    >
                </span>
             </p>
       </section>
       <!--路由出口-->
       <router-view></router-view>
   </div>
</template>
<script>
    export default {
       name: "business",
        data: () => ({
            data: [],
            return: {},
            aaa:''
        }),
       created() {
         this.aaa=this.$route.params.id;
         //6、获取商铺列表
         let api =
             "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
         //promise写法
         this.$http.get(api).then(data => {
         //成功后的回调
         this.data = data.data.filter(k => this.aaa == k.id )[0];
         console.log(this.data);
         });
       }
    }
</script>
<style scopedscoped ="scoped">
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
.header_span img{
  width: .2rem;
}
.header_h3 {
  padding-top: 0.02rem;
  margin-left: 1rem;
}
.activies_container,
.shop_status_container,
.shop_status_info {
  background-color: #fff;
  border-top: 0.15rem solid #ebebeb;
  position: relative;
  left: 0;
  top: 0.46rem;
}
.activies_container header {
  font-size: 0.2rem;
  color: #333;
  line-height: 0.5rem;
  padding-left: 0.2rem;
  border-bottom: 0.02rem solid #f1f1f1;
  margin-bottom: 0.1rem;
}
.actibities_ul {
  padding: 0.05rem 0.2rem;
}
.actibities_ul li {
  margin-bottom: 0.2rem;
}
.reduce,
.special,
.bao,
.ontime,
.piper {
  font-size: 0.12rem;
  color: #fff;
  padding: 0.05rem;
  border: 1px;
  border-radius: 0.02rem;
  margin-right: 0.1rem;
}
.special {
  background-color: rgb(237, 193, 35);
}
.ontime {
  background-color: rgb(87, 169, 255);
}
.li_text {
  font-size: 0.12rem;
  color: #666;
}
.shop_status_header {
  width: 100%;
  text-decoration: none;
  margin-top: 0.2rem;
  font-size: 0.2rem;
  border-bottom: 0.025rem solid #f1f1f1;
  display: flex;
  justify-content: space-between;
}
.shop_status_header div {
  color: #bbb;
  font-size: 0.2rem;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
}
.shop_detail_title {
  margin-left: 0.2rem;
}
.shop_statu_detail {
  display: flex;
  padding: 0.2rem;
}
.check_date {
  margin-left: 0.15rem;
}
.check_date p {
  padding-top: 0.15rem;
  font-size: 0.12rem;
  color: #666;
}
.shop_status_well {
  color: #7ed321;
}
.shop_status_info header {
  padding: 0.1rem 0.2rem;
  font-size: 0.2rem;
  color: #333;
  border-bottom: 0.025rem solid #f1f1f1;
}
.shop_status_info p {
  font-size: 0.16rem;
  color: #666;
  padding: 0.1rem;
  margin-left: 0.1rem;
  border-bottom: 0.025rem solid #f5f5f5;
  display: flex;
  justify-content: space-between;
}
</style>
