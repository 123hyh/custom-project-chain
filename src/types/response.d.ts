/*
 * @Author: huangyuhui
 * @Date: 2021-02-05 12:07:53
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-06 15:44:59
 * @Description: 类型
 * @FilePath: \custom-project-chain\src\types\response.d.ts
 */

/**
 * 列表 response 数据结构
 */
export interface listResponse<T> {
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

/**
 * 分页参数类型
 */
type pagingBaseParams = {
  pageNum?: number
  pageSize?: number
}

/**
 * 接口业务错误
 */
export interface businessError {
  code: number
  msg: string
}
