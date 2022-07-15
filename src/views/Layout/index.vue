<template>
  <div>
    <router-view></router-view>
    <!-- 底部导航 Start -->
    <van-tabbar v-model="active" class="tabbar" active-color="#21B97A" route>
      <van-tabbar-item to="/layout/home">
        <template #icon>
          <span class="house house-shouye-1"></span>
        </template>
        首页
      </van-tabbar-item>
      <van-tabbar-item to="/layout/area">
        <template #icon>
          <span class="house house-sousuo"></span>
        </template>
        找房
      </van-tabbar-item>
      <van-tabbar-item to="/layout/houseinfo">
        <template #icon>
          <span class="house house-zixun"></span>
        </template>
        资讯
      </van-tabbar-item>
      <van-tabbar-item to="/layout/user">
        <template #icon>
          <span class="house house-wode"></span>
        </template>
        我的
      </van-tabbar-item>
    </van-tabbar>
    <!-- 底部导航 End -->
  </div>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
.tabbar {
  span {
    font-size: 22px;
  }
}
</style>
