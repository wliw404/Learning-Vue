<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <button @click="comName='Left'">Left</button>
    <button @click="comName='Right'">Right</button>
    <hr/>

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!--1.component 标签是 vue 内置的，作用：组件的占位符-->
      <!--2. is 属性的值，表示要渲染的组件的名字-->
      <!--3. is 属性的值，应该是再组件 components 节点下注册的名称-->

      <!--<keep-alive include="Left,Right">-->
      <!--include：指定需要被缓存的组件 | exclude：指定不需要被缓存的组件-->
      <!--include和exclude不能被同时使用-->
      <keep-alive exclude="Right">
        <component :is="comName"></component>
      </keep-alive>
      <!--<Left></Left>-->
      <!--<Right></Right>-->
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
  components: {
    //如果在“声明组件”的时候，没有为组件指定 name 名称, 则组件的名称默认就是“注册时候的名称”
    Left,
    Right
  },
  data() {
    return {
      //表示要展示的组件的名字
      comName: 'Left'
    }
  },

}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}

.box {
  display: flex;
}
</style>
