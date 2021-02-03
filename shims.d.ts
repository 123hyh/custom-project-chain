/*
 * @Author: huangyuhui
 * @Date: 2021-01-27 17:58:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-03 23:28:43
 * @Description:
 * @FilePath: \custom-project-chain\shims.d.ts
 */

declare module '*.vue' {
  // 引用了type和value
  import Vue from 'vue'
  //( value是Vue构造器 type是Vue interface)

  export default Vue
}
declare module '*.module.scss' {
  const styles: { readonly [prop: string]: string }
  export default styles
}
declare module '*.json' {
  const jsonData: { readonly [prop: string]: string } | Array<any>
  export default jsonData
}
declare module '*.scss'
