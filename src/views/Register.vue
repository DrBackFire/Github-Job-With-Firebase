<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="my-5">
      <v-col sm="12" md="8" lg="5">
        <RegisterCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RegisterCard from '@/components/RegisterCard.vue'
export default {
  title() {
    return `Register`
  },
  components: {
    RegisterCard
  }
}
</script>

<style scoped></style>
