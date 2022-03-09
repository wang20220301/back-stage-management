<template>
  <div class="content">
    <div class="login">
      <div class="log">
        <img :src="log" alt="" />
      </div>
      <div class="title">
        <p>{{ text }}</p>
      </div>
      <div>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
import log from "../../assets/log1.png";
export default {
  name: "LoginA",
  components: {},
  data() {
    return {
      log,
      text: "数据信息管理系统",
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
};
</script>


<style scoped>
.content {
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: url("../../assets/bag.jpg");
  background-size: cover;
}
.login {
  width: 619px;
  height: 739px;
  background: #fff;
  border-radius: 16px;
  margin: auto;
}
.log {
  width: 100%;
  height: 75px;
  padding-top: 40px;
  display: flex;
}
.log img {
  width: 233px;
  height: 75px;
  margin: auto;
}
.title {
  width: 100%;
  height: 42px;
  display: flex;
  padding-top: 20px;
}
.title p {
  margin: auto;
  width: 288px;
  height: 42px;
  font-size: 36px;
  line-height: 42.19px;
  font-family: Roboto;
  font-style: Regular;
}
</style>