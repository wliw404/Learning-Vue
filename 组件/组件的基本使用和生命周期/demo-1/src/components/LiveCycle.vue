<template>
<div class="test-container">
  <h3>LiveCycle.vue组件</h3>
  <h3 id="h3">{{books.length}}本图书</h3>
  <p id="p1">message 的值时：{{message}}</p>
  <button @click="message += '~'">修改message的值</button>
</div>
</template>

<script>
export default {
  name: "LiveCycle",
  props:["info"],
  data(){
    return {
      message:'hello vue.js',
      //定义一个books数组，存储所有图书的列表数据，默认空数组
      books:[]
    }
  },
  methods:{
    show(){
      console.log('调用了LiveCycle组件的show方法！')
    },
    //使用ajax请求图书列表的数据
    initBookList() {
      const xhr = new XMLHttpRequest()
      xhr.addEventListener('load',()=>{
        const res = JSON.parse(xhr.responseText)
        console.log(res)
        this.books = res.data
      })
      xhr.open('get','http://www.liulongbin.top:3006/api/getbooks')
      xhr.send()
    }
  },
  //创建阶段的第一个生命周期函数
  beforeCreate() {
    console.log(this.info)
    console.log(this.message)
    this.show()
     console.log('-----------------------------------')
  },
  //创建阶段的第二个生命周期函数
  //created生命周期函数非常常用
  //【※这个阶段可以发起 ajax 请求获取数据】
  //并且把请求到的数据转存到 data 中，供 template 渲染模板的时候用
  created() {
    console.log(this.info)
    console.log(this.message)
    this.show()
    this.initBookList()
    const dom = document.querySelector('#h3')
    console.log("created："+dom) //null,因为此时dom尚未创建
     console.log('-----------------------------------')
  },
   //创建阶段的第三个生命周期函数
  //还是无法操作dom
  //几乎不会被用到
  beforeMount() {
    const dom = document.querySelector('#h3')
    console.log("beforeMount："+dom) //null,因为此时dom还是尚未创建
     console.log('-----------------------------------')
  },
   //创建阶段的第四个生命周期函数
  //函数调用时，dom结构已经渲染成功
  mounted() {
    const dom = document.querySelector('#h3')
    console.log(dom)
     console.log('-----------------------------------')
  },

  //组件运行阶段的第一个生命周期函数
  //此时数据是最新的，但是页面的dom是旧的
  beforeUpdate() {
    //ajax数据拿到之后给books赋值，会触发一次
    console.log('beforeUpdate')
    console.log(this.message)
    const dom = document.querySelector('#p1')
    console.log(dom.innerHTML)
    console.log('-----------------------------------')
  },
  updated() {
    console.log('updated')
    console.log(this.message)
    const dom = document.querySelector('#p1')
    console.log(dom.innerHTML)
    console.log('-----------------------------------')
  },

  //组件销毁阶段的第一个生命周期函数、
  beforeDestroy() {
    console.log('beforeDestroy')
    console.log(this.message)
    const dom = document.querySelector('#p1')
    console.log(dom.innerHTML)
    console.log('-----------------------------------')
  },
  //组件销毁阶段的第二个生命周期函数、
  destroyed() {
     console.log('destroyed')
  }
}
</script>

<style scoped>
.test-container {
  background: papayawhip;
  height: 200px;
}
</style>