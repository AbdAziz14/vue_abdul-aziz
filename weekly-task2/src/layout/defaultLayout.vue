<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      color="#7C9473"
    >
      <v-sheet
          color="lighten-4"
          class="pa-4"
        >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        >
          <img
            :src="require('../assets/logo.png')"
            alt="John"
          >
        </v-avatar>

        <div>Abdul Aziz</div>
        <div>Vue Js - Kelas A</div>
      </v-sheet>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content class="white--text text--lighten-1">
          <v-list-item-title class="text-h6">
            Materi Vue Js
          </v-list-item-title>
          <v-list-item-subtitle>
            Berdasarkan Section
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list>
        <v-list-item
          v-for="(value, index) in getSection"
          :key="index"
          link
          shaped
          class="white--text text--lighten-1"
          :to="{ name: 'SectionView', params: { section: value.link } }"
        >
          <v-list-item-icon>
            <v-icon color="white">{{ value.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ value.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#7C9473" class="white--text text--lighten-1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Understand Everything about Vue JS Front-End Engineer</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-responsive max-width="56">
        <a href="" style="text-decoration: none;">
          <v-icon color="white lighten-2">mdi-vuejs</v-icon>
        </a>
      </v-responsive>
    </v-app-bar>

    <v-main style="padding: 0px !important;">
      <v-container class="p-0" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  computed: {
    getSection () {
      return this.$store.state.section
    }
  },
  data: () => ({
    drawer: null,
    typeNews: [
      { icon: 'mdi-newspaper', text: 'Semua Berita', link: 'everything' },
      { icon: 'mdi-newspaper-variant', text: 'Top Headline', link: 'top-headline' }
    ]
  })
}
</script>
