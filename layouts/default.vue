<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" clipped app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact
          active-class="teal--text text--darken-4">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-left app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app absolute>
      <v-col cols="12">
        <v-row justify="center">
      <span>&copy; Wesley {{ new Date().getFullYear() }}</span></v-row></v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-file-multiple',
          title: 'Projects',
          to: '/projects'
        },
        {
          icon: 'mdi-account-multiple',
          title: 'Members',
          to: '/members'
        }
      ],
      miniVariant: false,
      title: 'Project Manager'
    }
  }
}
</script>
