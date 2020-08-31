<template>
  <v-container>
    <h1>Oops!</h1>
    <h3>
      The
      <template v-if="resource">{{ resource }}</template>
      page you're looking for is not here.
    </h3>
    <router-link :to="{ name: 'Search' }">Back to the home page</router-link>
  </v-container>
</template>
<script>
export default {
  title() {
    return `404 — GitHub Jobs`
  },
  props: {
    resource: {
      type: String,
      required: true
    }
  }
}
</script>
