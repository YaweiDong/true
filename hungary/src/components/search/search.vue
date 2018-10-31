<template>
    <div>
      <div class="top">
      <span>搜索</span>
      </div>
        <div>
        <input type="text" placeholder="请输入商家或者美食名称" v-model=txt>
        <button @click="sub()">提交</button>
        <div>
            <h4>搜索历史</h4>
            <ol>
                <li v-for="(k,index) in arrs" :key="index">
                   <span>{{k}}</span>
                   <img class="off" @click="off(index)" src="../search/img/off.png" alt=""> 
                    </li>
            </ol>
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
      arrs: []
    };
  },
  methods: {
    sub() {
      this.arrs.push(this.txt);
    },
    off(index) {
      this.arrs.splice(index, 1);
    }
  }
};
</script>
<style scoped ="scoped">
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
</style>
