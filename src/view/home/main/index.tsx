/*
 * @Author: huangyuhui
 * @Date: 2021-02-03 18:07:12
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-03 18:39:10
 * @Description:
 * @FilePath: \custom-project-chain\src\view\home\Main\index.tsx
 */

import { defineComponent } from 'vue'
import $style from '../index.module.scss'

export default defineComponent(() => {
  return () => <main class={$style.main}>主入口</main>
})
