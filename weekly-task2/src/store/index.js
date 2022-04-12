import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    section: [
      { name: 'Version Control (git)', link: 'git', icon: 'mdi-git', desc: 'Section tentang pembelajaran penggunaan version control GIT', image: 'git.png' },
      { name: 'UI dan UX', link: 'uiux', icon: 'mdi-star-face', desc: 'Section tentang pengenalan UI dan UX dalam sebuah projek', image: 'uiux.jpg' },
      { name: 'Figma', link: 'figma', icon: 'mdi-file-image', desc: 'Section tentang penggunaan figma sebagai implementasi UI UX', image: 'figma.png' },
      { name: 'HTML', link: 'html', icon: 'mdi-xml', desc: 'Section tentang pembelajaran HTML sebagai kerangka website', image: 'html.png' },
      { name: 'CSS', link: 'css', icon: 'mdi-palette', desc: 'Section tentang pembelajaran CSS sebagai style dalam sebuah website', image: 'css.png' },
      { name: 'Bootsrap', link: 'bootsrap', icon: 'mdi-bootstrap', desc: 'Section tentang pembelajaran Bootrap sebagai style dengan framework dalam sebuah website', image: 'bootsrap.png' },
      { name: 'Javascript Refreshment', link: 'javascript', icon: 'mdi-script-text', desc: 'Section tentang pembelajaran Javascript sebagai otak/saraf dalam sebuah website', image: 'javascript.png' },
      { name: 'Clean Code', link: 'clean-code', icon: 'mdi-code-json', desc: 'Section tentang pembelajaran penulisan kode yang baik dan benar', image: 'clean-code.png' },
      { name: 'Frontend Fundamental', link: 'frontend-fundamental', icon: 'mdi-page-layout-header', desc: 'Section tentang pembelajaran menyeluruh untuk frontend developer', image: 'frontend-fundamental.png' },
      { name: 'Vue fundamental', link: 'vue-fundamental', icon: 'mdi-vuejs', desc: 'Section tentang pembelajaran dasar vue sebagai permulaan', image: 'vue-fundamental.png' },
      { name: 'Vue Cli', link: 'vue-cli', icon: 'mdi-vuejs', desc: 'Section tentang pembelajaran vue cli untuk menginilisasisasi sebuah projek vue', image: 'vue-cli.png' },
      { name: 'Vue Komponen', link: 'vue-komponen', icon: 'mdi-vuejs', desc: 'Section tentang pembelajaran vue komponen sebagai bantuan untuk sebuah bagian vue', image: 'vue-komponen.png' },
      { name: 'Vue Helpers', link: 'vue-helpers', icon: 'mdi-vuejs', desc: 'Section tentang pembelajaran vue helper sebagai perkakas bantuan untuk membantu projek vue', image: 'vue-helpers.png' },
      { name: 'Vue Data', link: 'vue-data', icon: 'mdi-vuejs', desc: 'Section tentang pembelajaran vue data sebagai penanganan data API', image: 'vue-data.png' },
      { name: 'Vue Quality Control', link: 'vue-quality', icon: 'mdi-vuejs', desc: 'Section tentang pembelajaran vue quality control sebagai memantau kualitas projek', image: 'vue-quality.png' },
      { name: 'Vue UI Framework', link: 'vue-ui', icon: 'mdi-vuetify', desc: 'Section tentang pembelajaran vuetify sebagai framework style dalam projek', image: 'vue-ui.png' },
      { name: 'Work Together', link: 'work-together', icon: 'mdi-account-group', desc: 'Section tentang pembelajaran tentang kolaborasi dalam tim', image: 'work-together.png' },
      { name: 'Vue With Nuxt', link: 'vue-nuxt', icon: 'mdi-nuxt', desc: 'Section tentang pembelajaran vue nuxt sebagai framework vue', image: 'vue-data.png' }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
