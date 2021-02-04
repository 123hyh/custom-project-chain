/*
 * @Author: huangyuhui
 * @Date: 2021-02-04 14:08:35
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-04 19:35:51
 * @Description:
 * @FilePath: \custom-project-chain\src\router\index.tsx
 */
import { defineComponent } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { registerRouterHooks } from './hooks'
const Home = defineComponent(() => {
  return () => <div>Home1</div>
})
const About = defineComponent(() => () => <div>About</div>)

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(
        /* webpackChunkName: "home" */
        '../view/home'
      ),
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/about',
        component: About
      }
    ]
  }
]

export default registerRouterHooks(
  createRouter({
    history: createWebHashHistory(),
    routes
  })
)
