<template>
    <div>
        <header class="m-top">       
           <img @click="$router.back(-1)" :src="timg" alt="">       
           <span>历史红包</span>
         </header>
        <ul class="benefit">
          <li :key="index" v-for="(k,index) in datas">
            <div class="benefit-left">
              <span>￥</span>
              <span>{{k.amount}}</span>
              <p>{{k.description_map.sum_condition}}</p>
            </div>
         
              <div class="benefit-right">
                 <div>
                    <span>{{k.name}}</span>
                    <span>已过期</span>
                 </div>
                 <div>
                    <p>{{k.description_map.validity_periods}}</p>
                    <p>{{k.description_map.phone}}</p>
                 </div>
              </div>     
          </li>
         
        </ul>   
    </div>
</template>

<script>
import hongbao from '../hongbao.vue'

export default {
  data() {
    return {
      timg: require("../../imgs/back.png"),
      datas:''
    };
  },
  components:{
      hongbao
  },
  created(){
    var ui = this.$store.state.login1;
    let api = `https://elm.cangdu.org/promotion/v2/users/${ui.id}/expired_hongbaos?limit=20&offset=0`;
    this.$http.get(api).then((res)=>{
          this.datas = res.data;
    })
  }
};
</script>
<style scoped='scoped'>
.m-top {
  background-color: dodgerblue;
  width: 100%;
  height: 0.457rem;
  line-height: 0.457rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 0.18rem;
  color: aliceblue;
  position: fixed;
  top:0;
}
.m-top img {
  position: absolute;
  left: 0.05rem;
}
.m-top span {
  font-weight: bold;
  font-size: 0.19rem;
}
.m-top img {
  width: 0.2109rem;
  height: 0.2109rem;
}
.benefit{
    margin-top: 0.6rem;
}
.benefit li {
  background-color: white;
  border-top: 0.06rem dashed rgb(221, 213, 213);
  margin: 0.15rem;
  padding: 0.2rem 0;
  margin-bottom: 0.1rem;
  font-size: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(221, 213, 213);
  border-radius:0.08rem; 
}
.benefit li:last-child{
  margin-bottom: 0;
}
.benefit-left{
  margin-right: 0.2rem;
  padding-right: 0.2rem;
  border-right:0.01rem dashed rgb(185, 180, 180); 
  text-align: center;

}
.benefit-left span{
  color:rgb(221, 213, 213);
  font-size: 0.17rem;
}
.benefit-left p{
  margin-top: 0.07rem;
}
.benefit-left span:nth-child(2){
  font-size: 0.4rem;
}
.benefit-right{
  width: 2.2rem;
}
.benefit-right div:first-child{
  color: rgb(221, 213, 213);
  display: flex;
  justify-content: space-between;
  font-size: 0.2rem;
  margin-bottom: 0.05rem;
  
}
.benefit-right div:first-child span:last-child{
  color: rgb(221, 213, 213);
}
.benefit-right div:last-child p:last-child{
  margin-top: 0.03rem;
}
</style>