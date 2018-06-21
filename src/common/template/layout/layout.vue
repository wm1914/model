<template>
  <div>
    <div v-if="pageStatus">
      <my-header></my-header>
      <el-container class="sys-content">
        <el-aside class="sys-aside">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-menu-item index="1-4">选项4</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="sys-main">
          <div class="sys-main-content">
            <slot></slot>
          </div>
        </el-main>
      </el-container>
      <my-footer></my-footer>
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Header from '../header/header'
  import Footer from '../footer/footer'
  import store from '../../../vuex/store'

  export default {
    name: 'layout',
    components: {
      'my-header': Header,
      'my-footer': Footer
    },
    data(){
      return {
      }
    },
    computed: {
      pageStatus: function () {
        return store.state.pageStatus
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created () {
      // let pageName = this.$route.name
      // console.log(pageName)
      // // 404或者登录 不需要使用系统网页模板
      // if (pageName === '404' || pageName === 'login' || pageName === 'notFound') {
      //   this.pageStatus = false
      // }
    }
  }
</script>

<style lang="less" scoped>

</style>
