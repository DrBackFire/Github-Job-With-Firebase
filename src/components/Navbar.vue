/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */
<template>
  <div>
    <v-app-bar color="grey darken-4" dark app>
      <router-link to="/">
        <v-toolbar-title class="white--text pl-3">GITHUB JOBS</v-toolbar-title>
      </router-link>

      <v-spacer />

      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-if="isLoggedIn" :to="{ name: 'Dashboard' }" color="white" text>
          <v-icon icon left>{{ mdiDesktopMacDashboard }}</v-icon
          >Dashboard
        </v-btn>

        <v-btn :to="{ name: 'About' }" color="white" text>
          <v-icon>{{ mdiInformationVariant }}</v-icon
          >About
        </v-btn>

        <v-btn v-if="!isLoggedIn" :to="{ name: 'Register' }" color="white" text>
          <v-icon left>{{ mdiAccount }}</v-icon
          >Register
        </v-btn>

        <v-btn v-if="!isLoggedIn" :to="{ name: 'Login' }" color="white" text>
          <v-icon left>{{ mdiAccount }}</v-icon
          >Login
        </v-btn>

        <v-btn v-else @click="logout()" color="white" text>
          <v-icon left>{{ mdiAccount }}</v-icon
          >Logout
        </v-btn>
      </v-toolbar-items>

      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon
          v-model="drawer"
          app
          temporary
          right
          class="hidden-xs-and-down"
        ></v-app-bar-nav-icon>
      </span>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      right
      class="hidden-xs-and-down"
    >
      <v-list dense>
        <router-link :to="{ name: 'About' }">
          <v-list-item link>
            <v-list-item-action>
              <v-icon></v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link :to="{ name: 'Register' }">
          <v-list-item link>
            <v-list-item-action>
              <v-icon></v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Register</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>{{ mdiAccount }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>User</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>{{ mdiCog }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {
  mdiAccount,
  mdiCog,
  mdiInformationVariant,
  mdiMagnify,
  mdiDesktopMacDashboard
} from '@mdi/js'
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    drawer: null,
    mdiAccount,
    mdiCog,
    mdiInformationVariant,
    mdiMagnify,
    mdiDesktopMacDashboard
  }),

  methods: mapActions('user', ['logout']),

  computed: mapState('user', ['isLoggedIn'])
}
</script>

<style scoped>
a {
  display: flex;
  align-items: center;
}

a:visited {
  background: #212121 !important;
}
</style>
