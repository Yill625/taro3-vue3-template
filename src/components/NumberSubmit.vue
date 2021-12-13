<template>
  <input v-model="number" type="number" class="input van-hairline--top" />
  <button @tap="addNumber" class="hairline--top">Add new number</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useCounter } from '@/stores'
const count = useCounter()
const number = ref<number>(2)

const addNumber = () => {
  count.add(number.value)
}
</script>

<style>
.input {
  margin: 10px;
}
</style>
