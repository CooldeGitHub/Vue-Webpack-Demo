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
</div>`
}

const User = {
    template : `<div>
                    <span>this is user</span>
                </div>`
}

//2.配置路由
const Routers = [
    {
        path:'/home' , component : Home
    },
    {
        path:'/user' , component : User
    },
    {
        path:'*' , redirect: '/home'
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
