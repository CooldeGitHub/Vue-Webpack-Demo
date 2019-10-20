/*
 * @Descripttion: 
 * @version: 
 * @Author: pengjie.ye
 * @Date: 2019-10-20 14:14:45
 * @LastEditors: pengjie.ye
 * @LastEditTime: 2019-10-20 15:01:58
 */
import Vue from 'vue/dist/vue.common.js'
import render from './components/app_render.vue'

var vm = new Vue({
    el:"#app",
    data:{
        items:[{
            title:"1"
        },{
            title:"2"
        },{
            title:"3"
        }]
        // items:[]
    },
    components:{
        render
    }
})