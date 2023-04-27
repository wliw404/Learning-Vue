<template>
  <div class="home-container">
    <h3>Home 组件</h3>
    <hr/>
    <button @click="gotoLei">跳转到"雷神"页面</button>
    <button @click="gotoQY">跳转到"奇异博士"页面</button>
    <button @click="goto">后退</button>
    <button @click="$router.back()">后退</button>
    <button @click="$router.forward()">前进</button>
    <router-link to="/main">访问后台主页</router-link>
    <!--     <button @click="goto">前进</button>-->
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    gotoLei() {
      //通过编程式api方式，导航到指定页面
      this.$router.push('/movie/4')
    },
    gotoQY() {
      //通过编程式api方式，导航到指定页面
      this.$router.replace('/movie/3')
    },
    goto() {
      //-1后退一层,-2后退两层...
      //1前进一层,2前进2层...
      //如果后退/前进的层数超过上限,则原地不动
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: pink;
  padding: 15px;
}
</style>
