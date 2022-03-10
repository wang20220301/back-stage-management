<template>
  <div class="user">
    <Title></Title>
    <Menu></Menu>
    <Tabel></Tabel>
    <Footer></Footer>
  </div>
</template>
<script>
import Tabel from "./table.vue";
import Footer from "./Footer.vue";
import Menu from "./menu.vue";
import Title from "./title.vue";
export default {
  name: "userPage",
  components: {
    Tabel,
    Footer,
    Menu,
    Title,
  },
  data() {
    return {

    };
  },
  methods: {
  },
};
</script>

<style scoped>
.user {
  margin-top: 20px;
  margin-left: 22px;
}
</style>