<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      permanent
      expand-on-hover
      fixed
      height="210"
      width="270"
    >
      <v-list-item class="px-2 accent">
        <v-list-item-avatar>
          <v-img src="imgs/developer.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-title class="white--text">{{
          user.fullName
        }}</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>

      <v-list class="py-0">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>fas fa-envelope</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="title"> Email </v-list-item-title>
            <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list class="py-0">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>fas fa-folder-open</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="title"> github </v-list-item-title>
            <v-list-item-subtitle
              ><a :href="user.github" target="_blank">{{
                user.github
              }}</a></v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      fixed: true,
      miniVariant: false,
      title: 'Portfolio',
      user: {
        initials: 'HW',
        fullName: '이한울',
        email: 'starry.hanwool@gmail.com',
        github: 'https://github.com/starry-hanwool?tab=repositories',
      },
    }
  },
}
</script>
<style>
.theme--light.v-application {
  background-color: var(--v-background-base, white) !important;
}
.container {
  padding-top: 0 !important;
}
</style>
