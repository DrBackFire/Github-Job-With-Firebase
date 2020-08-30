<template>
  <v-row justify="center" align="center">
    <!-- Sign in with Google -->
    <v-col cols="12">
      <v-btn block outlined color="red" rounded>
        <v-icon left>
          {{ mdiGoogle }}
        </v-icon>
        Sign in with Google
      </v-btn>
    </v-col>

    <!-- Sign in with Apple -->
    <v-col cols="12">
      <v-btn block outlined rounded>
        <v-icon left>
          {{ mdiApple }}
        </v-icon>
        Sign in with Apple
      </v-btn>
    </v-col>

    <!-- Sign in with Facebook -->
    <v-col cols="12">
      <v-btn block outlined color="primary" rounded>
        <v-icon left>
          {{ mdiFacebook }}
        </v-icon>
        Sign in with Facebook
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mdiGoogle, mdiApple, mdiFacebook } from '@mdi/js'
export default {
  data() {
    return {
      mdiGoogle,
      mdiApple,
      mdiFacebook
    }
  }
}
</script>

<style scoped></style>
