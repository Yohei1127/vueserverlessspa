import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true
    }
  },
  actions: {
    async login({ commit }, { email, password }={}) {
      if (email === 'admin@example.com' && password === 'password') {
        commit('login')
      } else {
        //
      }
    }
  }
})
