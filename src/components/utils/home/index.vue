<template>
  <div>
    <Head></Head>
    <Middle></Middle>
  </div>
</template>

<script>
import Head from "./head.vue"
import Middle from "./middle/index.vue"
export default {
  name: "homePage",
  components:{
    Head,
    Middle,
  }
};
</script>

<style scoped>
</style>