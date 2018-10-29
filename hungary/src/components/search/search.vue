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
      show2:false
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
