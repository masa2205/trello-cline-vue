<template>
  <v-app>
    <Header/>
    <v-content class="overflow-x-auto">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header
  },
};
</script>
