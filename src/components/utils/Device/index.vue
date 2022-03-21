<template>
  <div class="device">
    <!-- <Title></Title> -->
    <Menu></Menu>
    <Tabel></Tabel>
    <!-- <Footer></Footer> -->
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
  /* position: relative; */
}
</style>