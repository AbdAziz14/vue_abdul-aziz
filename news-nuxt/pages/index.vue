<template>
  <div>
    <h1>Portal Berita</h1>
    <v-row align="center" class="pa-10">
      <v-col
        v-for="(value, index) in getNews"
        :key="index"
        cols="12"
        xs="12"
        sm="6"
        lg="4"
      >
        <NewsView :news="value" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    getNews () {
      const news = this.$store.state.news.lists
      /* eslint-disable no-console */
      // console.log(news)
      /* eslint-enable no-console */
      return news
    }
  },
  mounted () {
    this.getFetchNews()
  },
  methods: {
    getFetchNews () {
      this.$store.dispatch('news/getFetchList')
    }
  }
}
</script>
