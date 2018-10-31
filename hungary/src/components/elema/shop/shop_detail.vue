<template>
  <div>
      <div class="shops_detail_header">
           <router-link :to="{name:'business',params:{id:data.id}}">
           <span class="header_span">
               <
           </span>
           </router-link>
           <h3 class="header_h3">食品监督安全公式</h3>
       </div>
       <section class="shops_status_container">
           <header>食品监督安全公示</header>
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
       <section class="shops_status_info">
             <header>工商登记信息</header>
             <p>企业名称</p>
             <p>工商执照注册号</p>
             <p>注册资本</p>
             <p>注册地址</p>
             <p>属地监管所</p>
             <p>法定代表人</p>
             <p>经营范围</p>
       </section>
       <section class="shops_status_info">
             <header>餐饮许可证</header>
             <p>营业范围</p>
             <p>许可证有效期</p>
             <p>许可证号</p>
             <p>发证时间</p>
       </section>
       <!--路由出口-->
       <router-view></router-view>
  </div>
</template>
<script>
    export default{
        name:'shop_detail',
        data: () => ({
        data: [],
        return: {},
        aaa: ""
        }),
        created(){
        this.aaa = this.$route.params.id;
         //6、获取商铺列表
         let api =
            "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
         //promise写法
         this.$http.get(api).then(data => {
         //成功后的回调
         this.data = data.data.filter(k => this.aaa == k.id)[0];
         console.log(this.data);
         });
        }
    }
</script>
<style scoped="scoped">
.shops_detail_header{
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
    padding-top: .02rem;
    margin-left: .55rem;
}
.shops_status_container,.shops_status_info{
    background-color: #fff;
    position: relative;
    left: 0;
    top: .46rem;
}
.shops_status_container header{
    color:#333;
    padding: .1rem .2rem;
    font-size: .2rem;
    border-bottom: .025rem solid #f1f1f1;
}
.check_date{
    margin-left: .15rem;
}
.check_date p{
    padding-top: .15rem;
    font-size: .12rem;
    color:#666;
}
.shop_status_well{
    color:#7ed321;
}
.shops_status_info{
    border-top: .1rem solid #ebebeb;
}
.shops_status_info header{
     padding: .1rem .2rem;
     font-size: .2rem;
     color:#333;
     border-bottom: .015rem solid #f1f1f1;
}
.shops_status_info p{
    font-size: .12rem;
    color:#666;
    padding: .1rem ;
    margin-left: .1rem;
    border-bottom: .025rem solid #f5f5f5;
}
</style>
