<template>
  <div id="app">
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
    #app{
      width: 100%;
      height: 100%;
    }
</style>
