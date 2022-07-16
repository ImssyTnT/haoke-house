import request from '@/utils/request.js'

export const user = () => {
  return request({
    method: 'GET',
    url: '/user'
  })
}
