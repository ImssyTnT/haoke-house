<template>
  <div>
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="backProPage"
      class="title"
    />
  </div>
</template>

<script>
export default {
  methods: {
    // 返回上一页
    backProPage() {
      this.$router.back()
    }
  },
  props: {
    title: {
      type: String
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
