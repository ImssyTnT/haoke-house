<template>
  <div>
    <!-- 头部导航 Start -->
    <NavBar title="收藏列表"></NavBar>
    <!-- 头部导航 End -->
    <MyGoodsList
      v-for="(item, index) in goodsList"
      :key="index"
      :item="item"
      @go="goDetail"
    ></MyGoodsList>
  </div>
</template>

<script>
import MyGoodsList from '@/components/MyGoodsList.vue'
import NavBar from '@/components/NavBar.vue'
import { getFavorate } from '@/api'
export default {
  name: 'favorate',
  created() {
    this.title = this.$route.query.title
    this.getFavorate()
  },
  data() {
    return {
      goodsList: []
    }
  },
  components: {
    MyGoodsList,
    NavBar
  },
  methods: {
    // 获取用户收藏列表
    async getFavorate() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const { data } = await getFavorate()
        this.goodsList = data.body
      } catch (error) {
        this.$toast.fail('数据获取失败')
      } finally {
        this.$toast.clear()
      }
    },
    // 跳转房屋详情
    goDetail(id) {
      this.$router.push({
        path: '/detail',
        query: {
          id
        }
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
