import request from '@/utils/request'

export const getHomeSwiper = () => {
  return request({
    method: 'GET',
    url: '/home/swiper'
  })
}

export const getHomeCity = (name) => {
  return request({
    method: 'GET',
    url: '/area/info',
    params: { name }
  })
}

export const getGroup = (region) => {
  return request({
    method: 'GET',
    url: '/home/groups',
    parasm: { region }
  })
}
