<template>
  <div @click="goDetail">
    <!-- 列表渲染 Start -->
    <div class="goods">
      <!-- 图片 -->
      <div class="pic">
        <van-image
          width="106"
          height="100%"
          :src="`http://liufusong.top:8080${item.houseImg}`"
        />
      </div>
      <!-- 信息 -->
      <div class="goods-info">
        <h3>{{ item.title }}</h3>
        <span class="house-info">{{ item.desc }}</span>
        <van-tag
          type="primary"
          color="#e1f5f8"
          v-for="(arr, index) in item.tags"
          :key="index"
          >{{ arr }}</van-tag
        >
        <p>
          <span class="price">{{ item.price }}</span>
          元/月
        </p>
      </div>
    </div>
    <!-- 列表渲染 End -->
  </div>
</template>

<script>
export default {
  name: 'MygoodsList',
  data() {
    return {
      houseName: ''
    }
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    goDetail() {
      this.$emit('go', this.item.houseCode)
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.goods {
  display: flex;
  height: 120px;
  padding: 18px 0;
  border-bottom: 1px solid #e5e5e5;
  box-sizing: border-box;
  .pic {
    width: 106px;
    height: 100%;
  }
  .goods-info {
    flex: 1;
    display: flex;
    margin-left: 12px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    h3 {
      font-size: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 257px;
    }
    .house-info {
      font-size: 12px;
      color: #afb2b3;
    }
    .van-tag--primary {
      padding: 4px 5px;
      color: #39becd;
    }
    p {
      color: red;
      font-size: 12px;
      .price {
        font-size: 16px;
      }
    }
  }
}
</style>
