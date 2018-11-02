<template>
    <div>
        <header class="m-top">
          
           <img @click="back()" :src="timg" alt="">
             
           <span>我的积分</span>
         </header>
         <div v-show="sp">
<div class="content">
    <div class="ul">
        <li class="li1">
            <span>当前积分</span>
            <div>
                <img :src="wen" alt="">
                <span @click="jump()">积分说明</span>
            </div>
        </li>
        <li class="li2">
            <span>{{point}}</span>
            <span>分</span>
        </li>
        <li class="li3">
            <span>积分兑换商品</span>
        </li>
    </div>
</div>



     <p class="p">最近30天积分记录</p>
<div class="last">
    <img :src="detail" alt="">
    <p>最近30天五积分记录</p>
    <p>快去下单赚取大量积分吧</p>
</div>
</div>
<div class="h3" v-show="!sp">
   <h3>暂无积分，请登录。</h3>
</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      timg: require("../imgs/back.png"),
      next: require("../imgs/next.png"),
      wen: require("../imgs/wenhao.png"),
      detail: require("../imgs/detail.png"),
      point: "0",
      sp: ""
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    jump() {
      this.$router.push({ name: "id" });
    }
  },
  created() {
    var ui = this.$store.state.login1;
    if (ui == '') {
      this.sp = false;
    } else {
      this.sp = true;
      this.point = ui.point;
    }
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
.content {
  background-color: dodgerblue;
  padding: 0.1rem;
}
.content .ul {
  background-color: white;
  border-radius: 0.05rem;
  padding: 0.1rem;
}
.li1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.14rem;
}
.li1 div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: dodgerblue;
}
.li1 div img {
  width: 0.17rem;
  height: 0.17rem;
  margin-right: 0.08rem;
}
.li2 {
  margin: 0.11rem 0;
  margin-bottom: 0.2rem;
}
.li2 span:first-child {
  font-size: 0.5rem;
}
.li2 span:last-child {
  font-size: 0.15rem;
}
.li3 {
  background-color: rgb(245, 93, 38);
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.18rem;
  color: white;
  border-radius: 0.05rem;
}
.p {
  color: gray;
  margin: 0.2rem 0.1rem;
}
.last {
  color: gray;
  font-size: 0.2rem;
  text-align: center;
}

.last img {
  width: 1.875rem;
  height: 1.1719rem;
  margin-bottom: 0.2rem;
}
.last p:last-child {
  font-size: 0.14rem;
  margin-top: 0.15rem;
}
.h3 {
  color: gray;
  text-align: center;
  padding-top: 1.5rem;
}
</style>