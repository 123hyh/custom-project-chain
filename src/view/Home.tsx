/*
 * @Author: huangyuhui
 * @Date: 2021-02-02 21:51:21
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-02 21:59:56
 * @Description:
 * @FilePath: \custom-project-chain\src\view\Home.tsx
 */
import { defineComponent, ref } from 'vue'
import CButton from './CButton'
export default defineComponent({
  setup() {
    const state = ref(0)
    function click() {
      state.value += 1
    }
    return () => (
      <CButton counter={state.value} selfClick={() => click()}></CButton>
    )
  }
})
