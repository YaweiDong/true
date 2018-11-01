
<template>
    <div class="body">
       <header class="m-top">
           <router-link to='/mine'>
             <img :src="timg" alt="">
           </router-link>          
           <span>下载</span>
       </header>
       <div class="logo">
           <img :src="down" alt="">
       </div> 
       <p class="p1">下载饿了么APP</p>
       <p @click="btn()" class="p2">下载</p>
       <div :class="{dis:sp}" class="alert">
           <p>!</p>
           <p>IOS用户请前往AppStore下载</p>
           <p @click="btn1()">确认</p>
       </div>
    </div>   
</template>
<script secoped='secoped'>


export default {
  data() {
    return {  
      timg: require("../imgs/back.png"),
      down:require('../imgs/logoD.png'),
      sp:true
    };
  },
  methods:{
     btn(){
         this.sp = false;
     },
     btn1(){
         this.sp = true;
     }
  }
};
</script>


<style scoped="scoped">

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
  margin-bottom: 0.15rem;
}
.m-top a {
  position: absolute;
  left: 0.05rem;
  overflow: hidden;
}
.m-top span {
  font-weight: bold;
  font-size: 0.19rem;
}
.m-top a img {
  width: 0.2109rem;
  height: 0.2109rem;
  float: left;
  top: 50%;
  bottom: 50%;
}
.logo{
    margin: 0 auto;
    margin-top: 0.3rem;
    background-color: rgb(21, 129, 236);
    width: 1.8rem;
    height: 1.8rem;
    overflow: hidden;
    border-radius:0.2rem; 
}
.logo img{
    width: 100%;
    height: 100%;
}
.p1{
    margin-top: 0.1rem;
    text-align: center;
    font-size: 0.2rem;
    color: rgb(77, 74, 74);
}
.p2{
   background-color: #4cd964;
   width: 3.42rem;
   line-height: 0.42rem;
   margin: 0.3rem auto;
   border-radius:0.1rem;
   text-align: center; 
   font-size: 0.18rem;
   color: white;
}
.alert{
    position: absolute;
    top: 2rem;
    left: 12%;
    right: 12%;
    height: 1.84rem;
    border-radius:0.1rem; 
    text-align: center;
    background-color: white;
    overflow: hidden;
}
.alert p:first-child{
    margin: 0.1rem auto;
    width: 0.72rem;
    height: 0.72rem;
    border-radius:50%; 
    color: #f8cb86;
    font-size: 0.6rem;
    border: 0.04rem solid #f8cb86;
}
.alert p:nth-child(2){
    font-size: 0.16rem;
}
.alert p:last-child{
    background-color: #4cd964;
    line-height: 0.42rem;
    font-size: 0.18rem;
    color: white;
     position: absolute;
     bottom: 0;
     width: 100%;
}
.dis{
    display: none;
}
</style>
