<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <p>{{count}}</p>
    <button @click="add">+1</button>
    <p>{{str}}</p>
  </div>
</template>

<script>
//1. 导入eventBu.js 木块
import bus from './EventBus'

export default {
  data() {
    return {
      // 子组件自己的数据，将来希望把count的值传给父组件
      count:0,
      str:''
    }
  },
  //2. 为bus绑定自定义数据
    created() {
    bus.$on('share',val =>{
      this.str = val
    })
  },
  methods:{
    add(){
      this.count +=1
      this.$emit('numchange',this.count)
    }
  },

}
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
