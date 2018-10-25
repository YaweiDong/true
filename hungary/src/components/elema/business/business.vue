<template>
   <div>
       <div class="business_header">
           <router-link to="/elema/shop">
           <span class="header_span">
               <
           </span>
           </router-link>
           <h3 class="header_h3">商家详情</h3>
       </div>
       <!--路由出口-->
       <router-view></router-view>
   </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
.business_header{
    width:100%;
    height: .46rem;
    background-color: #3190e8;
    position: fixed;
    z-index: 12;
    left: 0;
    top: 0;
    color: #f1f1f1;
    font-size: .2rem;
    display: flex;
    line-height: .46rem;
}
.header_span{
  margin-left: .2rem;
  color: #f1f1f1;
}
.header_h3{
    padding-top: .07rem;
    margin-left: 1rem;
}
</style>
