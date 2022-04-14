export const state = () => ({
  lists: []
})

export const mutations = {
  setNewsList (state, object) {
    state.lists = object
  },
  setInfo (state, param) {
    state.info = param
  }
}

export const actions = {
  async getFetchList (store) {
    const link = 'https://api-berita-indonesia.vercel.app/tempo/nasional/'
    await this.$axios.get(link)
      .then((Response) => {
        store.commit('setNewsList', Response.data.data.posts)
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
