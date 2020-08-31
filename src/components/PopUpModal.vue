<template>
  <v-row justify="center">
    <v-dialog
      v-model="openModal"
      width="600px"
      transition="scale-transition"
      persistent
      @click:outside="closeModal"
      @keydown="closeModal"
    >
      <v-card>
        <v-card-title class="headline mt-3 text-center">
          You Don't have an account?
        </v-card-title>
        <v-divider class="mx-4 my-5"></v-divider>
        <v-card-text>
          <BaseSignInOptions />

          <div class="separator my-3">OR</div>

          <v-row justify="center" align="center" class="mt-3">
            <v-btn text :to="{ name: 'Register' }" block @click="closeModal">
              New to GitJobs? Create an account
            </v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: mapActions('user', ['closeModal']),

  computed: mapState({
    openModal: state => state.user.signInPopModal
  })
}
</script>

<style scoped></style>
