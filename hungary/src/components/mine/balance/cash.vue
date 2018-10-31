<template>
    <div>
        <div class="top">
            <img :src="wen" alt="">
            <router-link to='/discount/coupon'>商家代金券说明</router-link>
        </div>
        <div class="last">
            <img :src="no" alt="">
            <p class="last-p1">无法使用代金券</p>
            <p class="last-p2">非客户端或客户版本过低</p>
            <p class="last-p3">下载或升级客户端</p>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                wen:require('../imgs/wenhao.png'),
                no:require('./Bdetail/imgs/daijinquan.png')
            }
        }
    }
</script>

<style scoped='scoped'>
 .top{
     display: flex;
     justify-content: flex-end;
     align-items: center;
 }
 .top img{
     width: 0.15rem;
  height: 0.15rem;
  margin-right: 0.08rem;
 }
 .top a{
     color: dodgerblue;
     font-size: 0.13rem;
 }
 .last{
     margin-top: 1.5rem;
     text-align: center;
 }
 .last img{
    width: 1.49rem;
    height: 0.79rem;
    margin-bottom: 0.2rem;
 }
 .last-p1{
     font-size:0.18rem; 
 }
 .last-p2{
     font-size:0.14rem;
     margin: 0.1rem 0;
     color: gray;
 }
 .last-p3{
     background-color: rgb(14, 204, 14);
     width: 1.35rem;
     height: 0.34rem;
     line-height: 0.34rem;
     margin: 0 auto; 
     color: white;
     border-radius:0.05rem;
     font-size: 0.15rem; 
 }
</style>
