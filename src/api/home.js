import request from '@/utils/request'

export const getHomeSwiper = () => {
  return request({
    method: 'GET',
    url: '/home/swiper'
  })
}
