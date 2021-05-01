<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      right="right"
      permanent
      expand-on-hover
      fixed
      height="240"
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="imgs/avatar.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>{{ user.fullName }}</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>

      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title"> Email </v-list-item-title>
            <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list>
        <v-list-item link>
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
