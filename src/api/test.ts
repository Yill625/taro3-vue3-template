import request from '@/utils/request'
export const getProvince = () => {
  return request({
    url: `http://127.0.0.1:3004/`,
    method: 'GET'
  })
}
