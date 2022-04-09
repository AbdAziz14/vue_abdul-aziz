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

<style>
/* .news {
  padding: 20px;
  flex: 48%;
  margin: 15px;
  text-align: left;
  width: 100%;
  display: flex;
  border: 1px solid black;
  box-shadow: 5px 10px;
  cursor: pointer;
}
.news .news-image {
  margin: 0;
  flex: 20%;
}
.news .news-content {
  flex: 60%;
  margin: 10px;
}
.news .news-image img{
  width: 100%;
  height: auto;
}
.news .news-content .author,
.news .news-content .title,
.news .news-content .published {
  display: block;
}
.news .news-content .author {
  font-size: .8em;
  margin-left: 2em;
}
.news .news-content .title {
  margin: 1.2em 0px;
  margin-left: 2em;
  font-weight: 900;
  font-size: 1.2em;
}
.news .news-content .published {
  text-align: right;
}
@media screen and (max-width: 959px) {
  .content {
    flex: 100%;
  }
} */
</style>
