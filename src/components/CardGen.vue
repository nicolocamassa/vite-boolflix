<!-- GENERAZIONE DELLA SINGOLA CARD DEL FILM -->

<script>
import { store } from "../store";

export default {
  name: "AppMain",
  props: {
    film: Object
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template lang="">
    <div class='card'>
        <h1>{{ film.title }}</h1>
  <h2>{{ film.original_title }}</h2>
  <div>{{ film.original_language }}</div>
  <div>{{ film.vote_average }}</div> <!-- TODO: 2 DECIMALI -->
    </div>
  
</template>
<style lang="scss" scoped>
    .card{
        color: white;
        margin-bottom: 40px;
    }
</style>