<template>
  <div>12312321123</div>
</template>
<script lang="ts" setup>
import { useDidShow, usePullDownRefresh } from '@/hooks/life'
import Taro from '@tarojs/taro'
useDidShow(() => {
  console.log('onShow')
})
usePullDownRefresh(() => {
  console.log('onPullDownRefresh')
  Taro.stopPullDownRefresh()
})
</script>
