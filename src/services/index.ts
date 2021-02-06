/*
 * @Author: huangyuhui
 * @Date: 2021-02-05 11:11:19
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-06 15:53:05
 * @Description:
 * @FilePath: \custom-project-chain\src\services\index.ts
 */
import { businessError } from '@/types/response'
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

/**
 * 请求 容错方法
 * @param requestFn
 */
export async function faultTolerant<T>(requestFn: () => Promise<T>) {
  const result: [businessError | undefined, T | undefined] = [
    undefined,
    undefined
  ]
  try {
    const data = await requestFn()
    result[1] = data
  } catch (error) {
    result[0] = error
  }
  return result
}
