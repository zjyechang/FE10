<template>
  <div id="app">
    <img src="./assets/logo.png">
    <a href="/">首页</a>
    <a href="/work">工作</a>

    <router-link to="/">我的首页</router-link>
    <router-link to="/work">我的工作</router-link>
    <router-link to="/increment">加减法</router-link>

    <router-link to="/charley" tag="li">Charley</router-link>
    <router-link to="/user/2/profile" tag="li">我的profile</router-link>
    <router-link to="/user/4/posts" tag="li">我的posts</router-link>

    <router-link to="/drrr" tag="p">用户信息</router-link>
    <router-link to="/hero" tag="h2">我的hero</router-link>
    <router-link to="/daily" tag="h3">daily日报</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{
    background-color:red;
}
.yechang{
    background-color:#de3b8b;
}
</style>
