<template>
  <div>
    <!-- 头部导航 Start -->
    <van-nav-bar
      title="收藏列表"
      left-arrow
      @click-left="backProPage"
      class="title"
    />
    <!-- 头部导航 End -->
    <MyGoodsList></MyGoodsList>
  </div>
</template>

<script>
import MyGoodsList from '@/components/MyGoodsList.vue'
export default {
  components: {
    MyGoodsList
  },
  methods: {
    backProPage() {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  background-color: #21b97a;
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
  :deep(.van-icon) {
    color: #fff;
  }
}
</style>
