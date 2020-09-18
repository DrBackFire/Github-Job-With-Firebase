<template>
  <v-card class="shadow__ pa-5 radius" color="#FAFAFA">
    <v-card-title class="justify-center my-2 text-lg-h3 text-h4 font-weight-bold">Sign In</v-card-title>

    <v-divider class="mx-4 my-5"></v-divider>

    <v-card-text>
      <v-form @submit.prevent="userLogin">
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Email"
              v-model="user.email"
              :prepend-icon="mdiEmail"
              :rules="emailRules"
              :loading="isLoading"
            />
          </v-col>
          <v-col>
            <v-text-field
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              v-model="user.password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :prepend-icon="mdiLockQuestion"
              @click:append="showPassword = !showPassword"
              :rules="generalRules"
              :loading="isLoading"
            />
          </v-col>
        </v-row>

        <v-row justify="center" class="mt-4">
          <v-col cols="12">
            <v-btn type="submit" color="blue darken-4 white--text" block rounded>Submit</v-btn>
          </v-col>
        </v-row>
      </v-form>

      <div class="separator my-3">OR</div>

      <BaseSignInOptions />

      <v-row justify="center" align="center" class="mt-3">
        <v-btn text :to="{ name: 'Register' }" block>New to GitJobs? Create an account</v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { signInRegisterMixin } from '@/mixins/signInRegisterMixin'
import { mapActions } from 'vuex'

export default {
  mixins: [signInRegisterMixin],

  methods: {
    ...mapActions('user', ['login']),

    async userLogin() {
      this.isLoading = true
      await this.login(this.user)

      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: underline;
}
</style>
