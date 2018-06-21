import Vue from 'vue'
import VueRouter from 'vue-router'
import Common from './common'
import permissionUtil from '../common/utils/permissionUtil'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: []
})

router.addRoutes(Common)

// 路由权限验证
router.beforeEach(permissionUtil.checkUrl)

export default router
