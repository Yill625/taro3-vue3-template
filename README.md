# Taro3 + Vue3 + TypeScript + NutUi + Vuex4

## Vscode 插件安装

- Eslint
- Prettier
- Volar

## 一、Taro 基本安装

https://taro-docs.jd.com/taro/docs/GETTING-STARTED

```shell
npx @tarojs/cli init WechatAppDemo
```

> 使用 npx 可以不用全局先安装 cli 工具，直接下载最新 Taro3 工程

![](https://tva1.sinaimg.cn/large/008i3skNgy1gwcc2zv9q1j313i0tsjxp.jpg)

本地安装 cli 确保项目基本运行

```shell
yarn add @tarojs/cli

yarn dev:weapp
```

![](https://tva1.sinaimg.cn/large/008i3skNgy1gwcdty8l85j312f0u075v.jpg)

![](https://tva1.sinaimg.cn/large/008i3skNgy1gwcdvk32z9j31hc0u00vc.jpg)

## 二、设置代码规范的 Eslint Prettier CommitLint

### 1.安装依赖

```shell
yarn add @vue/eslint-config-prettier @vue/eslint-config-typescript eslint-plugin-prettier -D
```

### 2.解决 Eslint 和 Prettier 的冲突需设置.eslintrc.js 和 .prettierrc

### 3.Ts 检查 确保符合 Ts 规范 Eslint 检查 确保符合 Eslint 规范

```shell
yarn add vue-tsc -D
```

在 package.json 中 script 添加命令

```json
"scripts":{
  "tsc": "vue-tsc --noEmit --skipLibCheck",
  "lint": "eslint --ext .vue --ext .js --ext .ts src/"
}
```

![](https://tva1.sinaimg.cn/large/008i3skNgy1gwcf8vv04xj31uw0lidiz.jpg)

### 4.添加 husky 触发 Git 钩子来保证代码提交时 Ts 检查和 Eslint 检查都符合规范

```shell
# https://github.com/typicode/husky
# https://typicode.github.io/husky/#/?id=articles
yarn add husky -D
# 初始化 husky
npx husky install
# 测试命令
npx husky add .husky/pre-commit "echo test"
```

![](https://tva1.sinaimg.cn/large/008i3skNly1gwcg81i3ipj310s072gmq.jpg)

编辑 pre-commit 执行 Eslint 检查和 Ts 检查

![](https://tva1.sinaimg.cn/large/008i3skNly1gwcgapvfw1j30w00faq4x.jpg)

### 5. 配置 [commitlint](https://github.com/conventional-changelog/commitlint) 提高提交时的规范

```shell
yarn add  @commitlint/{config-conventional,cli} -D
# Configure commitlint to use conventional config
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
# Add hook
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
# 首次安装不起作用可以运行 npx husky install
```

## 在 Taro3 Vue3 小程序中使用 nutui

> [Nutui](https://nutui.jd.com/#/) 京东风格的轻量级移动端 Vue 组件库

```shell
yarn add @nutui/nutui-taro
```

安装 nutui 会遇到样式的报错 如图
![](https://tva1.sinaimg.cn/large/008i3skNgy1gweug2xibjj32ay0oie81.jpg)

解决办法：引入 @tarojs/plugin-html 插件 https://taro-docs.jd.com/taro/docs/use-h5

全局引入后的依赖大小
![](https://tva1.sinaimg.cn/large/008i3skNgy1gweum0nz0xj30r00ayq3a.jpg)

为了按需引入，先安装插件 babel-plugin-import

```shell
# https://nutui.jd.com/#/starttaro
yarn add babel-plugin-import -D
```

按需引入后的主包大小

```js
import { createApp } from 'vue'
import App from './App.vue'
import { Button, Cell, Icon } from '@nutui/nutui-taro'
import '@nutui/nutui-taro/dist/style.css'
createApp(App)
  .use(Button)
  .use(Cell)
  .use(Icon)
```

![](https://tva1.sinaimg.cn/large/008i3skNgy1gweuu0eovyj31fu0ic403.jpg)

样式处理 因为 nutui 的设计稿是 375 的 所以将框架的设计尺寸调整为 375
![](https://tva1.sinaimg.cn/large/008i3skNgy1gwevt1ay7kj317s0ksgnv.jpg)

到这里 nutui 组件库已经采坑完毕 能够正常使用 事件调用正常

![](https://github.com/Yill625/taro3-vue3-template/blob/main/docs/2021-11-14%2019.05.09.gif)

> nutui 事件不触发 是因为 @tarojs/plugin-html 版本不对 我当前这个项目固定设置为 3.3.12 如果设置为最新 3.3.13 则不行

## 小程序分包配置

> 随着业务代码和组件的引入越来越多，主包的大小一定会越来越大，超过 2m 的主包以后微信开发工具就无法使用预览的功能，为了提前做好准备在一开始就进行分包处理，主包只包含组件和公共代码，分包里放入业务代码

```js
//app.config.ts
export default {
  pages: ['pages/index/index'],
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  subpackages: [
    {
      root: 'pages/featureA',
      pages: ['index/index']
    }
  ]
}
```

![](https://tva1.sinaimg.cn/large/008i3skNgy1gwfoohwyzoj30sc0943yv.jpg)

## 使用 script setup 语法在 Taro3 实现小程序[页面生命周期方法](https://taro-docs.jd.com/taro/docs/vue-page)

使用 hooks 来封装

```ts
import { getCurrentInstance } from '@tarojs/taro'
import { onMounted } from 'vue'

const Current = getCurrentInstance()

export function useDidShow(callback) {
  onMounted(callback)
  Current?.page?.onShow && (Current.page.onShow = callback)
}
export function usePullDownRefresh(callback) {
  Current?.page?.onPullDownRefresh && (Current.page.onPullDownRefresh = callback)
}
export function useReachBottom(callback) {
  Current?.page?.onReachBottom && (Current.page.onReachBottom = callback)
}
```

![](https://github.com/Yill625/taro3-vue3-template/blob/main/docs/2021-11-15%2014.15.39.gif)

## Vuex 安装使用

```js
yarn add vuex@next --save
```

创建 store 目录 添加 index.ts 文件

> 实现 vuex Ts 的提示 并进行模块化处理

```ts
import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'

// 定义模块类型
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
```

## taro3 配合 Vue DevTools 调试

![](https://tva1.sinaimg.cn/large/008i3skNly1gwk89d5u70j31gi0u0jvs.jpg)

## 样式封装

### 公共样式

```scss
page {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto,
    'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
}

// 解决iPhone x 以后的机型 底部安全区域的问题 https://jelly.jd.com/article/6006b1055b6c6a01506c87fd
.safe-area-bottom {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
```

## 细节调整

### 小程序配置细节

需要注意开发者工具的项目设置：

- 需要设置关闭 ES6 转 ES5 功能，开启可能报错
- 需要设置关闭上传代码时样式自动补全，开启可能报错
- 需要设置关闭代码压缩上传，开启可能报错
