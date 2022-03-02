<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="click">
    <Login></Login>
  </div>
</template>

<script>
import Login from "./components/login/login.vue"
export default {
  name: 'App',
  components: {
    Login,
  },
  methods:{
     click(){
       console.log(this.$store.state.count)
     }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
