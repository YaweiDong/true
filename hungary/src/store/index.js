//引入vue环境
import Vue from 'vue'
import Vuex from 'vuex'

//引入模块
import state from './state'
import getters from './getters'
import {mutations} from './mutations'
import {actions} from './actions'

//配置vuex
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

//导出
export {store}