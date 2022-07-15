import request from '@/utils/request.js'
export const user = (token) => {
  console.log(token)
  return request({
    method: 'GET',
    url: '/user',
    headers: { authorization: token }
  })
}
