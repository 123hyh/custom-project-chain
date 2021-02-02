/*
 * @Author: huangyuhui
 * @Date: 2021-02-02 11:30:15
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-02 20:39:21
 * @Description: webpack build dll
 * @FilePath: \custom-project-chain\scripts\DLL.js
 */
const path = require('path')
const webpack = require('webpack')
const dllDir = '../config/dll'
module.exports = {
  entry: {
    dll: ['vue']
  },
  mode: 'production',
  output: {
    path: path.join(__dirname, dllDir),
    filename: '[name].js',
    library: '[name]_[fullhash]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, dllDir, 'manifest.json'),
      name: '[name]_[fullhash]'
    })
  ]
}
