import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SVG from 'svg.js'


export default {
  install(Vue){

    //element 框架
    Vue.use(ElementUI);

    Vue.prototype.SVG = SVG;
  }
}
