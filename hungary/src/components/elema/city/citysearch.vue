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
        <button style="font-size:0.15rem" @click="sub(txt)">提交</button>
      </div>
      <div class="dz">
         <ul>
              <li class="search_li" v-for="(item,index) in data" :key="index" @click="choose(item)">
                <h4>{{item.name}}</h4>
                <p>{{item.address}}</p>    
              </li>
        </ul>
      </div>
      <div v-show="show">
            <header>搜索历史</header> 
            <ul>
                <li class="search_li" v-for="item in history" :key=item.id  @click="choose(item)">
                   <h4>{{item.name}}</h4>
                   <p>{{item.address}}</p>                  
                </li>
            </ul>
        <footer @click="clear">清空所有</footer>
        </div>
      </div>
</template>
<script>
export default {
  name: "citysearch",
  data: () => ({
    txt: "",
    data: [],
    history: [],
    name1: [],
    address: [],
    show: true,
    cityname: localStorage.getItem("cityname")
  }),
  created() {
    this.citytitle = this.$route.params.citysName;
    var id = this.$route.params.idd;
    this.history = this.dedup(JSON.parse(localStorage.getItem("cmts")));
  },
  methods: {
    sub(txt) {
      var id = this.$route.params.idd;
      console.log(this.$route);
      var api =
        "https://elm.cangdu.org/v1/pois?city_id=" +
        id +
        "&keyword=" +
        txt +
        "&type=search";
      var _this = this;
      this.$http.get(api).then(data => {
        //关闭加载提示
        // loadingInstance1.close();
        // 成功后的回调
        //展示所有商店名
        _this.data = data.data;
        console.log(_this.data);
        this.txt = "";
      });
    },
    add(a, b) {
      this.name1.push(a), this.address.push(b);
      // console.log(this.name1);
      // console.log(this.address);
    },
    choose(item) {
      // console.log(geohash);
      // vuex传值
      // this.$store.commit("receivegeohash",geohash);
      //存储到localstorage中
      localStorage.setItem("geohash", item.geohash);
      this.$store.commit('locationnames',item.name)
      // console.log(item.name);
      // 历史记录
      var comment = {
        name: item.name,
        address: item.address,
        geohash: item.geohash
      };
      var list = JSON.parse(localStorage.getItem("cmts") || "[]");
      //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度
      list.unshift(comment);
      localStorage.setItem("cmts", JSON.stringify(list));
      this.name = this.address = this.geohash = "";
      this.$router.push({name:'elema'})
    },
    clear() {
      this.history = [];
      this.show = false;
      localStorage.removeItem("cmts");
    },
    // 去重的方法
    dedup(arr) {
      console.log(arr)
      let hashTable = {};
      return arr.filter(el => {
        let key = JSON.stringify(el);
        let match = Boolean(hashTable[key]);
        return match ? false : (hashTable[key] = true);
      });
    }
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
.qie {
  font-size: 0.16rem;
  position: absolute;
  top: 0;
  left: 3rem;
  color: white;
}
.address {
  border: 0.01rem solid rgb(230, 230, 230);
  margin-top: 0.1rem;
}
input {
  border: 0.01rem solid rgb(230, 230, 230);
  margin: 0 0.17rem;
  width: 90%;
  height: 0.35rem;
  font-size: 0.16rem;
  margin-top: 0.1rem;
}
button {
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
.p1 {
  font-size: 0.13rem;
  height: 0.2rem;
  line-height: 0.2rem;
  padding-left: 0.13rem;
}
.p2 {
  text-align: center;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.19rem;
  color: rgb(100, 100, 100);
}
li {
  border: 0.01rem solid rgb(230, 230, 230);
  height: 0.78rem;
  line-height: 0.78rem;
}
li {
  /* text-overflow: -o-ellipsis-lastline; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  /* display: -webkit-box; */
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.search_li {
  height: 0.56rem;
  padding-top: 0.15rem;
  border-bottom: 0.01rem solid #e4e4e4;
  background-color: #fff;
}
.search_li h4 {
  text-align: left;
  height: 0.2rem;
  font-size: 0.16rem;
  line-height: 0.18rem;
  margin: 0 0.2rem 0rem 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.search_li p {
  text-align: left;
  font-size: 0.13rem;
  margin: -0.2rem 0.2rem 0.1rem 0.2rem;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
footer {
  height: 0.464rem;
  line-height: 0.464rem;
  text-align: center;
  font-size: 0.17rem;
  color: #666;
  background-color: #fff;
}
header {
  height: 0.134rem;
  font-size: 0.13rem;
  padding: 0.035rem;
  border-top: 0.02rem solid #e4e4e4;
  border-bottom: 0.02rem solid #e4e4e4;
  background-color: #f5f5f5;
}
</style>
