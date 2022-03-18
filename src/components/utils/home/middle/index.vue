<template>
  <div class="middle">
    <Fan></Fan>
    <FanTwo></FanTwo>
    <FanThree></FanThree>
  </div>
</template>


<script>
import Fan from "./fan.vue";
import FanTwo from "./fanTwo.vue"
import FanThree from "./fanThree.vue"
export default {
  name: "middleModule",
  components: {
    Fan,
    FanTwo,
    FanThree
  },
};
</script>

<style scoped>
.middle {
  margin-top: 20px;
  margin-left: 20px;
  height: 329px;
  display: flex;
}

.fan2 {
  width: 540px;
  height: 329px;
  background: lightblue;
}
</style>