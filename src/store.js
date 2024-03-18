import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datos: null
  },
  mutations: {
    SET_DATOS(state, datos) {
      state.datos = datos
    }
  },
  actions: {
    setDatos({ commit }, datos) {
      commit('SET_DATOS', datos)
    }
  }
})
