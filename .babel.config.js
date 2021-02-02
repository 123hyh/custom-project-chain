/*
 * @Author: huangyuhui
 * @Date: 2021-02-02 10:18:27
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-02 11:16:37
 * @Description: 
 * @FilePath: \custom-project-chain\.babel.config.js
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        useBuiltIns: 'usage',
        corejs: {
          version: "3.8",
          proposals: true
        }
      }
    ]
  ]
}