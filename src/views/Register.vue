<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="my-10">
      <v-col md="9">
        <v-card class="mx-auto my-8 shadow__ pa-5 radius" color="#FAFAFA">
          <v-card-title class="justify-center my-2 text-md-h4 font-weight-bold">User Registration</v-card-title>

          <v-divider class="mx-4 my-5"></v-divider>

          <v-card-text class="my-7">
            <v-form @submit.prevent="register">
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
import { loginRegisterMixin } from '@/mixins/loginRegisterMixin'
import { firebaseAuth } from '../services/firebase'
import { mapActions } from 'vuex'

export default {
  mixins: [loginRegisterMixin],

  methods: {
    ...mapActions('notification', ['add']),

    async register() {
      try {
        const { user } = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        )

        console.log(user)
      } catch (err) {
        this.add({
          type: 'error',
          massage: err
        })
      }
    }
  }
}
</script>

<style scoped></style>
