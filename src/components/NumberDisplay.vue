<template>
  <view class="test">
    <text class="title">{{ getNumbers }}</text>
  </view>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useCounter } from '@/stores'
const count = useCounter()
const getNumbers = computed(() => count.number)
</script>

<style>
.title {
  font-size: 40px;
}
</style>
