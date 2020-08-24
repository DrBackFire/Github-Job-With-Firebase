<template>
  <div>
    <v-app-bar color="grey darken-4" app>
      <router-link to="/">
        <v-toolbar-title class="white--text pl-3">
          GITHUB JOBS
        </v-toolbar-title>
      </router-link>

      <v-spacer />

      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" color="white" text>
          <v-icon left> {{ mdiMagnify }} </v-icon>
          Search
        </v-btn>

        <v-btn :to="{ name: 'About' }" color="white" text>
          <v-icon> {{ mdiInformationVariant }} </v-icon>
          About
        </v-btn>

        <v-btn :to="{ name: 'Register' }" color="white" text>
          <v-icon left>{{ mdiAccount }}</v-icon>
          Register
        </v-btn>
      </v-toolbar-items>

      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white" />
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
import { mdiAccount, mdiCog, mdiInformationVariant, mdiMagnify } from '@mdi/js'
export default {
  data: () => ({
    drawer: null,
    mdiAccount,
    mdiCog,
    mdiInformationVariant,
    mdiMagnify
  })
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
