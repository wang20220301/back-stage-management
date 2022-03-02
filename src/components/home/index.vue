<template>
    <div>
        我是home页面
        <div @click="click">
             {{text}}
        </div>
    </div>
</template>

<script>
export default {
     name:"indexHome",
     data(){
         return(
             {
               text:"我是可以点击的"
             }
         )
     },

    methods:{
      click(){
          console.log("检测到点击事件")
          this.$router.push("/page")
    },
}
}
</script>
<style scoped>

</style>