<template>
  <v-app>
    <Header/>
    <v-content class="overflow-x-auto">
      <router-view/>
    </v-content>
    <v-main>
     <HelloWorld/>
    </v-main> 
  </v-app>
</template>

<script>
import Header from './components/Header';
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    Header,
    HelloWorld
  },
};
</script>
