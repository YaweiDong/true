<template>
    <div>
       <section class="shop_container" v-for="(k,index) in data.activities" :key="index">
           <header class="shop_header">
               <span>{{data.name}}</span>
           </header>
           <div class="shop_context">
             <p><span>优惠信息</span></p>
             <div class="shop_action">
                <span class="tip_icon" :style="{backgroundColor: '#'+k.icon_color}">{{k.icon_name}}</span>
                <span>{{k.description}}(APP专享)</span>
             </div>
             <p><span>商家公告</span></p>
           </div>
           <span class="shop_name">{{data.promotion_info}}</span>
           <div class="shop_bottom">
              <router-link :to="{name:'shop',params:{id:data.id}}">
              <span class="shop_return">×</span>
              </router-link>
           </div>
       </section>
    <router-view></router-view>    
    </div>
</template>
<script>
    export default{
        name:"shop_activity",
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
<style scoped="scoped">
.shop_container {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #333;
  color: #f1f1d1;
}
.shop_header {
  width: 100%;
  padding-top: 0.4rem;
  line-height: 10%;
  text-align: center;
  font-size: 0.2rem;
}
.shop_context {
  padding-top: 0.3rem;
}
.shop_context p {
  text-align: center;
  margin-top: 0.4rem;
  font-size: 0.13rem;
}
.shop_context p span {
  border: 1px solid #555;
  border-radius: 0.15rem;
  padding: 0.05rem;
}
.shop_action {
  margin: 0.3rem 0.4rem;
  font-size: 0.12rem;
}
.tip_icon {
  background-color: rgb(240, 115, 115);
  border: 1px;
  border-radius: 0.04rem;
  padding: 0.02rem;
}
.shop_name {
  margin: 0.3rem 0.4rem;
  font-size: 0.13rem;
}
.shop_bottom {
  text-align: center;
  margin-top: 2.8rem;
}
.shop_return {
  font-size: 0.4rem;
  border: 1px solid #555;
  padding: 0 0.1rem;
  border-radius: 100%;
  color: #f1f1d1;
}
</style>
