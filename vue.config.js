module.exports = {
  devServer: {
    proxy: {
      '/apis': {
        target: 'http://192.168.50.40:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/apis': '/mock'
        }
      },
      '/imgs': {
        target: 'http://192.168.50.40:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/imgs': '/images'
        }
      }
    }
  }
}
