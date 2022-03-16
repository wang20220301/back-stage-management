<template>
  <div>
    <div>计数{{ commit }}</div>
    <div @click="click">点击1秒改变</div>
  </div>
</template>

<script>
export default {
  name: "navMenu",
  data() {
    return {
      commit: "",
    };
  },
  created() {
    this.commit = this.$store.state.a.count;
    console.log(this.$store.state);
  },
  methods: {
    click() {
      this.$store.dispatch({
        type: "a/increment",
        amount: 100,
      });
       this.commit = this.$store.state.a.count
    },
     
  },
};
</script>

<style scoped>
</style>