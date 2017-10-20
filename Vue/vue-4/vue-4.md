<!-- TOC -->

    - [0.1. 生产环境](#01-生产环境)
    - [0.2. 开发环境](#02-开发环境)
    - [0.3. 端口被占用](#03-端口被占用)
- [1. 在vue里面使用axios的正确姿势](#1-在vue里面使用axios的正确姿势)
    - [1.1. 官方资源](#11-官方资源)
    - [1.2. 安装](#12-安装)
    - [1.3. 在组件里面使用axios](#13-在组件里面使用axios)
- [2. 解决跨域问题](#2-解决跨域问题)
        - [2.0.1. 使用$http.get()的方式访问](#201-使用httpget的方式访问)
            - [2.0.1.1. 使用方式](#2011-使用方式)
            - [2.0.1.2. 在入口文件里面添加](#2012-在入口文件里面添加)
            - [2.0.1.3. 在组件里面使用](#2013-在组件里面使用)
- [3. 解决api中请求图片403问题](#3-解决api中请求图片403问题)
    - [3.1. 解决这个问题的姿势](#31-解决这个问题的姿势)
        - [3.1.1. 使用方法：把api图片连接提取出来，使用下面方法过滤](#311-使用方法把api图片连接提取出来使用下面方法过滤)
        - [3.1.2. 整个组件代码](#312-整个组件代码)
- [4. vuex](#4-vuex)
- [5. vuex指南](#5-vuex指南)
    - [5.1. 官方手册](#51-官方手册)
    - [5.2. Vuex是什么？](#52-vuex是什么)
    - [5.3. 什么情况下我应该使用 Vuex？](#53-什么情况下我应该使用-vuex)
    - [5.4. 开始使用](#54-开始使用)
    - [5.5. 使用方法](#55-使用方法)
        - [5.5.1. 下载vuex](#551-下载vuex)
        - [5.5.2. 在src里面创建一个 store 文件夹](#552-在src里面创建一个-store-文件夹)
        - [5.5.3. store/index.js内容如下](#553-storeindexjs内容如下)
        - [5.5.4. 在/src/main.js 入口文件引入 vuex](#554-在srcmainjs-入口文件引入-vuex)
        - [5.5.5. 创建一个组件](#555-创建一个组件)

<!-- /TOC -->

## 0.1. 生产环境
    真正的产品上线的环境

## 0.2. 开发环境
    本地开发的环境

    process.env.NODE_ENV

## 0.3. 端口被占用

netstat -ano | grep 8080

查看pid 6324

然后打开任务管理器
进程 找到这个 6324进程 结束进程














# 1. 在vue里面使用axios的正确姿势

## 1.1. 官方资源
https://www.npmjs.com/package/axios 

https://github.com/mzabriskie/axios 

## 1.2. 安装
cnpm i axios -D  

在组件里面单独使用

## 1.3. 在组件里面使用axios
/src/views/hero/index.vue

```
import axios from 'axios';

 methods:{
    getHero(){
        axios.get('http://hero.shudong.wang/v1/db.php')
        .then(res=>{
            this.hero = res.data.hero;
        })
    }
}
```

















# 2. 解决跨域问题
在/config/index.js里面配置


```
    proxyTable: {
      '/v1': {
        target: 'http://hero.shudong.wang/',
        // changeOrigin: true
      }
    },
```
```
    methods:{
        getHero(){
            axios.get('/v1/db.php')
            .then(res=>{
                console.log(res.data.hero);
                this.hero = res.data.hero;
            })
        }
    }
    此时相当于在浏览器访问：

    localhost:8080/v1/db.php

    代理：
     proxyTable: {
            '/v1': {
                target: 'http://hero.shudong.wang/',
                changeOrigin: true
            }
        },
    记住配置完代理：要重启 npm run dev
     
    当代理检测到 /v1 的时候，发现自己有这个属性，匹配到了，然后把主机
    自动转成http://hero.shudong.wang/
    此时相当于访问 http://hero.shudong.wang/v1/db.php

    所以说我们访问
    localhost:8080/v1/db.php
    相当于真正访问
    http://hero.shudong.wang/v1/db.php

    原理：
    https://www.npmjs.com/package/http-proxy-middleware

    // proxy api requests
    Object.keys(proxyTable).forEach(function (context) {
        let options = proxyTable[context]
        if (typeof options === 'string') {
            options = { target: options }
        }
    app.use(proxyMiddleware(options.filter || context, options))
    })

```
知乎日报api:
https://news-at.zhihu.com/api/4/news/latest

### 2.0.1. 使用$http.get()的方式访问
把 axios 换成 this.$http


#### 2.0.1.1. 使用方式

```
npm install --save axios vue-axios
```


#### 2.0.1.2. 在入口文件里面添加

```
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

```

#### 2.0.1.3. 在组件里面使用
```
axios.get() -> this.$http.get()


         getHttpHero(){
                // https://news-at.zhihu.com/api/4/news/latest
                // axios.get('http://hero.shudong.wang/v1/db.php')
                this.$http.get('/api/news/latest')
                .then(res=>{
                    this.stories = res.data.stories;
                })
            },
```


vue-axios 源码分析
```
(function () {

/**
 * Install plugin
 * @param Vue
 * @param axios
 */

function plugin(Vue, axios) {

  if (plugin.installed) {
    return
  }
  plugin.installed = true

  if (!axios) {
    console.error('You have to install axios')
    return
  }

  Vue.axios = axios

  Object.defineProperties(Vue.prototype, {

    axios: {
      get() {
        return axios
      }
    },

    $http: {
      get() {
        return axios
      }
    }

  })
}

if (typeof exports == "object") {
  module.exports = plugin
} else if (typeof define == "function" && define.amd) {
  define([], function(){ return plugin })
} else if (window.Vue && window.axios) {
  Vue.use(plugin, window.axios)
}

})();
```















# 3. 解决api中请求图片403问题

*当我们访问某些接口的时候，解决了跨域问题，又产生了图片403禁止访问的问题*
>这种设计是api厂商正常保证自己的服务器不被刷流量  

## 3.1. 解决这个问题的姿势

利用这个网址来处理给你返回图片api地址  
https://images.weserv.nl/?url=图片地址


### 3.1.1. 使用方法：把api图片连接提取出来，使用下面方法过滤 

```
<div>图片：<img :src="getImage(item.img)" :alt="item.hero_title"></div>

getImage(url){
    console.log(url);
    // 把现在的图片连接传进来，返回一个不受限制的路径
    if(url !== undefined){
        return url[0].replace(/http\w{0,1}:\/\//g,'https://images.weserv.nl/?url=');
    }
}
```

### 3.1.2. 整个组件代码

配置代理

```
        proxyTable: {
            '/v1': {
                target: 'http://hero.shudong.wang/',
                changeOrigin: true
            },
            '/api': {
                target: 'https://news-at.zhihu.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api/4'
                }
            }
        },

        每次访问 localhost:8080/api/news/latest
             pathRewrite: {
                    '^/api': '/api/4'
                }
        每次遇到 以api 开头的url ，自动转化成 api/4
        api/news/latest  -> api/4/news/latest 
        相当于https://news-at.zhihu.com/api/4/news/latest
```

```
<template>
    <div>
        <div v-for="(item,index) in stories" :key="index">
            <div>名字：{{item.title}}</div>
            <div>描述：{{item.ga_prefix}}</div>
            <div>图片：<img :src="getImage(item.images)" :alt="item.title"></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data(){
            return{
                stories:{}
            }
        },
        created(){
            this.getHero()
        },
        methods:{
            getHero(){
                // https://news-at.zhihu.com/api/4/news/latest
                // axios.get('http://hero.shudong.wang/v1/db.php')
                axios.get('/api/news/latest')
                .then(res=>{
                    this.stories = res.data.stories;
                })
            },
            getImage(url){
                console.log(url);
                // 把现在的图片连接传进来，返回一个不受限制的路径
                if(url !== undefined){
                    return url[0].replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p');
                }
            }
        }
    }
</script>

```














# 4. vuex
# 5. vuex指南
## 5.1. 官方手册
https://vuex.vuejs.org/zh-cn/


## 5.2. Vuex是什么？
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。


如果你把请求的api接口全部放在一个组件里面，其他组件使用，就不太方便了

如果有一个第三方来存储这些东西的话，就很方便了。
多个组件都可以应用这个第三方的数据

controller1 -> service1 (专门用来请求api)
controller2 -> service1
controller3 -> service2

这个状态自管理应用包含以下几个部分：

state，驱动应用的数据源；
view，以声明方式将 state 映射到视图；
actions，响应在 view 上的用户输入导致的状态变化  

但是，当我们的应用遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏：

多个视图依赖于同一状态。
来自不同视图的行为需要变更同一状态。

对于问题一，传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。对于问题二，我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。

因此，我们为什么不把组件的共享状态抽取出来，以一个全局单例模式管理呢？在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为！

另外，通过定义和隔离状态管理中的各种概念并强制遵守一定的规则，我们的代码将会变得更结构化且易维护。

这就是 Vuex 背后的基本思想，借鉴了 Flux、Redux、和 The Elm Architecture。与其他模式不同的是，Vuex 是专门为 Vue.js 设计的状态管理库，以利用 Vue.js 的细粒度数据响应机制来进行高效的状态更新。

## 5.3. 什么情况下我应该使用 Vuex？

虽然 Vuex 可以帮助我们管理共享状态，但也附带了更多的概念和框架。这需要对短期和长期效益进行权衡。

如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。一个简单的 global event bus 就足够您所需了。但是，如果您需要构建是一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。引用 Redux 的作者 Dan Abramov 的话说就是：

Flux 架构就像眼镜：您自会知道什么时候需要它。

## 5.4. 开始使用
每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。Vuex 和单纯的全局对象有以下两点不同：

Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。

## 5.5. 使用方法

### 5.5.1. 下载vuex

```
npm install vuex --save
or
yarn add vuex
```

### 5.5.2. 在src里面创建一个 store 文件夹
    在store 文件夹里面新建一个index.js

### 5.5.3. store/index.js内容如下

```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        num: 100
    }
})

export default store
```

### 5.5.4. 在/src/main.js 入口文件引入 vuex

```
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'   // 在这引入 stroe 

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,  // 必须加上
    template: '<App/>',
    components: { App }
})
```

### 5.5.5. 创建一个组件
Increment.vue

```
<template>
  <div>
    <h2>加减法计算器</h2>
    <div>
        <input type="button" value="-" @click="minHandle">
            <span>{{num}}</span>
        <input type="button" value="+" @click="addHandle">
    </div>
  </div>
</template>
<script>
    export default{
        data(){
            return{
                // num:
                num:this.$store.state.num
            }
        },
        methods:{
            minHandle(){
                this.num -= 5;
            },
            addHandle(){
                this.num += 5;
            }
        }
    }
</script>
```