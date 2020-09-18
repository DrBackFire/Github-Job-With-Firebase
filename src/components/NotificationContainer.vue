<template>
  <div>
    <NotificationModal
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NotificationModal from '@/components/NotificationModal.vue'

export default {
  components: {
    NotificationModal
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
