<template>
  <NumberDisplay />
  <NumberSubmit />
  <div class="ellipsis-test ellipsis">
    测试超行省略
  </div>
  <LiangIcon
    @click="cli"
    :size="80"
    name="https://tva1.sinaimg.cn/large/008i3skNly1gx7dpjg8hhj305k05k746.jpg"
  ></LiangIcon>
  <Overlay v-model:visible="show">11111111111</Overlay>
  <LiangButton :color="'red'">1111</LiangButton>
  <nut-button type="primary">111111</nut-button>
</template>
<script lang="ts" setup>
import { useDidShow, usePullDownRefresh } from '@/hooks/life'
import NumberDisplay from '@/components/NumberDisplay.vue'
import NumberSubmit from '@/components/NumberSubmit.vue'
import LiangIcon from '@/components/base/Icon/index.vue'
import Overlay from '@/components/base/Overlay/index.vue'
import LiangButton from '@/components/base/Button/index.vue'
import { ref } from 'vue'
const show = ref(false)
import Taro from '@tarojs/taro'
useDidShow(() => {
  console.log('onShow')
})
const cli = () => {
  console.log(111)
  show.value = true
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
