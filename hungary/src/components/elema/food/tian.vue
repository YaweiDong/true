<template>
<div>
    <div class="top">
      <router-link to="/elema">
      <img class="imgback" src="../../../../static/imgs/back.png" alt="">
      </router-link>
      <span>{{ytitle}}</span>
      </div>
    <div class="box">
      <!-- 顶部饮品 -->
      <div class="title">
      <span style="font-size:0.135rem" @click="hidden()">{{ytitle}}  <img v-if="show6" class="bian" src="../../../../static/imgs/down.png" alt=""><img v-if="show66" class="biana" src="../../../../static/imgs/up.png" alt=""> </span>
      <span style="font-size:0.135rem"  @click="hidden3()">
        排序
        <img v-if="show7" class="bian1" src="../../../../static/imgs/down.png" alt=""><img v-if="show77"  class="biana1" src="../../../../static/imgs/up.png" alt="">
        </span>
      <span style="font-size:0.135rem" @click="hidden4()">筛选
         <img v-if="show8" class="bian2" src="../../../../static/imgs/down.png" alt=""><img v-if="show9"  class="biana2" src="../../../../static/imgs/up.png" alt="">
      </span>
      </div>
      <!-- 下部菜品详情 -->
      <div v-if="show" class="box2">
        <!-- 下部左边分类 -->
      <div class="fenlei">
        <ol>
          <li  v-for="(k,index) in data" :key="index"  :class="{'active':index ==checkindex }" @click="hidden2(index)">
            
            <span style="font-size:0.12rem" class="sp1">
              <img :src="'https://fuss10.elemecdn.com/'+k.image_url+'.png'" alt="">
            {{k.name}}
            </span>
            <span style="font-size:0.1rem" class="sp2">
            {{k.count}}
            </span>
            <!-- <span style="font-size:0.1rem" class="sp3">
              
            </span> -->
          </li>
        </ol>
      </div>
      <!-- 下部右边详情 -->
      <div class="xiangqing">
      <ol >
      <li v-for="(k,index) in arr" :key="index" @click="updaMsg(index)">
        <span class="span1">
       {{k.name}}
       </span>
        <span class="span2">
            {{k.count}}
            </span>
      </li>
    </ol>
      </div>
      </div>
    </div>
    <!-- 下部排序详情 -->
    <div v-if="show2" class="xulie" >
       <ol >
      <!-- <li v-for="(k1,index1) in imgs1" :key="index1" @click="paixu(k1.id)"> -->
         <li v-for="(k1,index1) in imgs1" :key="index1" @click="paixu(index1)">
        <img :src="k1.src" alt="">
       {{k1.title}}
      </li>
    </ol>
    </div>
    <!-- 下部筛选详情 -->
    <div class="shaixuan" v-if="show3">
      <div>
      <p class="p1">配送方式</p>
     
      <p @click="(show10=!show10)" class="bird">
         <img v-if="show10" src="../img/bird.png" alt="">
         <img v-else class="yes" src="../../../../static/imgs/yes.png" alt="">
         蜂鸟专送</p>
      </div>
      <p>商家属性(可以多选)</p>
      <ul >
        <li @click="huantu2(index2)"  v-for="(k2,index2) in data2" :key="index2">
          
          <span v-if="valuehe[index2].valueb" :style="{color: '#'+k2.icon_color,border:'1px solid #'+k2.icon_color,borderRadius: '20%',padding:'3px'}">{{k2.icon_name}}</span>
          <img v-else class="yes" src="../../../../static/imgs/yes.png" alt="">
          <span>{{k2.name}}</span>
        </li>
      </ul>
      <button style="font-size:0.15rem" class="btn1" @click="btn1()" >清空</button>
      <button style="font-size:0.15rem" class="btn2" @click="btn2()">确定</button>
    </div>
    <div class="warp">
    <!-- <Zujian :cli="cont" :cli1="cont1"></Zujian> -->
    <Zujian :cli="cont"></Zujian>
    </div>
</div>
</template>
<script>
import Zujian from "../zujian";
import { Loading } from "element-ui";
import img01 from "./img/1.png";
import img02 from "./img/2.png";
import img03 from "./img/3.png";
import img04 from "./img/4.png";
import img05 from "./img/5.png";
import img06 from "./img/6.png";
export default {
  name: "tian",
  data: () => ({
     checkindex: 8,
    // 修改地方
    cont: "",
    cont: "",
    // 测试
    // cont1:"",
    imgs1: [
      { title: "智能排序", src: img01, id: 4 },
      { title: "距离最近", src: img02, id: 5 },
      { title: "销量最高", src: img03, id: 6 },
      { title: "起送价最低", src: img04, id: 1 },
      { title: "配送速度最快", src: img05, id: 2 },
      { title: "评分最高", src: img06, id: 3 }
    ],
    show: false,
    show2: false,
    show3: false,
    show4: true,
    show5: false,
    show6: true,
    show66: false,
    show7: true,
    show77: false,
    show8: true,
    show9: false,
    show10: true,
    valuehe: [
      { valueb: true, count: 0 },
      { valueb: true, count: 0 },
      { valueb: true, count: 0 },
      { valueb: true, count: 0 },
      { valueb: true, count: 0 },
      { valueb: true, count: 0 }
    ],
    // show7:false,
    data: [],
    arr: [],
    data1: [],
    data2: [],
    // 修改地方
    name1: [],
    name2: [],
    id: []
  }),
  components: {
    Zujian
  },
  // 修改地方
  // props: ["cli"],
  methods: {
    hidden: function() {
      this.show = !this.show;
      this.show2 = false;
      this.show3 = false;
      this.show6 = !this.show6;
      this.show66 = !this.show66;
      this.show77 = false;
      this.show7 = true;
      this.show9 = false;
      this.show8 = true;
    },
    hidden2: function(index) {
      this.arr = this.data[index].sub_categories;
      // 修改地方
      this.name1 = this.data[index].name;
      console.log(this.name1);
       this.checkindex = index;
       
    },
    updaMsg(index) {
      this.name2 = this.arr[index].name;
      console.log(this.name2);
      this.show = false;
       this.show66 = false;
      this.show6 = true;
    },
    hidden3: function() {
      this.show = false;
      this.show2 = !this.show2;
      this.show3 = false;
      this.show7 = !this.show7;
      this.show77 = !this.show77;
      this.show66 = false;
      this.show6 = true;
      this.show9 = false;
      this.show8 = true;
    },
    hidden4: function() {
      this.show = false;
      this.show2 = false;
      this.show3 = !this.show3;
      this.show8 = !this.show8;
      this.show9 = !this.show9;
      this.show66 = false;
      this.show6 = true;
      this.show77 = false;
      this.show7 = true;
    },
    paixu(index1) {
      // this.cont = idd;
      this.cont = this.imgs1[index1];
      // console.log(this.id)
      this.show2 = false;
      this.show77 = false;
      this.show7 = true;
    },
    btn1() {
      this.valuehe[0].valueb = true;
      this.valuehe[1].valueb = true;
      this.valuehe[2].valueb = true;
      this.valuehe[3].valueb = true;
      this.valuehe[4].valueb = true;
      this.valuehe[5].valueb = true;
    },
    btn2() {
      this.show3 = false;
      this.show8 = !this.show8;
      this.show9 = !this.show9;
      this.cont = 1;
    },
    huantu2(aaa) {
      this.valuehe[aaa].valueb = !this.valuehe[aaa].valueb;

      // this.valuehe[aaa].count+=1
      // if(this.valuehe[aaa].count%2 == 1){
      //   this.blname.push(this.data2[aaa].name);
      // }else{
      //   var a;
      //   var _this =this
      //   this.blname.forEach(function(val,ind){
      //     if(val == _this.data12[aaa].name){
      //       a = ind
      //       console.log("..............."+val)
      //     }
      //   })
      //   this.blname.splice(a,1)
      // }
    }
    // hh(){
    //   this.show3 =
    // }
  },
  // 修改地方
  watch: {
    name2() {
      this.cont = this.name1 + "/" + this.name2;
      // console.log(a)
      // this.cli(a);
    }
  },
  created() {
    this.ytitle = this.$route.params.tit;
    // 接口  7
    var api = "https://elm.cangdu.org/shopping/v2/restaurant/category";
    var _this = this;
    this.$http.get(api).then(data => {
      //关闭加载提示
      // loadingInstance1.close();
      // 成功后的回调
      //展示所有商店名
      _this.data = data.data;
    });
    let api1 =
      "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
    //promise写法
    this.$http.get(api1).then(data1 => {
      //关闭加载提示
      // loadingInstance1.close();
      // 成功后的回调
      //展示所有商店名
      _this.data1 = data1.data;
    });
    let api2 =
      "https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes";
    //promise写法
    this.$http.get(api2).then(data2 => {
      //关闭加载提示
      // loadingInstance1.close();
      // 成功后的回调
      //展示所有商店名
      _this.data2 = data2.data;
    });
  }
};
</script>
<style scoped ="scoped">
.active {
   background: white;

 }
.biana2{
   width: 0.2rem;
  position:absolute;
  top: 0.55rem;
  left: 3.34rem;
}
.bian2 {
  width: 0.15rem;
  position: absolute;
  top: 0.57rem;
  left: 3.36rem;
}
.biana1 {
  width: 0.2rem;
  position: absolute;
  top: 0.55rem;
  left: 2.2rem;
}
.bian1 {
  width: 0.15rem;
  position: absolute;
  top: 0.57rem;
  left: 2.22rem;
}
.biana {
  width: 0.2rem;
  position: absolute;
  top: 0.55rem;
  left: 1.04rem;
}
.bian {
  width: 0.15rem;
  position: absolute;
  top: 0.57rem;
  left: 1.06rem;
}
.yes {
  width: 0.15rem;
}
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
  position: fixed;
  top: 0;
  z-index: 10;
}
.box {
  margin-top: 0.457rem;
}
.title {
  display: flex;
  justify-content: space-around;
  height: 0.375rem;
  line-height: 0.375rem;
}
.box2 {
  height: 3.78rem;
}
.box2 div {
  float: left;
  width: 50%;
  text-align: center;
}
.xiangqing {
  height: 3.78rem;
  overflow: scroll;
  position: absolute;
  top: 0rem;
  left: 50%;
  background-color: white;
  z-index: 10;
}
/* 隐藏滚动条 */
.xiangqing::-webkit-scrollbar {
  display: none;
}
.box2 li {
  line-height: 0.42rem;
}
.fenlei img {
  width: 0.1875rem;
}
.fenlei ol {
  background-color: rgba(230, 230, 230, 1);
}
.fenlei li {
  height: 0.42rem;
  /* background-color: rgba(230, 230, 230, 1); */
  color: rgb(100, 100, 100);
  font-size: 0.015rem;
}
.xiangqing li {
  height: 0.41rem;
  border-bottom: 0.01rem solid rgb(230, 230, 230);
  font-size: 0.13rem;
  color: rgb(100, 100, 100);
}
.sp1 {
  /* border: 1px solid red; */
  /* padding: 0.1rem; */
  float: left;
  margin-left: 0.1rem;
}
.sp2 {
  background-color: rgba(200, 200, 200, 1);
  color: white;
  border-radius: 35%;
  /* float: right; */
  margin-left: 0.5rem;
}
/* .sp3 {
  float: right;
  margin-right: 0.1rem;
} */
.shaixuan li {
  width: 30%;
  border: 0.01rem solid rgb(230, 230, 230);
  height: 0.32rem;
  line-height: 0.32rem;
  font-size: 0.12rem;
  margin-top: 0.1rem;
}
.shaixuan {
  font-size: 0.12rem;
}
.shaixuan ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
}
.btn1 {
  width: 1.77rem;
  height: 0.422rem;
  background-color: aliceblue;
  border: 1px solid aliceblue;
  border-radius: 4%;
  margin-top: 0.1rem;
}
.btn2 {
  background-color: green;
  width: 1.77rem;
  height: 0.422rem;
  border: 1px solid green;
  border-radius: 4%;
}
.bird {
  width: 1rem;
  border: 0.01rem solid rgb(230, 230, 230);
  margin: 0.1rem;
  padding: 0.08rem;
  /* line-height: 0.17rem; */
}
.bird img {
  width: 0.15rem;
}
.p1 {
  margin-left: 0.1rem;
}
.xulie {
  font-size: 0.12rem;
}
.xulie img {
  width: 0.16rem;
  margin: 0 0.15rem;
}
.xulie li {
  width: 3.75rem;
  height: 0.57rem;
  border-bottom: 0.01rem solid rgb(230, 230, 230);
  line-height: 0.57rem;
}
.box2 {
  /* border: 1px solid red; */
  position: absolute;
  width: 100%;
  top: 0.82rem;
  left: 0;
  z-index: 100;
}
.xulie,
.shaixuan {
  position: absolute;
  width: 100%;
  top: 0.82rem;
  left: 0;
  background-color: white;
  z-index: 100;
}
.span1 {
  float: left;
  margin-left: 0.1rem;
}
.span2 {
  float: right;
  margin-right: 0.1rem;
}
.imgback{
  width: 0.4rem;
}
</style>

