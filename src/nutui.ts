import '@nutui/nutui-taro/dist/style.css'
import { Icon } from '@nutui/nutui-taro'
import { App } from 'vue'
const setNutUi = (app: App) => {
  app.use(Icon)
}
export default setNutUi
