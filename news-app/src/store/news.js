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
  async getFetchList (store, params) {
    let link = 'https://newsapi.org/v2/everything?q=indonesia&apiKey=972166aca1084391895817cac572cbe4'
    if (params) {
      if (params === 'top-headline') {
        link = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=972166aca1084391895817cac572cbe4'
      }
    }
    await axios.get(link)
      .then(Response => {
        store.commit('setNewsList', Response.data.articles)
        store.commit('setInfo', 'Ada kok')
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
