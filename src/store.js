import { createStore } from 'vuex'

export default createStore({
  state: {
    cedulaRuc: null
  },
  mutations: {
    setCedulaRuc(state, value) {
      state.cedulaRuc = value
    }
  }
})
