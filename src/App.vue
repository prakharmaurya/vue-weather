<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-icon class="mx-2">
          mdi-cloud
        </v-icon>
        <h2>
          Weather
        </h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn :to="route.path" color="accent">
        <v-icon>{{ route.icon }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view> </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    route() {
      if (this.$route.path === '/') {
        return { path: '/about', icon: 'mdi-alpha-a-box-outline' }
      } else if (this.$route.path === '/about') {
        return { path: '/', icon: 'mdi-home' }
      } else {
        return { path: '/', icon: 'mdi-home' }
      }
    },
  },
}
</script>
