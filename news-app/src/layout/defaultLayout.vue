<template>
  <v-app id="layout-wrapper">
    <v-navigation-drawer
      v-model="drawer"
      app
      color="info"
    >
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content class="white--text text--lighten-1">
          <v-list-item-title class="text-h6">
            News App
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list>
        <v-list-item>
          <v-list-item-content class="white--text text--lighten-1">
            <v-list-item-subtitle>
              Berdasarkan Penerbit
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(value, index) in typeNews"
          :key="index"
          link
          shaped
          class="white--text text--lighten-1"
          :to="{ name: 'HomeType', params: { type: value.link } }"
        >
          <v-list-item-icon>
            <v-icon color="white">{{ value.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ value.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" class="white--text text--lighten-1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>News App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-responsive max-width="56">
        <v-icon color="white lighten-2">mdi-magnify</v-icon>
      </v-responsive>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data: () => ({
    drawer: null,
    typeNews: [
      { icon: 'mdi-newspaper', text: 'Semua Berita', link: 'everything' },
      { icon: 'mdi-newspaper-variant', text: 'Top Headline', link: 'top-headline' }
    ]
  })
}
</script>
