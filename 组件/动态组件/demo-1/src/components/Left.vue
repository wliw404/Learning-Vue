<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>{{ num }}</p>
    <button @click="num += 1">+1</button>
  </div>
</template>

<script>
export default {
  //当提供了 name 属性之后，组件的名称就是name属性的值
  // 对比：
  //1. 组件的“注册名称”的主要应用场景是：以标签的形式，把注册好的组卷，渲染和使用到页面结构之中
  //2. 组件声明时候的”name“名称的只要应用场景是：结合 <keep-alive> 标签实现组件缓存功能；以及在调试工具中看到组件的 name 名称
  name:'MyLeft',
  data() {
    return {
      num: 0
    }
  },
  created() {
    console.log('left yes')
  },
  destroyed() {
    console.log('left no')
  },
  activated() {
    console.log('left被激活了')
  },
  deactivated() {
    console.log('left被缓存了')
  }
}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
