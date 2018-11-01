<template>
    <div>
        <header class="m-top">
           <router-link to='/information/address/add'>
           <img :src="timg" alt="">
           </router-link>    
           <span>搜索地址</span>
         </header>
        <div class="input">
         <input v-model="keyword" type="text" placeholder="请输入小区/写字楼/学校等">
          <p @click="btn()">确认</p>
        </div>

        <p class="p">为了满足商家的送餐要求，建议从列表中选择地址</p>

        <ul class="gets">
          <li :key='index' v-for="(k,index) in datas">
            <router-link :to="{name:'adre',params:{adr:k}}">
             <p>{{k.name}}</p> 
             <p>{{k.address}}</p>
             </router-link>
          </li>
        </ul>
        
        <div v-show="sp" class="three">
           <p>找不到地址</p>
           <p>请尝试输入小区，写字楼或学校名</p>
           <p>详细地址（如门牌号）可稍后输入哦。</p>
        </div>
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      timg: require("../imgs/back.png"),
      keyword: "",
      cid: "",
      datas: "",
      sp: true
    };
  },
  created() {
    //定位
    let spi = "https://elm.cangdu.org/v1/cities?type=guess";
    this.$http.get(spi).then(res => {
      this.cid = res.data.id;
    });
  },
  methods: {
    btn() {
      //搜索
      let api =
        "https://elm.cangdu.org/v1/pois?city_id=" +
        this.cid +
        "&keyword=" +
        this.keyword +
        "&type=search";
      this.$http.get(api).then(res => {
        console.log(res)
        this.datas = res.data;
        if (res.data.length == 0) {
          this.sp = true;
        } else {
          this.sp = false;
        }
      });
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
  position: fixed;
  top: 0;
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
.input {
  margin-top: 0.457rem;
  background-color: white;
  padding: 0.15rem 0;
  display: flex;
  justify-content: center;
}
.input input {
  outline: none;
  border: none;
  width: 2.7rem;
  height: 0.35rem;
  border-radius: 0.05rem;
  font-size: 0.15rem;
  background-color: #f5f5f5;
  border: 0.01rem solid rgb(209, 202, 202);
}
.input p {
  text-align: center;
  line-height: 0.35rem;
  background-color: dodgerblue;
  border-radius: 0.07rem;
  width: 0.7rem;
  height: 0.35rem;
  color: white;
  margin-left: 0.1rem;
}
.p {
  text-align: center;
  background-color: wheat;
  padding: 0.08rem 0;
  color: rgb(235, 107, 107);
  font-size: 0.15rem;
}
.three {
  margin: 1.5rem auto;
  text-align: center;
  font-size: 0.17rem;
  color: gray;
}
.three p {
  line-height: 0.3rem;
}
.gets li {
  border-bottom: 0.001rem solid gray;
  padding: 0.1rem;
  font-size: 0.15rem;
}
.gets li a p {
  line-height: 0.25rem;
  color: gray;
}
</style>