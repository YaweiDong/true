a<template>
  <div>
    <!-- <div class="Dwarp">

       <router-link :key="index" v-for="(k,index) in img" :to="k.ad">
           <div @click="btn(index)" class='Dsearch'>
               <img v-show="k.ifs" class='Dimg2' :src="k.im" alt="">
               <img v-show="!k.ifs" class='Dimg2' :src="k.im1" alt="">
               {{k.na}}
            </div>
       </router-link>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
        data(){
          return{ 
              // Dimg:[
              //   {na:'外卖',ad:'/elema',im:require('../himg/ele.png'),im1:require('../himg/ele1.png'),ifs:false},
              //   {na:'搜索',ad:'/search',im:require('../himg/search.png'),im1:require('../himg/search1.png'),ifs:true},
              //   {na:'订单',ad:'/order',im:require('../himg/order.png'),im1:require('../himg/order1.png'),ifs:true},
              //   {na:'我的',ad:'/mine',im:require('../himg/mine.png'),im1:require('../himg/mine1.png'),ifs:true}
              //   ]
          }
        },
        methods:{
          // btn(index){
          //   this.img.map(function(va,na){
          //         return va.ifs = true;
          //   })
          //   this.img[index].ifs = false;
        
          // }
        }
};



</script>

<style scoped ="scoped">

.Dwarp {
  width: 100%;
  padding: 0.05rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background-color:white;
  font-size: 0.13rem;
  z-index: 100;
}
.Dsearch {
  display: flex;
  flex-direction: column;
  align-items: center;
  color:rgb(26, 25, 25);
}
.Dimg2 {
  width: 0.25rem;
  margin-bottom: 0.02rem;
}
</style>
