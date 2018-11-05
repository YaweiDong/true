<template>
    <div>
        <header class="m-top">
           <router-link to='/information/address'>
           <img :src="timg" alt="">
           </router-link>    
           <span>新增地址</span>
         </header>

         <keep-alive>      
         <div class='input'>
             <div>
                <input :class="{border:p1}" @blur="inp1()" type="text" placeholder="请填写你的姓名" v-model="names">
                <p class="pp" v-show="p1">2-7位数字，字母或数字</p>
                <input @click="btn()" type="text" placeholder="小区/写字楼/学校等" v-model="home">
                <input :class="{border:p3}" @blur="inp2()" type="text" placeholder="请填写详细的送餐地址" v-model="address">
                <p class="pp" v-show="p3">请按要求填写地址</p>
                <input maxlength="11" :class="{border:p4}" @blur="inp3()" type="text" placeholder="请填写能够联系到您的手机号" v-model="phone">
                <p class="pp" v-show="p4">请填写规范的手机号</p>
                <input maxlength="11" :class="{border:p4}" @blur="inp4()" type="text" placeholder="备用联系电话（选填）" v-model="phone1">
                <p class="pp" v-show="p4">请填写规范的手机号</p>
             </div>           
         </div>
         </keep-alive>
         
         <div @click="add()" class="add">
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
      names: "",
      home: "",
      address: "",
      phone: "",
      phone1: "",
      p1: false,
      p2: false,
      p3: false,
      p4: false
    };
  },
  computed: {},
  created() {
    this.names = this.$store.state.input1;
    this.address = this.$store.state.input2;
    this.phone = this.$store.state.input3;
    this.phone1 = this.$store.state.input4;
    var aa = this.$route.params.adr;
    if (aa !== undefined) {
      this.home = aa.name; //城市名
    }
  },
  methods: {
    inp1() {
      this.$store.commit("inp1", this.names);
    },
    inp2() {
      this.$store.commit("inp2", this.address);
    },
    inp3() {
      this.$store.commit("inp3", this.phone);
    },
    inp4() {
      this.$store.commit("inp4", this.phone1);
    },
    btn() {
      this.$router.push({ name: "addDetail" });
    },
    add() {
      if (
        this.names == "" ||
        this.address == "" ||
        this.phone == "" ||
        this.home == ""
      ) {
        alert("内容不可为空，请填写！");
        return;
      } else {
        //姓名,地址正则判断
        var strname = /^([\u4e00-\u9fa5|\w]){2,7}$/; //名字
        var strphone = /^1[3|5|7|8|9][0-9]{9}$/; //手机号判断
        var s1 = strname.test(this.names); //名字
        var s3 = strphone.test(this.phone); //手机号
        var s4 = strphone.test(this.phone1); //备用手机号
        if (s1 == false || s3 == false || s4 == false) {
          this.p1 = !s1;
          this.p3 = !s2;
          this.p4 = !s3;
          this.p5 = !s4;
          //alert("请按要求填写,姓名，地址和手机号");
        } else {
          var aa = this.$route.params.adr;
          if (aa !== "") {
            let api = `https://elm.cangdu.org/v1/users/${
              this.$store.state.login1.user_id
            }/addresses`;
            this.$http({
              method: "post",
              url: api,
              data: {
                address: aa.address, //地址
                address_detail: this.address, //地址详情
                geohash: aa.geohash, //经纬度
                name: this.names, //用户名
                phone: this.phone, //手机号
                tag: "1", //标签
                sex: 1,
                phone_bk: this.phone1,
                tag_type: 2
              }
            }).then(res => {
              console.log(res);
              if (res.data.status == 1) {
                alert(res.data.success);
                this.$router.push({ name: "ad" });
                this.$store.commit("inp1", "");
                this.$store.commit("inp2", "");
                this.$store.commit("inp3", "");
                this.$store.commit("inp4", "");
              } else {
                alert(res.data.message);
                console.log(res);
              }
            });
          }
        }
      }
    }
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
  padding-bottom: 0.1rem;
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
#jump {
  color: red;
}
.border {
  border-color: red;
}
.pp {
  color: red;
  font-size: 0.15rem;
  padding: 0.02rem 0;
}
</style>