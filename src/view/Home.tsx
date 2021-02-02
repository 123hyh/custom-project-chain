/*
 * @Author: huangyuhui
 * @Date: 2021-02-02 21:51:21
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-02 21:59:56
 * @Description:
 * @FilePath: \custom-project-chain\src\view\Home.tsx
 */
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    function click() {
      console.log(1)
    }
    return () => (
      <div>
        <button onClick={() => click()}>打印</button>
      </div>
    )
  }
})
