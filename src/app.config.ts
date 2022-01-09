export default {
  pages: ['pages/index/index'],
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  subpackages: [
    {
      root: 'pages/featureA',
      pages: ['index/index', 'nutui/index', 'request/index', 'css/index'],
    },
    {
      root: 'pages/music',
      pages: ['login/index'],
    },
  ],
}
