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
        <input type="text" placeholder=" 输入学校、商务楼、地址" v-model.trim="txt">
        <br>
        <button @click="sub(txt)">提交</button>
      </div>
      <div class="dz">
       <ul>
            <li class="search_li" v-for="(item,index) in data" :key="index">
              <router-link :style="{color: 'black'}" :to="{name:'elema',params:{address:item.name}}" >
                <h4>{{item.name}}</h4>
                <p>{{item.address}}</p>
                </router-link>
            </li>
        </ul>
        </div>
      <!-- <div class="addhistory">
        <p class="p1">搜索历史</p>
        <ol>
          <li>
            蓝鸥科技
          </li>
        </ol>
        <p class="p2">清空所有</p>
      </div> -->
      </div>
</template>
<script>
export default {
  name: "citysearch",
   data: () => ({
     txt: "",
     data:[],
     history:[]
  }),
  created() {
    this.citytitle = this.$route.params.citysName;
     var id = this.$route.params.idd;

  },
 methods: {
      sub(txt) {  
      var id = this.$route.params.idd;
      console.log(this.$route);
     var api = "https://elm.cangdu.org/v1/pois?city_id="+id+"&keyword="+txt+"&type=search";
    var _this = this;
    this.$http.get(api).then(data => {
      //关闭加载提示
      // loadingInstance1.close();
      // 成功后的回调
      //展示所有商店名
      _this.data = data.data;
      console.log(_this.data);
      this.txt="";
    });
    },
  }
  
  
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
li{
/* text-overflow: -o-ellipsis-lastline; */
/* overflow: hidden; */
/* text-overflow: ellipsis; */
/* display: -webkit-box; */
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
}
   .search_li{
        height: 0.56rem;
        padding-top: .15rem;
        border-bottom: .01rem solid #e4e4e4;
        background-color: #fff;
        
    }
     .search_li h4{
         text-align: left;
         height: 0.2rem;
         font-size: .16rem;
         line-height: .18rem;
         margin: 0 .2rem 0rem .2rem;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
     }
      .search_li p{
          text-align: left;
          font-size: .13rem;
          margin: -0.2rem .2rem .1rem .2rem;
          color: #999;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
      }

</style>
