import request from '@/utils/request'

export const getCityList = (level) => {
  return request({
    method: 'GET',
    url: '/area/city',
    params: { level }
  })
}
export const getHotCityList = () => {
  return request({
    method: 'GET',
    url: '/area/hot'
  })
}
