# Taro3 + Vue3 + TypeScript + NutUi + Vuex4

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

## 二、设置代码规范的 Eslint Prettier CommitLint StyleLint

### 安装依赖

```shell
yarn add @vue/eslint-config-prettier @vue/eslint-config-typescript eslint-plugin-prettier -D
```

### 解决 Eslint 和 Prettier 的冲突需设置.eslintrc.js 和 .prettierrc

### Ts 检查 确保符合 Ts 规范 Eslint 检查 确保符合 Eslint 规范

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
