<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="my-5">
      <v-col sm="12" md="8" lg="5">
        <SignInCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SignInCard from '@/components/SignInCard.vue'
export default {
  title() {
    return `Sigin`
  },
  components: {
    SignInCard
  }
}
</script>

<style scoped></style>
