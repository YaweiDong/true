<template>
    <div>
        <header class="m-top">
           <router-link to='/information/address'>
           <img :src="timg" alt="">
           </router-link>    
           <span>新增地址</span>
         </header>
         <div class='input'>
             <div>
<input type="text" placeholder="请填写你的姓名" v-model="name">
             <input type="text" placeholder="小区/写字楼/学校等" v-model="home">
            <input @click="btn()" type="text" placeholder="请填写详细的送餐地址" v-model="address">
             
             <input type="text" placeholder="请填写能够联系到您的手机号" v-model="phone">
             <input type="text" placeholder="备用联系电话（选填）" v-model="phone1">
             </div>
             
         </div>
         <div class="add">
             <span>新增地址</span>
         </div>
        

    </div>
</template>

<script>
export default {
  data() {
    return {
      timg: require("../imgs/back.png"),
      next: require("../imgs/next.png"),
      name: "",
      home: "",
      address: "",
      phone: "",
      phone1: ""
    };
  },
  methods:{
      btn(){
          this.$router.push({name:'addDetail'})
      }
  }
};
</script>
<style scoped='secoped'>
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
  margin-top: 0.1rem;
  background-color: white;
}
.input div {
  margin: 0 auto;
  width: 3.5rem;
}
.input div input {
  outline: none;
  border: none;
  margin: 0 auto;
  margin-top: 0.1rem;
  width: 3.4rem;
  height: 0.35rem;
  padding-left: 0.1rem;
  background-color: #f5f5f5;
  border-radius: 0.05rem;
  font-size: 0.15rem;
  border: 0.01rem solid rgb(209, 202, 202);
}
.input div input:last-child {
  margin-bottom: 0.15rem;
}
.add {
  margin: 0.2rem auto;
  width: 3.4rem;
  height: 0.35rem;
  text-align: center;
  line-height: 0.35rem;
  border-radius: 0.05rem;
  background-color: rgb(93, 218, 93);
  color: rgb(240, 248, 240);
  font-size: 0.15rem;
}
#jump{
    color: red;
}
</style>