/*
 * @Author: huangyuhui
 * @Date: 2021-02-03 18:07:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-07 12:59:16
 * @Description:
 * @FilePath: \custom-project-chain\src\view\home\header\index.tsx
 */
import $style from '../index.module.scss'
import $headStyle from './index.module.scss'
import { defineComponent } from 'vue'
import { LogoutOutlined, SyncOutlined } from '@ant-design/icons-vue'
import { Popconfirm } from 'ant-design-vue'
import { setLogin } from '@/utils/system'
import { useRouter, RouterLink } from 'vue-router'
import { refreshCurrentRoute, removePermisstionRoute } from '@/router/hooks'
export default defineComponent(() => {
  const router = useRouter()

  /**
   * 退出登录
   */
  function logout() {
    setLogin(false)
    removePermisstionRoute()
    router.replace('/')
  }

  return () => (
    <header class={$style.header}>
      <div class={$style.logo}>
        <RouterLink to="/">
          <span title="点击回到首页">JiaYu Admin Pro</span>
        </RouterLink>
      </div>
      <div class={$headStyle.right_wrap}>
        <SyncOutlined
          title="刷新"
          onClick={() => refreshCurrentRoute()}
          class={$headStyle.icon_base}
          rotate={195}
        ></SyncOutlined>
        <Popconfirm title="确认退出登录？" onConfirm={() => logout()}>
          <LogoutOutlined title="退出登录" class={$headStyle.icon_base} />
        </Popconfirm>
      </div>
    </header>
  )
})
