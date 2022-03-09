<template>
  <div class="home">
    跳转到运维管理员界面

    <div @click="click">点击发送请求</div>
  </div>
</template>

<script>
import { post } from "../../Api/index";
// import {token}from "../../token/index"

export default {
  name: "HomePage",
  methods: {
    click() {
      post("https://www.bi-et.com/api/monitor/all_monitor").then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>

<style scoped>
</style>