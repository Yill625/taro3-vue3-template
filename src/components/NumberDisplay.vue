<template>
  <view class="test">
    <text class="title">{{ getNumbers }}</text>
  </view>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'
const store = useStore(key)
const getNumbers = computed(() => store.state.user.number)
console.log(getNumbers.value)
</script>

<style>
.title {
  font-size: 40px;
}
</style>
