/*
 * @Author: huangyuhui
 * @Date: 2021-02-02 20:29:54
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-05 11:40:56
 * @Description: 全局变量
 * @FilePath: \custom-project-chain\src\global.variable.ts
 */

/**
 * 当前是否为开发环境
 */
export const isDev = process.env.NODE_ENV === 'development'
/**
 * 网络请求 url 前缀
 */
export const networkPrefix = isDev ? '/api' : ''
