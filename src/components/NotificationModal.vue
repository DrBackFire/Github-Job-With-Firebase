<template>
  <v-row justify="center">
    <v-dialog
      v-model="openModal"
      persistent
      width="600px"
      transition="scale-transition"
      ransition="scale-transition"
    >
      <v-card>
        <v-card-title>{{ notification.type.toUpperCase() }}</v-card-title>
        <v-card-text class="font-weight-bold">{{ notification.massage }}</v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-4 white--text" block @click="remove(notification)">OK!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      timeout: null
    }
  },
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  methods: mapActions('notification', ['remove']),

  computed: mapState({
    openModal: state => state.notification.showNotification
  })
}
</script>

<style scoped></style>
