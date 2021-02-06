/*
 * @Author: huangyuhui
 * @Date: 2021-02-04 14:08:35
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-06 16:38:17
 * @Description: 路由
 * @FilePath: \custom-project-chain\src\router\index.tsx
 */
import { createRouter, createWebHistory } from 'vue-router'
import { registerRouterHooks } from './hooks'
import routes from './routes'
export default registerRouterHooks(
  createRouter({
    history: createWebHistory(),
    routes
  })
)
