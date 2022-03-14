<template>
  <div class="middle">
    <Fan></Fan>
    <FanTwo></FanTwo>
    <div class="fan2"></div>
  </div>
</template>


<script>
import Fan from "./fan.vue";
import FanTwo from "./fanTwo.vue"
export default {
  name: "middleModule",
  components: {
    Fan,
    FanTwo,
  },
};
</script>

<style scoped>
.middle {
  margin-top: 20px;
  margin-left: 20px;
  width: 1880px;
  height: 329px;
  display: flex;
}

.fan2 {
  width: 540px;
  height: 329px;
  background: lightblue;
}
</style>