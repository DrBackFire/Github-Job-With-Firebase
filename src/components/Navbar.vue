/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */
<template>
  <div>
    <v-app-bar color="grey darken-4" dark app>
      <router-link to="/">
        <v-toolbar-title class="white--text pl-3">GITJOBS</v-toolbar-title>
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

        <v-btn v-if="!isLoggedIn" :to="{ name: 'SignIn' }" color="white" text>
          <v-icon left>{{ mdiAccount }}</v-icon
          >Sign In
        </v-btn>

        <v-btn v-else @click="logout()" color="white" text>
          <v-icon left>{{ mdiLogout }}</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>

      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
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
        <v-list-item v-if="isLoggedIn" link>
          <router-link class="black--text" :to="{ name: 'Dashboard' }">
            <v-list-item-action>
              <v-icon icon left>{{ mdiDesktopMacDashboard }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Dashboard
              </v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>

        <v-list-item v-if="!isLoggedIn" link>
          <router-link class="black--text" :to="{ name: 'SignIn' }">
            <v-list-item-action>
              <v-icon left>{{ mdiAccount }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Sign In
              </v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>

        <v-list-item v-else @click="logout()" link>
          <v-list-item-action>
            <v-icon left>{{ mdiLogout }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Logout
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <router-link class="black--text" :to="{ name: 'About' }">
            <v-list-item-action>
              <v-icon></v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                About
              </v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {
  mdiAccount,
  mdiInformationVariant,
  mdiDesktopMacDashboard,
  mdiLogout
} from '@mdi/js'
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    drawer: null,
    mdiAccount,
    mdiInformationVariant,
    mdiLogout,
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
