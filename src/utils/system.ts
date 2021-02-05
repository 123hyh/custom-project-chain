/*
 * @Author: huangyuhui
 * @Date: 2021-02-05 15:14:20
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-05 15:36:55
 * @Description:
 * @FilePath: \custom-project-chain\src\utils\system.ts
 */

/**
 * 获取是否登录
 */
export const isLogined = (): boolean =>
  JSON.parse(localStorage.getItem('isLogin') ?? 'false')

/**
 * 设置登录状态
 * @param loging
 */
export const setLogin = (loging: boolean) =>
  localStorage.setItem('isLogin', JSON.stringify(loging))
