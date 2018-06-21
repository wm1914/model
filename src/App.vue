<template>
  <div id="app">
    <Layout>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script>
  import Layout from './common/template/layout/layout'

  export default {
    name: 'App',
    components: {Layout}
  }
</script>

<style lang="less">
  @import "./common/baseLess/index";
</style>
