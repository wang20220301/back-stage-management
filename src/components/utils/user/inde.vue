<template>
  <div class="user">
    <Title></Title>
    <Menu></Menu>
   
  </div>
</template>
<script>
import Menu from "./menu.vue";
import Title from "./title.vue";
export default {
  name: "userPage",
  components: {
    // Tabel,
    // Footer,
    Menu,
    Title,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.user {
  margin-top: 80px;
  margin-left: 200px;
}
</style>