/*
 * @Author: huangyuhui
 * @Date: 2021-01-27 11:37:43
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-06 16:29:38
 * @Description:
 * @FilePath: \custom-project-chain\src\bootstrap.tsx
 */
import { createApp } from 'vue'
import router from './router'
import App from './App'

/* style */
import 'normalize.css'
import './styles/global.scss'

createApp(App).use(router).mount('#app')
