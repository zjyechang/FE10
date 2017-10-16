## 官方网址
https://cn.vuejs.org/v2/api/

介绍

## Vue.js 是什么

Vue.js (读音 /vjuː/，类似于 view) 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。
如果你是有经验的前端开发者，想知道 Vue.js 与其它库/框架的区别，查看对比其它框架。


#资源
    https://cn.vuejs.org/v2/guide/team.html
    作者之前在谷歌工作过

    git仓库：
    https://github.com/vuejs

    这个是vue资源相关资源库：
    https://github.com/vuejs/awesome-vue

ui框架：
    http://element.eleme.io
    https://www.iviewui.com




## cdn:
    https://cdn.bootcss.com
## 第一步：
引入vuejs资源

```
    <script src="https://cdn.bootcss.com/vue/2.4.4/vue.js"></script>

```

## 使用方式：

```
<body>
    <div id="app">   这个声明vue的挂载点，这个里面的所有元素都归vuejs 接管
        {{name}}
    </div>
</body>
<script>
    let vm = new Vue({
        el: "#app",
        data: {
            name: 'stark',
            age: 18
        }
    })
</script>
```

MVVM 模式将 Presenter 改名为 ViewModel，基本上与 MVP 模式完全一致。

唯一的区别是，它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然。Angular 和 Ember 都采用这种模式。

## 生命周期
    一个生命周期：从出生到死亡


## vue的生命周期
    每个 Vue 实例在被创建之前都要经过一系列的初始化过程。例如需要设置数据监听、编译模板、挂载实例到 DOM、在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，给予用户机会在一些特定的场景下添加他们自己的代码。


# 模板
一个字符串模板作为 Vue 实例的标识使用。模板将会 替换 挂载的元素。挂载元素的内容都将被忽略，除非模板的内容有分发插槽。

如果值以 # 开始，则它用作选项符，将使用匹配元素的 innerHTML 作为模板。常用的技巧是用 <script type="x-template"> 包含模板。


# 插槽

```
<div id="box">
        <shudong>
            <div>此时这里面写的东西替换掉 slot 的位置</div>
        </shudong>
    </div>

    <!-- 模版内容 -->
<template id="stark">
    <div>
        <slot>
            slot开始位置
        </slot>
        <h1>
            slot 开始
        </h1>
    </div>
</template>
```


在组件里面写template后，默认会把组件里面的内容替换掉
如果想让组件里面的内容显示，使用slot

在模版里面写入 <slot></slot>
可以让组件里面的内容来替换这个位置

```
<script>
    let vm = new Vue({
        el: "#box",
        data: {
            a: 'aaa'
        },
        //组件
        components: {
            'shudong': {
                template: '#stark'
            }
        }
    })
</script>
```