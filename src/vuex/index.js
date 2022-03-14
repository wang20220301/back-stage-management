import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const moduleA = {
  namespaced: true,
  state: {
    data: {
      checked: "",
    }
  },
  mutations: {
    alterObj(state, data) {
      state.data.checked = data
    },
  },
}

const moduleB = {
  namespaced: true,
  state: {
    data: ""
  },
  mutations: {
    AddMsg(state, data) {
      state.data = data
    },
  },
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

export default store

