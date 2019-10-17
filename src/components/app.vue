<!--
 * @Descripttion: 
 * @version: 
 * @Author: pengjie.ye
 * @Date: 2019-10-13 16:34:53
 * @LastEditors: pengjie.ye
 * @LastEditTime: 2019-10-13 17:51:33
 -->
<template>
    <div>
        <router-link to="/home/home_1">to home1</router-link>
        <router-link to="/home/home_2">to home2</router-link>
        <router-link to="/user/user_1">to user1</router-link>
        <router-link to="/user/user_2">to user2</router-link>
    <router-view></router-view>
    <button @click="login">点击模拟登录</button>
    </div>
    
</template>
<script>
export default {
    data : function(){
        return {
            post:'Hello Vue-Webpack'
        }
    },
    methods:{
        //用来模拟登陆 尝试导航守卫
        login:function(){
            sessionStorage.setItem("isLogin",true);
        }
    }
}
</script>