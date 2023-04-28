import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入插件
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'

// 把 VueRouter 安装为 Vue 插件
Vue.use(VueRouter)

// 路由规则数组
const routes = [
  // 定义首页路由规则
  { path: '/', component: Home },
  // 定义我的路由规则
  { path: '/user', component: User }
]

// 创建路由实例对象
const router = new VueRouter({
  routes
})

export default router
