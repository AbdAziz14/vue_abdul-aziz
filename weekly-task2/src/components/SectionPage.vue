<template>
  <div>
    <v-row>
      <v-col col="12">
        <v-card
          class="mx-auto my-12"
          max-width="800">
          <v-card-text>
            <p class="text-h4 text--primary">
              Section {{ section.name }}
            </p>
            <div class="text--primary">
              {{ section.desc }}
            </div>
          </v-card-text>
          <v-img
            contain
            lazy-src="https://picsum.photos/id/11/10/6"
            :src="require('../assets/screenshots/'+section.image)"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'DetailSection',
  props: {
    section: Object
  }
}
</script>
