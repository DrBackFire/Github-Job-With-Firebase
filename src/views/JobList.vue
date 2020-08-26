<template>
  <v-container class="px-10">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h3>Total jobs found: {{ jobs.length }}</h3>
      </v-col>
    </v-row>

    <JobCard v-for="job in jobs" :key="job.id" :job="job" />

    <v-row align="center" justify="center" v-if="!jobs.length">
      <v-col cols="12">
        <h2>No Results!</h2>
        <h3>
          Please
          <router-link to="/">Search again</router-link>
        </h3>
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
