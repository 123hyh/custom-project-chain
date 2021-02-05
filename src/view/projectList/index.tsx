/*
 * @Author: huangyuhui
 * @Date: 2021-02-05 10:44:17
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-05 12:12:04
 * @Description:
 * @FilePath: \custom-project-chain\src\view\projectList\index.tsx
 */
import { defineComponent, reactive } from 'vue'
import { Table, Button } from 'ant-design-vue'
import { getProjectList } from '@/services/projectApproval'
export default defineComponent(() => {
  const state = reactive({
    columns: [
      {
        title: '项目名称',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Action',
        key: 'action',
        slots: { customRender: 'action' }
      }
    ],
    data: [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park'
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park'
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park'
      }
    ]
  })
  async function getList() {
    const data = await getProjectList<any>()
    state.data = data.rows
  }
  getList()
  return () => (
    <Table pagination={false} columns={state.columns} data-source={state.data}>
      {{
        action: () => (
          <div>
            <Button type="link">打包</Button>
            <Button type="link">下载</Button>
          </div>
        )
      }}
    </Table>
  )
})
