import { defineStore } from 'pinia'

const useCounter = defineStore({
  /** 区分不通状态的唯一标识 */
  id: 'count',
  /** 状态 */
  state: () => ({
    number: 0
  }),
  actions: {
    increment() {
      this.number++
    },
    add(number) {
      this.number += number
    }
  }
})
export { useCounter }
