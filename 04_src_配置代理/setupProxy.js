// 如果在新版本中使用旧版本的配置方式的话，会出现拒绝连接请求的错误
// const proxy = require('http-proxy-middleware')

// module.exports = function (app) {
//   app.use(
//     proxy('/api1', {
//       target: 'http://localhost:5000',
//       changeOrigin: true,
//       pathRewrite: { '^/api1': '' }
//     }),
// proxy('/api2', {
//   target: 'http://localhost:5001',
//   changeOrigin: true,
//   pathRewrite: { '^/api2': '' }
// })
//   )
// }

// 这里就需要使用新版本的配置方法了，新版本的配置方法不能直接引入proxy，需要使用分别暴露的引入方式来创建代理。
const { createProxyMiddleware } = require("http-proxy-middleware") // 更改引入方式

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {// 遇到api1前缀的请求，就会触发该代理配置
      target: 'http://localhost:5000',// 请求转发给谁
      changeOrigin: true,// 控制服务器收到的请求头中Host字段的值
      pathRewrite: { '^/api1': '' }
    }),
    createProxyMiddleware('/api2', {// 遇到api2前缀的请求，就会触发该代理配置
      target: 'http://localhost:5001',// 请求转发给谁
      changeOrigin: true,// 控制服务器收到的请求头中Host字段的值
      pathRewrite: { '^/api2': '' }
    })
  )
}