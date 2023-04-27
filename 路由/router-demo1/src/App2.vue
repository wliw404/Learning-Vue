<template>
  <div class="app-container">
    <h1>App2 组件</h1>
    <!--当安装和配置了 vue-router 后，就可以使用 router-link 来替代普通的a链接-->
    <!--<a href="#/home">首页</a>-->
    <router-link to="/home">首页</router-link>
    <!--<a href="#/movie">电影</a>-->
    <router-link to="/movie">电影</router-link>
    <!--动态路由-->
    <!--注意1：在 hash 地址中， / 后面的参数项，叫做"路径参数"-->
    <!--在路由"参数对象"中，需要使用this.$route.params来访问路径参数-->
    <!--注意2：在hash地址中，？ 后面的参数项叫做“查询参数”-->
    <!--在路由"参数对象"中，需要使用this.$route.query来访问查询参数-->
    <!--注意3：在 this.$route 中，path 只是路径部分；fullpath 是完整地址-->
    <router-link to="/movie/1">钢铁侠</router-link>
    <router-link to="/movie/2?name=meidui">美国队长</router-link>
    <router-link to="/movie/3">奇异博士</router-link>
    <router-link to="/movie/4">雷神</router-link>
    <!--<a href="#/about">关于</a>-->
    <router-link to="/about">关于</router-link>
    <hr/>
    <!--只要在项目中安装和配置了 vue-router，就可以使用 router-view 这个组件-->
    <!--它的作用很单纯：占位符-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;

  > a {
    margin-right: 10px;
  }
}
</style>
