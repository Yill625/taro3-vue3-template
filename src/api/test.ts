import request from '@/utils/request'
import { testUrl } from './url'
export const getProvince = () => {
  return request({
    url: `${testUrl}`,
    method: 'GET',
  })
}
