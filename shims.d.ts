/*
 * @Author: huangyuhui
 * @Date: 2021-01-27 17:58:34
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-02 20:12:15
 * @Description:
 * @FilePath: \custom-project-chain\shims.d.ts
 */

declare module '*.vue' {
  // 引用了type和value
  import Vue from 'vue'
  //( value是Vue构造器 type是Vue interface)

  export default Vue
}

declare module '*.scss'
interface Window {
  vm: Vue
}
