<template>
  <div>
    <nut-button @click="goRequest">跳转接口测试页面</nut-button>
    <nut-button @click="goCss">跳转样式测试页面</nut-button>
    <nut-button @click="goPinia">跳转Pinia测试页面</nut-button>
    <nut-button @click="goNutUi">跳转NutUi测试页面</nut-button>
  </div>
</template>

<script lang="ts" setup>
import Taro from '@tarojs/taro'
const goRequest = () => {
  Taro.navigateTo({ url: '/pages/featureA/request/index' })
}
const goCss = () => {
  Taro.navigateTo({ url: '/pages/featureA/css/index' })
}
const goPinia = () => {
  Taro.navigateTo({ url: '/pages/featureA/index/index' })
}
const goNutUi = () => {
  Taro.navigateTo({ url: '/pages/featureA/nutui/index' })
}
</script>
