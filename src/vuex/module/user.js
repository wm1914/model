const state = {
  currentUser: 'lx',
  isLogin: true
}

const getters = {
  currentUser: state => state.currentUser,
  isLogin: state => state.isLogin
}

const mutations = {
  userStatus (state, user) {
    if (user) {
      state.currentUser = user
      state.isLogin = true
    } else {
      state.currentUser = null
      state.isLogin = false
    }
  }
}

const actions = {
  setUser ({context}, user) {
    context.commit('userStatus', user)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
