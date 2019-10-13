/*
 * @Descripttion: 
 * @version: 
 * @Author: pengjie.ye
 * @Date: 2019-10-13 16:34:53
 * @LastEditors: pengjie.ye
 * @LastEditTime: 2019-10-13 18:04:05
 */
import css from './app.css'
import Vue from 'vue/dist/vue.common.js'
import VueRouter from 'vue-router'
import App from './components/app.vue'

Vue.use(VueRouter)
console.log('hello world3')

//1.创建组件

const Home = {
    template : `<div>
                <span>this is home</span>
                <span>dynamic segment {{$route.params.id}}</span>
                <router-view></router-view>
                </div>`
                //注意获取动态参数时是 params 有s 下同
}

const homeProfile = {
    template : `<div>
                <span>这是Home组件的嵌套路由组件</span>
                <span>dynamic segment {{this.$route.params.id}}</span>
                </div>`
}

const User = {
    template : `<div>
                    <span>this is user</span>
                    <span>dynamic segment {{$route.params.id}}</span>
                    <router-view></router-view>
                </div>`
}

const userProfile = {
    template : `<div>
                    <span>这是user组件的嵌套路由组件</span>
                    <span>dynamic segment {{$route.params.id}}</span>
                </div>`
}

//2.配置路由
const Routers = [
    {
        path:'/home/:id' , component : Home,
        children:[
            {
                //表示路径 /home/:id/profile
                path:'profile',
                component:homeProfile
            }
        ]
    },
    {
        path:'/user/:id' , component : User,
        children:[
            {
                //表示路径 /user/:id/profile
                path:'profile',
                component:userProfile
            }
        ]

    },
    {   
        //默认路径
        path:'*' , redirect: '/home/home_1'
    }
]
//3.创建路由实例
var router = new VueRouter({
    routes : Routers
})

var vm = new Vue({
    el:'#app',
    render: c=>c(App),
    router
})
