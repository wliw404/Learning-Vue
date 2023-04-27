<template>
  <div class="app-container">
    <h1 v-color="'red'">App 根组件</h1>
    <h3 v-color="color">测试</h3>
    <h3 >测试</h3>
    <button @click="color='green'">改变color的值</button>
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
          <p>{{ msg }}</p>
          <p>{{ user }}</p>
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
  },
  data(){
    return {
      color:'skyblue'
    }
  },
  //私有自定义指令的节点
  directives:{
    //定义名为color的自定义指令，指向一个配置对象
    // color:{
    //   //当指令第一次被绑定到元素上的时候，会立即触发 bind 函数
    //   //形参中的 el 表示当前指令所绑定到的那个 DOM 对象
    //   //形参中的 binding 表示自定义指令绑定的属性
    //   //bind 函数只调用1此次：当指令第一次绑定到元素时调用，DOM更新不会触发bind
    //   bind(el,binding){
    //     console.log('触发了bind')
    //     console.log(el)
    //     console.log(binding)
    //     el.style.color = binding.value
    //   },
    //   //每次DOM更新都会调用update
    //   update(el,binding){
    //     console.log('触发了update')
    //     el.style.color = binding.value
    //   }
    // }

    //如果 bind 和 update 函数中的逻辑完全相同，则对象格式的自定义指令可以简写成函数格式
    color(el,binding){
      el.style.color = binding.value
    }
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
