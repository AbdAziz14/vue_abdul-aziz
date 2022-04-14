<template>
  <div>
    <h1>Halaman Detail</h1>
    <NewsDetail :news="DetailNews" />
  </div>
</template>

<script>
export default {
  name: 'DetailNews',
  computed: {
    DetailNews () {
      const detail = this.$store.state.news.lists.filter(
        value => value.title === this.$route.params.slug
      )
      return detail[0]
    }
  }
}
</script>
