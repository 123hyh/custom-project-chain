/*
 * @Author: huangyuhui
 * @Date: 2021-02-02 15:30:03
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-02 16:46:26
 * @Description:
 * @FilePath: \custom-project-chain\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'prettier',
    'prettier/prettier',
    'prettier/vue',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:vue/strongly-recommended',
    // 'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    eqeqeq: ['error', 'always'],
  },
}
