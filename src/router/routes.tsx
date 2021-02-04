/*
 * @Author: your name
 * @Date: 2021-02-04 23:09:33
 * @LastEditTime: 2021-02-05 00:20:59
 * @LastEditors: Please set LastEditors
 * @Description: 路由选项
 * @FilePath: /custom-chain-cli/src/router/routes.ts
 */
import { defineComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'
const notFound = {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  component: () =>
    import(
      /* webpackChunkName: "notFound-com" */
      '../view/notFound'
    )
}
const Home = defineComponent(() => {
  return () => <div>Home1</div>
})
const About = defineComponent(() => () => <div>About</div>)
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
      component: Home
    },
    {
      path: '/about',
      component: About
    },
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
