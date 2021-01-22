<template>
  <div>
  <v-app>
    <router-view></router-view>
    <v-app-bar
      app
      color="#000000"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="conectt logo"
          class="shrink mr-2"
          src="./assets/conLogoZoomed.png"
          contain
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="connect name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="./assets/connectText.png"
          width="175"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="/profile" router>
        <span class="mr-2">View Your Profile</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-card>
      <v-card-title class="text-center justify-center py-3">
      </v-card-title>
    <v-tabs
      v-model="tab"
      background-color="black accent-4"
      left
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="/" router>
        Home
        <v-icon>mdi-home</v-icon>
      </v-tab>

      <v-tab href="/profile" router>
        Profile
        <v-icon>mdi-account-box</v-icon>
      </v-tab>

      <v-tab href="/posts" router>
        Posts
        <v-icon>mdi-post</v-icon>
      </v-tab>

      <v-tab href="/chats" router>
        Chats
        <v-icon>mdi-chat</v-icon>
      </v-tab>
    </v-tabs>

    

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="i in 3"
        :key="i"
        :value="'tab-' + i"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>


    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
  </div>
</template>

<script>


/* export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    
  }),
}; */ 
</script>
