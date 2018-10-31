<template>
    <div class="body">
        <header class="m-top">
           <img @click="$router.back(-1)" :src="timg" alt="">       
           <span>兑换红包</span>
        </header>
        <div class="input">
            <input class="input1" type="text" placeholder="请输入兑换码">
            <div>
                 <input class="input2" type="text" placeholder="验证码">
                 <div class="input-div">
                     <img :src="code" alt="">
                     <div>
                        <p>看不清</p>
                        <a href="#" @click="change()">换一张</a>
                     </div>
                 </div>
            </div>
        </div>
        <p class="p">兑换</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      timg: require("../../imgs/back.png"),
      code:''
    };
  },
  methods:{
      change(){
          this.$emit('bian')
      }
  },
  created() {
    let api = "https://elm.cangdu.org/v1/captchas";
    var changes = () => {
      this.$http({
        method: "post",
        url: api,
        withCredentials: true
      }).then(res => {
        this.code = res.data.code;
      });
    };
    changes();
    this.$on("bian", () => {
      changes();
    });
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
.input {
  margin-top:  0.457rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  
}
.input>div{ 
    display: flex;
    justify-content: space-between;
    padding: 0 0.15rem;
}
.input1{
    border: none;
    outline: none;
    height: 0.5rem;
    margin: 0.2rem 0.15rem;
    border-radius:0.05rem; 
    font-size: 0.18rem;
    padding-left: 0.1rem;
}
.input2{
    height: 0.5rem;
    width: 1.9rem;
    padding-left: 0.1rem;
    border: none;
    outline: none;
    border-radius:0.05rem; 
    font-size: 0.18rem;
}
.input-div{
    background-color: white;
    display: flex;
    align-items: center;
    border-radius:0.05rem;
    font-size: 0.14rem; 
}
.input-div img{
    width: 0.82rem;
    height: 0.35rem;
    margin-left: 0.1rem;
}
 .input-div div p{
    margin-bottom: 0.1rem;
} 
.input-div div{
    border-radius:0.05rem;   
}
.p{
    background-color: rgb(209, 198, 198);
    color: white;
    height:0.42rem ;
    line-height: 0.42rem ;
    text-align: center;
    margin: 0.2rem;
    border-radius:0.05rem;
}
</style>