/*
 * @Author: huangyuhui
 * @Date: 2021-02-05 10:44:17
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-06 18:58:15
 * @Description:
 * @FilePath: \custom-project-chain\src\view\projectList\index.tsx
 */
import { defineComponent, reactive } from 'vue'
import { Table, Button } from 'ant-design-vue'
import { getProjectList } from '@/services/projectApproval'
import { projectListItem } from './po'
import { ColumnProps } from 'ant-design-vue/lib/table/interface'
import { refreshCurrentRoute } from '@/router/hooks'
import { faultTolerant } from '@/services'

type itemType = ReturnType<typeof projectListItem>

export default defineComponent(() => {
  const state = reactive<{ data: itemType[]; columns: ColumnProps[] }>({
    columns: [
      {
        title: '创建人',
        dataIndex: 'createBy',
        key: 'createBy',
        width: 150,
        ellipsis: true
      },
      {
        title: '操作',
        key: 'action',
        slots: { customRender: 'action' }
      }
    ],
    data: []
  })

  async function getList() {
    const [, result] = await faultTolerant(() => getProjectList<itemType>())
    state.data = result?.rows ?? []
  }

  getList()
  return () => (
    <>
      <Button
        onClick={() => {
          refreshCurrentRoute()
        }}
      >
        刷新
      </Button>
      <Table
        pagination={false}
        columns={state.columns}
        data-source={state.data}
      >
        {{
          action: () => (
            <div>
              <Button type="link">打包</Button>
              <Button type="link">下载</Button>
            </div>
          )
        }}
      </Table>
    </>
  )
})
