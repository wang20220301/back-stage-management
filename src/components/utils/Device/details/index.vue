<template>
  <div class="details">
    <Title></Title>
    <div class="structure">
      <div>
        <Menu></Menu>
        <Status></Status>
      </div>
      <div>
        <Right></Right>
      </div>
    </div>
  </div>
</template>


<script>
import Title from "./title.vue";
import Menu from "./menu.vue";
import Status from "./status.vue";
import Right from "./right.vue"
export default {
  name: "detalisPage",
  components: {
    Title,
    Menu,
    Status,
    Right
  },
};
</script>

<style scoped>
.details {
  margin-top: 20px;
  margin-left: 22px;
}
.structure {
  width: 1670px;
  height: 615px;
  display: flex;
}
.structure > div:nth-child(1) {
  width: 680px;
  height: 615px;
  margin-right: 20px;
  /* background: honeydew; */
}
.structure > div:nth-child(2) {
  width: 960px;
  height: 615px;
  /* background: paleturquoise; */
  background: #fff;
}
</style>