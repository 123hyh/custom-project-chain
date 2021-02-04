/*
 * @Author: huangyuhui
 * @Date: 2021-02-03 18:07:12
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-04 15:49:11
 * @Description:
 * @FilePath: \custom-project-chain\src\view\home\Main\index.tsx
 */

import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import $style from '../index.module.scss'
import Tabs from './tabs'
export default defineComponent(() => {
  return () => (
    <div class={$style.content_wrap}>
      <Tabs></Tabs>
      <main class={$style.main}>
        <RouterView></RouterView>
      </main>
    </div>
  )
})
