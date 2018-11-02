<template>
    <div>
        <header class="m-top">
           <router-link to='/information'>
           <img :src="timg" alt="">
           </router-link>    
           <span>修改用户名</span>
         </header>
        <div class="input">
            <input type="text" v-model="username" placeholder="输入用户名">
            <p>用户名只能修改一次(5-24字符之间)</p>
            <p>确认修改</p>
        </div>
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      timg: require("../imgs/back.png"),
      next: require("../imgs/next.png"),
      username:''
    };
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
  margin-bottom: 0.1rem;
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
.input{
     margin: 0 auto;
    height:0.4rem;
    width: 3.56rem;
    background-color: blanchedalmond; 
}
.input input{
    outline: none;
    background-color: none;
    height:0.4rem;
    width: 3.56rem;
    border:0.01rem solid rgb(206, 203, 203); 
    margin-bottom:0.1rem;
    border-radius:0.03rem; 
    font-size: 0.18rem; 
}
.input p{
    font-size: 0.14rem;
}
.input p:last-child{
    margin: 0.3rem auto;
    height:0.4rem;
    width: 3.56rem;
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.16rem;
    background-color: dodgerblue;
    color:rgb(236, 226, 226);
}
</style>