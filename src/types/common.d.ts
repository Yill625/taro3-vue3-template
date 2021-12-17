// https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html
interface PageConfig {
  navigationBarBackgroundColor?: string
  navigationBarTextStyle?: string
  navigationBarTitleText: string
  navigationStyle?: string
  backgroundColor?: string
  backgroundTextStyle?: 'dark' | 'light'
  backgroundColorTop?: string
  backgroundColorBottom?: string
  enablePullDownRefresh?: boolean
  onReachBottomDistance?: number
  pageOrientation?: 'auto' | 'portrait' | 'landscape'
  disableScroll?: boolean
  usingComponents?: Object
  initialRenderingCache?: 'static' | 'dynamic'
  style?: string
  singlePage?: Object
  restartStrategy?: string
}
declare const wx: object
