import { createApp } from 'vue'
import './app.scss'
import { Icon, Button } from '@nutui/nutui-taro'
import '@nutui/nutui-taro/dist/style.css'
import { setupStore } from '@/stores'

const App = createApp({
  onShow() {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
  .use(Icon)
  .use(Button)
setupStore(App)
export default App
