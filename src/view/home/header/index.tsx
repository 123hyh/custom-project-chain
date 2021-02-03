/*
 * @Author: huangyuhui
 * @Date: 2021-02-03 18:07:12
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-03 18:28:56
 * @Description:
 * @FilePath: \custom-project-chain\src\view\home\header\index.tsx
 */
import $style from '../index.module.scss'
import { defineComponent } from 'vue'

export default defineComponent(() => {
  return () => <header class={$style.header}>头部</header>
})
