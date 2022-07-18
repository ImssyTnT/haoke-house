<template>
  <div>
    <!-- 头部导航 Start -->
    <van-nav-bar
      title="账号登录"
      left-arrow
      @click-left="backProPage"
      class="navbar"
    />
    <!-- 头部导航 End -->
    <!-- 表单布局 Start -->
    <div class="margin"></div>
    <van-form @submit="loginFn" class="form">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请输入账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <div style="margin: 16px">
        <van-button
          color="#58b67f"
          block
          type="info"
          native-type="submit"
          class="formBtn"
          >登录</van-button
        >
      </div>
    </van-form>
    <!-- 表单布局 End -->
  </div>
</template>

<script>
import { login } from '@/api'
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 返回上一页
    backProPage() {
      this.$router.back()
    },
    // 登录
    async loginFn() {
      this.$toast.loading({
        message: '正在登录...',
        forbidClick: true,
        duration: 0
      })
      try {
        const res = await login(this.username, this.password)
        const { data } = res
        this.$store.commit('setUser', data.body)
        this.$router.push({
          path: '/layout/user'
        })
        this.$toast.success(data.description)
      } catch (err) {
        console.log(err)
        this.$toast.fail('账号登录失败!')
      } finally {
        this.$toast.clear()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  background-color: #1cb676;

  :deep(.van-nav-bar__title) {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
  }
  :deep(.van-icon) {
    font-size: 22px;
    color: #fff;
  }
}
.margin {
  height: 21px;
}
.form {
  :deep(.van-field__control) {
    height: 40px;
    font-size: 17px;
  }
  .van-button {
    height: 50px;
    margin-top: 20px;
    font-size: 18px;
    background: #1cb676 !important;
    border: 1px solid #1cb676;
  }
}
</style>
