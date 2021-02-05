/*
 * @Author: huangyuhui
 * @Date: 2021-01-27 11:37:42
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-05 11:42:26
 * @Description: 开发环境 配置
 * @FilePath: \custom-project-chain\config\DEV.js
 */
const config = require('./base')
const { resolve, getIPAdress } = require('./utils')
const getDevConfig = ({ port = 8080 }) => {
  config
    .devtool('eval-source-map')
    .devServer.contentBase(resolve('dist'))
    .compress(true)
    .historyApiFallback(true)
    .host('0.0.0.0')
    .hot(true)
    .overlay(true)
    .port(port)
    .progress(true)
    .quiet(true)
    .useLocalIp(true)
    .proxy({
      '/api': {
        target: 'http://192.168.0.133:8087',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    })
  config
    .plugin('dev-log')
    .use(require('@soda/friendly-errors-webpack-plugin'), [
      {
        clearConsole: true,
        compilationSuccessInfo: {
          messages: [
            `You application is running here http://localhost:${port}`,
            ...getIPAdress().map(
              item => `You application is running here http://${item}:${port}`
            )
          ]
        }
      }
    ])
    .end()
    /* eslint */
    .plugin('eslint')
    .use(require('eslint-webpack-plugin'), [
      {
        extensions: ['js', 'ts', 'vue', 'json'],
        emitError: true
      }
    ])
    .end()
  return config.toConfig()
}
module.exports = getDevConfig
