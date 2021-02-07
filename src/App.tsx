/*
 * @Author: huangyuhui
 * @Date: 2021-02-03 11:36:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-07 13:16:11
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
