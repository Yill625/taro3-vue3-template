<template>
  <NumberDisplay />
  <number-submit />
  <button @click="success">请求正常接口</button>
  <button @click="error">请求非code为0接口</button>
  <button @click="fail">请求状态码非200接口</button>
  <div class="ellipsis-test ellipsis">
    测试超行省略
  </div>
</template>
<script lang="ts" setup>
import { useDidShow, usePullDownRefresh } from '@/hooks/life'
import NumberDisplay from '@/components/NumberDisplay.vue'
import NumberSubmit from '@/components/NumberSubmit.vue'
import Taro from '@tarojs/taro'
import { getTest, getError, getFail } from '@/api/test'
useDidShow(() => {
  success()
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
usePullDownRefresh(() => {
  console.log('onPullDownRefresh')
  Taro.vibrateShort()
  Taro.stopPullDownRefresh()
})
</script>

<style lang="scss">
.ellipsis-test {
  width: 50px;
}
</style>
