<template>
  <div class="title">
    <span>用户管理</span>
    <span>用户管理</span>
  </div>
</template>

<script>
export default {
  name: "titleModule",
};
</script>

<style scoped>
.title {
  display: flex;
  margin-bottom: 17px;
  color: #282d30;
  margin-left: 22px;
}
.title span:nth-child(1) {
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
}
.title span:nth-child(2) {
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0px;
  color: rgba(0, 0, 0, 0.5);
  margin-left: 22px;
  display: flex;
  align-items: flex-end;
}
</style>