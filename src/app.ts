import { createApp } from 'vue'
import './app.scss'
import { Icon } from '@nutui/nutui-taro'
import '@nutui/nutui-taro/dist/style.css'
import { setupStore } from '@/stores'

const App = createApp({
  onShow() {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
}).use(Icon)
setupStore(App)
export default App
