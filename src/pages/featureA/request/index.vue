<template>
  <button @click="success">请求code为0接口</button>
  <button @click="error">请求非code为0接口</button>
  <button @click="fail">请求状态码非200接口</button>
  <image src="https://tva1.sinaimg.cn/large/008i3skNgy1gxfn11mr8yj314w0u0tdg.jpg"></image>
  <div>
    下拉加载试试
  </div>
</template>
<script lang="ts" setup>
import { useDidShow, usePullDownRefresh } from '@/hooks/life'
import Taro from '@tarojs/taro'
import { getTest, getError, getFail } from '@/api/test'
useDidShow(() => {
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
</script>
