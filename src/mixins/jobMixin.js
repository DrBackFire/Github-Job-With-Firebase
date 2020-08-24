import { truncate, stripTags } from '@/utili'
import { format } from 'date-fns'
import marked from 'marked'

import {
  mdiShareVariantOutline,
  mdiStarOutline,
  mdiMapMarker,
  mdiCalendarClock,
  mdiAccountClock
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
      mdiAccountClock
    }
  }
}
