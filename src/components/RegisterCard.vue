<template>
  <v-card class="shadow__ pa-5 radius" color="#FAFAFA">
    <v-card-title
      class="justify-center my-2 text-lg-h4 text-h5 font-weight-bold"
      >Create an Account (it's free)</v-card-title
    >
    <v-divider class="mx-4 my-5"></v-divider>
    <v-card-text>
      <v-form @submit.prevent="userRegister">
        <v-row>
          <v-col cols="12">
            <v-text-field
              hide-details="auto"
              label="Email"
              v-model="user.email"
              :prepend-icon="mdiEmail"
              autofocus
              :rules="emailRules"
            />
          </v-col>

          <v-col cols="12">
            <v-text-field
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              v-model="user.password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :prepend-icon="mdiLockQuestion"
              @click:append="showPassword = !showPassword"
              :rules="generalRules"
            />
          </v-col>
        </v-row>

        <v-row justify="center" class="mt-3">
          <v-col cols="12">
            <v-btn type="submit" color="blue darken-4 white--text" block rounded
              >Submit</v-btn
            >
          </v-col>
        </v-row>
      </v-form>

      <div class="separator my-3">OR</div>
      <BaseSignInOptions />

      <v-row justify="center" align="center" class="mt-3">
        <v-btn text :to="{ name: 'SignIn' }" block>
          Have an account? Sign in
        </v-btn>
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
    ...mapActions('user', ['register']),

    userRegister() {
      this.register({
        email: this.user.email,
        password: this.user.password,
        name: this.user.name,
        title: this.user.title
      })
    }
  }
}
</script>

<style scoped></style>
