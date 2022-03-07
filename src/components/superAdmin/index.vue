<template>
  <div class="home" @click="click">跳转到超级管理员界面</div>
</template>

<script>
import { md } from "../../Md5/index";
import { post } from "../../Api/index";
export default {
  name: "HomePage",
  methods: {
    click() {
      let param = md();
      post("https://www.bi-et.com/api/monitor/all_monitor", param).then(
        (res) => {
          console.log(res.data);
        }
      );
    },
  },
};
</script>

<style scoped>
</style>