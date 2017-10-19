import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Work from '@/components/Work'
import Charley from '@/components/Charley'
import Drrr from '@/components/drrr'
import Hero from '@/views/hero'
import Daily from '@/views/daily'
import Increment from '@/components/Increment'

Vue.use(Router)
const UserProfile = { template: `<div> 我是profile 组件 </div>` };
const UserPosts = { template: `<div> 我是UserPosts 组件 </div>` };
const Blog = { template: `<div> 我是Blog 组件 </div>` };
const Info = { template: `<div> 我是Info 组件 </div>` };
const NotFound = { template: `<div>404 您访问的页面不存在 </div>` };
const About = { template: `<div> 我是About组件 <router-view> </router-view> </div>` };
const User = {
    // template: '<div>User {{ $route.params.id }}</div>'
  template: '<div class="user"> \
          <h2> User {{ $route.params.id } } </h2> \
          <router-view> </router-view> \
          </div>'
}

export default new Router({
  // mode: 'history',
  mode: 'hash',
  linkExactActiveClass: 'yechang',
  routes: [{
    path: '/',
    name: 'Hello',
    component: HelloWorld
  },
  {
    path: '/work',
    name: 'work',
    component: Work
  },
  {
    path: '/increment',
    name: 'increment',
    component: Increment
  },
  {
    path: '/charley',
    name: 'charley',
    component: Charley
  },
  {
    path: '/drrr/:userId?/:name?',
    name: 'drrr',
    component: Drrr
  },
  {
    path: '/hero',
    name: 'hero',
    component: Hero
  },
  {
    path: '/daily',
    name: 'daily',
    component: Daily
  },
  {
    path: '/user',
    component: User,
    children: [{
      // 当 /user/:id/profile 匹配成功，
      // UserProfile 会被渲染在 User 的 <router-view> 中
      path: 'profile',
      component: UserProfile
    },
    {
      // 当 /user/:id/posts 匹配成功
      // UserPosts 会被渲染在 User 的 <router-view> 中
      path: 'posts',
      component: UserPosts
    }]
  },
  {
    path: '/about',
    component: About,
    children: [{
      path: 'blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }]
  },
  {
    path: '*',
    component: NotFound,
    // redirect: (to) => {
    //     // console.log(to);
    //   if (to.path === '/aaa') {
    //     return '/work'
    //   } else if (to.path === '/bbb') {
    //     return '/info'
    //   } else {
    //     return '/'
    //   }
    // }
  }]
})
