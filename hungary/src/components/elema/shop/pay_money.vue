<template>
   <div>
      <div class="waper_pay">
          <img @click="jump()" class="pay_img" src="../../../../static/imgs/back.png" alt="">
          <div class="goback">
              <span class="address">添加地址</span>
          </div> 
          <div class="par_person">
              <section class="section_pay">
                   <p>
                       <span>收货人:{{user}}</span>
                       <br>
                       <span>联系电话:{{address}}</span>
                   </p>
                   <p>
                     <router-link to="/information/address">
                          >
                     </router-link>
                   </p>
              </section>
              <section class="arrive_time">
                   <p class="time">
                       <strong>送达时间</strong>
                       <span>尽快送达|预计 22:09</span>
                   </p>
                   <p class="mode">
                       <span>蜂鸟专送</span>
                   </p>
              </section>
              <section class="pay_money">
                   <p>
                      <strong>支付方式</strong>
                      <router-link to="/vipcard/pay">
                          <span>在线支付></span>
                      </router-link>
                   </p>
                   <p>
                    <span>红包</span>
                    <span>暂时只在饿了么APP中支持</span>
                   </p>
              </section>
              <section class="pay_food" v-for="(nums,ins) in arr" :key="ins">
                   <p>

                   </p>
                   <p>
                       <span>{{nums.name}}</span>
                       <span class="font_red">*{{nums.count}} </span>
                       <span>${{nums.price}}</span>
                   </p>
                   <p>
                       <span>餐盒</span>
                       <span>{{nums.price}}</span>
                   </p>
                   <p>
                       <span>配送费</span>
                       <span>$4</span>
                   </p>
                   <p>
                       <span>订单$</span>
                       <span class="font_red">待支付</span>
                   </p>
                   <span class="food_money">${{$store.state.number}}</span>
              </section>
              <section class="remarks">
                    <p>
                        <span>订单备注</span>
                        <span>多点辣,多点醋></span>
                    </p>
                    <p>
                        <span>发票抬头</span>
                        <span>不需要开发票></span>
                    </p>
              </section>
          </div> 
      </div>
   </div>
</template>
<<script>
    export default{
      data(){
        return{
                user:'fyy',
             address:'123456'
        }
      },
        name:'pay_money',
        computed:{
          arr(){
             return this.$store.state.arrnum;
            
           }
        },
        created() {
             this.$store.commit('states',4);
             var ss = this.$store.state.pays;
             if(ss !== ''){
                 this.user = ss.number;
                 this.address = ss.address;
             }
        },
        methods:{
          jump(){
             this.$router.push({name:'shop'});
          }
          
        }
    }
</script>
<style scoped="scoped">
.font_red {
  color: red;
}
.goback {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.5rem;
  z-index: 16;
  background-color: #3190e8;
  text-align: center;
  line-height: 0.5rem;
}
.pay_img {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 17;
  height: 0.2rem;
  padding: 0.14rem 0 0 0.1rem;
}
.address {
  font-size: 0.18rem;
  color: #f1f1f1;
}
.par_person {
  margin-top: 0.8rem;
  width: 100%;
  background-color: #f1f1f1;
  font-size: 0.18rem;
}
.section_pay {
  margin-bottom: 0.3rem;
  display: flex;
  justify-content: space-around;
}
.arrive_time {
  border: 0.08rem solid #666;
  border-left-color: #3190e8;
  border-right-color: #3190e8;
  padding: 0.3rem 0.15rem;
}
.arrive_time p {
  margin-top: 0.1rem;
}
.time {
  display: flex;
  justify-content: space-between;
  color: #3190e8;
}
.time strong {
  color: black;
  font-weight: bold;
}
.mode {
  overflow: hidden;
}
.mode span {
  float: right;
  border: 0rem solid #3190e8;
  border-radius: 0.02rem;
  padding: 0.05rem;
  background-color: #3190e8;
  font-size: 0.12rem;
  color: #f1f1f1;
}
.pay_money {
  padding: 0.2rem;
}
.pay_money p {
  margin-top: 0.15rem;
  display: flex;
  justify-content: space-between;
}
.pay_money strong {
  color: black;
  font-weight: bold;
  font-size: 0.2rem;
}
.pay_money span {
  color: #999;
  font-weight: bold;
  font-size: 0.18rem;
}
.pay_food {
  border-top: 0.08rem solid #666;
  border-bottom: 0.08rem solid #666;
  padding: 0.1rem 0.2rem;
  text-align: right;
}
.pay_food p {
  margin-top: 0.15rem;
  font-size: 0.18rem;
  color: #999;
  display: flex;
  justify-content: space-between;
}
.food_money {
  font-size: 0.18rem;
  color: red;
}
.remarks {
  padding: 0.1rem 0.2rem;
  color: #999;
}
.remarks p {
  display: flex;
  justify-content: space-between;
  margin-top: 0.1rem;
}
</style>