/*
 * @Author: huangyuhui
 * @Date: 2021-02-03 18:06:29
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-03 18:29:13
 * @Description: 菜单组件
 * @FilePath: \custom-project-chain\src\view\home\Menu\index.tsx
 */

import { defineComponent } from 'vue'
import $style from '../index.module.scss'

export default defineComponent(() => {
  return () => <menu class={$style.menu}>菜单</menu>
})
