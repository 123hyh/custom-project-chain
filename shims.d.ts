/*
 * @Author: huangyuhui
 * @Date: 2021-01-27 17:58:34
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-01-27 18:03:06
 * @Description:
 * @FilePath: \project-cli\shims.d.ts
 */

declare module '*.vue' {
  import Vue from 'vue' // 引用了type和value

  //( value是Vue构造器 type是Vue interface)

  export default Vue
}

declare module '*.scss'
