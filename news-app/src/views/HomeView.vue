<template>
  <div class="home">
    <h1 class="home-title">Berita Terkini</h1>
    <p>{{ getinfo }}</p>
    <div class="news-wrapper">
      <NewsPage v-for="(value, index) in newsList" :key="index" :News="value" />
    </div>
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
      return this.$store.state.news.newsList
    },
    getinfo () {
      return this.$store.state.news.info
    }
  },
  mounted () {
    this.$store.dispatch('news/getFetchList')
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.home {
  margin-top: 5em;
}
.home-title {
  font-size: 5em;
}
.news-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
}
</style>
