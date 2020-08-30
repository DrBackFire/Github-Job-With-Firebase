<template>
  <v-card class="mx-auto job__card radius mb-8 pa-3" color="#FAFAFA">
    <div class="d-md-flex justify-space-between align-center">
      <v-img
        :src="job.company_logo"
        :alt="job.company"
        width="150"
        class="flex-shrink-1 flex-grow-0 d-xs-block mx-auto job__img"
      ></v-img>
      <v-card-title
        class="flex-grow-1 flex-shrink-1 justify-center my-2 text-lg-h5 font-weight-bold text-center"
        >{{ truncate(job.title, 40) }}</v-card-title
      >
      <div class="subtitle-1 flex-shrink-1 mr-3">
        <v-row class="my-3 pl-3 justify-center">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14px"
          ></v-rating>

          <span class="grey--text">4.5 (413)</span>
        </v-row>
      </div>
    </div>
    <v-card-text class="ml-3">
      <v-row>
        <span class="my-3 subtitle-1">
          <v-icon left>{{ mdiAccountClock }}</v-icon>
          {{ job.type }}
        </span>
      </v-row>
      <v-row>
        <span class="my-3 subtitle-1">
          <v-icon left>{{ mdiMapMarker }}</v-icon>
          {{ truncate(job.location, 25) }}
        </span>
      </v-row>
      <v-row>
        <span class="my-3 subtitle-1">
          <v-icon left>{{ mdiCalendarClock }}</v-icon>
          {{ format(new Date(job.created_at), 'MMM do yyyy') }}
        </span>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-title>Job synopsis</v-card-title>
    <p class="mx-2 text-left pl-2 mt-0">
      {{ stripTags(truncate(job.description, 300)) }}
    </p>

    <v-card-actions>
      <v-btn
        :to="{
          name: 'job-Show',
          query: { location: job.location, jobTitle: job.title, id: job.id }
        }"
        color="blue darken-4"
        text
        class="font-weight-bold"
        >More Details</v-btn
      >
      <v-spacer></v-spacer>
      <!-- Toggle Save -->
      <template v-if="!savedJob(job.id)">
        <v-btn
          :loading="isLoading"
          @click="saveJob(job)"
          color="success darken-2"
          text
          class="font-weight-bold"
        >
          <v-icon left>{{ mdiStarOutline }}</v-icon
          >Save
        </v-btn>
      </template>

      <!-- Saved -->
      <template v-else>
        <v-btn
          :loading="isLoading"
          @click="unSaveJob(job)"
          color="success darken-2"
          text
          class="font-weight-bold"
        >
          <v-icon left>{{ mdiStar }}</v-icon
          >Saved
        </v-btn>
      </template>
    </v-card-actions>
  </v-card>
</template>

<script>
import { jobMixin } from '@/mixins/jobMixin'

export default {
  mixins: [jobMixin]
}
</script>

<style scoped>
.job__img {
  object-fit: contain;
}

.job__card {
  transition: all 0.2s linear;
}

.job__card:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
}
</style>
