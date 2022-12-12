// 根据appId 打包到不同小程序去
const index = process.env.npm_config_argv
  ? JSON.parse(process.env.npm_config_argv).remain[process.env.NODE_ENV === 'development' ? 1 : 0]
  : 'wx00af2d3955d230c2'
const xcx = {
  wx00af2d3955d230c2: {
    page: ['pages/index/index'],
    subpackages: [
      {
        root: 'pages/featureA',
        pages: ['index/index', 'nutui/index', 'request/index', 'css/index'],
      },
    ],
  },
}

export default defineAppConfig({
  pages: xcx[index].page,
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  subpackages: xcx[index].subpackages,
})
