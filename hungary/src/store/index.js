import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
//state
import state from './state';
//getters
import {getters} from './getters'
//mutations
import {mutations} from './mutations'
//actions
import actions from './actions'
//配置vuex
const store = new Vuex.Store({
    //共享状态：类似组件data
    state,
    //类似组件中的computed，依赖state 
    getters,
    //修改状态的方法:类似组件的methods
    //处理同步操作！！！
    mutations,
    //Action 类似于 mutation，不同在于：
    //Action 提交的是 mutation，而不是直接变更状态。
    //Action 可以包含任意异步操作。
    actions
  })

  //导出存储对象
  export default store;