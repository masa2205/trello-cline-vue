<template>
  <v-container>
    <the-boards />
    <router-link to="/boards"></router-link>
  </v-container>
</template>

<script>
import TheBoards from '@/components/TheBoards.vue';
export default {
  name: 'PageBoards',
  components: {
    TheBoards,
  },
};
</script>