/*
 * @Author: huangyuhui
 * @Date: 2021-02-02 10:18:27
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-02 11:01:45
 * @Description: 
 * @FilePath: \custom-project-chain\config\SIT.js
 */

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = require('./base');
const { defaultMinimizer } = require('./utils');
config.plugin('clean').use(CleanWebpackPlugin)

module.exports = defaultMinimizer(config.toConfig()) 