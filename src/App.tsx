/*
 * @Author: huangyuhui
 * @Date: 2021-02-03 11:36:18
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-06 16:29:29
 * @Description:
 * @FilePath: \custom-project-chain\src\App.tsx
 */
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'

export default defineComponent(() => () => (
  <ConfigProvider locale={zhCN}>
    <RouterView></RouterView>
  </ConfigProvider>
))
