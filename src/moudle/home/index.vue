<template>
  <div class="hello">
    <headers></headers>
    <div>content</div>
    <footers></footers>
  </div>
</template>

<script>
  import {apiTest} from './api'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.apiTest();
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
