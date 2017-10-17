
## 动态组件
!!请注意，对于自定义标签的命名 Vue.js 不强制遵循 W3C 规则 (小写，并且包含一个短杠)，尽管这被认为是最佳实践。

通过使用保留的 <component> 元素，动态地绑定到它的 is 特性，我们让多个组件可以使用同一个挂载点，并动态切换：

props

类型：Array<string> | Object

详细：

props 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义校验和设置默认值。


## 在vue中请求api的方式  
请求接口，vue怎么与后台对接  

vue-resource 现在不维修了,推荐axios

axios

引入插件
```
    <script src="https://cdn.bootcss.com/axios/0.16.2/axios.js"></script>
```

get 请求方式：

```
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });   
```

post 请求方式 

```
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

如果使用了axios的话，想使用jsonp 

请去下载 npm i jsonp 这个包

# vue 安装
> Vue.js 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目：
https://github.com/vuejs-templates

```
全局安装 vue-cli
$ npm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
$ vue init webpack my-project
# 安装依赖，走你
$ cd my-project
$ npm install
$ npm run dev
```


```

   vue-cli · Generated "learnvue".

   To get started:

     cd learnvue
     npm install
     npm run dev

```

