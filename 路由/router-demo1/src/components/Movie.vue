<template>
  <div class="movie-container">
    <h3>Movie 组件</h3>
    <p>{{id}}</p>
    <p>{{$route.params.id}}</p>
    <button @click="showThis">打印this</button>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  //接收数据
  props:['id'],
  methods:{
    showThis(){
      console.log(this)
    }
  }
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
