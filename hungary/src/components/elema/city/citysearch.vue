<template>
<div>
        <div class="top">
      <router-link to="/elema/city">
      <img src="../../../../static/imgs/back.png" alt="">
      </router-link>
      <span>{{citytitle}}</span>
      <router-link to="/mine" >
      <span class="qie">切换城市</span>
      </router-link>
      </div>
      <div class="address">
        <input type="text" placeholder=" 输入学校、商务楼、地址">
        <br>
        <button>提交</button>
      </div>
      <div class="addhistory">
        <p class="p1">搜索历史</p>
        <ol>
          <li>
            蓝鸥科技
          </li>
        </ol>
        <p class="p2">清空所有</p>
      </div>
      </div>
</template>
<script>
export default {
  name: "citysearch",
  created() {
    this.citytitle = this.$route.params.citysName;
  },
  
};
</script>
<style scoped ="scoped">
.top img {
  position: absolute;
  top: 0.13rem;
  left: 0.1rem;
  width: 0.2rem;
}
.top {
  background-color: dodgerblue;
  width: 100%;
  height: 0.457rem;
  text-align: center;
  font-size: 0.2rem;
  color: white;
  line-height: 0.457rem;
  /* font-family: Microsoft YaHei */
}
.qie{
  font-size: 0.16rem;
  position: absolute;
  top: 0;
  left: 3rem;
  color: white;
}
.address{
  border: 0.01rem solid rgb(230, 230, 230);
  margin-top: 0.1rem;
}
input{
  border: 0.01rem solid rgb(230, 230, 230);
  margin: 0 0.17rem;
  width: 90%;
  height: 0.35rem;
  font-size: 0.16rem;
  margin-top: 0.1rem;
}
button{
  background-color: dodgerblue;
  border: 0.01rem solid dodgerblue;
  height: 0.36rem;
  border-radius: 0.03rem;
  color: white;
  width: 90%;
  margin: 0 0.17rem;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}
.p1{
  font-size: 0.13rem;
  height: 0.2rem;
  line-height: 0.2rem;
  padding-left: 0.13rem;
}
.p2{
  text-align: center;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.19rem;
  color: rgb(100, 100, 100);
}
li{
  border: 0.01rem solid rgb(230, 230, 230);
  height: 0.78rem;
  line-height: 0.78rem;
}

</style>
