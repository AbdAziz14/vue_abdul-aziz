<template>
  <div class="news pa-3">
    <v-card>
      <v-img
        v-bind:src="News.urlToImage"
        height="250px"
      ></v-img>
      <v-card-title>
        {{ News.title }}
      </v-card-title>
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <div class="grey--text text-caption">
            {{ News.publishedAt }}
          </div>
        </v-row>
        <div class="my-4 text-subtitle-2" v-html="News.author"></div>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="primary"
          text
          @click="toDetail"
        >
          Detail
        </v-btn>
    </v-card-actions>

    </v-card>
  </div>
</template>

<script>
export default {
  name: 'NewsPage',
  props: {
    News: Object
  },
  data: () => ({
    show: false
  }),
  methods: {
    toDetail () {
      this.$store.dispatch('news/addDetail', this.News)
      this.$router.push('/detail')
    }
  }
}
</script>
