/*
 * @Author: huangyuhui
 * @Date: 2021-02-03 18:07:12
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-04 18:11:47
 * @Description:
 * @FilePath: \custom-project-chain\src\view\home\header\index.tsx
 */
import $style from '../index.module.scss'
import { defineComponent } from 'vue'

export default defineComponent(() => {
  return () => (
    <header class={$style.header}>
      <div class={$style.logo}>
        <a href=""> JiaYu Admin Pro </a>
      </div>
    </header>
  )
})
