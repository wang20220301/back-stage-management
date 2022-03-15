<template>
  <div class="title">
    <div class="da">设备管理</div>
    <div class="xiao">
      <span>设备管理></span>
      <span>柜子管理</span>
    </div>
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
  margin-top: 20px;
  margin-left: 22px;
}
.da {
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
}
.xiao {
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