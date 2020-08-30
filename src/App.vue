<template>
  <v-app app>
    <Navbar />
    <v-main>
      <NotificationContainer />

      <transition name="slide-fade" mode="out-in">
        <router-view :key="$route.fullPath" />
      </transition>
      <v-btn
        fab
        dark
        right
        fixed
        bottom
        v-show="fab"
        color="dark"
        @click="toTop"
        v-scroll="onScroll"
        class="shadow__ app__scrollup"
      >
        <v-icon>{{ mdiArrowUpBold }}</v-icon>
      </v-btn>
    </v-main>
    <!-- <v-footer app>
      <span></span>
    </v-footer>-->
  </v-app>
</template>

<script>
import { mdiArrowUpBold } from '@mdi/js'
import Navbar from '@/components/Navbar.vue'
import NotificationContainer from '@/components/NotificationContainer.vue'

export default {
  components: {
    Navbar,
    NotificationContainer
  },

  data: () => ({
    fab: false,
    mdiArrowUpBold
  }),

  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    }
  }
}
</script>

<style>
body::-webkit-scrollbar {
  display: none;
}
body {
  background: #eeeeee !important;
  margin: 0;
  font-family: 'Times New Roman', Times, serif;
  font-size: 16px;
  line-height: 1.5;
}
#app {
  background: #eeeeee !important;
}

.separator {
  display: flex;
  align-items: center;
  text-align: center;
}
.separator::before,
.separator::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid rgb(171, 175, 182);
}
.separator::before {
  margin-right: 1em;
}
.separator::after {
  margin-left: 1em;
}

a {
  text-decoration: none;
  color: #2962ff !important;
}

.shadow__ {
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
}

.radius {
  border-radius: 20px !important;
}

.app__scrollup {
  transition: all 0.2s linear;
}

.app__scrollup:hover {
  transform: scale(1.08);
}

/* Transitions */

.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
