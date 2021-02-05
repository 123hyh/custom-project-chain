/*
 * @Author: huangyuhui
 * @Date: 2021-02-04 14:08:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-05 23:08:58
 * @Description: 路由钩子
 * @FilePath: \custom-project-chain\src\router\hooks.ts
 */
import { Router, RouteRecordRaw } from 'vue-router'
import QProgress from 'qier-progress'
import baseRoutes, { permissionRoute } from './routes'
import { isLogined } from '@/utils/system'
const progressBar = new QProgress({
  minimum: 0.08,
  height: 3,
  color: '#e9a409'
})
/**
 * 当前路由实例
 */
let currentRouter: Router | null = null

/**
 * 追加路由item
 * @param router
 * @param route
 */
export function addRoute(route: RouteRecordRaw) {
  currentRouter?.addRoute(route)
}

/**
 * 追加权限路由
 */
export function addPermisstionRoute() {
  addRoute(permissionRoute)
  currentRouter?.removeRoute('login')
}
/**
 * 删除 权限路由
 */
export function removePermisstionRoute() {
  baseRoutes.forEach(addRoute)
  currentRouter?.removeRoute('home')
}
/**
 * 注册 路由钩子
 * @param router
 */
export function registerRouterHooks(router: Router) {
  /* 修改路由 add 方法 */
  currentRouter = router
  /* 初始化时判断是否登录 */
  if (isLogined()) {
    addPermisstionRoute()
  }
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
/**
 * 刷新当前路由
 */
export function refreshCurrentRoute() {
  const currentRoute = currentRouter?.currentRoute
  const { fullPath = '/' } = currentRoute?.value ?? {}
  currentRouter
    ?.replace({
      path: '/refresh',
      state: {
        back: fullPath
      }
    })
    .finally(() => {
      currentRouter?.replace(fullPath)
    })
}
