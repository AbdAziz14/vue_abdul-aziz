<template>
  <div class="news" @click="toDetail">
    <div class="news-image">
      <img v-bind:src="News.urlToImage" alt="">
    </div>
    <div class="news-content">
      <label class="author" v-html="News.author"></label>
      <label class="title">{{ News.title }}</label>
      <label class="published">{{ News.publishedAt }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsPage',
  props: {
    News: Object
  },
  methods: {
    toDetail () {
      this.$store.dispatch('news/addDetail', this.News)
      this.$router.push('/detail')
    }
  }
}
</script>

<style>
.news {
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
}
</style>
