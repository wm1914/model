import Login from '../module/login/login'
import Page401 from '../common/template/401/401'
import Page404 from '../common/template/404/404'

export default [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // 设置404页面 找不到页面
  {
    path: '/404',
    name: '404',
    component: Page404
  },
  // 设置401页面 无权限
  {
    path: '/401',
    name: '401',
    component: Page401
  }
]
