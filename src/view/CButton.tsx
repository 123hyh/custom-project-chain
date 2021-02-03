/*
 * @Author: huangyuhui
 * @Date: 2021-02-03 10:15:24
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-03 17:20:54
 * @Description:
 * @FilePath: \custom-project-chain\src\view\CButton.tsx
 */
import { Button } from 'ant-design-vue'
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    counter: {
      type: Number,
      required: true
    },
    selfClick: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    return () => (
      <>
        <Button onClick={() => props.selfClick()}>打印</Button>
        <p>次数{props.counter}</p>
      </>
    )
  }
})
