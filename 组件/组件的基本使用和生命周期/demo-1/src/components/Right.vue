<template>
  <div class="right-container">
    <h3>Right 组件</h3>
      <hr>
    <!--加上 : ,代表v-bind，值类型JS中的数字，不加 : 则为普通属性字符串 -->
    <MyCount :init="0"></MyCount>

  </div>
</template>

<script>
import Count from "@/components/Count";
export default {
  data(){
    return {
      count:this.init
    }
  },
}
</script>

<style lang="less" scoped>
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
h5 {
  color:pink;
}
</style>
