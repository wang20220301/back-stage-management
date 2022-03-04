<template>
  <el-checkbox v-model="checked" @change="click">记住密码</el-checkbox>
</template>

<script>
export default {
  name: "keepKey",
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    // 判断是否勾选了保存账号密码,勾选了保持到vuex
    click(){
        this.$store.commit("alterObj",this.$data.checked)
    }
  },
};
</script>

<style scoped>
</style>