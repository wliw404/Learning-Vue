<template>
  <div class="app-container">
    <h1 ref="myh1">App 根组件</h1>
    <button @click="showThis">打印this</button>
    <button @click="reset">重置left组件的count值为0</button>
    <hr/>
    <input type="text" v-if="inputVisible" @blur="showBtn" ref="iptRef"/>
    <button v-else="inputVisible" @click="showInput">展示输入框</button>

     <hr/>
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <left ref="left"></left>
    </div>
  </div>
</template>

<script>
import left from '@/components/Left'
export default {
  data(){
    return {
      //控制输入框和按钮的按需切换
      inputVisible: false,
    }
  },
  methods: {
    showThis() {
      console.log(this.$refs.myh1)
    },
    reset(){
      this.$refs.left.count = 0
    },
    showInput(){
      //切换布尔值，把文本框展示出来
      this.inputVisible = true
      //在下一个DOM更新周期之后执行
      this.$nextTick(()=>{
        this.$refs.iptRef.focus()
         console.log(this.$refs.iptRef)
      })
    },
    showBtn(){
      this.inputVisible = false
    }
  },
  components: {
    left,
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
