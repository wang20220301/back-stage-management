import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    data:{
      checked:""
    }
  },
  mutations: {
   alterObj(state,data){
     state.data.checked=data
   }
  }
})
 export default  store

