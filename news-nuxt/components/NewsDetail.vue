<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="1000"
    >
      <v-img
        height="250"
        :src="news.thumbnail"
      />
      <v-card-text>
        <p class="text-h4 text--primary">
          {{ news.title }}
        </p>
        <p>{{ news.pubDate }}</p>
        <div class="text--primary">
          {{ news.description }}
        </div>
      </v-card-text>
      <v-card-actions>
        <a
          text
          color="teal accent-4"
          :href="news.link"
          target="_blank"
        >
          Lihat Lebih banyak
        </a>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  props: {
    news: {
      type: Object,
      required: true
    }
  }
}
</script>
