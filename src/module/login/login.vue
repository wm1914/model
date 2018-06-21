<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px"
           class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {get,post} from '../../common/utils/axios'
  import lastRoutes from "../../router/last"

  export default {
    data () {
      return {
        logining: false,
        ruleForm: {
          account: 'admin',
          checkPass: '123456'
        },
        rules: {
          account: [
            {
              required: true,
              message: '请输入账号',
              trigger: 'blur'
            }
          ],
          checkPass: [
            {
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      handleReset () {
        this.$refs.ruleForm.resetFields()
      },
      handleSubmit (ev) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.logining = true
            let loginParams = {
              loginName: this.ruleForm.account,
              password: this.ruleForm.checkPass
            }
            post('/login', loginParams).then(res => {
              this.logining = false
              if (res.message !== 'success') {
                this.$notify({
                  title: '错误',
                  message: res.message,
                  type: 'error'
                })
              } else {
                window.sessionStorage.setItem('token', JSON.stringify(res.token))
                this.$store.commit('SET_USER', res.user)
                this.$store.commit('SET_PERMISSION', res.permission)
                this.$router.addRoutes(this.$store.state.permission)
                this.$router.addRoutes(lastRoutes)
                this.$router.push({path: '/'})
              }
            })
          }
        })
      }
    }
  }
</script>

<style lang="less">

</style>
