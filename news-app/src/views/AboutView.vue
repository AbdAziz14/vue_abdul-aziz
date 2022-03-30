<template>
  <div class="about">
    <DetailNews :News='newsList' />
  </div>
</template>

<script>
import DetailNews from '@/components/NewsDetail.vue'

export default {
  name: 'DetailNewsView',
  components: {
    DetailNews
  },
  computed: {
    newsList () {
      return this.$store.state.news.detail
    }
  }
}
</script>
