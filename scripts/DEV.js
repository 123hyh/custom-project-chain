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
