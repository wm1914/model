import Page404 from '../common/template/404/404'

export default [
  // 设置默认页面
  {
    path: '/',
    redirect: '/home'
  },
  // 设置404页面
  {
    path: '*',
    component: Page404,
    name: 'notFound'
  }
]
