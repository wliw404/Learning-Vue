<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>msg的值是：{{msg}}</p>
     <p>user的值是：{{user}}</p>
    <p>user的值是：{{user.name}}</p>
    <button @click="msg='太酷啦'">修改msg</button>
    <button @click="user.name='zs'">修改user</button>
    <hr>
    <button @click="send">把诗句分享给right</button>
  </div>
</template>

<script>
//1. 导入eventBu.js 木块
import bus from './EventBus'

export default {
  props:['msg','user'],
  data(){
    return {
      str:`红酥手。黄縢酒。满城春色宫墙柳。东风恶。欢情薄。一怀愁绪，几年离索。错错错。`
    }
  },
  methods:{
    send(){
      //2. 通过 eventbus 来发送数据
      bus.$emit('share',this.str)
    }
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
