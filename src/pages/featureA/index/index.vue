<template>
  <NumberDisplay />
  <NumberSubmit />
</template>
<script lang="ts" setup>
import { useDidShow, usePullDownRefresh } from '@/hooks/life'
import NumberDisplay from '@/components/NumberDisplay.vue'
import NumberSubmit from '@/components/NumberSubmit.vue'

import Taro from '@tarojs/taro'
useDidShow(() => {
  console.log('onShow')
})
usePullDownRefresh(() => {
  console.log('onPullDownRefresh')
  Taro.stopPullDownRefresh()
})
</script>
