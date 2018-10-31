<template>
    <div>
      <div class="top">
        <img @click="($router.back(-1))" src="../../../static/imgs/back.png" alt="">
      <span>搜索</span>
      </div>
        <div>
        <input type="text" placeholder="请输入商家或者美食名称" v-model=txt>
        <img class="off2" @click="off2()" src="../search/img/off.png" alt=""> 
        <button @click="sub()">提交</button>
        <div v-if="show">
            <h4 v-if="show1">搜索历史</h4>
            <ol >
                <li v-for="(k,index) in arrs" :key="index">
                   <span>{{k}}</span>
                   <img class="off" @click="off(index)" src="../search/img/off.png" alt=""> 
                    </li>
            </ol>
            <p v-if="show1" @click="del()" class="p1">清空搜索历史</p>
        </div>
        <div v-if="show2" class="sorry">
          很抱歉! 无搜索结果
        </div>
        </div>
        <div class="Dwarp">
       <router-link :key="index" v-for="(k,index) in img" :to="k.ad">
           <div class='search'>
               <img class='img2' :src="k.im" alt="">
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
      show:false,
      show1: false,
      show2:false,
      img:[
                {na:'外卖',ad:'/elema',im:require('../../himg/ele.png')},
                {na:'搜索',ad:'/search',im:require('../../himg/search1.png')},
                {na:'订单',ad:'/order',im:require('../../himg/order.png')},
                {na:'我的',ad:'/mine',im:require('../../himg/mine.png')}
                ]
    };
  },
  methods: {
    sub() {
      this.arrs.push(this.txt);
      this.show2=true;
      this.show=false;
      this.show1 = true;
      this.txt="";
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
    off2(){
      this.show=true;
      this.show2=false;
    }
  }
};
</script>
<style scoped ="scoped">
.top img {
  position: absolute;
  top: -0.03rem;
  left: 0rem;
  width: 0.2rem;
}
.off2{
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
input {
  height: 0.35rem;
  width: 2.69rem;
  border: 0.01rem solid rgb(230, 230, 230);
  background-color: rgb(245, 245, 245);
  margin: 0.1rem;
  margin-right: 0.01rem;
}

.Dwarp {
  width: 100%;
  padding: 0.05rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background-color:white;
  font-size: 0.13rem;
  z-index: 100;
}
.search {
  display: flex;
  flex-direction: column;
  align-items: center;
  color:rgb(26, 25, 25);
}
.img2 {
  width: 0.25rem;
  margin-bottom: 0.02rem;
}
button {
  width: 0.77rem;
  height: 0.35rem;
  background-color: dodgerblue;
  border: 0.01rem solid dodgerblue;
  border-radius: 7%;
}
h4 {
  height: 0.46rem;
  background-color: rgb(245, 245, 245);
  line-height: 0.46rem;
  font-size: 0.13rem;
  padding-left: 0.1rem;
}
li {
  border-bottom: 0.01rem solid rgb(230, 230, 230);
  height: 0.46rem;
  line-height: 0.46rem;
}
span {
  padding-left: 0.1rem;
}
img {
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
.sorry{
  border-top: 0.01rem solid rgb(230, 230, 230);
  text-align: center;
  height: 0.4rem;
  line-height: 0.4rem;
  background-color: white;
}
</style>
