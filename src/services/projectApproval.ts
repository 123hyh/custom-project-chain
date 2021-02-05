/*
 * @Author: huangyuhui
 * @Date: 2021-02-05 11:17:52
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-05 12:10:38
 * @Description:
 * @FilePath: \custom-project-chain\src\services\projectApproval.ts
 */

import request from './index'
import { listResponse } from './type'

export function getProjectList<T>() {
  return request.get<listResponse<T>>('/crm/crmCustomerProject/page', {
    params: {
      pageNum: 1,
      pageSize: 10
    }
  })
}
