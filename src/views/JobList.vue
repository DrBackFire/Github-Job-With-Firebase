<template>
  <v-container fluid>
    <!-- Total jobs -->
    <v-row align="center" justify="center">
      <v-col sm="12" md="11" lg="7">
        <v-chip color="grey darken-2" text-color="white" pill>
          <v-avatar left>
            <v-icon>mdi-account-circle</v-icon>
          </v-avatar>
          Total jobs found: {{ jobs.length }}
        </v-chip>
      </v-col>
    </v-row>

    <!-- Job Card -->
    <v-row justify="center" align="center">
      <v-col sm="12" md="11" lg="7">
        <JobCard v-for="job in jobs" :key="job.id" :job="job" />
      </v-col>
    </v-row>

    <!-- Not found -->
    <v-row align="center" justify="center" v-if="!jobs.length">
      <v-col sm="12" md="11" lg="7">
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

  title() {
    return `JobList — GitHub Jobs`
  },

  async beforeRouteEnter(to, from, next) {
    const jobs = await store.dispatch('job/get', {
      location: to.query.location,
      jobTitle: to.query.jobTitle
    })

    // Setting the props to what the api returned, to display data
    to.params.jobs = jobs
    next()
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
