import { createApp } from 'vue'
import './app.scss'
import {
  Button,
  Avatar,
  Icon,
  Dialog,
  Cell,
  CellGroup,
  Address,
  Elevator,
  Popup
} from '@nutui/nutui-taro'
import '@nutui/nutui-taro/dist/style.css'

const App = createApp({
  onShow() {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
  .use(Button)
  .use(Cell)
  .use(Icon)
  .use(Address)
  .use(Popup)
  .use(Elevator)
  .use(CellGroup)
  .use(Avatar)
  .use(Dialog)

export default App
