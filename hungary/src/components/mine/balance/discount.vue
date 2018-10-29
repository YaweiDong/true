<template>
    <div>
        <header class="m-top">
          
           <img @click="$router.back(-1)" :src="timg" alt="">
             
           <span>我的优惠</span>
         </header>
         <div class="two">
             <p :class="{color:hh}" @click="change1('hongbao')">红包</p>   
             <p :class="{color:!hh}" @click="change2('cash')">商家代金券</p>
         </div>
       
  <component name="fade" :is="cc"></component>
           
    </div>
</template>

<script>
import cash from './cash.vue'
import hongbao from './hongbao'

export default {
  data() {
    return {
      timg: require("../imgs/back.png"),
      cc:'hongbao',
      hh:true
    };
  },
  methods: {
    change1(n){
      this.cc = n;
      this.hh = true;
    },
    change2(n){
      this.cc = n;
      this.hh = false;
    }

  },
  components:{
      cash,hongbao
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
.two{
    height: 0.46rem;
    text-align: center;
    line-height: 0.46rem; 
    font-size: 0.16rem;
    display: flex;
    background-color: white;
    margin-bottom: 0.2rem;
}
.two p{
  width: 100%;
}
.color{
  color: dodgerblue;
}
.fade{
  color: blue;
}
</style>