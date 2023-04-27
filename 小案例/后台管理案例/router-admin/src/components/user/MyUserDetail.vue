<template>
  <div>
    <button type="button" class="btn btn-light btn-sm" @click="$router.back()">后退</button>
    <h4 class="text-center">用户详情</h4>
    <p>{{this.$route.params.id}}</p>
     <p>{{id}}</p>
  </div>
</template>

<script>
export default {
  name: 'MyUserDetail',
  props:['id']
}
</script>

<style lang="less" scoped></style>
