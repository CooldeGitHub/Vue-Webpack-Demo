<template>
    <div>
        <router-link to="/home">to home</router-link>
    <router-link to="/user">to user</router-link>
    <router-view></router-view>
    </div>
</template>
<script>
export default {
    data : function(){
        return {
            post:'Hello Vue-Webpack'
        }
    }
}
</script>