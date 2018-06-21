import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import lazyLoading from '../common/utils/lazyLoading'

const baseURL = process.env.API_HOST

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    permission: [],
    currentUser: null,
    isLogin: false,
    pageStatus: true
  },
  mutations: {
    SET_PERMISSION (state, permission) {
      state.permission = []
      if (permission.length) {
        Object.assign(state.permission, permission)
        generateRouteFromMenu(state.permission)
      }
    },
    SET_USER (state, user) {
      if (user) {
        state.currentUser = user
        state.isLogin = true
      } else {
        state.currentUser = null
        state.isLogin = false
      }
    },
    SET_PAGESTATUS (state, data) {
      state.pageStatus = data
    }
  },
  actions: {
    GET_PERMISSION (token) {
      let params = {}
      params.token = token
      return axios.get(baseURL + '/permission/getPermission', JSON.stringify(params))
    }
  },
  modules: {}
})

// 组装动态路由
function generateRouteFromMenu (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].component = lazyLoading(arr[i].component)
    if (Array.isArray(arr[i].children) && arr[i].children.length > 0) {
      generateRouteFromMenu(arr[i].children)
    }
  }
}

export default store
