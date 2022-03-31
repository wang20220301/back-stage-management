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
    data: null,
    detailsMsg: null
  },
  mutations: {
    AddData(state, data) {
      state.data = data
    },
    AddDetailsMsg(state, data) {
      state.detailsMsg = data
    },
    SetLoadData(state, data) {
      // vue无法检测到数组内部的变化
      let { detailsMsg } = state
      let list = detailsMsg.monitor_data
      let list2 = data.monitor_data
      // 合并数组
      data.monitor_data = [...list, ...list2]
      state.detailsMsg=data
    }

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
    popup: moduleC,
    home: moduleD
  }
})

export default store

