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
          <el-dropdown>
            <span class="el-dropdown-link">
              王少川<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
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
import log from "../../assets/log5.png";
export default {
  name: "homePage",
  data() {
    return {
      img: log,
      accountTyep: "管理员",
    };
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
  background-color: #545c64;
  display: flex;
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
  width: 220px;
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