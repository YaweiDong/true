<template>
    <div>
        <header class="m-top">
           <router-link :to='paths'>
           <img :src="timg" alt="">
           </router-link>    
           <span>编辑地址</span>
           <span class="sps" @click="bian()" v-show="sp">编辑</span>
           <span class="sps" @click="bian()" v-show="!sp">完成</span>
         </header>
         <div class="line"></div>
         <router-link class="next" :to="{name:'adre'}">
             <span>新增地址</span>
             <img :src="next" alt="">
         </router-link>
         <ul class="address">
           <li :key='index' v-for="(k,index) in datas">
                <p>{{k.address}}</p>
                <p>{{k.phone}}</p>
                <span @click="del(k.user_id,k.id,index)" v-show="!sp">X</span>
           </li>
         </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      timg: require("../imgs/back.png"),
      next: require("../imgs/next.png"),
      datas:'',
      sp:true,
      paths:''
    };
  },
  methods:{
      bian(){
        if(this.datas == ''){
          this.sp = {name:''}
        }
        this.sp = !this.sp;
      },
      del(n1,n2,index){
         let api = 'https://elm.cangdu.org/v1/users/'+n1+'/addresses/'+n2+'';
         this.$http.delete(api).then((res)=>{
             if(res.data.status == 1){
                alert('删除成功');
                this.datas.splice(index,1);
             }
         })
      }
  },
  created() {
    if(this.$store.state.statu == 4){
          this.paths = '/pay_money';
    }else{
      this.paths = '/information';
    }
    //获取收货地址
    var ui = this.$store.state.login1;
    var api = "https://elm.cangdu.org/v1/users/" + ui.id + "/addresses";
    this.$http({ method: "get", url: api, withCredentials: true }).then(
      res => {
        this.datas = res.data;
      }
    );
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
.sps{
  position: absolute;
  right:0.1rem;top:0;
  height: 100%;
  display: flex;
  align-items: center;
   
}
.line {
  border: 0.005rem solid rgb(192, 184, 184);
  margin: 0.1rem 0;
  margin-top:0.557rem;
}
.next {
  height: 0.43rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.16rem;
  color: black;
}
.next img {
  width: 0.25rem;
  height: 0.25rem;
}
.address{
  margin-top: 0.1rem;
  background-color: white;
}
.address li{
  border: 0.001rem solid gray;
  padding: 0.1rem;
  font-size: 0.14rem;
  position: relative;
  color: black;
}
.address li p:nth-child(2){
  margin-top: 0.1rem;
}
.address li:nth-child(1){
  background-color: #fff8c3;
}
.address li p{
  margin-right: 0.1rem;
}
.address li span{
  font-weight: bold;
  position: absolute;
  right:0.1rem;top:0;
  height: 100%;
  display: flex;
  align-items: center;
  color: gray;
}

</style>