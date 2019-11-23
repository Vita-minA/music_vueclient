var path = require('path')

module.exports = {
  dev: { // dev 环境
    proxyTable: {
      '/server': {
        target: 'http://localhost:3000', //你要访问的服务器域名
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/server': ''
        }
      }
    }
  }
}