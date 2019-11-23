import Vue from 'vue'
import Vuex from 'vuex'
import Find from './modules/find'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    Find
  }
})
export default store