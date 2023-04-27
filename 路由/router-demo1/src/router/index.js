// src/router/index.js 就是项目的路由模块

//1.导入 Vue 和 VueRouter 的包
import Vue from 'vue'
import VueRouter from 'vue-router'

//导入需要的组件
import  Home from '@/components/Home.vue'
import  Movie from '@/components/Movie.vue'
import  About from '@/components/About.vue'
import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'

import Login from '@/components/login.vue'
import Main from '@/components/main.vue'

//2.调用 Vue.use() 函数,把 VueRouter 安装为 Vue的插件
Vue.use(VueRouter)

//3.创建路由的实例对象
const router = new VueRouter({
    //路由规则
    // routes 是一个数组，作用：定义 hash地址 与 组件 之间的对应关系
    //hash 不需要写 #
    routes:[
        //重定向的路由规则
        {path:'/',redirect:'/home'},
        // {path:hash地址,component:要展示的组件},
        {path:'/home',component:Home},

        //需求在 movie 组件中希望根据 id 的值,展示对于电影的详情信息
        {path:'/movie/:id',component:Movie,props:true},

        {  //about 页面的路由规则（父级路由规则）
            path:'/about',
            component:About,
             //重定向about
            // redirect:'/about/tab1',
            children:[
                //1.通过 children 属性，嵌套声明子级路由规则
                //2.默认子路由：如果 children 数组中，某个路由规则的 path 值为空字符串，则这条路由规则叫做“默认子路由”，约等于重定向
                {path:'',component:Tab1},
                // {path:'tab1',component:Tab1},
                {path:'tab2',component:Tab2},
            ]
        },

        {path:'/login',component:Login},
        {path:'/main',component:Main}
    ]
})

//全局路由守卫
//为 router 实例对象，声明全局前置导航守卫
//只要发生了路由的跳转，必然会触发 beforeEach 指定的 function 回调函数
router.beforeEach(function (to,from,next){
    //to 将要访问的路由的学习对象
    console.log(to)
    //from 将要离开的路由的学习对象
    console.log(from)
    //next 是一个函数,调用 next() 表示放行，允许这次路由导航
    // next()
    //强制跳转到其它页面
    // next('path')
    //不允许跳转,原地停留
    // next(false)

    //分析:
    //1.拿到用户将要访问的 hash 地址
    //2.判断 hash 地址是否等于 /main
    //2.1 如果等于 /main，则证明需要登录之后，才能访问成功
    //2.2 如果不等于 /main,则不需要登录，直接放行 next()
    //3.如果访问的地址是 .main。则需要读取 localStorage 中 token 值
    //3.1 如果有，放行
    //3.2 没有，禁止
    if(to.path === '/main'){
        const token = localStorage.getItem('token')
        if(token){
            next()
        }else{
            next('/login')
        }
    }else {
        next()
    }


})

//4.向外共享路由的实例对象
export  default router

