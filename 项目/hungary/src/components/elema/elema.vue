<template>
    <div>
        <!-- 外卖首页顶部 -->           
        <div class="top"></div>
         <div class="scroll" style="width:100%">
    <swiper :options="swiperOption" ref="mySwiper">
        
      <!-- slides -->
      <swiper-slide>

          <!-- 滚动第一个界面 -->
          <div class="swiperdiv">
            <li class="linkli" v-for="item in imgs1" :key="item.id">
                <!-- 循环路由 -->
            <router-link :to="{name:'tian',params:{tit:item.title}}">
                <br>
                <div class="linkdiv">
                
                <img width="40px" :src="item.src" alt="">
                <br>
                {{item.title}}
                </div>
                </router-link>
            <!-- <em>{{item.title}}</em> -->
            

        </li>
          </div>
          <div class="swiperdiv">
            <li class="linkli" v-for="item in imgs2" :key="item.id">
                <!-- 循环路由 -->
            <router-link :to="{name:'tian',params:{tit:item.title}}">
                <br>
                <div class="linkdiv">
                
                <img width="40px" :src="item.src" alt="">
                <br>
                {{item.title}}
                </div>
                </router-link>
            <!-- <em>{{item.title}}</em> -->
            

        </li>
          </div>

      </swiper-slide>

      <swiper-slide>
          <!-- 滚动的第二个界面 -->
          <div class="swiperdiv">
            <li class="linkli" v-for="item in imgs3" :key="item.id">
                <!-- 循环路由 -->
            <router-link :to="{name:'tian',params:{tit:item.title}}">
                <br>
                <div class="linkdiv">
                
                <img width="40px" :src="item.src" alt="">
                <br>
                {{item.title}}
                </div>
                </router-link>
            <!-- <em>{{item.title}}</em> -->
            

        </li>
          </div>
          <div class="swiperdiv">
            <li class="linkli" v-for="item in imgs4" :key="item.id">
                <!-- 循环路由 -->
            <router-link :to="{name:'tian',params:{tit:item.title}}">
                <br>
                <div class="linkdiv">
                
                <img width="40px" :src="item.src" alt="">
                <br>
                {{item.title}}
                </div>
                </router-link>
            <!-- <em>{{item.title}}</em> -->
            

        </li>
          </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination "  slot="pagination"></div>
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->

    </swiper> 
  </div>
  
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper' 
import img01 from "./img/1.png";
import img02 from "./img/2.png";
import img03 from "./img/3.png";
import img04 from "./img/4.png";
import img05 from "./img/5.png";
import img06 from "./img/6.png";
import img07 from "./img/7.png";
import img08 from "./img/8.png";
import img09 from "./img/9.png";
import img10 from "./img/10.png";
import img11 from "./img/11.png";
import img12 from "./img/12.png";
import img13 from "./img/13.png";
import img14 from "./img/14.png";
import img15 from "./img/15.png";
import img16 from "./img/16.png";
    export default{
    components: {  
      swiper,  
      swiperSlide  
  },  
  data () {
    return {
        imgs1:[
        { title: "甜品饮品", src: img01, id: 1 , dz:"/tian" },
        { title: "商超便利", src: img02, id: 2 , dz:"/tian" },
         { title: "美食", src: img03, id: 3 , dz:"/tian" },
          { title: "简餐", src: img04, id: 4 , dz:"/tian" },
        ],
         imgs2:[
        { title: "新店特惠", src: img05, id: 5 , dz:"/tian" },
        { title: "准时达", src: img06, id: 6 , dz:"/tian" },
         { title: "预定早餐", src: img07, id: 7 , dz:"/tian" },
          { title: "土豪推荐", src: img08, id: 8 , dz:"/tian" },
        ],
         imgs3:[
        { title: "川湘菜", src: img09, id: 9 , dz:"/tian" },
        { title: "麻辣烫", src: img10, id: 10 , dz:"/tian" },
         { title: "包子粥店", src: img11, id:11 , dz:"/tian" },
          { title: "新花蛋糕", src: img12, id: 12 , dz:"/tian" },
        ], imgs4:[
        { title: "日韩料理", src: img13, id: 13 , dz:"/tian" },
        { title: "果蔬生鲜", src: img14, id: 14 , dz:"/tian" },
         { title: "韩版薯条", src: img15, id: 15 , dz:"/tian" },
          { title: "披萨意面", src: img16, id: 16 , dz:"/tian" },
        ],
        

       swiperOption: {  
          notNextTick: true,
          //循环
          loop:true,
          //设定初始化时slide的索引
          initialSlide:0,
          // 设置轮播
          effect : 'slide',
          //滑动速度
          speed:800,
          //滑动方向
          direction : 'horizontal',
          //小手掌抓取滑动
          // grabCursor : true,
          //滑动之后回调函数
          on: {
              slideChangeTransitionEnd: function(){
                // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
              },
          },
          //分页器设置         
          pagination: {
              el: '.swiper-pagination',
              clickable :true
          }
        },
        swiperSlides: [1, 2, 3, 4]
    }
  },
  computed: {  
    swiper() {  
      return this.$refs.mySwiper.swiper;  
    }  
  }, 
  mounted () {  
    //可以使用swiper这个对象去使用swiper官网中的那些方法  
     console.log('this is current swiper instance object', this.swiper);
      // this.swiper.slideTo(0, 0, false);
  }   
        
    }
</script>
<style scoped ="scoped">
.scroll{
      border-bottom: 0.1px solid rgba(111,111,111,0.9);
  padding-bottom: 0.1rem
}
.top{
    background-color:dodgerblue;
    width: 100%;
    height: 0.457rem;
}
.swiper-slide{
  height:1.9rem;
}
.swiperdiv{
      display: flex;
  justify-content: space-around;
}
.linkdiv{
      display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.14rem;
  color:gray;
  /* width: 50%; */
}
</style>
