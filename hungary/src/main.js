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
  state: {
    parameter1: 0,
    parameter2: 0,
    login1:''
  },
  mutations: {
    back1(state, n1) {
      state.parameter1 = n1;
    },
    back2(state, n2) {
      state.parameter2 = n2;
    },
    logining(state,lo){
        this.state.login1 = lo;
        console.log(lo)
    }

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