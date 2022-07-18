<template>
  <div>
    <!-- 头部 -->
    <NavBar title="房屋管理"></NavBar>
    <!-- 加载时 背景图 -->
    <van-empty v-if="isShow">
      <template #description>
        您还没有房源,<span class="descriptionText">去发布房源</span>吧~
      </template>
    </van-empty>
    <!-- 主体内容 -->
    <MyGoodsList
      v-else
      v-for="item in allRent"
      :key="item.houseCode"
      :item="item"
      @go="goDetail(item.houseCode)"
    ></MyGoodsList>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import MyGoodsList from '@/components/MyGoodsList.vue'
import { getRentList } from '@/api'
export default {
  name: 'rent',
  components: {
    NavBar,
    MyGoodsList
  },
  data() {
    return {
      isShow: true,
      allRent: []
    }
  },
  created() {
    this.getRentList()
  },
  methods: {
    // 获取我的出租列表
    async getRentList() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const { data } = await getRentList()
        this.allRent = data.body
      } catch (error) {
        this.$toast.fail('获取信息失败,请刷新')
      } finally {
        this.isShow = false
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

<style lang="less" scoped>
.descriptionText {
  color: #61bb89;
}
</style>
