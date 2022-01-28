import request from '@/utils/request'
import { mockUrl } from './url'

interface IPerson {
  name: string
  age: number
  avatar: string
}
export const getTest = async () => {
  return await request<IPerson[]>({ url: `${mockUrl}/success` })
}

export const getError = async () => {
  return await request<IPerson[]>({ url: `${mockUrl}/success-message` })
}

export const getFail = async () => {
  return await request<IPerson[]>({ url: `${mockUrl}/error` })
}

export const getEmpty = async () => {
  return await request<IPerson[]>({ url: `http://localhost1` })
}
