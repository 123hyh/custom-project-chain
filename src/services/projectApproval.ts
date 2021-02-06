/*
 * @Author: huangyuhui
 * @Date: 2021-02-05 11:17:52
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-06 15:38:50
 * @Description:
 * @FilePath: \custom-project-chain\src\services\projectApproval.ts
 */

import request from './index'
import { listResponse, pagingBaseParams } from '../types/response'
/**
 * 获取项目立项 列表
 */
export function getProjectList<T>(params?: pagingBaseParams) {
  return request.get<listResponse<T>>('/crm/crmCustomerProject/page', {
    params
  })
}
