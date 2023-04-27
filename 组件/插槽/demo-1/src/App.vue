<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr/>
    <Article>
      <template #title>
        <h3>一首诗</h3>
      </template>

      <!--<template #content="scope">-->
       <template #content="{msg,user}">
        <div>
          <p>我只愿面朝大海</p>
          <p>春暖花开</p>
<!--          <p>{{scope}}</p>-->
<!--          <p>{{scope.msg}}</p>-->
<!--          <p>{{scope.user}}</p>-->
          <p>{{msg}}</p>
           <p>{{user}}</p>
        </div>
      </template>

      <template #author>
        <div>作者：海子</div>
      </template>
    </Article>
    <hr/>
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left>
		<!--默认情况下，在使用组件的时候，提供的内容都会被填充到名字为 default的插槽之中-->
      <!--1.如果要把内容填充到指定名字的插槽中，需要使用 v-slot:[插槽名称] 这个指令-->
			<!--2. v-slot: 指令的简写形式是 #  -->
      <!--3. v-slot: 指令不能直接用在元素身上，必须用在 template 标签上或者组件上-->
			<!--4.如果插槽不是默认的名字default，则必须用template标签包裹 -->
      <!--5. template 这个标签，他是一个虚拟的标签，只起到包裹性质的作用，但是不会被渲染为如何实质性的 html元素-->
        <!--<template v-slot:a1>-->
        <template #a1>
          <p>这是在 Left 组件的内容区域，声明的 p 标签</p>
        </template>
      </Left>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Article from '@/components/Article.vue'

export default {
  components: {
    Left,
    Article
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}

.box {
  display: flex;
}
</style>
