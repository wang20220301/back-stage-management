<template>
  <div class="device">
    <Title></Title>
    <Menu></Menu>
    <Tabel></Tabel>
    <Footer></Footer>
  </div>
</template>

<script>
import Title from "./title.vue";
import Menu from "./menu.vue";
import Tabel from "./table.vue";
import Footer from "../user/Footer.vue";
export default {
  name: "equipmentPage",
  components: {
    Title,
    Menu,
    Tabel,
    Footer,
  },
};
</script>

<style scoped>
.device {
  margin-top: 80px;
  margin-left: 200px;
  width: 1880px;
}
</style>