<template>
    <div>
         <header class="m-top">
           <router-link to='/mine'>
           <img :src="timg" alt="">
           </router-link>    
           <span>服务中心</span>
         </header>
         <div class="service">
             <div class="service-left">
                 <img :src="ser1" alt="">
                 <p>在线客服</p>
             </div>
             <div class="service-right">
                 <img :src="ser2" alt="">
                 <p>在线客服</p>
             </div>
         </div>
         <h4>热门问题</h4>
         <ul class="lis">           
             <li @click="dian(k,index)" :key="index" v-for="(k,index) in arr">
                 <router-link to="/questionDetail"> 
                 {{k}}
                 <img :src="next" alt="">
                 </router-link>
             </li>
         </ul>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      arr: [],
      it: null,
      timg: require("../imgs/back.png"),
      ser1: require("../imgs/service.png"),
      ser2: require("../imgs/Pservice.png"),
      next: require("../imgs/next.png"),
      datas: null
    };
  },
  methods: {
    dian(k,index) {
      this.$store.commit("back1",index);
      this.$store.commit("back2",k);
    }
  },
  created() {
    let api = "https://elm.cangdu.org/v3/profile/explain";
    this.$http.get(api).then(res => {
      this.datas = res.data;
      for (let vi in this.datas) {
        this.arr.push(this.datas[vi]);     
      }
      this.arr.splice(24,1)
      var arr1 = [];
      for (var i = 0; i < this.arr.length; i++) {
        if (i % 2 !== 0) {
          arr1.push(this.arr[i]);
        }
      }
      arr1.splice(12, 1);
      this.arr = arr1;
    });
  }
};
</script>
<style scoped="scoped">
.body {
  background-color: rgb(245, 245, 245);
  position: relative;
}
.m-top {
  position: fixed;
  top: 0;
  z-index: 6;
  background-color: dodgerblue;
  width: 100%;
  height: 0.457rem;
  line-height: 0.457rem;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.18rem;
  color: aliceblue;
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
.service {
  width: 100%;
  margin-top: 0.457rem;
  display: flex;
  background-color: white;
}
.service > div {
  width: 100%;
  height: 1rem;
  display: flex;
  font-size: 0.14rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.service-left {
  border-right: 0.01rem solid #f5f5f5;
}
.service-right img,
.service-left img {
  width: 0.25rem;
  margin-bottom: 0.2rem;
}
.service-right img {
  margin-bottom: 0.13rem;
}
h4 {
  width: 100%;
  height: 0.7rem;
  text-align: left;
  line-height: 0.7rem;
  padding-left: 0.1rem;
}
.lis li {
  width: 100%;
  height: 0.47rem;
  line-height: 0.47rem;
  padding-left: 0.1rem;
  background-color: white;
  border-bottom: 0.01rem solid #f5f5f5;
}
.lis li a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
}
.lis li img {
  width: 0.2rem;
  margin-right: 0.2rem;
}
</style>

