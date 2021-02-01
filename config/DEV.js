/*
 * @Author: huangyuhui
 * @Date: 2021-01-27 11:37:42
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-01-27 16:33:19
 * @Description: 
 * @FilePath: \project-cli\config\DEV.js
 */
const config = require('./base')
const { resolve, getIPAdress } = require('./utils');

const getDevConfig = ({ port = 8080 }) => {
  config.devtool('eval-source-map')
    .devServer
    .contentBase(resolve('dist'))
    .compress(true)
    .historyApiFallback(true)
    .host('0.0.0.0')
    .hot(true)
    .overlay(true)
    .port(port)
    .progress(true)
    .quiet(true)
    .useLocalIp(true);

  config
    .plugin('dev-log')
    .use(
      require('@soda/friendly-errors-webpack-plugin'),
      [
        {
          clearConsole: true,
          compilationSuccessInfo: {
            messages: [
              `You application is running here http://localhost:${port}`,
              ...getIPAdress().map(item=>`You application is running here http://${item}:${port}`)
            ],
          }
        }
      ]
    );
  return config.toConfig()
}
module.exports = getDevConfig