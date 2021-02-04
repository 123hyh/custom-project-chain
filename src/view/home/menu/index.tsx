/*
 * @Author: huangyuhui
 * @Date: 2021-02-03 18:06:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-04 23:11:23
 * @Description: 菜单组件
 * @FilePath: \custom-project-chain\src\view\home\Menu\index.tsx
 */

import { defineComponent, reactive, ref } from 'vue'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  /* 菜单图标 */
  WindowsOutlined
} from '@ant-design/icons-vue'

import { Menu } from 'ant-design-vue'
import $style from '../index.module.scss'
import menuOption from './tem.json'

type MenuItemType = {
  title: string
  menuCode: string
  children?: MenuItemType[]
}

const generateMenu = (menuItem: MenuItemType, prefixPath: string) => {
  const currentPath = `${prefixPath}${menuItem.menuCode}`
  return menuItem.children ? (
    <Menu.SubMenu
      class={$style.sub_menu}
      popupClassName={$style.submen_open}
      data-sub-path={currentPath}
      key={currentPath}
    >
      {{
        title: () => (
          <span class={$style.menu_sub_title}>
            <WindowsOutlined />
            <span>{menuItem.title}</span>
          </span>
        ),
        default: () =>
          menuItem.children?.map(item => generateMenu(item, currentPath))
      }}
    </Menu.SubMenu>
  ) : (
    <Menu.Item data-path={currentPath} key={currentPath}>
      {menuItem.title}
    </Menu.Item>
  )
}
/* 是否展开菜单 */
const collapsed = ref(false)

export const MenuCollapsed = defineComponent(() => () => (
  <>
    {collapsed.value ? (
      <MenuUnfoldOutlined
        onClick={() => {
          collapsed.value = false
        }}
        class={$style.icon_base}
      />
    ) : (
      <MenuFoldOutlined
        onClick={() => {
          collapsed.value = true
        }}
        class={$style.icon_base}
      />
    )}
  </>
))

export default defineComponent(() => {
  const menuState = reactive(menuOption)
  function clickMenu(clickMenuData: { key: string }) {
    console.log(clickMenuData.key)
  }
  return () => (
    <Menu
      class={[
        $style.menu,
        collapsed.value === false ? $style.not_collapsed : $style.is_collapsed
      ]}
      mode="inline"
      inline-collapsed={collapsed.value}
      onClick={clickMenu}
    >
      {(menuState as MenuItemType[]).map(item => generateMenu(item, ''))}
    </Menu>
  )
})
