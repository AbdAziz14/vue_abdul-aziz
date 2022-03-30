<template>
  <div class="detail-news">
    <img :src="News.urlToImage" alt="Gambar Detail">
    <h1>{{ News.title }}</h1>
    <div class="detail-label">
      <label v-html="News.author"></label>
      <label>{{ News.publishedAt }}</label>
    </div>
    <p v-html="News.content" class="content"></p>
    <div class="footer">
      <p>Lanjut Baca ke <a :href="News.url" target="_blank">Sini</a></p>
      <button @click="$router.go(-1)">Kembali</button>
    </div>
    <br><br>
  </div>
</template>

<script>
export default {
  name: 'DetailNews',
  props: {
    News: Object
  }
}
</script>

<style scoped>
.detail-news {
  width: 80%;
  margin: auto;
}
img {
  width: 100%;
  height: auto;
}
.detail-label {
  display: flex;
  justify-content: space-between;
}
.content {
  text-align: left;
  margin-top: 5em;
}
.footer {
  text-align: left;
  margin-top: 2em;
}
</style>
