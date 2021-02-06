/*
 * @Author: huangyuhui
 * @Date: 2021-01-27 11:53:59
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-06 18:56:42
 * @Description:
 * @FilePath: \custom-project-chain\postcss.config.js
 */
const path = require('path')
module.exports = {
  plugins: [
    require('autoprefixer'),
    /* 兼容 css 变量 */
    require('postcss-custom-properties')({
      importFrom: path.resolve(__dirname, 'src/styles/css.variable.css')
    })
  ]
}
