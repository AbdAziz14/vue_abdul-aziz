<template>
  <div class="about">
    <DetailSection :section="detailSection" />
  </div>
</template>

<script>
import DetailSection from '@/components/SectionPage.vue'

export default {
  name: 'SectionPage',
  components: {
    DetailSection
  },
  computed: {
    detailSection () {
      const detail = this.$store.state.section.filter(
        (value) => value.link === this.$route.params.section
      )
      return detail[0]
    }
  }
}
</script>
