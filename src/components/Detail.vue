<template>
  <div>
    <!-- 头部导航 Start -->
    <NavBar :title="houseInfo.community"></NavBar>
    <!-- 头部导航 End -->
    <!-- 主体 Start -->
    <main>
      <!-- 轮播图 -->
      <div class="pic">
        <van-swipe
          class="my-swipe"
          :autoplay="3000"
          indicator-color="white"
          height="252"
        >
          <van-swipe-item
            v-for="(item, index) in houseInfo.houseImg"
            :key="index"
          >
            <template #default>
              <van-image
                width="100%"
                height="100%"
                :src="`http://liufusong.top:8080${item}`"
              />
            </template>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 房屋信息 -->
      <div class="house-info">
        <van-row>
          <van-col>
            <van-row>
              <van-col>{{ houseInfo.title }}</van-col>
              <van-col
                ><van-tag
                  color="#e1f5f8"
                  v-for="(item, index) in houseInfo.tags"
                  :key="index"
                  >{{ item }}</van-tag
                ></van-col
              >
            </van-row>
          </van-col>
          <van-col>
            <van-grid column-num="3" :border="false">
              <van-grid-item text="租金">
                <template #icon>
                  {{ houseInfo.price }}
                  <span>/月</span>
                </template>
              </van-grid-item>
              <van-grid-item text="房型">
                <template #icon>{{ houseInfo.roomType }}</template>
              </van-grid-item>
              <van-grid-item text="面积">
                <template #icon>{{ houseInfo.size }}平米</template>
              </van-grid-item>
            </van-grid>
          </van-col>
          <van-col>
            <div class="house-msg">
              <div>
                <span>装修:</span>
                精装
              </div>
              <div>
                <span>楼层:</span>
                {{ houseInfo.floor }}
              </div>
            </div>
            <div class="house-msg">
              <div>
                <span>朝向:</span>
                {{ houseInfo.oriented && houseInfo.oriented[0] }}
              </div>
              <div>
                <span>类型:</span>
                普通住宅
              </div>
            </div>
          </van-col>
        </van-row>
      </div>
      <!-- 房屋位置 -->
      <div class="house-map">
        <div class="map-title">小区:天山星城</div>
        <div class="map"></div>
      </div>
      <!-- 详细信息 -->
      <div class="detail">
        <div class="detail-title">房屋配套</div>
        <van-grid :border="false" column-num="5">
          <van-grid-item
            v-for="(item, index) in houseInfo.supporting"
            :key="index"
            :text="item"
          >
            <template #icon>
              <span :class="`house ${iconfont(item)}`"></span> </template
          ></van-grid-item>
        </van-grid>
      </div>
      <div class="detail">
        <!-- 头部信息 -->
        <div class="detail-title">房源概括</div>
        <!-- 用户信息 -->
        <div class="detail-info">
          <!-- 用户资料 -->
          <div class="detail-user">
            <div class="user-info">
              <van-image
                round
                width="52px"
                height="52px"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
              />
              <div class="user-name">
                <div class="name">王女士</div>
                <div class="tag">
                  <van-icon name="shield-o" />
                  已认证房主
                </div>
              </div>
            </div>
            <van-button plain type="primary" size="small">发消息</van-button>
          </div>
          <!-- 房屋信息 -->
          <div class="detail-bref">
            1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
            2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
            3.人车分流，环境优美。
            4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
          </div>
        </div>
      </div>
      <div class="detail">
        <div class="detail-title">猜你喜欢</div>
        <MyGoodsList></MyGoodsList>
      </div>
    </main>
    <!-- 主体 End -->
    <!-- 底部按钮 Start -->
    <div class="grid">
      <van-row type="flex" align="center" justify="center">
        <van-col span="8">
          <span class="house house-shoucang"></span>
          收藏
        </van-col>
        <van-col span="8">在线咨询</van-col>
        <van-col span="8" class="phone">电话预约</van-col>
      </van-row>
    </div>
    <!-- 底部按钮 End -->
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import MyGoodsList from '@/components/MyGoodsList.vue'
import { getHouseInfo } from '@/api'
export default {
  name: 'detail',
  created() {
    this.getHouseInfo(this.$route.query.id)
    this.iconfont()
  },
  data() {
    return {
      houseInfo: {},
      spanIcon: ''
    }
  },
  components: {
    NavBar,
    MyGoodsList
  },
  methods: {
    // 获取房屋详情
    async getHouseInfo(id) {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const { data } = await getHouseInfo(id)
        this.houseInfo = data.body
        console.log(data)
      } catch (error) {
        this.$toast.fail('获取信息失败')
      } finally {
        this.$toast.clear()
      }
    },
    iconfont(val) {
      switch (val) {
        case '衣柜':
          return 'house-yigui'
        case '洗衣机':
          return 'house-xiyiji'
        case '空调':
          return 'house-kongtiao'
        case '冰箱':
          return 'house-bingxiang'
        case '暖气':
          return 'house-nuanqi-'
        case '电视':
          return 'house-dianshiji'
        case '沙发':
          return 'house-shafa'
        case '宽带':
          return 'house-wifi'
        case '热水器':
          return 'house-haofangtuo400iconfont2reshuiqi'
        case '天然气':
          return 'house-meiqitianranqi'
      }
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
// 主体区域
main {
  margin-bottom: 49px;
  background-color: #f5f5f9;
  // 轮播图
  .pic {
    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      background-color: #39a9ed;
    }
  }
  // 房屋信息
  .house-info {
    height: 266.4px;
    background-color: #fff;
    padding: 15px;
    > .van-row {
      display: flex;
      flex-direction: column;
      height: 100%;
      > .van-col {
        flex: 1;
      }
      > .van-col:first-child {
        .van-row {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 100%;
          font-size: 16px;
          .van-tag--default {
            padding: 4px 5px;
            color: #39becd;
          }
        }
      }
      > .van-col:nth-child(2) {
        border-top: 1px solid #cecece;
        border-bottom: 1px solid #cecece;
        .van-grid {
          height: 100%;
          :deep(.van-grid-item__icon-wrapper) {
            font-size: 18px;
            color: red;
            span {
              font-size: 12px;
            }
          }
          .van-grid-item__text {
            color: #999;
          }
        }
      }
      > .van-col:last-child {
        display: flex;
        .house-msg {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          font-size: 13px;
          span {
            color: #999;
            margin-right: 8px;
          }
        }
      }
    }
  }
  // 房屋位置
  .house-map {
    margin-top: 10px;
    background-color: #fff;
    .map-title {
      height: 44px;
      line-height: 44px;
      padding: 0 11.25px;
      font-size: 14px;
    }
    .map {
      height: 125px;
    }
  }
  // 详细信息
  .detail {
    margin-top: 10px;
    background-color: #fff;
    .detail-title {
      height: 52px;
      padding: 0 10px;
      line-height: 52px;
      font-weight: 700;
      font-size: 15px;
      border-bottom: 1px solid #cecece;
    }
    // 用户信息
    .detail-info {
      padding: 10px;
      .detail-user {
        height: 62px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .user-info {
          display: flex;
          .user-name {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            font-size: 14px;
            margin-left: 15px;
            .tag {
              font-size: 12px;
              color: red;
              .van-icon {
                font-size: 16px;
              }
            }
          }
        }
        .van-button--plain.van-button--primary {
          color: #07c160;
          padding: 3px 15px;
          margin-right: 10px;
          font-size: 14px;
        }
      }
    }
    // 房屋介绍
    .detail-bref {
      font-size: 14px;
    }
  }
}
// 底部按钮
.grid {
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  .van-row {
    height: 100%;
    text-align: center;
    font-size: 17px;
    color: #999;
    line-height: 50px;
    border-top: 1px solid #cecece;
    .van-col {
      height: 100%;
    }
    .van-col:nth-child(1) {
      border-right: 1px solid #e8e8e9;
    }
    .phone {
      background-color: #21b97a;
      color: #fff;
    }
  }
}
</style>
