/*
 * @Author: huangyuhui
 * @Date: 2021-02-02 21:51:21
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-03 18:49:13
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
        <JMenu></JMenu>
        <div class={$style.layout}>
          <JHeader></JHeader>
          <JMain></JMain>
          <JFooter></JFooter>
        </div>
      </section>
    )
  }
})
