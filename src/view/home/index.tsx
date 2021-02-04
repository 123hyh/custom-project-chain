/*
 * @Author: huangyuhui
 * @Date: 2021-02-02 21:51:21
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-04 11:14:53
 * @Description: 主页
 * @FilePath: \custom-project-chain\src\view\home\index.tsx
 */
import { defineComponent } from 'vue'
import JHeader from './header'
import JMenu from './menu'
import JFooter from './footer'
import JMain from './main'
import $style from './index.module.scss'
export default defineComponent({
  setup() {
    return () => (
      <section class={$style.home}>
        <JHeader></JHeader>
        <div class={$style.layout}>
          <JMenu></JMenu>
          <JMain></JMain>
          <JFooter></JFooter>
        </div>
      </section>
    )
  }
})
