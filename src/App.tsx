/*
 * @Author: huangyuhui
 * @Date: 2021-02-03 11:36:18
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-04 14:31:36
 * @Description:
 * @FilePath: \custom-project-chain\src\App.tsx
 */
import $style from './app.module.scss'
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'Application',
  setup() {
    return () => (
      <div class={$style.app_wrap}>
        <RouterView></RouterView>
      </div>
    )
  }
})
