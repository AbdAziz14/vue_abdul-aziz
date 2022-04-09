<template>
  <div class="home-wrapper pa-10">
    <v-row>
      <v-col
        v-for="(value, index) in newsList" :key="index"
        cols="12"
        xs="12"
        sm="6"
        lg="4"
      >
        <NewsPage :News="value" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NewsPage from '@/components/NewsView.vue'

export default {
  name: 'HomeView',
  components: {
    NewsPage
  },
  computed: {
    newsList () {
      if (this.$route.params.type) {
        this.$store.dispatch('news/getFetchList', this.$route.params.type)
      }
      return this.$store.state.news.newsList
    },
    getinfo () {
      return this.$store.state.news.info
    }
  },
  mounted () {
    if (this.$route.params.type) {
      this.$store.dispatch('news/getFetchList', this.$route.params.type)
    } else {
      this.$store.dispatch('news/getFetchList')
    }
  }
}
</script>
