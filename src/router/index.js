// import { from } from 'core-js/core/array'
import Vue from 'vue'
import VueRouter from 'vue-router'
// import { nextTick } from 'vue/types/umd'

Vue.use(VueRouter)
import Home from "../components/home/index.vue"
import Page from "../components/page/index.vue"
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  {path:"/page",component:Page}
//   { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

router.beforeEach((to,from,next)=>{
  if (to.path=="/") {
    next("/home")
  }
   next()
})

export default router