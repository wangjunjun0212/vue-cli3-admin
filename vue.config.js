module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    open: true
    // proxy: {
    //   'https://dev.xiaocaimei.cn': {
    //     target: 'https://dev.xiaocaimei.cn',
    //     changeOrigin: true
    //   }
    // }
  }
}
