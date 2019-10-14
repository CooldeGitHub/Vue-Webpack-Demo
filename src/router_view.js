import Vue from 'vue/dist/vue.common.js'
import VueRouter from 'vue-router'
import App from './components/router_view.vue'

Vue.use(VueRouter)

const UserSettingNav = {
    template:`
    <div>
        <router-link to="/setting/superuser" >管理员</router-link>
        <br>
        <router-link to="/setting/user">普通用户</router-link>
    </div> 
    `
}

const UserSetting = {
    template:`
        <div>
            <h2>User Setting</h2>
            <UserSettingNav></UserSettingNav>
            <router-view></router-view>
            <router-view name="user2"></router-view>
        </div>
    `,
    components:{UserSettingNav}
}

const superuser = {
    template :`
        <div>
            <h3>这是管理员</h3>
        </div>
    `
}

const user1 = {
    template :`
        <div>
            <h3>这是user1</h3>
        </div>
    `
}
const user2 = {
    template :`
        <div>
            <h3>这是user2</h3>
        </div>
    `
}



const router =new VueRouter({
    routes : [
        {
            path:'/setting',
            component : UserSetting ,
            children :[
                {
                    path:'superuser',
                    component:superuser
                },
                {
                    path:'user',
                    components:{
                        default:user1,
                        user2:user2
                    }
                }
            ]
        }
    ]
})

router.push('/setting/superuser')

var vm = new Vue({
    el:'#app2',
    render: c => c(App),
    router
})