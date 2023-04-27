<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr/>
    <!--声明一个slot区域-->
    <!--ue 官方规定：每一个 slot 插槽，都要有一个 name 名称-->
    <!--如果省略了 slot 的 name 属性，则有一个默认名称叫做 default-->
    <slot name="a1">这是 a1 插槽的默认内容</slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
