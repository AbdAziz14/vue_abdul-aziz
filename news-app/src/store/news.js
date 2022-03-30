import axios from 'axios'

const state = () => ({
  newsList: [],
  detail: [],
  info: ''
})

const mutations = {
  setNewsList (state, object) {
    state.newsList = object
  },
  setInfo (state, param) {
    state.info = param
  },
  setDetail (state, object) {
    state.detail = object
  }
}

const actions = {
  getFetchList (store) {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=972166aca1084391895817cac572cbe4')
      .then(Response => {
        store.commit('setNewsList', Response.data.articles)
        store.commit('setInfo', '')
      })
      .catch((error) => {
        store.commit('setInfo', error)
      })
  },
  addDetail (store, object) {
    store.commit('setDetail', object)
  }
}

export default {
  state,
  mutations,
  actions
}
