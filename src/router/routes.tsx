/*
 * @Author: your name
 * @Date: 2021-02-04 23:09:33
 * @LastEditTime: 2021-02-05 23:16:01
 * @LastEditors: Please set LastEditors
 * @Description: 路由选项
 * @FilePath: \custom-project-chain\src\router\routes.tsx
 */
import { defineComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { refreshCurrentRoute } from './hooks'
/**
 * 404
 */
const notFound = {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  component: () =>
    import(
      /* webpackChunkName: "notFound-com" */
      '../view/notFound'
    )
}
/**
 * 刷新
 */
const refresh: RouteRecordRaw = {
  path: 'refresh',
  name: 'refresh',
  component: defineComponent(() => false)
}
const About = defineComponent(() => {
  return () => <div onClick={() => refreshCurrentRoute()}>刷新</div>
})
/**
 * 权限路由
 */
export const permissionRoute: RouteRecordRaw = {
  path: '/',
  name: 'home',
  component: () =>
    import(
      /* webpackChunkName: "home-com" */
      '../view/home'
    ),
  children: [
    {
      path: '',
      name: 'home',
      component: () =>
        import(
          /* webpackChunkName: "projectList-com" */
          '../view/projectList'
        )
    },
    {
      path: '/about',
      component: About
    },
    refresh,
    notFound
  ]
}

/**
 * 基础路由
 */
const BASE_ROUTES: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: () =>
      import(
        /* webpackChunkName: "login-com" */
        '../view/login'
      )
  }
]
export default BASE_ROUTES
