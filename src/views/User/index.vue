<template>
  <div class="main">
    <!-- 用户信息 Start -->
    <div class="title">
      <!-- 背景图片 -->
      <img :src="avatar || bgImg" alt="" />
      <!-- 用户登录信息 -->
      <div class="userinfo userlogin" v-if="isShow">
        <!-- 用户头像 -->
        <div class="usericon">
          <img :src="`http://liufusong.top:8080${userInfo.avatar}`" alt="" />
        </div>
        <!-- 用户名 -->
        <div class="username">{{ userInfo.username }}</div>
        <!-- 登录按钮 -->
        <div class="btn">
          <van-button
            type="primary"
            size="mini"
            class="outlogin"
            color="#21b97a"
            @click="outLoginFn"
            round
            >退出</van-button
          >
          <p>编辑个人资料<van-icon name="play" /></p>
        </div>
      </div>
      <!-- 用户未登录信息 -->
      <div class="userinfo" v-else>
        <!-- 用户头像 -->
        <div class="usericon">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
        </div>
        <!-- 用户名 -->
        <div class="username">游客</div>
        <!-- 登录按钮 -->
        <div class="btn">
          <van-button
            type="primary"
            size="small"
            class="loginbtn"
            color="#21b97a"
            @click="goLoginFn"
            >去登录</van-button
          >
        </div>
      </div>
    </div>
    <!-- 用户信息 End -->

    <!-- 宫格区域 Start -->
    <div class="grid">
      <van-grid :column-num="3" :border="false" icon-size="20px" clickable>
        <van-grid-item text="我的收藏" to="/favorate">
          <template #icon>
            <span class="house house-shoucang"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="我的出租">
          <template #icon>
            <span class="house house-shouye-weixuanzhong"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="看房记录">
          <template #icon>
            <span class="house house-shizhong1"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="成为房主">
          <template #icon>
            <span class="house house-xinyongqia"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="个人资料">
          <template #icon>
            <span class="house house-jurassic_user"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="联系我们">
          <template #icon>
            <span class="house house-kefu"></span>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 宫格区域 End -->

    <!-- 底部广告 Start -->
    <div class="pic">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
    <!-- 底部广告 End -->
  </div>
</template>

<script>
import { user } from '@/api/user.js'
import bgImg from '@/assets/WechatIMG3486.png'
export default {
  data() {
    return {
      bgImg,
      userInfo: {},
      avatar: ''
    }
  },
  computed: {
    isShow() {
      return !!this.$store.state.user.token
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    // 登录事件
    goLoginFn() {
      this.$router.push({
        path: '/login'
      })
    },
    // 退出按钮事件
    outLoginFn() {
      this.$dialog
        .confirm({
          title: '提示',
          message: '是否确定退出'
        })
        .then(() => {
          this.$store.commit('setUser', {})
          this.avatar = ''
        })
    },
    // 获取用户信息
    async getUserInfo() {
      try {
        const res = await user()
        // if (res.data.status === 200) {
        //   this.isShow = false
        // } else {
        //   this.isShow = true
        // }
        //
        this.userInfo = res.data.body
        this.avatar = `http://liufusong.top:8080${this.userInfo.avatar}`
      } catch (err) {
        this.$toast.fail('请重新登录')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  margin-bottom: 50px;
  .title {
    position: relative;
    height: 375px;
    margin-bottom: 20px;
    img {
      width: 100%;
    }
    .userinfo {
      position: absolute;
      top: 230px;
      left: 50%;
      transform: translate(-50%, 0);
      display: flex;
      flex-direction: column;
      margin: -60px auto 15px;
      width: 318.75px;
      height: 165px;
      background-color: #fff;
      box-shadow: 0 0 15px 1px #ccc;
      .usericon {
        position: absolute;
        top: -30px;
        left: 50%;
        width: 60px;
        height: 60px;
        background-color: #ccc;
        border-radius: 50%;
        border: 5px solid #f5f5f5;
        transform: translate(-50%, 0);
        box-shadow: 0px 1px 3px 1px #ccc;
      }
      .username {
        width: 100%;
        font-size: 13px;
        text-align: center;
        margin-top: 56px;
      }
      .btn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .loginbtn {
          padding: 0 15px;
          border-radius: 5px;
          margin-top: 20px;
        }
      }
    }
    .userlogin {
      height: 207.95px;
      .outlogin {
        margin-top: 10px;
        padding: 10px;
      }
      p {
        margin: 0;
        margin-top: 20px;
        font-size: 12px;
        color: #999;
      }
    }
  }

  .grid {
    color: black;
    span {
      font-size: 23px;
    }
    :deep(.van-grid-item__text) {
      margin-top: 10px;
      font-size: 13px;
      color: black;
    }
  }
  .pic {
    padding: 10px;
    img {
      width: 100%;
    }
  }
}
</style>
