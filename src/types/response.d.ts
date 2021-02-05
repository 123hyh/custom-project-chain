/*
 * @Author: huangyuhui
 * @Date: 2021-02-05 12:07:53
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-05 13:07:48
 * @Description: 类型
 * @FilePath: \custom-project-chain\src\services\type.d.ts
 */

/**
 * 列表response 类型
 */
export type listResponse<T> = {
  /**
   * 列表数据
   */
  rows: T[]
  /**
   * 总条数
   */
  total: number
  /**
   * 业务 code
   */
  code: number
}
