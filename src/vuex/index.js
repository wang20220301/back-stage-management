import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    data:{
      checked:"",
      username:""
    }
  },
  mutations: {
   alterObj(state,data){
     state.data.checked=data
   },
   add(state,data){
     state.data.username=data
   }
  }
})
 export default  store

