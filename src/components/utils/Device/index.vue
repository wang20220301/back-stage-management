<template>
  <div class="device">
    <Menu></Menu>
    <Tabel></Tabel>
  </div>
</template>

<script>
import Menu from "./menu.vue";
export default {
  name: "equipmentPage",
  components: {
    Menu,
  },
};
</script>

<style scoped>
.device {
  margin-top: 80px;
  margin-left: 200px;
}
</style>