import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const moduleA = {
  namespaced: true,
  state: {
    data: {
      checked: "",
    },
  },
  mutations: {
    alterObj(state, data) {
      state.data.checked = data
    },
  },
  actions: {
  }
}

const moduleB = {
  namespaced: true,
  state: {
    data: null
  },
  mutations: {
    AddData(state, data) {
      state.data = data
    },
  },
}
const moduleC = {
  namespaced: true,
  state: {
    data: null
  },
  mutations: {
    AddData(state, data) {
      state.data = data
    },
  },
}

const moduleD = {
  namespaced: true,
  state: {
    data: null
  },
  mutations: {
    AddData(state, data) {
      state.data = data
    },
  },
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    device: moduleB,
    details: moduleC,
    home:moduleD
  }
})

export default store

