<template>
  <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">111</div>
  <button @click="success">请求code为0接口</button>
  <button @click="error">请求非code为0接口</button>
  <button @click="fail">请求状态码非200接口</button>
  <image src="https://tva1.sinaimg.cn/large/008i3skNgy1gxfn11mr8yj314w0u0tdg.jpg"></image>
  <div>
    下拉加载试试
  </div>
</template>

<script lang="ts" setup>
import Taro, { useDidShow, usePullDownRefresh, useShareAppMessage } from '@tarojs/taro'
import { getTest, getError, getFail } from '@/api/test'

const activeColor = 'red'
const fontSize = '30'
useDidShow(() => {
  console.log('useDidShow')
  success()
  error()
  fail()
})
const success = async () => {
  const result = await getTest()
  console.log(result?.length && result[0].name)
}
const error = async () => {
  const result = await getError()
  console.log(result?.length && result[0].name)
}
const fail = async () => {
  const result = await getFail()
  console.log(result?.length && result[0].name)
}
usePullDownRefresh(async () => {
  Taro.vibrateShort()
  try {
    await error()
  } finally {
    Taro.stopPullDownRefresh()
  }
})
useShareAppMessage((res) => {
  if (res.from === 'button') {
    // 来自页面内转发按钮
    console.log(res.target)
  }
  return {
    title: '自定义转发标题',
    path: '/page/user?id=123',
  }
})
</script>
