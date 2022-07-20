<template>
  <div>
    <!-- 头部导航 Start-->
    <NavBar title="城市列表"></NavBar>
    <!-- 头部导航 End-->
    <!-- <div v-for="(value, key, index) in cityList" :key="index">{{ key }}</div> -->
    <!-- 索引栏 Start -->
    <van-index-bar highlight-color="red" :index-list="indexList">
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell :title="currentCity"></van-cell>
      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell
        v-for="item in hotCityList"
        :key="item.value"
        :title="item.label"
        @click="onClickCity(item.label)"
      ></van-cell>
      <div v-for="(value, key) in cityName" :key="key">
        <van-index-anchor :index="key">{{ key }}</van-index-anchor>
        <van-cell
          v-for="item in value"
          :key="item.value"
          :title="item.label"
          @click="onClickCity(item.label)"
        />
      </div>
    </van-index-bar>
    <!-- 索引栏 End -->
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { getCityList, getHotCityList } from '@/api'
export default {
  name: 'city',
  data() {
    return {
      indexList: [
        '#',
        '热',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ],
      cityList: [],
      hotCityList: [],
      currentCity: ''
    }
  },
  created() {
    this.getCityList()
    this.getHotCityList()
    this.currentCity = this.$route.query.City
  },
  components: {
    NavBar
  },
  methods: {
    // 获取城市列表
    async getCityList() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const { data } = await getCityList(1)
        this.cityList = data.body
      } catch (error) {
        this.$toast.fail('获取城市列表失败,请刷新')
      } finally {
        this.$toast.clear()
      }
    },
    // 获取热门城市
    async getHotCityList() {
      try {
        const { data } = await getHotCityList()
        this.hotCityList = data.body
      } catch (error) {
        this.$toast.fail('获取城市失败,请刷新')
      }
    },
    // 点击选择城市
    onClickCity(title) {
      console.log(title)
      if (title !== '暂无城市') {
        this.$router.push({
          path: '/layout/home',
          query: { title }
        })
      }
    }
  },
  computed: {
    cityName() {
      const arr = {}
      this.indexList.forEach((item) => {
        if (item !== '#' && item !== '热') {
          arr[item] = []
        }
        this.cityList.forEach((el) => {
          const first = el.short.substring(0, 1).toUpperCase()
          if (item === first) {
            arr[item].push(el)
          }
        })
      })
      for (const k in arr) {
        if (arr[k].length === 0) {
          arr[k].push({ label: '暂无城市' })
        }
      }
      return arr
    }
  }
}
</script>

<style lang="less" scoped>
:deep(.van-index-bar__sidebar) {
  height: 80%;
  top: 53%;
  .van-index-bar__index {
    flex: 1;
    color: black;
    font-size: 15px;
    font-weight: 300;
  }
}
.van-index-bar {
  :deep(.van-index-anchor) {
    color: #999;
    font-weight: normal;
  }
}
.van-cell {
  font-size: 16px;
  border-bottom: 1px solid #eee;
}
</style>
