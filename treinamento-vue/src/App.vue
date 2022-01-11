<template>
  <v-app>

    <app-header/>
    <v-content>
      <router-view />
    </v-content>
    <feedback/>

  </v-app>
</template>

<script>
import AppHeader from './components/header/AppHeader.vue'
import Feedback from './components/feedback/Feedback.vue'

export default {
  name: 'App',
  components:{Feedback, AppHeader},
};
</script>
