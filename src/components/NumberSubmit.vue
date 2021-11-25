<template>
  <input v-model="number" type="number" class="input van-hairline--top" />
  <button @tap="addNumber" class="hairline--top">Add new number</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'
const store = useStore(key)
const number = ref<number>(2)

const addNumber = () => {
  store.dispatch('addNumber', number.value)
}
</script>

<style>
.input {
  margin: 10px;
}
</style>
