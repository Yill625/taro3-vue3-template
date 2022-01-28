import axios, { AxiosRequestConfig, AxiosResponse } from 'taro-axios'
import Taro from '@tarojs/taro'

// import { useRouter } from 'vue-router'
// 根据自身规范修改![](https://tva1.sinaimg.cn/large/008i3skNgy1gxfn11mr8yj314w0u0tdg.jpg)

const instance = axios.create({
  // 超时时间 1 分钟
  timeout: 30 * 1000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = '111'
  config.headers = {
    Authorization: `Bearer ${token}`,
    token,
    ...config.headers,
  }
  return config
})

const showToast = (title: string) => {
  Taro.showToast({
    title,
    icon: 'none',
    duration: 3000,
  })
}
const showMessage = (title: unknown) => {
  const message = JSON.stringify(title).replace(/"/g, '')
  // TODO Request failed with status code 500 优化展示逻辑
  if (message.indexOf('Network') > -1) {
    showToast('请求失败，请联系客服')
  } else if (message.indexOf('timeout') > -1) {
    showToast('请求超时')
  } else {
    showToast(message)
  }
}
// Taro.showToast 和loading 是单例 所以只有成功时候hideLoading 其他情况showToast
export default function request<T>(options: AxiosRequestConfig = {}) {
  Taro.showLoading({
    title: '加载中...',
  })
  Taro.showNavigationBarLoading()
  return new Promise<T>((resolve, reject) => {
    instance(options)
      .then((response: AxiosResponse) => {
        if (response?.status === 200 && response?.data?.code === 0) {
          resolve(response.data.result)
          Taro.hideLoading()
        } else {
          throw response
        }
      })
      .catch((result) => {
        if (result?.status === 200 && result?.data?.code === -1) {
          //重新登陆 result?.data?.code === -1 ||
        } else {
          // 其他情况 code 非 0 情况 有message 就显示
          showMessage(result?.data?.message ?? result?.message)
        }
        reject(result)
      })
      .finally(() => {
        Taro.hideNavigationBarLoading()
      })
  })
}
