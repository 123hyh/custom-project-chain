/*
 * @Author: huangyuhui
 * @Date: 2021-02-02 15:30:03
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-02 20:23:42
 * @Description:
 * @FilePath: \custom-project-chain\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'prettier',
    'prettier/prettier',
    'prettier/vue',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/eslint-recommended'
    // 'plugin:@typescript-eslint/recommended'
    // 'plugin:vue/strongly-recommended',
    // 'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  globals: {
    process: true,
    require: true
  },
  rules: {
    eqeqeq: ['error', 'always'],
    'dot-location': ['error', 'property'],
    'no-unused-vars': 'error',
    'no-const-assign': 'error',
    'no-var': 'error',
    'prefer-const': 'warn',
    'no-sparse-arrays': 'warn',
    'block-scoped-var': 'error',
    'consistent-return': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-global-assign': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'warn',
    'no-new': 'error',
    'no-redeclare': 'error',
    'no-return-assign': ['error', 'always'],
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'wrap-iife': ['error', 'outside'],
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-use-before-define': 'error',
    camelcase: 'warn',
    'comma-dangle': ['error', 'never'],
    'no-nested-ternary': 'error',
    'no-plusplus': 'error',
    'no-unneeded-ternary': 'warn',
    'no-whitespace-before-property': 'warn',
    'object-property-newline': 'warn',
    'no-dupe-class-members': 'error',
    'no-this-before-super': 'error',
    'constructor-super': 'error',
    'prefer-destructuring': [
      'warn',
      {
        array: true,
        object: true
      },
      {
        enforceForRenamedProperties: false
      }
    ]
  }
}
