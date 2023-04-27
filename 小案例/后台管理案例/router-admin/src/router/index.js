import Vue from 'vue'
import VueRouter from 'vue-router'
import pathArr from "@/router/pathArr";

//导入组件
import Login from '@/components/MyLogin'
import Home from '@/components/MyHome'
import Users from '@/components/menus/MyUsers'
import Rights from '@/components/menus/MyRights'
import Goods from '@/components/menus/MyGoods'
import Orders from '@/components/menus/MyOrders'
import Settings from '@/components/menus/MySettings'

import UserDetail from '@/components/user/MyUserDetail'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        //重定向
        {path:'/',redirect:'/login'},
        //登录的路由规则
        {path:'/login',component:Login},
        {
            path:'/home',
            component:Home,
            redirect:'/home/users',
            children:[
                {path:'users',component:Users},
                {path:'rights',component:Rights},
                {path:'goods',component:Goods},
                {path:'orders',component:Orders},
                {path:'settings',component:Settings},
                //用户详情页的路由规则
                {path:'userinfo/:id',component:UserDetail,props:true},
            ]
        }
    ]
})

//路由全局前置守卫
router.beforeEach((to,from,next)=>{
    const pathArr = ['/home','/home/users','/home/rights']
    // if(to.path === '/home'){
    // if(pathArr.indexOf(to.path) !== -1 ){
    if(to.path !== '/login'){
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

export default router