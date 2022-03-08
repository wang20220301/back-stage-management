<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Layout></Layout> -->
  </div>
</template>

<script>
// import Login from "./components/login/login.vue"
// import layout from "./components/layout/index.vue"
export default {
  name: 'App',
  components: {
    // Login,
    // Layout
  },
  methods:{
     click(){
       console.log(this.$store.state.count)
     }
  }
}
</script>

<style>
    #app{
      width: 100%;
      height: 100%;
    }
</style>
