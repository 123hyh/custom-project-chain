<!--
 * @Author: huangyuhui
 * @Date: 2021-01-27 11:49:35
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-02 21:00:09
 * @Description: 
 * @FilePath: \custom-project-chain\src\App.vue
-->

<template>
  <div class="app-wrap">
    <h1>App.vue</h1>
    <img
      :src="url"
      alt=""
      data-index="1"
      data-inde2="1"
      data-inde3="1"
      data-inde4="1"
      data-inde5="1"
    />
    <div></div>
  </div>
</template>

<script>
  const url = new URL('@/assets/images/Thymeleaf.png', import.meta.url)
  export default {
    name: 'Application',
    data: () => ({
      url
    })
  }
</script>

<style lang="scss">
  .app-wrap {
    color: $text-href-color;
  }
</style>
