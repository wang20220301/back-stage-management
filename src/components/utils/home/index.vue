<template>
  <div class="con">
    <Head></Head>
    <Middle></Middle>
    <!-- <Menu></Menu> -->
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Head from "./head.vue";
import Middle from "./middle/index.vue";
// import Menu from "./menu.vue";
import { gitData } from "./homeApi.js";
// import Footer from './Footer.vue';
export default {
  name: "homePage",
  components: {
    Head,
    Middle,
    // Menu,
    // Footer,
  },
  mounted() {
    gitData();
  },
};
</script>

<style scoped>
.con {
  padding-top: 80px;
  margin-left: 200px;
}
</style>