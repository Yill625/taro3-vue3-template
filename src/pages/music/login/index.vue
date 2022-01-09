<template>
  <nut-input v-model="state.val1" label="邮箱" />
  <nut-input v-model="state.val0" type="password" label="密码" />
  <nut-button @click="login">登录</nut-button>
  <nut-button @click="getInfo">获取用户信息 , 歌单，收藏，mv, dj 数量</nut-button>
</template>

<script lang="ts" setup>
import { Input as NutInput } from '@nutui/nutui-taro'
import Taro from '@tarojs/taro'
import { reactive } from 'vue'
import { getLogin, getAccount } from '@/api/login'
const state = reactive({
  val1: '',
  val0: '',
})
const login = async () => {
  const res = await getLogin(state.val1, state.val0)
  Taro.showToast({ title: '登录成功' })
  console.log(res)
  Taro.setStorageSync('cookie', res.cookie)
}
const getInfo = async () => {
  const res = await getAccount()
  console.log(res)
}
</script>
