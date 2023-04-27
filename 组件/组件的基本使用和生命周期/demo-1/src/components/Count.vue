<template>
<div>
  <h5>
    这是count组件
  </h5>
  <p>count的值是：{{count}}</p>
  <button @click="count += 1">+1</button>
   <button @click="show()">打印this</button>
</div>
</template>
<script>
export default {
  //props是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值
  // props:['init'],
  props:{
    //自定义属性A:{/*配置选项*/},
    //自定义属性B:{/*配置选项*/},
    //自定义属性C:{/*配置选项*/},
    init:{
      default:0,
      type:Number,
      //必填项校验
      required:true,
    }
  },
  data(){
    return {
      count:this.init
    }
  },
  methods:{
    show(){
      console.log(this)
    }
  }
}
</script>

<style scoped>

</style>