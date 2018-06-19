import Header from './template/header/header.vue'
import footer from './template/footer/footer'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SVG from 'svg.js'


export default {
  install(Vue){

    //element 框架
    Vue.use(ElementUI);

    Vue.prototype.SVG = SVG;

    //全局头部
    Vue.component(Header.name,Header);
    //全局底部
    Vue.component(footer.name,footer);

  }
}
