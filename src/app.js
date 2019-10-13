/*
 * @Descripttion: 
 * @version: 
 * @Author: pengjie.ye
 * @Date: 2019-10-13 16:34:53
 * @LastEditors: pengjie.ye
 * @LastEditTime: 2019-10-13 17:39:01
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
                </div>`
                //注意获取动态参数时是 params 有s 下同
}

const User = {
    template : `<div>
                    <span>this is user</span>
                    <span>dynamic segment {{$route.params.id}}</span>
                </div>`
}

//2.配置路由
const Routers = [
    {
        path:'/home/:id' , component : Home
    },
    {
        path:'/user/:id' , component : User
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
