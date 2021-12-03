import { App } from 'vue'
import { createPinia } from 'pinia'
export { useCounter } from './count'

export const store = createPinia()

export function setupStore(app: App) {
  app.use(store)
}
