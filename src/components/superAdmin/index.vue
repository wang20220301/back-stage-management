<template>
  <div class="content">
    <Header></Header>
    <div class="box">
      <div class="leftBar">
        <el-menu
          :default-active="defaultActive"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
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
              <i class="el-icon-setting"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </div>
          <div class="menu" v-for="(item, index) in menu" :key="index">
            <el-submenu :index="item.index">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item-group v-for="(i, idx) in item.list" :key="idx">
                <el-menu-item :index="i.path">{{ i.name }}</el-menu-item>
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
        },
        {
          title: "用户管理",
          path: "/superAdmin/user",
        },
        {
          title: "经销商管理",
          path: "/superAdmin/dealer",
        },
      ],
      menu: [
        {
          index: "2",
          title: "设备管理",
          list: [
            {
              path: "/superAdmin/device",
              name: "柜子管理",
            },
            {
              name: "移动房",
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
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
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
  min-height: calc(100vh - 60px);
  background: #ecf0f5;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-vertical-demo {
  height: calc(100vh - 60px);
}
</style>