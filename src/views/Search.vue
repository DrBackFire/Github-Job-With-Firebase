<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="my-10">
      <v-col md="9">
        <v-card class="mx-auto my-8 shadow__ pa-5 radius" color="#FAFAFA">
          <v-card-title class="justify-center my-2 text-md-h4 font-weight-bold"
            >Job Search</v-card-title
          >

          <v-divider class="mx-4 my-5"></v-divider>

          <v-card-text class="my-7">
            <v-form @submit.prevent="sendSearchData" ref="searchForm">
              <v-row justify="center">
                <v-col cols="12">
                  <v-text-field
                    label="Job Title"
                    name="jobTitle"
                    v-model="jobTitle"
                    type="text"
                    autofocus
                    clearable
                    :loading="loading"
                    hint="Required"
                    persistentHint
                    :prepend-icon="mdiDevices"
                    :rules="rules"
                    required
                  />
                </v-col>

                <v-col>
                  <v-text-field
                    label="Location"
                    name="jobLocation"
                    type="text"
                    clearable
                    :loading="loading"
                    hint="Required"
                    v-model="location"
                    persistentHint
                    prepend-icon="mdi-map-marker"
                    :rules="rules"
                  />
                </v-col>
              </v-row>

              <v-checkbox
                label="Work Remotely"
                v-model="workRemotely"
              ></v-checkbox>

              <div class="pa-4 mx-10">
                <v-btn type="submit" color="blue darken-4 white--text" block
                  >Submit</v-btn
                >
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiDevices } from '@mdi/js'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      rules: [v => !!v || 'This field is required'],
      jobTitle: '',
      location: '',
      workRemotely: false,
      loading: false,
      mdiDevices
    }
  },

  methods: {
    ...mapActions('notification', ['add']),

    sendSearchData() {
      if (!this.$refs.searchForm.validate())
        return this.add({
          type: 'error',
          massage: 'Please fill all the required fields'
        })

      this.loading = true

      this.$router.push({
        name: 'job-List',
        query: {
          location: this.workRemotely ? 'remote' : this.location,
          jobTitle: this.jobTitle
        }
      })
    }
  }
}
</script>

<style scoped></style>
