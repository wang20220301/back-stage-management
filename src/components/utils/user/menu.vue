<template>
  <div class="menu">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部用户" name="first"></el-tab-pane>
      <el-tab-pane label="管理员" name="second"></el-tab-pane>
      <el-tab-pane label="经销商" name="third"></el-tab-pane>
      <el-tab-pane label="普通用户" name="fourth"></el-tab-pane>
    </el-tabs>
    <div class="right">
      <div class="input">
        <el-input
          v-model="input"
          placeholder="请输入用户信息"
          suffix-icon="el-icon-search"
          size="small"
        ></el-input>
      </div>
      <div class="add">
        <el-button type="success" size="small" autosize>添加用户</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuModule",
  data() {
    return {
      list: ["全部用户", "管理员", "经销商", "普通用户"],
      input:"",
      activeName:"",
    };
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
.menu {
  height: 39px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding-left: 20px;
}
.right {
  display: flex;
  height: 36px;
}
.input {
  line-height: 36px;
}
.add {
  line-height: 36px;
  margin-left: 10px;
  margin-right: 30px;
}
</style>

