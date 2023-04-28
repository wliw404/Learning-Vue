<template>
  <div id="app">
<!--    路由占位符-->
    <router-view></router-view>
<!--    Tabbar 区域-->
    <van-tabbar route :placeholder="true">
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

</script>

<style lang="less">

</style>
