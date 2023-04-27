<template>
<div class="Right-container">
<h3>这是Right组件</h3>
  <button @click="postInfo">发起 POST 请求</button>
</div>
</template>

<script>
// import axios from 'axios'
export default {
  name: "Right",
  data(){
    return {

    }
  },
  methods:{
    async postInfo(){
      const {data:res} = await this.$http.post('/api/post',{name:'zs',age:20})
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.Right-container {
  background-color: orange;
  min-height: 200px;
   flex:1;
}
</style>