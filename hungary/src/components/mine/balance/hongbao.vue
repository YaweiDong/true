<template>
    <div>
        <div class="li1">
          <div>
            <span>有</span>
            <span> 3 </span>
            <span>个红包即将到期</span>
          </div>
            
            <div class="question">
                <img :src="wen" alt="">
                <router-link to='/discount/Detail'>红包说明</router-link>
            </div>
        </div>
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
                    <span>{{k.description_map.validity_delta}}</span>
                 </div>
                 <div>
                    <p>{{k.description_map.validity_periods}}</p>
                    <p>{{k.description_map.phone}}</p>
                 </div>
              </div>   
          </li>
        </ul>
        <p class="limit">限品类：快餐便当，特色菜肴，小吃夜宵，甜品饮品，异国料理</p>
<div class="next">
<router-link to='/discount/overdue'>查看历史红包&nbsp&nbsp></router-link>
</div>
        <div class="last">
          <router-link to='/discount/exchange'>兑换红包</router-link>
          <router-link to='/discount/commend'>推荐有奖</router-link>
        </div>
       
    </div>
</template>

<script>
import {Loading} from 'element-ui';
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      wen: require("../imgs/wenhao.png"),
      datas: "",
      sp: true
    };
  },
  created() {
let loadingInstance1 = Loading.service({ fullscreen: true });
    var ui = this.$store.state.login1;
    if (ui !== '') {
      let api = `https://elm.cangdu.org/promotion/v2/users/${ui.id}/hongbaos?limit=20&offset=0`;
      this.$http.get(api).then(res => {
        loadingInstance1.close()
        //console.log(res);
        this.datas = res.data;
      });
    }
  }
};
</script>

<style scoped='scoped'>
.li1 {
  margin: 0 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.13rem;
}
.li1 div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.question a {
  color: dodgerblue;
}
.li1 div img {
  width: 0.17rem;
  height: 0.17rem;
  margin-right: 0.08rem;
}
.li1 div:first-child {
  color: black;
}
.li1 div:first-child span:nth-child(2) {
  color: red;
}

.benefit li {
  background-color: white;
  border-top: 0.06rem dashed red;
  margin: 0.15rem;
  padding: 0.2rem 0;
  margin-bottom: 0.1rem;
  font-size: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  border-radius: 0.08rem;
}
.benefit li:last-child {
  margin-bottom: 0;
}
.benefit-left {
  margin-right: 0.2rem;
  padding-right: 0.2rem;
  border-right: 0.01rem dashed rgb(185, 180, 180);
  text-align: center;
}
.benefit-left span {
  color: red;
  font-size: 0.17rem;
}
.benefit-left p {
  margin-top: 0.07rem;
}
.benefit-left span:nth-child(2) {
  font-size: 0.4rem;
}
.benefit-right {
  width: 2.2rem;
}
.benefit-right div:first-child {
  color: black;
  display: flex;
  justify-content: space-between;
  font-size: 0.2rem;
  margin-bottom: 0.05rem;
}
.benefit-right div:first-child span:last-child {
  color: red;
}
.benefit-right div:last-child p:last-child {
  margin-top: 0.03rem;
}
.limit {
  font-size: 0.11rem;
  text-align: center;
  background-color: rgb(250, 243, 243);
  color: gray;
  margin: 0 0.2rem;
  height: 0.2rem;
  line-height: 0.2rem;
}
.next {
  text-align: center;
  margin: 0.2rem;
}
.next a {
  color: gray;
  font-size: 0.13rem;
}
.last {
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
}
.last a {
  background-color: white;
  width: 100%;
  height: 0.5rem;
  color: black;
  text-align: center;
  line-height: 0.5rem;
}
.last a:first-child {
  border-right: 0.01rem solid rgb(201, 199, 199);
}
</style>
