<template>
  <v-alert
    class="radius"
    dense
    elevation="24"
    mode="in-out"
    :type="notification.type"
    >{{ notification.massage }}.</v-alert
  >
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      timeout: null
    }
  },
  // mounted() {
  //   this.timeout = setTimeout(() => this.remove(this.notification), 4000)
  // },
  // beforeDestroy() {
  //   clearTimeout(this.timeout)
  // },
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  methods: mapActions('notification', ['remove'])
}
</script>

<style scoped></style>
