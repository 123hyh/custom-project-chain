/*
 * @Author: huangyuhui
 * @Date: 2021-02-02 10:18:27
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-02 21:04:36
 * @Description: 测试环境配置
 * @FilePath: \custom-project-chain\config\SIT.js
 */

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const config = require('./base')
const { defaultMinimizer } = require('./utils')
const WebpackBar = require('webpackbar')

config
  .plugin('clean')
  .use(CleanWebpackPlugin)
  .end()
  .plugin('bar')
  .use(WebpackBar, [
    {
      name: 'build SIT'
    }
  ])
  .end()

module.exports = defaultMinimizer(config.toConfig())
