import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import system from './module/system'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    user, system
  }
})

export default store
