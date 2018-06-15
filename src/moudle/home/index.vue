<template>
  <div class="hello">
    <headers></headers>
    <div>content</div>
    <div id="map-container"></div>
    <footers :title="msg"></footers>
  </div>
</template>

<script>
  import {apiTest} from './api'
  import io from 'socket.io-client'
  import AMap from 'AMap'
  // AMapUI以后扩展可能用到
  import AMapuUI from 'AMapUI'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        testSocket: io.connect('ws://localhost:8088/test'),
        map: null
      }
    },
    mounted(){
      let _this = this
      this.apiTest();
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
      mapInit () {
        this.map = new AMap.Map('map-container', {
          center: [120.387057,36.06142],
          zoom: 9
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map-container {
    width: 100%;
    height: 500px;
  }
</style>
