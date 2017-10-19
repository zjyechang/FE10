# 目录
https://vuejs-templates.github.io/webpack/structure.html
项目目录结构

.
├── build/                      # webpack config files
│   └── ...
├── config/
│   ├── index.js                # main project config
│   └── ...
├── src/
│   ├── main.js                 # app entry file
│   ├── App.vue                 # main app component
│   ├── components/             # ui components
│   │   └── ...
│   └── assets/                 # module assets (processed by webpack)
│       └── ...
├── static/                     # pure static assets (directly copied)
├── test/
│   └── unit/                   # unit tests
│   │   ├── specs/              # test spec files
│   │   ├── index.js            # test build entry file
│   │   └── karma.conf.js       # test runner config file
│   └── e2e/                    # e2e tests
│   │   ├── specs/              # test spec files
│   │   ├── custom-assertions/  # custom assertions for e2e tests
│   │   ├── runner.js           # test runner script
│   │   └── nightwatch.conf.js  # test runner config file
├── .babelrc                    # babel config
├── .postcssrc.js               # postcss config
├── .eslintrc.js                # eslint config
├── .editorconfig               # editor config
├── index.html                  # index.html template
└── package.json                # build scripts and dependencies


build 目录是webpack文件，配置参数一般不动  
congifig 是vue项目的基本配置文件  
node_modules 是项目安装依赖的模块  
src 源码文件，基本上我们用的文件都在这  
-- assets 资源文件夹，里面放一些静态资源，会经过webpack打包。如果有图片，会编译成base64
-- components 这个是组件文件夹，一般放公共组件
-- App.vue 主组件
-- main.js 主入口文件

static              静态文件，编译的时候，会直接复制到dist文件
test                测试文件
.babelrc            babel将ed6编译成es5  
.editorconfig       编辑器配置文件
.eslintignore       eslint忽略文件
.eslintrc.js        eslint 配置文件
.gitignore          git忽略文件
.postcssrc.js       自动加上css前缀
readme.md           这个是项目的说明 在github上，会默认读取这个文件在下面显示


## vue webpack cli
开发环境的server 是 express的服务 

## ssr 
http://nuxtjs.org/
spa single page app


# 去掉vue的eslint检测
记住：只要更改vue-cli的webpack配置文件，就要重启 才生效  
build/webpack.base.conf.js目录下  
<!-- 注释以下模块 -->
module: {  
    rules: [  
```
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
```






## vue 文件说明
```
<template>
//必须有一个成对的根标签
    <div>
        这里负责写dom
    </div>
<template>
<script>
    这里负责写js脚本逻辑
    export default{
        data(){
            return {
                name:'yechang',
                user: {},//{}约数类型为对象
                user: [],//[]约数类型为数组
                str: '',如果没有默认，不约束，至少写一个空字符串
            }
        }
    }
</script>

<style>
    这里面负责写样式
</style>
```

怎么使用：  

在路由里面：
```
import Work from '@/components/Work'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/work',
      name: 'work',
      component: work
    },
  ]
})
```


顺便说一下fis  
```
nav 
    nav.js
    nav.css
    nav.html
    在一个文件夹里面，有以html,css,js后缀的文件
    不用手工引入，fis 自动识别引入
```





# vue-cli 项目分析

## 入口文件

在webpack.base.conf.js

```
module.exports = {
    entry: {
        app: './src/main.js'
    },

```

```
import Vue from 'vue' // 引入vue模块，相当于 我们之前 src="vue.js"
import App from './App' // 引入组件模块
import router from './router' // 引入路由模块

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>', // 模版指定
  components: { App } // 组件
})
```


App.vue

```
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>  //路由视图所在的地方
  </div>
</template>
```





# 路由
vue-router

## 官方文档：
https://router.vuejs.org/zh-cn/

用 Vue.js + vue-router 创建单页应用，是非常简单的。使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，当你要把 vue-router 添加进来，我们需要做的是，将组件(components)映射到路由(routes)，然后告诉 vue-router 在哪里渲染它们。


## hash 和history模式

### 默认hash模式 :  
以#/开始匹配，这种模式叫哈希模式（hash）  
#### HTML5 的history 模式：
/开始,就是我们常见的没有#的模式  

```
    <a href="/">首页</a>
    <a href="/work">工作</a>
```
> 我们此时以a标签切换比较麻烦，每次更改路径的时候，需要单独改a标签里面的值

在vue里面提供了一个更好的方式解决问题， 
```
    <router-link to="/">我的首页</router-link>
    <router-link to="/work">我的工作</router-link>
    <router-view/>  //这个标签用来显示页面内容
```
## <router-view/>
>每次切换路由的时候，里面的内容都依靠<router-view/>来显示在页面上，只有页面有导航的时候

只有页面有导航的地方，打算让组件显示在页面上，必须写<router-view/>这个标签

```
<template>
  <div id="app">
    <router-link to="/">home主页</router-link>
    <router-link to="/work">我的工作</router-link>
    <router-view/> 这个标签用来显示页面内容
  </div>
</template>
```

### <router-link>默认解析成a标签
```
<a href="#/" class="router-link-active">home主页</a>
<a href="#/work" class="router-link-exact-active router-link-active">我的工作</a>
```


### 给导航添加激活样式

通过css里面设置
```
.router-link-active{
    background-color:red;
}
```
> 当我们单独设置激活样式的时候，根路由 /  永远都会匹配到样式

## 我们可以在标签中添加exact的方式解决永远都会匹配根路径样式的问题

```
    直接加在标签属性上
    <router-link exat to="/">我的主页</router-link>
```
## 给导航自定义添加导航名
通过设置

## 给导航添加激活样式

通过css里面设置
```
.router-link-active{
    background-color:red
}
```
> 当我们单独设置激活样式的时候，根路由 /  永远都会匹配到样式

## 我们可以在标签中添加 exact 方式来解决永远都会匹配到跟路径样式问题

```
    直接加在标签属性上
    <router-link exact to="/">home主页</router-link>
```
## 我们自己来给导航添加自定义class名字
> 通过 设置 active-class属性值 改变默认的激活样式类

```
    <router-link to="/work" active-class="starkwang">我的工作</router-link>
```

## 统一更改激活样式
在 router/index.js里面设置 linkExactActiveClass属性

```
export default new Router({
    // mode: 'history',
    mode: 'hash',
    linkExactActiveClass: 'shudong', //通过设置这个属性值，给所有的激活样式，添加统一的类


当我们统一设置后，每次激活的路由标签，都带着自己设置的这个shudong类
<a href="#/work" class="shudong starkwang">我的工作</a>
```

## 使用属性 tag 统一更改路由编译后的标签名字<a></a> -> <li> </li>
> 默认编译的标签名字是 a

```
    <router-link to="/stark" tag="li">我的Stark</router-link>

更改完后的dom
<li class="shudong router-link-active">我的Stark</li>
```

## 路由嵌套 chidren

使用方式
```
        {
            path: '/about',  // 这是一级路由
            component: About,
            children: [{  // 里面是嵌套路由
                    path: 'blog',  //如果在这个嵌套
                    name: 'blog',
                    component: Blog
                },
                {
                    path: '/info',
                    name: 'info',
                    component: Info
                }
            ]
        }
```

###  如果在这个嵌套里面的path:'' 留空，默认会显示这个组件

```
http://localhost:8080/#/about
此时会把 这个默认留空的嵌套路由组件显示出来，也就是上面的blog 组件显示出来 
```
### 如果嵌套路由里面的path:'blog' 写具体的路由,则访问的时候必须匹配


```

必须是这个路由精准匹配

http://localhost:8080/#/about/blog

这样才会把这个blog嵌套路由组件显示出来

```
### 以 / 开头的嵌套路径会被当作根路径。 
这让你充分的使用嵌套组件而无须设置嵌套的路径。

```
            {
            path: '/about',  // 这是一级路由
            component: About,
            children: [{  // 里面是嵌套路由
                    path: 'blog',  //如果在这个嵌套
                    name: 'blog',
                    component: Blog
                },
                {
                    path: '/info', // 以 / 开头的嵌套路径会被当作跟路径
                    name: 'info',
                    component: Info
                }
            ]
        }

    访问方式：
    http://localhost:8080/#/info
```

### 如果去掉/ 此时去掉了 '/info'  -> 'info'

```
        {
            path: '/about',  // 这是一级路由
            component: About,
            children: [{  // 里面是嵌套路由
                    path: 'blog',  //如果在这个嵌套
                    name: 'blog',
                    component: Blog
                },
                {
                    path: 'info', // 此时去掉了 '/info'  -> 'info'
                    name: 'info',
                    component: Info
                }
            ]
        }

      访问方式：
    http://localhost:8080/#/about/info

```

>你会发现，children 配置就是像 routes 配置一样的路由配置数组，所以呢，你可以嵌套多层路由。

>此时，基于上面的配置，当你访问 /about/info 时，about 的出口是不会渲染任何东西，这是因为没有匹配到合适的子路由。

## 重定向

### 使用方式 path:'*'
这个 * 是匹配上面没有找到的路径，会到这里
可以直接写：component: NotFound,

redirect 这是一个函数，里面有参数 to
to 打印出来是一个对象
{name: undefined, meta: {…}, path: "/aaa", hash: "", query: {…}, …}

### 通过 to.path 可以获取当前用户访问的路径，来写一些逻辑跳转下面是使用详细方式
```
{
    path: '*',
    // component: NotFound,
    redirect: (to) => {
        console.log(to);
        if (to.path === '/aaa') {
            return '/work'
        } else if (to.path === '/bbb') {
            return '/info'
        } else {
            return '/'
        }
    }
}
```


## 路由传参

在路由里面的path:'/drrr/:user?/:num?'     这个冒号后的字符串相当于key，
在组件里面使用 this.$router.params.user 来获取value的值  
访问方式
http://localhost:8080/#/user/ye/9

ye 就是  this.$route.params.user  的值
9 就是  this.$route.params.num  的值

this.$router.params == { user: ye, num: 9}  





# vue-X

npm index.html