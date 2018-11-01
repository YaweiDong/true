<template>
    <div>
      <div class="top">
          <img @click="($router.back(-1))" src="../../../static/imgs/back.png" alt="">
      <span>订单</span>
      </div>
        <ol>
            <li>
                <div class="order">
                    <img src="../elema/img/1.png" alt="">
                    <span class="span1">吃啥啦></span>
                    <span class="span2">支付超时</span>
                    <span class="span3">2018-10-24 10:24</span>
                </div>
                <div class="money">
                    <span class="span4">鱼子酱等2件商品</span>
                    <span class="span5">¥1314.00</span>
                </div>
                <button>再来一单</button>
            </li>
        </ol>
       <div class="Dwarp">

       <router-link :key="index" v-for="(k,index) in Dimg" :to="k.ad">
           <div class='Dsearch'>
               <img class='Dimg2' :src="k.im" />
               {{k.na}}
            </div>
       </router-link>
    </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                 Dimg:[
                {na:'外卖',ad:'/elema',im:require('../../himg/ele.png')},
                {na:'搜索',ad:'/search',im:require('../../himg/search.png')},
                {na:'订单',ad:'/order',im:require('../../himg/order1.png')},
                {na:'我的',ad:'/mine',im:require('../../himg/mine.png')}
                ]
            }
        },
        created(){
            var ui = this.$store.state.login1;
            let api = 'https://elm.cangdu.org/bos/v2/users/'+ui.id+'/orders?limit=10&offset=0';
            this.$http.get(api).then((res)=>{
                console.log(res)
            })
        }
    }
</script>
<style scoped ="scoped">
.top img {
  position: absolute;
  top: 0.13rem;
  left: 0.1rem;
  width: 0.2rem;
}
.top{
  background-color: dodgerblue;
  width: 100%;
  height: 0.457rem;
  text-align: center;
  font-size: 0.2rem;
  color: white;
  line-height: 0.457rem;
}
.order{
    padding: 0.15rem 0 0 0.1rem; 
    border-bottom:  0.01rem solid rgb(230, 230, 230);
    overflow: hidden;
}
.order img{
    width: 0.6rem;
    /* border: 1px solid red */
    float: left;
}
.span2{
    float: right;
}
.span3{
    position:absolute;
    top:0.85rem;
    left: 0.7rem;
}

.Dwarp {
  width: 100%;
  height: 0.5rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  font-size: 0.13rem;
  z-index: 100;
  box-shadow: 0.01rem 0.01rem 0.02rem 0.02rem rgb(207, 201, 201);
}
.Dsearch {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(26, 25, 25);
}
.Dimg2 {
  width: 0.25rem;
  margin-bottom: 0.02rem;
}
.money{
    height: 0.6rem;
    border-bottom:  0.01rem solid rgb(230, 230, 230);
}
.span4{
    float: left;
    margin: 0.23rem 0 0 0.7rem ;

}
.span5{
    float:right;
    margin-top:0.23rem;
    color: orangered
}
button{
    border: 0.01rem solid dodgerblue;
    background-color: white;
    color: dodgerblue;
    float: right;
    margin-top:0.2rem; 
    height: 0.24rem;
}
</style>