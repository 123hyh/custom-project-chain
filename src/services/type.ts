/*
 * @Author: huangyuhui
 * @Date: 2021-02-05 12:07:53
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-05 12:09:41
 * @Description: 类型
 * @FilePath: \custom-project-chain\src\services\type.ts
 */

/**
 * 列表response 类型
 */
export type listResponse<T> = { rows: T[]; total: number; code: number }
