import '@nutui/nutui-taro/dist/style.css'
import { Icon, Button, Sku, Popup, InputNumber, Price } from '@nutui/nutui-taro'
import { App } from 'vue'
const setNutUi = (app: App) => {
  app.use(Icon).use(Button).use(Sku).use(Popup).use(InputNumber).use(Price)
}
export default setNutUi
