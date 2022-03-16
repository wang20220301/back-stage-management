import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const moduleA = {
  namespaced: true,
  state: {
    data: {
      checked: "",
    },
    count: 10
  },
  mutations: {
    alterObj(state, data) {
      state.data.checked = data
    },
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 100)
    }
  }
}

const moduleB = {
  namespaced: true,
  state: {
    data: null
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

