import store from '../../vuex/store'
import router from '../../router'
import lastRoutes from '../../router/last'

// 系统路由白名单
const whiteList = [
  '/login',
  '/404',
  '/401'
]

// 不需要加载首尾的页面
const pageOwnList = [
  'login',
  '404',
  'notFound'
]

const permissionUtil = {}

permissionUtil.checkUrl = function (to, from, next) {
  // 检测是否需要加载全局模板样式
  permissionUtil.checkPageStatus(to.name)
  // 跳转逻辑的处理
  permissionUtil.checkAuthorization(to, from, next)
}

/**
 * 设置是否加载全局头尾
 */
permissionUtil.checkPageStatus = function (name) {
  if (pageOwnList.indexOf(name) !== -1) {
    store.commit('SET_PAGESTATUS', false)
  } else {
    store.commit('SET_PAGESTATUS', true)
  }
}

/**
 * 路由权限拦截
 */
permissionUtil.checkAuthorization = function (to, from, next) {
  let token = permissionUtil.getToken()
  if (token) {
    // 有token的,判断拦截
    if (to.path === '/login') {
      // 登录后手动输入login地址,跳转到首页
      next({path: '/'})
    } else {
      if (!store.state.permission || store.state.permission.length === 0) {
        // store中数据清空，一般是刷新页面或手动输入网址
        store.dispatch('GET_PERMISSION', token).then(res => {
          if (res.data.message !== 'success') {
            next('/login')
          } else {
            store.commit('SET_USER', res.data.user)
            store.commit('SET_PERMISSION', res.data.permission)
            router.addRoutes(store.state.permission)
            router.addRoutes(lastRoutes)
            next({ ...to, replace: true })
          }
        })
      } else {
        // store中存储着数据，不用重新构建动态路由
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 白名单中的不进行拦截
      next()
    } else {
      // 没有token,直接跳转登录页面
      next('/login')
    }
  }
}

/**
 * 清除token,退出登录的时候用
 */
permissionUtil.logout = function () {
  permissionUtil.setToken('')
  store.commit('SET_PERMISSION', [])
}

permissionUtil.setToken = function (token) {
  sessionStorage.setItem('token', token)
}

permissionUtil.getToken = function () {
  return sessionStorage.getItem('token')
}

export default permissionUtil


