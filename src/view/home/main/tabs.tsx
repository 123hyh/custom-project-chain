/*
 * @Author: huangyuhui
 * @Date: 2021-02-04 11:31:51
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-04 20:07:09
 * @Description:
 * @FilePath: \custom-project-chain\src\view\home\main\tabs.tsx
 */
import { defineComponent, reactive } from 'vue'
import { MenuCollapsed } from '../menu'
import { Tabs, Dropdown, Menu } from 'ant-design-vue'
import { DownOutlined } from '@ant-design/icons-vue'
import $style from '../index.module.scss'
import { useRouter } from 'vue-router'
type DataType = { title: string; key: string };
type FilterType = (data: DataType , index: number ) => boolean;
export default defineComponent({
  setup() {
    const router = useRouter()
    const state = reactive({
      activeKey: '2',
      tabPans: Array.from({ length: 30 }).map((_, i) => ({
        title: `Tab ${i}__1__test__2__123`,
        key: `${i}`
      }))
    })
    /**
     * 点击删除 tabItem 事件
     * @param targetKey
     * @param action
     */
    function onEdit(targetKey: string | MouseEvent, action: 'add' | 'remove') {
      const { activeKey, tabPans } = state
      if (action === 'remove' && tabPans.length) {
        const isActive = targetKey === activeKey
        const index = isActive
          ? tabPans.findIndex(item => item.key === targetKey)
          : -1
        if (isActive && index) {
          const prev = tabPans[index - 1]
          const next = tabPans[index + 1]
          state.activeKey = prev ? prev.key : next.key
        }
        state.tabPans = tabPans.filter(item => item.key !== targetKey)
      }
    }
    /**
     * 切换tabitem事件
     * @param activeKey
     */
    function onChange(activeKey: string) {
      const n = +activeKey
      router.push(n % 2 === 0 ? '/about' : '/')
    }
    /**
     * 点击下拉菜单
     * @description:
     * @param {*} param1
     * @return {*}
     */
    function clickDownItem({
      key
    }: {
      key: 'left' | 'right' | 'other' | 'all'
    }) {
      const { tabPans, activeKey } = state
      const currentIndex = tabPans.findIndex(item => item.key === activeKey)
      const filter = (
        cb: FilterType
      ) => tabPans.filter(cb)
      
      const data = {
        left: filter((_item: unknown, index: number) => index >= currentIndex),
        right: filter((_item: unknown, index: number) => index <= currentIndex),
        other: [tabPans[currentIndex]],
        all: []
      }
      if (key === 'all') {
        state.activeKey = ''
      }

      state.tabPans = data[key]
    }
    return () => (
      <div class={$style.tabs}>
        <MenuCollapsed></MenuCollapsed>
        <Tabs
          size="small"
          v-model={[state.activeKey, 'activeKey']}
          onEdit={onEdit}
          onChange={onChange}
          hide-add
          type="editable-card"
        >
          {state.tabPans.map(({ title, key }) => (
            <Tabs.TabPane tab={title} key={key}></Tabs.TabPane>
          ))}
        </Tabs>
        {/* 更多操作 */}
        {state.tabPans.length ? (
          <Dropdown>
            {{
              default: () => (
                <div class={$style.down}>
                  <a class={$style.down_title}>
                    更多
                    <DownOutlined />
                  </a>
                </div>
              ),
              overlay: () => (
                <Menu onClick={clickDownItem}>
                  {[
                    { title: '关闭其他', key: 'other' },
                    { title: '关闭左侧', key: 'left' },
                    { title: '关闭右侧', key: 'right' },
                    { title: '关闭全部', key: 'all' }
                  ].map(({ key, title }) => (
                    <Menu.Item key={key}>{title}</Menu.Item>
                  ))}
                </Menu>
              )
            }}
          </Dropdown>
        ) : (
            ''
          )}
      </div>
    )
  }
})
