import Vue from 'vue'
import VueRouter from 'vue-router'
// import { nextTick } from 'vue/types/umd'

Vue.use(VueRouter)
import superAdmin from "../components/superAdmin/index.vue"
import teacherAdmin from "../components/teacherAdmin/index.vue"
import schoolAdmin from "../components/schoolAdmin/index.vue"
import ompAdmin from "../components/ompAdmin/index.vue"
import student from "../components/student/index.vue"
import Login from "../components/login/login.vue"
// import Page from "../components/page/index.vue"
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 子路由
import User from "../components/utils/user/inde.vue"
import Device from "../components/utils/Device/index.vue"
import Home from "../components/utils/home/index.vue"
import Mer from "../components/utils/mer/inde.vue"
// Device页面子路由
import DeviceData from "@/components/utils/Device/popup/deData.vue"
import DeviceMsg from '@/components/utils/Device/popup/deMsg.vue'
import cupState from "@/components/utils/Device/popup/cupState"
const routes = [{
  path: "",
  component: Login,
},
{
  path: '/superAdmin',
  component: superAdmin,
  // 配置子路由 子路由不能以/开头(/power)，以斜杆开头讲被视为根路由
  children: [
    {
      path: "device",
      component: Device,
      children: [
        {
          path: "devicedata",
          component: DeviceData
        },
        {
          path: "deviceMsg",
          component: DeviceMsg
        },
        {
          path: "state",
          component: cupState
        }

      ]
    },
    {
      path: "user",
      component: User
    },
    {
      path: "home",
      component: Home
    },
    {
      path: "mer",
      component:Mer
    },

  ]
},
{
  path: '/teacherAdmin',
  component: teacherAdmin
},
{
  path: '/schoolAdmin',
  component: schoolAdmin
},
{
  path: '/ompAdmin',
  component: ompAdmin
},
{
  path: '/student',
  component: student
},
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router