/*
 * @Author: huangyuhui
 * @Date: 2021-02-02 14:03:37
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-02 20:39:05
 * @Description: 开发环境 shell
 * @FilePath: \custom-project-chain\scripts\DEV.js
 */
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const getDevConfig = require('../config/DEV')
const { getPort } = require('../config/utils')
getPort().then(port => {
  const { devServer, ...config } = getDevConfig(port)
  const { host = '0.0.0.0' } = devServer
  const server = new webpackDevServer(webpack(config), devServer)
  server.listen(port, host, err => {
    if (err) {
      throw err
    }
  })
})
