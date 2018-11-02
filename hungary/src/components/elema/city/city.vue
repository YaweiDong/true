<template>
    <div class="wrapper">
        <div class="header">
            <router-link to="/elema">
            <h4 style="font-size:0.15rem" class="city_h4">ele.me</h4>
            </router-link>
            <router-link to="/mine">
              <img class="city_mine" src="../../../../static/imgs/mine.png">      
            </router-link> 
        </div>
         <div class="citys_float">
                   <div class="citys_float_left">
                          <span>当前定位城市:</span>
                   </div>
                 <div class="citys_float_right">
                          <span>定位不准时,请在城市列表中选择</span>
                 </div>
              </div>
              <div  class="citys_float1">
                  <router-link to="">
                      <div class="citys_float_left1">                      
                        <router-link :style="{color: '#666'}"  :to="{name:'citysearch',params:{citysName:dw.name,idd:dw.id}}">
                          <span> {{dw.name}}</span>
                          </router-link>
                   </div>
                 <div class="citys_float_right1">
                 </div>
                  </router-link>
              </div>
              
              <div class="citys_group">
                  <span style="font-size:0.14rem">热门城市</span>
              </div>
              <div>
                 <ul class="citys_ul" >
                     
                     <li class="hot" v-for="(hc,index1) in  hotCitys" :key="index1">
                         <router-link :style="{color: '#3190e8'}"  :to="{name:'citysearch',params:{citysName:hc.name,idd:hc.id}}">
                         {{hc.name}}
                         </router-link>
                         </li>
                     
                 </ul>
              </div>
               <div v-for="(keyData,index) in az" :key="index">
                  <div class="citys_group" >
                  <span style="font-size:0.14rem">{{keyData}}(按字母排序)</span>
                  </div>
                  <div>
                  <ul class="citys_ul">
                     <li class="all" v-for="(k,ind) in citys[keyData]" :key="ind">
                         <router-link :style="{color: '#666'}"  :to="{name:'citysearch',params:{citysName:k.name,idd:k.id}}">
                         {{k.name}}
                          </router-link>
                         </li>
                  </ul>
                  </div> 
               </div> 
    <!--路由出口-->
    <router-view></router-view>
    </div>
</template>
<script>
import { Loading } from "element-ui";
export default {
  name: "citys",
  data() {
    return {
      citys: [],
      az: [],
      hotCitys: [],
      dw:[]
    };
  },
  created() {
    let loadingInstance1 = Loading.service({
      fullscreen: true
    });
    let api = "https://elm.cangdu.org/v1/cities?type=group";
    this.$http.get(api).then(response => {
      loadingInstance1.close();
      this.citys = response.data;
      var az = Object.keys(response.data).sort();
      this.az = az;
    });
    let api1 = "https://elm.cangdu.org/v1/cities?type=hot";
    this.$http.get(api1).then(data1 => {
      this.hotCitys = data1.data;
      console.log(data1.data);
    });
     let api2 = "https://elm.cangdu.org/v1/cities?type=guess";
    this.$http.get(api2).then(data2 => {
      this.dw = data2.data;
    });
  }
};
</script>
<style scoped ="scoped">
.header {
  width: 100%;
  position: fixed;
  height: 0.457rem;
  background-color: #3190e8;
  display: flex;
  justify-content: space-between;
}
.city_h4 {
  padding-top: 0.14rem;
  padding-left: 0.16rem;
  color: #f1f1f1;
}
.city_mine {
  width: 0.2rem;
  padding-top: 0.1rem;
  padding-right: 0.1rem;
}
.citys_top {
  background-color: rgb(49, 144, 232);
}
.citys_nav {
  height: 0.5rem;
  overflow: hidden;
  background-color: rgb(49, 144, 232);
}
.citys_left {
  float: left;
}
.citys_img1 {
  height: 0.18rem;
  margin-top: 0.13rem;
  margin-left: 0.1rem;
}
.citys_right {
  float: right;
}
.citys_img2 {
  height: 0.25rem;
  margin-top: 0.1rem;
  margin-right: 0.1rem;
}
.citys_float {
  padding: 0.16rem;
  overflow: hidden;
  border-bottom: 1px solid rgb(240, 240, 240);
  padding-top:0.6rem; 
}
.citys_float_left {
  float: left;
  color: #666;
  font-size: 0.13rem;
}
.citys_float_right {
  float: right;
  /* color: #666; */
  font-size: 0.13rem;
  color: #9f9f9f;
}
.citys_float1 {
  padding: 0.16rem;
  height: 0.14rem;
  overflow: hidden;
}
.citys_float_left1 {
  float: left;
  color: #3190e8;
  font-size: 0.19rem;
}
.citys_float_right1 {
  float: right;
  font-weight: 400;
}
.citys_float_right1 > img {
  height: 0.23rem;
}
.citys_group {
  border-top: 0.1rem solid rgb(240, 240, 240);
  padding: 0.16rem;

  height: 0.08rem;
  color: #666;
}
.citys_ul {
  text-align: center;
  display: flex;
  width: 100%;
  flex-flow: flex-start;
  flex-wrap: wrap;
}
.citys_ul > li {
  /* margin: 0 auto; */
  width: 24.2%;
  line-height: 0.45rem;
  height: 0.45rem;
  border-bottom: 0.01rem solid rgb(240, 240, 240);
  border-left: 0.01rem solid rgb(240, 240, 240);
  border-right: 0.01rem solid rgb(240, 240, 240);
  border-top: 0.01rem solid rgb(240, 240, 240);
  color: #666;
}
li {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.citys_ul > .hot {
  color: #3190e8;
}
.hot , .all{
  font-size: 0.16rem;
}
</style>

