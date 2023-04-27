<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <p>{{userinfo}}</p>
    <p >{{countFromSon}}</p>
    <hr />
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <left :msg="message" :user="userinfo"></left>
      <right @numchange="getNewCount"></right>
    </div>
  </div>
</template>
<script>
import Left from '@/components/Left.vue'
import right from '@/components/Right.vue'
export default {
  data(){
    return {
      message:'hello 132 的宝们',
      userinfo:{name:'wsc',age:18},
      //定义countFromSon来接收子组件传递过来的数据
      countFromSon:0
    }
  },
  methods:{
    getNewCount(Val){
      this.countFromSon = Val
    }
  },
  components:{
    Left,
    right,
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
