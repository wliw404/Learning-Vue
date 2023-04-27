import Vue from 'vue'
import App from './App2.vue'

//导入路由模块
//在模块化导入的时候，如果只给文件夹，那么默认导入这个文件夹下，名字叫做index.js的文件
import router from '@/router/index.js'

// 导入 bootstrap 样式
import 'bootstrap/dist/css/bootstrap.min.css'
// 全局样式
import '@/assets/global.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //在 Vue 项目中，要想把路由用起来，必须把路由实例对象，通过下面的方式进行挂载
  // router:路由的实例对象
  //router : router
  router //属性名和属性值一样可以直接简写
}).$mount('#app')
