import request from '@/utils/request'
import { mockUrl } from './url'

interface IPerson {
  name: string
  age: number
  avatar: string
}
export const getTest = async () => {
  return await request<IPerson[]>({ url: `${mockUrl}/api/test` })
}

export const getError = async () => {
  return await request<IPerson[]>({ url: `${mockUrl}/zone` })
}
export const getFail = async () => {
  return await request<IPerson[]>({ url: `https://127.0.0.1` })
}
