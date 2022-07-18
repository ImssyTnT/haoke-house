import request from '@/utils/request'

export const getHouseInfo = (id) => {
  return request({
    method: 'GET',
    url: `/houses/${id}`
  })
}
