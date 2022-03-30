<template>
  <ul class="infinite-list" v-infinite-scroll="load" style="overflow: auto">
    <li v-for="i in count" class="infinite-list-item" :key="i">{{ i }}</li>
  </ul>
</template>

<script>
export default {
  name: "aaaA",
  data() {
    return {
      count: 10,
    };
  },
  methods: {
    load() {
      console.log("触底");
    },
  },
};
</script>