// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  //设置全局访问对象，定义值
  state: {
    parameter1: 0,
    parameter2: 0,
    login1:''
  },
  //可以修改state里的值，修改值
  mutations: {
    back1(state, n1) {
      state.parameter1 = n1;
    },
    back2(state, n2) {
      state.parameter2 = n2;
    },
    logining(state,lo){
        state.login1 = lo;
    }

  },
  //可以实时坚挺state值的变化（最新状态），获取值
  getters:{
      user(state){
          return state.login1;
      }
  },
  //自定义触发mutations 异步操作（过滤一遍mutations）
  actions:{
    //全局调用方法
    //this.$store.dispatch('方法名'，要变化的参数)

  }

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
