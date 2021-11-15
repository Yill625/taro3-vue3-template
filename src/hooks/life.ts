import { getCurrentInstance } from '@tarojs/taro'
import { onMounted } from 'vue'

const Current = getCurrentInstance()

export function useDidShow(callback) {
  onMounted(callback)
  Current?.page?.onShow && (Current.page.onShow = callback)
}
export function usePullDownRefresh(callback) {
  Current?.page?.onPullDownRefresh && (Current.page.onPullDownRefresh = callback)
}
export function useReachBottom(callback) {
  Current?.page?.onReachBottom && (Current.page.onReachBottom = callback)
}
