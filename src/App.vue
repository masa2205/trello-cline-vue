<template>
  <v-app>
    <Header/>
    <v-content class="overflow-x-auto">
      <router-view/>
    </v-content>
    <v-main>
     <TheBoards/>
    </v-main> 
  </v-app>
</template>

<script>
import Header from './components/Header';
import TheBoards from './components/TheBoards';

export default {
  name: 'App',
  components: {
    Header,
    TheBoards
  },
};
</script>
