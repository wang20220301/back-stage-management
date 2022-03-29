<template>
  <div class="content">
    <Header></Header>
    <div class="box">
      <div class="leftBar">
        <el-menu
          :default-active="defaultActive"
          class="el-menu-vertical-demo"
          background-color="#FFFFFF"
          text-color="#606266"
          active-text-color="#5196FF"
          router
          unique-opened
        >
          <div
            class="oneMenu"
            v-for="(item, index) in oneMenu"
            :key="index + 2"
          >
            <el-menu-item :index="item.path">
              <i :class="item.class"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </div>
          <div class="menu" v-for="(item, index) in menu" :key="index">
            <el-submenu :index="item.index">
              <template slot="title">
                <i :class="item.class"></i>
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item-group v-for="(i, idx) in item.list" :key="idx">
                <el-menu-item :index="i.path" :class="i.class">{{
                  i.name
                }}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </div>
        </el-menu>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


<script>
import Header from "../utils/header.vue";
export default {
  name: "AdminSuper",
  components: {
    Header,
  },
  data() {
    return {
      isCollapse: true,
      oneMenu: [
        {
          title: "首页",
          path: "/superAdmin/home",
          class: "el-icon-s-home",
        },
        {
          title: "用户管理",
          path: "/superAdmin/user",
          class: "el-icon-user-solid",
        },
        {
          title: "商户管理",
          path: "/superAdmin/mer",
          class: "el-icon-s-goods",
        },
      ],
      menu: [
        {
          index: "2",
          title: "设备管理",
          class: "el-icon-menu",
          list: [
            {
              path: "/superAdmin/device",
              name: "柜子管理",
              class: "el-icon-office-building",
            },
            {
              name: "移动房",
              class: "el-icon-s-shop",
            },
          ],
        },
      ],
    };
  },
  computed: {
    // computed计算属性,该属性不需要在data里定义,自定义的属性
    defaultActive() {
      return "/superAdmin/" + this.$route.path.split("/").reverse()[0];
    },
  },
  methods: {},
};
</script>


<style scoped>
.content {
  width: 100%;
  height: 100%;
  background: #ecf0f5;
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
}
.leftBar {
  position: fixed;
  top: 60px;
  z-index: 999;
}
.right {
  width: 100%;
  min-height: 100vh;
  background: #ecf0f5;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-vertical-demo {
  height: 100vh;
}
</style>