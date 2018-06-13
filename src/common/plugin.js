import Header from './template/header/header.vue'
import footer from './template/footer/footer'

export default {
  install(Vue){
    //全局头部
    Vue.component(Header.name,Header);
    //全局底部
    Vue.component(footer.name,footer);
  }
}
