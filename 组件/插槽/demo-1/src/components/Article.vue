<template>
  <div class="article-container">
    <!--文章的标题-->
    <div class="header-box">
      <slot name="title">标题</slot>
    </div>
    <!--文章的内容-->
    <div class="content-box">
      <!--在封装组件时，为预留的 <slot> 提供属性对应的值，这种用法叫做”作用域插槽“-->
      <slot name="content" msg="hello vue" :user="userinfo">标题</slot>
    </div>
    <!--文章的作者-->
    <div class="footer-box">
      <slot name="author">标题</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data(){
    return {
      userinfo:{
        name:'zs',
        age:18
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article-container {
  > div {
    min-height: 150px;
  }

  .header-box {
    background: pink;
  }

  .content-box {
    background-color: skyblue;
  }

  .footer-box {
    background-color: yellow;
  }
}
</style>