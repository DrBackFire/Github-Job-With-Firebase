<template>
  <v-row justify="center" align="center">
    <!-- Sign in with Google -->
    <v-col cols="12">
      <v-btn @click="signInWithGoogle" block outlined color="red" rounded>
        <v-icon left>
          {{ mdiGoogle }}
        </v-icon>
        Sign in with Google
      </v-btn>
    </v-col>

    <!-- Sign in with GitHub -->
    <v-col cols="12">
      <v-btn @click="signInWithGitHub" block outlined rounded>
        <v-icon left>
          {{ mdiGithub }}
        </v-icon>
        Sign in with GitHub
      </v-btn>
    </v-col>

    <!-- Sign in with Twitter -->
    <v-col cols="12">
      <v-btn @click="signInWithTwitter" block outlined color="primary" rounded>
        <v-icon left>
          {{ mdiTwitter }}
        </v-icon>
        Sign in with Twitter
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mdiGoogle, mdiTwitter, mdiGithub } from '@mdi/js'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      mdiGoogle,
      mdiTwitter,
      mdiGithub
    }
  },

  methods: mapActions('user', [
    'signInWithGoogle',
    'signInWithGitHub',
    'signInWithTwitter'
  ])
}
</script>

<style scoped></style>
