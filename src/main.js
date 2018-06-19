// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import Plugins from './common/plugin'

Vue.use(Plugins)

//window.Base = 'http://123.59.185.101:8088';
window.Base = 'http://localhost:3000/api';
//window.Base = 'http://192.168.1.252:8080/bag';


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
