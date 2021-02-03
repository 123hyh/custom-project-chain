/*
 * @Author: huangyuhui
 * @Date: 2021-02-03 18:06:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-04 00:05:02
 * @Description: 菜单组件
 * @FilePath: \custom-project-chain\src\view\home\Menu\index.tsx
 */

import { defineComponent, reactive } from 'vue'
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
    <Menu.SubMenu data-sub-path={currentPath} key={currentPath}>
      {{
        title: () => <>{menuItem.title}</>,
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

export default defineComponent(() => {
  const menuState = reactive(menuOption)
  return () => (
    <Menu class={$style.menu} mode="inline">
      {(menuState as MenuItemType[]).map(item => generateMenu(item, ''))}
    </Menu>
  )
})
