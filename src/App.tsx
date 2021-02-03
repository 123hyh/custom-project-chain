/*
 * @Author: huangyuhui
 * @Date: 2021-02-03 11:36:18
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-03 18:22:16
 * @Description:
 * @FilePath: \custom-project-chain\src\App.tsx
 */
import $style from './app.module.scss'
import { defineComponent } from 'vue'
import Home from './view/home'

export default defineComponent({
  name: 'Application',
  setup() {
    return () => (
      <div class={$style.app_wrap}>
        <Home></Home>
      </div>
    )
  }
})
