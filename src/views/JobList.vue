<template>
  <v-container fluid>
    <!-- Total jobs -->
    <v-row align="center" justify="center">
      <v-col cols="8">
        <h3>Total jobs found: {{ jobs.length }}</h3>
      </v-col>
    </v-row>

    <!-- Job Card -->
    <v-row justify="center" align="center">
      <v-col sm="12" md="8">
        <JobCard v-for="job in jobs" :key="job.id" :job="job" />
      </v-col>
    </v-row>

    <!-- Not found -->
    <v-row align="center" justify="center" v-if="!jobs.length">
      <v-col cols="12">
        <h2>No Results!</h2>
        <h3>Please search again</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import JobCard from '@/components/JobCard.vue'
import store from '@/store'

export default {
  name: 'JobList',

  beforeRouteEnter(to, from, next) {
    store
      .dispatch('job/get', {
        location: to.query.location,
        jobTitle: to.query.jobTitle
      })
      .then(jobs => {
        to.params.jobs = jobs // Setting the props to what the api returned, to display data
        next()
      })
  },

  components: {
    JobCard
  },

  props: {
    jobs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped></style>
