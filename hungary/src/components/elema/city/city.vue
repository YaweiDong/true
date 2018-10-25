<template>
    <div class="wrapper">
        <div class="header">
            <h4 class="city_h4">ele.me</h4>
            <router-link to="/mine">
              <img class="city_mine" src="../../../../static/imgs/mine.png">      
            </router-link> 
        </div>
    <!--路由出口-->
    <router-view></router-view>
    </div>
</template>
<script>
    export default{

    }
</script>
<style scoped>
 .header{
    width:100%;
    position:fixed;
    height: .457rem;
    background-color: #3190e8;
    display: flex;
    justify-content: space-between;
 }
 .city_h4{
    padding-top: .14rem;
    padding-left: .16rem;
    color:#f1f1f1;
 }
 .city_mine{
    width: 0.2rem;
    padding-top: .1rem;
    padding-right: .1rem;
 }
</style>

