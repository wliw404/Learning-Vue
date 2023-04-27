<template>
  <div class="number-container d-flex justify-content-center align-items-center">
    <!-- 减 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="sub">-</button>
    <!-- 购买的数量 -->
    <span class="number-box">{{ num }}</span>
    <!-- 加 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="add">+</button>
  </div>
</template>

<script>
import bus from '@/components/eventBus.js'

export default {
  props: {
    //接收商品的id值，将来使用eventBus方案把数量床底到App.vue的时候，
    // 需要知道改改变哪个商品的数量
    id: {
      type: Number,
      // required: true
    },
    //接收到的num数量
    num: {
      type: Number,
      default: 1
    }
  },
  data(){
    return{

    }
  },
  methods: {

    add() {
      // //要发送给app的数据格式为{id,value}
      // //id -> 商品id , value -> 商品最新购买数量
      // const obj = {id: this.id, value: this.num + 1}
      // //通过eventbus把obj对象发送给app
      // // bus.$emit('',obj)
      // // console.log(obj)
      // bus.$emit('share', obj)

      //插槽
      //通过自定义事件的方法，把最新的数量值发送给父组件
      this.$emit('num-change',this.num + 1)
    },
    sub() {
      if(this.num - 1 == 0 ) return
      // //要发送给app的数据格式为{id,value}
      // //id -> 商品id , value -> 商品最新购买数量
      // const obj = {id: this.id, value: this.num - 1}
      // //通过eventbus把obj对象发送给app
      // // bus.$emit('',obj)
      // // console.log(obj)
      // bus.$emit('share', obj)

            //插槽
      //通过自定义事件的方法，把最新的数量值发送给父组件
      this.$emit('num-change',this.num - 1)
    }
  }
}
</script>

<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>
