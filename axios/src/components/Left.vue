<template>
<div class="Left-container">
<h3>这是Left组件</h3>
  <button @click="getInfo">发起 GET 请求</button>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Left",
  data(){
    return{

    }
  },
  methods:{
    async getInfo(){
      const {data:res}= await axios.get('http://www.liulongbin.top:3006/api/get')
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.Left-container {
  background-color: pink;
  min-height: 200px;
  flex:1;
}
</style>