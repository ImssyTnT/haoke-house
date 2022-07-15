<template>
  <div>
    <!-- 用户信息 Start -->
    <div class="title">
      <!-- 背景图片 -->
      <img src="@/assets/WechatIMG3486.png" alt="" />
      <!-- 用户信息 -->
      <div class="userinfo">
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
      <van-grid :column-num="3" :border="false" icon-size="20px">
        <van-grid-item text="我的收藏">
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
export default {
  async created() {},
  methods: {
    goLoginFn() {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  position: relative;
  margin-bottom: 120px;
  img {
    width: 100%;
  }
  .userinfo {
    position: absolute;
    top: 135px;
    left: 50%;
    width: 318.75px;
    height: 165px;
    background-color: #fff;
    box-shadow: 0 0 15px 1px #ccc;
    transform: translate(-50%, 0);
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
      justify-content: center;
      margin-top: 20px;
      .loginbtn {
        padding: 0 15px;
        border-radius: 5px;
      }
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
</style>
