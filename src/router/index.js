import Vue from 'vue'
import Router from 'vue-router'
import home from './home'


Vue.use(Router)

const routers = new Router({
  mode: 'history',
  routes: [
    ...home
  ]
})

export default routers
