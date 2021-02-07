/*
 * @Author: huangyuhui
 * @Date: 2021-02-02 21:51:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-07 13:16:52
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
        <JHeader />
        <div class={$style.layout}>
          <JMenu />
          <JMain />
          <JFooter />
        </div>
      </section>
    )
  }
})
