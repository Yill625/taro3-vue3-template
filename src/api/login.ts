import request from '@/utils/request'
import { mockUrl } from './url'

interface Account {
  id: number
  userName: string
  type: number
  status: number
  whitelistAuthority: number
  createTime: number
  salt: string
  tokenVersion: number
  ban: number
  baoyueVersion: number
  donateVersion: number
  vipType: number
  viptypeVersion: number
  anonimousUser: boolean
  uninitialized: boolean
}

interface Bindings {
  userId: number
  url: string
  expired: boolean
  bindingTime: number
  tokenJsonStr: string
  expiresIn: number
  refreshTime: number
  id: number
  type: number
}

interface Profile {
  backgroundImgIdStr: string
  avatarImgIdStr: string
  userId: number
  followed: boolean
  backgroundUrl: string
  detailDescription: string
  userType: number
  gender: number
  accountStatus: number
  vipType: number
  avatarImgId: number
  nickname: string
  backgroundImgId: number
  birthday: number
  city: number
  avatarUrl: string
  defaultAvatar: boolean
  province: number
  expertTags: string
  experts: object
  mutual: boolean
  remarkName: string
  authStatus: number
  djStatus: number
  description: string
  signature: string
  authority: number
  avatarImgId_str: string
  followeds: number
  follows: number
  eventCount: number
  avatarDetail: string
  playlistCount: number
  playlistBeSubscribedCount: number
}

interface ILogin {
  loginType: number
  code: number
  account: Account
  token: string
  profile: Profile
  bindings: Bindings[]
  cookie: string
}
export const getLogin = async (email: string, password: string) => {
  return await request<ILogin>({ url: `${mockUrl}/login`, params: { email, password } })
}
export const getAccount = async () => {
  return await request<object>({ url: `${mockUrl}/user/subcount` })
}
