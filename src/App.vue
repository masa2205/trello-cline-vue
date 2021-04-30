<template>
  <v-app>
    <Header/>
    <v-content class="overflow-x-auto">
      <router-view/>
    </v-content>
    <v-main>
    </v-main> 
  </v-app>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
<style >
.router-transition-enter-active {
animation: fadeIn 1s;
animation-delay: .5s;
opacity: 0;
}
</style>

