import { mapActions, mapGetters, mapState } from 'vuex'
import { truncate, stripTags } from '@/utili'
import { format } from 'date-fns'
import marked from 'marked'

import {
  mdiShareVariantOutline,
  mdiStarOutline,
  mdiMapMarker,
  mdiCalendarClock,
  mdiAccountClock,
  mdiStar
} from '@mdi/js'

export const jobMixin = {
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      truncate,
      stripTags,
      format,
      marked,
      mdiShareVariantOutline,
      mdiStarOutline,
      mdiMapMarker,
      mdiCalendarClock,
      mdiAccountClock,
      mdiStar,
      isLoading: false
    }
  },

  methods: {
    ...mapActions('user', ['savedJobs', 'removeSavedJob', 'openModal']),

    async saveJob(job) {
      if (this.loggedIn) {
        this.isLoading = true
        await this.savedJobs(job)
        this.isLoading = false
      } else {
        this.openModal()
      }
    },

    async unSaveJob(job) {
      this.isLoading = true
      await this.removeSavedJob(job)
      this.isLoading = false
    },

    apply() {
      if (this.loggedIn) {
        return alert('This feature will be added soon')
      }

      this.openModal()
    },

    share() {
      return alert('This feature will be added soon')
    },

    redirect() {
      if (this.loggedIn) {
        return alert('This feature will be added soon')
      }

      this.openModal()
    }
  },
  computed: {
    ...mapGetters('user', ['savedJob']),
    ...mapState({
      loggedIn: state => state.user.isLoggedIn
    })
  }
}
