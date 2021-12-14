import { defineStore } from 'pinia'

export interface Options {
  path: string
  scene: number
  query: object
  shareTicket: string
  referrerInfo: object
}

const useSystem = defineStore({
  /** 区分不通状态的唯一标识 */
  id: 'system',
  /** 状态 */
  state: () => ({
    options: {} as Options,
    info: {} as Taro.getSystemInfoSync.Result,
  }),
  actions: {
    init(options: Options) {
      this.options = options
    },
    setInfo(info: Taro.getSystemInfoSync.Result) {
      this.info = info
    },
  },
})
export { useSystem }
