/*
 * @Author: huangyuhui
 * @Date: 2021-02-04 14:08:45
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-04 15:47:07
 * @Description: 路由钩子
 * @FilePath: \custom-project-chain\src\router\hooks.ts
 */
import { Router } from 'vue-router'
import QProgress from 'qier-progress'
const progressBar = new QProgress({
  minimum: 0.08,
  height: 3,
  color: '#e9a409'
})

export function registerRouterHooks(router: Router) {
  /* 注册 加载Bar */
  router.beforeEach((_to, _form, next) => {
    progressBar.start()
    next()
  })
  router.afterEach(() => {
    progressBar.finish()
  })
  return router
}
