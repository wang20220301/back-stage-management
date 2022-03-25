<template>
  <div class="header">
    <div class="log">
      <img :src="img" alt="" />
    </div>
    <div class="headerStyle">
      <div class="user">
        <div>
          <!-- 显示头像框小图标的,以后要改 -->
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div>
        <div class="userName">
          <!-- 下拉菜单 -->
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="accountType">
          <!-- 登录账号身份信息 -->
          <span> {{ accountTyep }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import log from "../../assets/log.jpg";
import { cookieValue, backLoginPage } from "@/utils/index.js";
export default {
  name: "homePage",
  data() {
    return {
      img: log,
      accountTyep: "",
      userName: "",
    };
  },
  // watch监听路由改变
  watch: {
    //监听路由变化
    $route(to, from) {
      console.log(to, from, "路由变化");
      // to , from 分别表示从哪跳转到哪，都是一个对象
      // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
    },
  },
  mounted() {
    let id = cookieValue("type");
    let userName = cookieValue("username");
    this.$data.userName = userName;
    switch (id) {
      case "1":
        this.$data.accountTyep = "超级管理员";
        break;
      case "5":
        this.$data.accountTyep = "经销商";
        break;
      case "7":
        this.$data.accountTyep = "运营商";
        break;
      case "8":
        this.$data.accountTyep = "大客户";
        break;
      default:
    }
  },
  methods: {
    handleCommand(command) {
      if (command == 1) {
        backLoginPage();
      }
    },
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  position: fixed;
  z-index: 999;
}
.log {
  width: 200px;
  height: 60px;
  background-color: #fff;
  display: flex;
  margin-right: 1px;
}
.log img {
  width: 158.13px;
  height: 34px;
  margin: auto;
}
.headerStyle {
  flex: 1;
  height: 55px;
  background: #ffffff;
  display: flex;
  justify-content: flex-end;
  box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.1);
}
.user {
  width: 280px;
  height: 60px;
  display: flex;
  align-items: center;
  border: 10px chartreuse;
}
.userName {
  margin-left: 12px;
  height: 60px;
  display: flex;
  align-items: center;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.accountType {
  height: 60px;
  display: flex;
  align-items: center;
  margin-left: 21px;
  color: #00bc55;
}
</style>