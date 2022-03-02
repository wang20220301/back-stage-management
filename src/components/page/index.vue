<template>
  <div @click="click()">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "pageINdex",
  data() {
    return {
      text: "我是page页面",
    };
  },

  methods: {
    click() {
      console.log("点击跳转到首页");
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
</style>