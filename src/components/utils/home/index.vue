<template>
  <div class="con">
    <Head></Head>
    <Middle></Middle>
    <Sort></Sort>
    <Menu></Menu>
    <Tu></Tu>
    <Footer></Footer>
  </div>
</template>

<script>
import Head from "./head.vue";
import Middle from "./middle/index.vue";
import Sort from "./sort.vue";
import Menu from "./menu.vue";
import Tu from "./tu.vue";
import Footer from "./Footer.vue";
export default {
  name: "homePage",
  components: {
    Head,
    Middle,
    Sort,
    Menu,
    Tu,
    Footer,
  },
};
</script>

<style scoped>
.con {
  margin-top: 80px;
  margin-left: 200px;
  min-height: 1022px;
}
</style>