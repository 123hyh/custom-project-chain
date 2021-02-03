/*
 * @Author: huangyuhui
 * @Date: 2021-02-02 10:18:27
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-03 17:25:27
 * @Description:
 * @FilePath: \custom-project-chain\babel.config.js
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: {
          version: '3.8',
          proposals: true
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    /* antd 按需加载 */
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        style: true
      }
    ],
    ['@vue/babel-plugin-jsx', { mergeProps: false }]
  ]
}
