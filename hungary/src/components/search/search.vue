<template>
    <div>
      <div class="search-all">

      
      <div class="top">
        <img @click="($router.back(-1))" src="../../../static/imgs/back.png" alt="">
      <span>搜索</span>
      </div>
        <div>
        <input class="text1" type="text" placeholder="请输入商家或者美食名称" v-model=txt>
        <img class="off2" @click="off2()" src="../search/img/off.png" alt=""> 
        <button style="font-size:0.14rem" @click="sub()">提交</button>
        <div v-if="show">
            <h4 v-if="show1">搜索历史</h4>
            <ol >
                <li  style="font-size:0.14rem" v-for="(k,index) in arrs" :key="index">
                   <span>{{k}}</span>
                   <img class="off" @click="off(index)" src="../search/img/off.png" alt=""> 
                    </li>
            </ol>
            <p v-if="show1" @click="del()"  style="font-size:0.15rem" class="p1">清空搜索历史</p>
        </div>
        <div v-if="show2"  style="font-size:0.14rem" class="sorry">
          很抱歉! 无搜索结果
        </div>
        </div>
           </div>
         <div class="Dwarp">

       <router-link :key="index" v-for="(k,index) in Dimg" :to="k.ad">
           <div  class='Dsearch'>
               <img class='Dimg2' :src="k.im" />
               {{k.na}}
            </div>
       </router-link>
    </div>
    </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "search",
  data() {
    return {
      txt: "",
      arrs: [],
      show: false,
      show1: false,
      show2: false,
      Dimg: [
        { na: "外卖", ad: "/elema", im: require("../../himg/ele.png") },
        { na: "搜索", ad: "/search", im: require("../../himg/search1.png") },
        { na: "订单", ad: "/order", im: require("../../himg/order.png") },
        { na: "我的", ad: "/mine", im: require("../../himg/mine.png") }
      ]
    };
  },
  methods: {
    sub() {
      this.arrs.push(this.txt);
      this.show2 = true;
      this.show = false;
      this.show1 = true;
      this.txt = "";
    },
    off(index) {
      this.arrs.splice(index, 1);
      if (this.arrs[0] === undefined) {
        this.show1 = false;
      }
    },
    del() {
      (this.arrs = []), (this.show = false);
    },
    off2() {
      this.show = true;
      this.show2 = false;
    }
  }
};
</script>
<style scoped ="scoped">
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

.top img {
  position: absolute;
  top: -0.03rem;
  left: 0rem;
  width: 0.2rem;
}
.off2 {
  position: absolute;
  top: 0.5rem;
  left: 2.5rem;
}
.top {
  background-color: dodgerblue;
  width: 100%;
  height: 0.457rem;
  text-align: center;
  font-size: 0.2rem;
  color: white;
  line-height: 0.457rem;
}
.search-all input {
  height: 0.35rem;
  width: 2.69rem;
  border: 0.01rem solid rgb(230, 230, 230);
  background-color: rgb(245, 245, 245);
  margin: 0.1rem;
  margin-right: 0.01rem;
}
.search-all button {
  width: 0.77rem;
  height: 0.35rem;
  background-color: dodgerblue;
  border: 0.01rem solid dodgerblue;
  border-radius: 7%;
}
.search-all h4 {
  height: 0.46rem;
  background-color: rgb(245, 245, 245);
  line-height: 0.46rem;
  font-size: 0.13rem;
  padding-left: 0.1rem;
}
.search-all li {
  border-bottom: 0.01rem solid rgb(230, 230, 230);
  height: 0.46rem;
  line-height: 0.46rem;
}
.search-all span {
  padding-left: 0.1rem;
}
.search-all img {
  width: 0.15rem;
  float: right;
  margin: 0.16rem 0.1rem 0;
}
.p1 {
  color: dodgerblue;
  font-weight: bold;
  text-align: center;
  height: 0.46rem;
  line-height: 0.46rem;
}
.sorry {
  border-top: 0.01rem solid rgb(230, 230, 230);
  text-align: center;
  height: 0.4rem;
  line-height: 0.4rem;
  background-color: white;
}
.text1{
  font-size:0.14rem;
}

</style>
