<template>
  <div>
    <!-- 顶部搜索框 Start -->
    <div class="title">
      <van-search
        shape="round"
        v-model="value"
        placeholder="请输入搜索关键词"
        background="#fff"
      >
        <template #left>
          <span class="name" @click="goCity(City)">{{ City }}</span>
          <span class="house house-xiajiantou"></span>
        </template>
      </van-search>
      <span class="house house-ditudingwei"></span>
    </div>
    <!-- 顶部搜索框 End -->
    <!-- 轮播图 Start -->
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      width="375"
      height="212"
    >
      <van-swipe-item v-for="item in swiperImg" :key="item.id">
        <template #default>
          <van-image
            width="100%"
            height="100%"
            :src="`http://liufusong.top:8080${item.imgSrc}`"
          />
        </template>
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图 End -->
    <!-- 导航区域 Start -->
    <div class="home-nav">
      <van-grid :border="false" icon-size="60px">
        <van-grid-item :icon="img1" text="文字" />
        <van-grid-item :icon="img2" text="文字" />
        <van-grid-item :icon="img3" text="文字" />
        <van-grid-item :icon="img4" text="文字" />
      </van-grid>
    </div>
    <!-- 导航区域 End -->
    <!-- 租房小组 Start -->
    <div class="group">
      <van-cell title="租房小组" value="更多" />
      <van-grid
        :column-num="2"
        :border="false"
        :gutter="10"
        icon-size="50"
        direction="horizontal"
      >
        <van-grid-item
          v-for="item in regionInfo"
          :key="item.id"
          :icon="`http://liufusong.top:8080${item.imgSrc}`"
          text="文字"
        >
          <template #text>
            <div class="text">
              <span>{{ item.title }}</span>
              <span>{{ item.desc }}</span>
            </div>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 租房小组 End -->
  </div>
</template>

<script>
import img1 from '@/assets/images/下载 (1).png'
import img2 from '@/assets/images/下载.png'
import img3 from '@/assets/images/下载 (2).png'
import img4 from '@/assets/images/下载 (3).png'
import { getHomeSwiper, getHomeCity, getGroup } from '@/api'
export default {
  name: 'home',
  data() {
    return {
      value: '',
      img1,
      img2,
      img3,
      img4,
      swiperImg: [],
      City: '',
      region: '',
      regionInfo: []
    }
  },
  created() {
    this.getHomeSwiper()
    this.getHomeCity()
    this.getGroup()
    this.City = this.$route.query.title ? this.$route.query.title : '北京'
  },
  methods: {
    // 获取轮播图
    async getHomeSwiper() {
      try {
        const { data } = await getHomeSwiper()
        this.swiperImg = data.body
      } catch (error) {}
    },
    // 获取默认城市信息
    async getHomeCity() {
      const { data } = await getHomeCity('北京')
      this.region = data.body.value
    },
    // 获取租房小组信息
    async getGroup() {
      const { data } = await getGroup(this.region)
      this.regionInfo = data.body
    },
    // 前往城市列表页面
    goCity(City) {
      this.$router.push({
        path: '/city',
        query: { City }
      })
    }
  }
}
</script>

<style lang="less" scoped>
// 轮播图
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
// 头部搜索框
.title {
  display: flex;
  align-items: center;
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translate(-50%, 0);
  height: 34px;
  z-index: 999;
  border-radius: 50%;
  .house-ditudingwei {
    font-size: 25px;
    color: #fff;
    margin-left: 10px;
  }
  .van-search {
    width: 310px;
    height: 100%;
    border-radius: 5px;
    .name {
      font-size: 14px;
      color: #333;
    }
    .house-xiajiantou {
      margin-left: 5px;
      font-size: 12px;
      color: #333;
    }
    .van-search__content {
      background-color: #fff;
      :deep(.van-icon) {
        border-left: 1px solid #e5e5e5;
        padding-left: 10px;
        color: #9c9fa1;
      }
    }
  }
}
// 导航区域
.home-nav {
  height: 122.42px;
  .van-grid {
    height: 100%;
    :deep(.van-grid-item__text) {
      color: black;
      font-size: 14px;
    }
  }
}
// 租房小组
.group {
  height: 187.25px;
  background-color: #f6f5f6;
  .van-cell {
    background-color: #f6f5f6;
    .van-cell__title {
      font-size: 15px;
      font-weight: 700;
    }
  }
  :deep(.van-grid-item__content--horizontal) {
    justify-content: space-evenly;
    flex: 1;
    height: 60px;
    .text {
      display: flex;
      flex-direction: column;
      font-size: 14px;
    }
  }
}
</style>
