<template>
  <div class="notification__bar mt-5">
    <NotificationBar
      type="error"
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NotificationBar from '@/components/NotificationBar.vue'

export default {
  components: {
    NotificationBar
  },
  computed: mapState({
    notifications: state => state.notification.notifications
  })
}
</script>

<style scoped>
.notification__bar {
  max-width: 500px;
  right: 10px;
  top: 0;
  position: absolute;
  margin: auto;
}
</style>
