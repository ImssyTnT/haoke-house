import request from '@/utils/request.js'

export const getUser = () => {
  return request({
    method: 'GET',
    url: '/user'
  })
}

export const getFavorate = () => {
  return request({
    method: 'GET',
    url: '/user/favorites'
  })
}
