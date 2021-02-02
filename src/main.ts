/*
 * @Author: huangyuhui
 * @Date: 2021-01-27 11:37:43
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-01-27 18:21:15
 * @Description:
 * @FilePath: \project-cli\src\main.ts
 */
import Vue from 'vue'
import App from './App.vue'

/* style */
import 'normalize.css'
import './styles/global.scss'

new Vue({
  el: '#app',
  render: (h) => h(App),
})
