<template>
  <div>
    <v-card>
      <v-img
        height="250"
        :src="news.thumbnail"
      />
      <v-card-title>
        {{ news.title }}
      </v-card-title>
      <!-- <v-card-subtitle>
        {{ news.author }}
      </v-card-subtitle> -->
      <v-card-text>
        <p>{{ news.pubDate }}</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          nuxt
          :to="news.title"
        >
          Lihat Detail
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'NewsView',
  props: {
    news: {
      type: Object,
      required: true
    }
  }
}
</script>
