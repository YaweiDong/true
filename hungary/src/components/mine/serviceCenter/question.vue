<template>
    <div>
         <header class="m-top">
           <router-link to='/service'>
           <img :src="timg" alt="">
           </router-link>    
           <span>{{it2}}</span>        
         </header>
         <p>{{arr[it1]}}</p>

    </div>  
</template>

<script>
import { mapState } from "vuex";
       
export default {
  data() {
    return {
      arr: [],
      datas:null,
      timg: require("../imgs/back.png")
    };
  },
  computed:{
    ...mapState({it1:'parameter1',it2:'parameter2'})
  },
  created() {
    let api = "https://elm.cangdu.org/v3/profile/explain";
    this.$http.get(api).then(res => {
      this.datas = res.data;
      for (let vi in this.datas) {
        this.arr.push(this.datas[vi]);    
      }
       this.arr.splice(24,1);
      var arr1 = [];
      for (var i = 0; i < this.arr.length; i++) {
        if (i % 2 == 0) {
          arr1.push(this.arr[i]);
        }
      }
      this.arr = arr1;
    });
  }
};
</script>

<style>
body {
  background-color: rgb(245, 245, 245);
}
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
  margin-bottom: 0.15rem;
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
</style>
