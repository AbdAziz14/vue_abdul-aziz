import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import todolist from './todolist'

Vue.use(Vuex)

const persistedDataState = createPersistedState({
  paths: ['todolist']
})

export default new Vuex.Store({
  plugins: [persistedDataState],
  modules: {
    todolist: {
      namespaced: true,
      ...todolist
    }
  }
})
