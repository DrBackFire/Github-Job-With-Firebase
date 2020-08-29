import { mapActions, mapGetters } from 'vuex'
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
    ...mapActions('user', ['savedJobs', 'removeSavedJob']),

    saveJob(job) {
      this.isLoading = true
      this.savedJobs(job).then(() => (this.isLoading = false))
    },

    unSaveJob(job) {
      this.isLoading = true

      this.removeSavedJob(job).then(() => (this.isLoading = false))
    }
  },

  computed: mapGetters('user', ['savedJob'])
}
