<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr>
    <!--加上 : ,代表v-bind，值类型JS中的数字，不加 : 则为普通属性字符串 -->
    <MyCount :init="100"></MyCount>
  </div>
</template>

<script>
import Count from "@/components/Count";
export default {

}
</script>

<style lang="less" scoped>
.left-container {
  padding: 0 20px 20px;
  background-color:salmon;
  min-height: 250px;
  flex: 1;
}
h3 {
  color:yellow;
}
/deep/ h5 {
  color:pink
}
</style>
