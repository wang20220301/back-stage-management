<template>
  <div class="user">
    <Menu></Menu>
  </div>
</template>
<script>
import Menu from "./menu.vue";
export default {
  name: "userPage",
  components: {
    Menu,
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