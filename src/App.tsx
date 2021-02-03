/*
 * @Author: huangyuhui
 * @Date: 2021-02-03 11:36:18
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-03 12:04:59
 * @Description:
 * @FilePath: \custom-project-chain\src\App.tsx
 */
import $style from './app.module.scss'
import { defineComponent } from 'vue'
const url = new URL('@/assets/images/Thymeleaf.png', import.meta.url)
import Home from './view/Home'
export default defineComponent({
  name: 'Application',
  setup() {
    return () => (
      <div class={$style.app_wrap}>
        <h1>App.vue</h1>
        <img
          src={url.href}
          alt=""
          data-index="1"
          data-inde2="1"
          data-inde3="1"
          data-inde4="1"
          data-inde5="1"
        />
        <Home></Home>
      </div>
    )
  }
})
