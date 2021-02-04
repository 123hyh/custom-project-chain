/*
 * @Author: huangyuhui
 * @Date: 2021-02-04 23:07:08
 * @LastEditTime: 2021-02-05 00:10:56
 * @LastEditors: Please set LastEditors
 * @Description: 登录页面
 * @FilePath: /custom-chain-cli/src/view/login/index.tsx
 */
import $style from './index.module.scss'
import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'
import { addPermisstionRoute } from '@/router/hooks'
import { useRouter } from 'vue-router'

export default defineComponent(() => {
  const router = useRouter()

  function goLogin() {
    addPermisstionRoute()
    router.replace('/')
  }
  return () => (
    <div class={$style.login_wrap}>
      <Button type="primary" onClick={() => goLogin()}>
        登录
      </Button>
    </div>
  )
})
