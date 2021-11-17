import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'

interface User {
  number: number[]
}
export interface State {
  user: User
}
// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

const user = {
  state: {
    number: [1, 2, 3]
  },
  mutations: {
    ADD_NUMBER(state: User, payload) {
      state.number.push(payload)
    }
  },
  actions: {
    addNumber(context, number) {
      context.commit('ADD_NUMBER', number)
    }
  },
  getters: {
    getNumbers(state) {
      return state.numbers
    }
  }
}

const store = createStore({
  modules: {
    user
  }
})

export default store
