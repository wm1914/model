import axios from 'axios'

const state = {
  permission: [],
}

const actions = {
  GET_PERMISSION (token) {
    let params = {}
    params.token = token
    return axios.get(Base + '/permission/getPermission', JSON.stringify(params))
  }
}

const mutations = {
  SET_PERMISSION (state, permission) {
    Object.assign(state.permission, permission)// Object.assign()方法用于把一个或多个元对象的可枚举属性值复制到目标对象
  }

}

export default {
  state,
  actions,
  mutations
}
