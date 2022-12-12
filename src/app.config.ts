// 根据appId 打包到不同小程序去
const index = process.argv[5]
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
  wx230f337c0b133c33: {
    page: ['pages/index/index'],
  },
}
console.log('当前的打包的小程序是：', index)

export default defineAppConfig({
  pages: xcx[index].page,
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  subpackages: xcx[index].subpackages || [],
})
