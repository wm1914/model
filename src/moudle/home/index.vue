<template>
  <div class="hello">
    <headers></headers>
    <div>content</div>
    <footers :title="msg"></footers>
  </div>
</template>

<script>
  import {apiTest} from './api'
  import io from 'socket.io-client'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        testSocket: io.connect('ws://localhost:8088/test')
      }
    },
    mounted(){
      let _this = this
      this.apiTest();
      this.testSocket.on('get_test_msg', function (data) {
        _this.msg = data.msg
      })
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
