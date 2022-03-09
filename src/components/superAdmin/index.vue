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
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
          unique-opened
        >
          <el-menu-item index="/superAdmin/home">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/superAdmin/power">权限管理</el-menu-item>
              <el-menu-item index="/superAdmin/user">添加或修改</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
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
  height: 100vh;
}
.box {
  width: 100%;
  display: flex;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-vertical-demo {
  height: calc(100vh - 56px);
}
.right {
  flex: 1;
  background: honeydew;
}
</style>