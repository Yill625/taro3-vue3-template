import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'taro-axios'
import Taro from '@tarojs/taro'

// import { useRouter } from 'vue-router'
interface ApiResult {
  code: number
  message: string
  result?: unknown
}

const instance = axios.create({
  // 超时时间 1 分钟
  timeout: 30 * 1000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = '111'
    config.headers = {
      Authorization: `Bearer ${token}`,
      token,
      ...config.headers,
    }
    return config
  },
  (err: AxiosError) => {
    Promise.reject(err)
  }
)
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (err: AxiosError) => {
    return Promise.reject(err)
  }
)

const showToast = (title: string) => {
  Taro.showToast({
    title,
    icon: 'none',
  })
}
const showMessage = (title: unknown) => {
  const message = JSON.stringify(title).replace(/"/g, '')
  if (message.indexOf('Network') > -1) {
    showToast('请求失败，请联系客服')
  } else if (message.indexOf('timeout') > -1) {
    showToast('请求超时')
  } else {
    showToast(message)
  }
}
const request = (options: AxiosRequestConfig = {}) => {
  Taro.showLoading({
    title: '加载中...',
  })
  Taro.showNavigationBarLoading()
  return new Promise<ApiResult>((resolve, reject) => {
    instance(options)
      .then((response: AxiosResponse) => {
        if (response?.status === 200 && response?.data?.code === 0) {
          return resolve(response.data)
        } else {
          return reject(response)
        }
      })
      .catch(result => {
        if (result?.status === 200 && result?.data?.code === -1) {
          ////重新登陆 result?.data?.code === -1 ||
        } else {
          // 其他情况 code 非 0 情况 有message 就显示
          showMessage(result?.data?.message ?? result?.message)
        }
        reject(result)
      })
      .finally(() => {
        Taro.hideLoading()
        Taro.hideNavigationBarLoading()
      })
  })
}
export default request
