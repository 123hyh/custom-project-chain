/*
 * @Author: huangyuhui
 * @Date: 2021-02-05 11:11:19
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-05 11:57:45
 * @Description:
 * @FilePath: \custom-project-chain\src\services\index.ts
 */
import { extend } from 'umi-request'
import { isDev, networkPrefix } from '../global.variable'

const request = extend({
  timeout: isDev ? 0 : 6000,
  prefix: networkPrefix
})
/**
 * 拦截器
 */
request.interceptors.response.use(response => {
  return response
})

/**
 * request 实例
 */
export default request
