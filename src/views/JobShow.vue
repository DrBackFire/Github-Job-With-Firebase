<template>
  <v-container fluid class="px-8">
    <v-row justify="center">
      <v-col sm="12" lg="8" class="px-5">
        <h1 class="mt-3">{{ job.title }}</h1>

        <v-list-item-subtitle class="grey--text mb-3">
          {{ job.company }}
        </v-list-item-subtitle>

        <div v-html="marked(job.description)" />
        <v-divider class="mx-4 my-5"></v-divider>

        <h2 class="my-3">How to Apply</h2>
        <div v-html="marked(job.how_to_apply)" />
      </v-col>

      <!-- Application card-->
      <v-col md="11" lg="4">
        <v-card class="mx-auto mt-5 shadow__">
          <v-row justify="center" align-content="center" class="pa-7">
            <v-btn @click="apply" color="blue darken-4 white--text" block large
              >Apply Now via GitHub Jobs</v-btn
            >
          </v-row>
          <v-divider></v-divider>
          <v-row justify="center" class="pa-5">
            <!-- Toggle Save -->
            <v-col v-if="!savedJob(job.id)">
              <v-btn
                :loading="isLoading"
                @click="saveJob(job)"
                block
                color="success darken-2"
              >
                <v-icon left>{{ mdiStarOutline }}</v-icon
                >Save
              </v-btn>
            </v-col>
            <v-col v-else>
              <v-btn
                :loading="isLoading"
                @click="unSaveJob(job)"
                block
                color="success darken-2"
              >
                <v-icon left>{{ mdiStar }}</v-icon
                >Saved
              </v-btn>
            </v-col>
            <v-col>
              <v-btn @click="share" block color="grey darken-2 white--text">
                <v-icon left>{{ mdiShareVariantOutline }}</v-icon
                >Share
              </v-btn>
            </v-col>
          </v-row>
          <v-card-text class="black--text text-center">
            <h3>
              Go to your
              <a @click="redirect" class="font-weight-bold">Saved jobs</a>
              to add notes
            </h3>
          </v-card-text>
        </v-card>

        <!-- Job type card -->
        <v-card class="mx-auto mt-5 pa-5">
          <h4 class="my-3">
            <v-icon left>{{ mdiCalendarClock }}</v-icon>
            {{ format(new Date(job.created_at), 'MMM do yyyy') }}
          </h4>
          <h4 class="my-3">
            <v-icon left>{{ mdiAccountClock }}</v-icon>
            {{ job.type }}
          </h4>

          <h4 class="my-3">
            <v-icon left>{{ mdiMapMarker }}</v-icon>
            {{ job.location }}
          </h4>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { jobMixin } from '@/mixins/jobMixin'

export default {
  title() {
    return this.job.title
  },
  mixins: [jobMixin]
}
</script>

<style scoped></style>
