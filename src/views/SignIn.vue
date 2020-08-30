<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="my-5">
      <v-col lg="6" md="7" sm="12">
        <SignInCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SignInCard from '@/components/SignInCard.vue'
export default {
  components: {
    SignInCard
  }
}
</script>

<style scoped></style>
