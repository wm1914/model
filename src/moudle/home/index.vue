<template>
  <div class="hello">
    <headers></headers>
    <div>content</div>
    <div id="map-container"></div>
    <div class="img-container">
      <img class="image" ref="cameraPic" src="./img/test2.png" alt="">
      <div id="svg_draw"></div>
    </div>
    <footers :title="msg"></footers>
  </div>
</template>

<script>
  import {apiTest} from './api'
  import io from 'socket.io-client'
  import $ from 'jquery'
  import AMap from 'AMap'
  // AMapUI以后扩展可能用到
  import AMapUI from 'AMapUI'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        testSocket: io.connect('ws://localhost:8088/test'),
        map: null,
        picSize: {
          picW: '', // 原图片的宽高
          picH: '',
          sPicW: '', // 缩放后的图片大小
          sPicH: '',
          sTop: '', // 缩放后的图片偏移
          sLeft: ''
        },
        svgList:[
          {
            x:215*3.84,
            y:117*3.84,
            width:50*3.84,
            height:50*3.84,
          },
          {
            x:275*3.84,
            y:105*3.84,
            width:50*3.84,
            height:50*3.84,
          }
        ]
      }
    },
    mounted(){
      let _this = this
       this.apiTest();
       this.countWH();
       this.testSocket.on('get_test_msg', function (data) {
        _this.msg = data.msg
      })
      // 初始化地图
      this.mapInit()
    },
    destroyed(){
      this.testSocket.disconnect()
    },
    methods:{
      //接口测试
      apiTest(){
        let _obj = {
          parentIndexCode: -1,
        };
        apiTest(_obj).then((res) =>{
          console.log(res)
        })
          .catch(err =>{
            console.log(err)
          })
      },

      //地图测试
      mapInit () {
        this.map = new AMap.Map('map-container', {
          center: [120.387057,36.06142],
          zoom: 9
        })
      },

      //svg测试-------------------
      //设置
        countWH () {
        let _w, _h;
        if (typeof (this.$refs.cameraPic.naturalWidth) === 'undefined') {
          // IE 6/7/8
          let i = new Image()
          i.src = this.$refs.cameraPic.src
          _w = i.width
          _h = i.height
        } else {
          // HTML5 browsers
          _w = this.$refs.cameraPic.naturalWidth
          _h = this.$refs.cameraPic.naturalHeight
        }
        //计算宽高比，判断图片是高度自适应，还是宽度自适应，防止图片失真。
        const _pw = $('.img-container').width()
        const _ph = $('.img-container').height()
        if (_w / _h > _pw / _ph) {
          this.$refs.cameraPic.style.width = _pw + 'px'
          this.$refs.cameraPic.style.height = (_pw * _h) /_w +'px'
        } else {
          this.$refs.cameraPic.style.width = (_ph * _w) /_h +'px'
          this.$refs.cameraPic.style.height = _ph + 'px'
        }

          // 缩放后图片的尺寸
          this.picSize.sPicW = this.$refs.cameraPic.width;
          this.picSize.sPicH = this.$refs.cameraPic.height;
          this.picSize.sTop = this.$refs.cameraPic.offsetTop;
          this.picSize.sLeft = this.$refs.cameraPic.offsetLeft;

        // 原图片的尺寸
        this.picSize.picW = _w
        this.picSize.picH = _h
          console.log(this.picSize)
        this.drawScaleTarget()
      },
        drawScaleTarget () {
        let _this = this;
          let svgTarget = document.getElementById('svg_draw');//获取画布根节点
          svgTarget.style.width = this.picSize.sPicW + 'px';//设置根节点宽度
          svgTarget.style.height = this.picSize.sPicH + 'px';//设置根节点高度
          svgTarget.style.top = this.picSize.sTop + 'px';//设置根节点位置
          svgTarget.style.left = this.picSize.sLeft + 'px';//设置根节点位置
          let ratio = _this.picSize.picW / _this.picSize.sPicW;//计算压缩后比例

          let draw = this.SVG('svg_draw').size('100%', '100%');//设置画布
          this.svgList.forEach((item) =>{            //循环遍历后台返回的数值，渲染页面
            let rect = draw.rect(item.width / ratio, item.height / ratio).fill('transparent').stroke({
              color: '#3497db',
              opacity: 1,
              width: 2
            }).move(item.x / ratio, item.y / ratio).addClass('my-elem');
          });

      },
      //svg测试-------------------
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  #map-container {
    width: 100%;
    height: 500px;
  }
  .img-container{
    width: 500px;
    height: 500px;
    margin: 0 auto;
    #svg_draw{
      position: absolute;
    }

  }

</style>
