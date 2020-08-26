<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="my-10">
      <v-col md="9">
        <v-card class="mx-auto my-8 shadow__ pa-5 radius" color="#FAFAFA">
          <v-card-title class="justify-center my-2 text-md-h4 font-weight-bold">Login</v-card-title>

          <v-divider class="mx-4 my-5"></v-divider>

          <v-card-text class="my-7">
            <v-form @submit.prevent="login">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    hide-details="auto"
                    label="Email"
                    v-model="email"
                    :prepend-icon="mdiEmail"
                    autofocus
                    :rules="rules"
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    hide-details="auto"
                    label="Password"
                    :type="showPassword ? 'text' : 'password'"
                    v-model="password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :prepend-icon="mdiLockQuestion"
                    @click:append="showPassword = !showPassword"
                    :rules="[v => !!v || 'Password is required']"
                  />
                </v-col>
              </v-row>

              <v-row justify="center" class="mt-6">
                <v-col cols="12">
                  <v-btn type="submit" color="blue darken-4 white--text" block>Submit</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiEmail, mdiLockQuestion } from '@mdi/js'

export default {
  data() {
    return {
      mdiEmail,
      mdiLockQuestion,
      showPassword: false,
      email: '',
      password: '',
      rules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      ]
    }
  },

  methods: {
    login() {}
  }
}
</script>

<style scoped></style>
