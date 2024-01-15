<!-- GENERAZIONE DELLA SINGOLA CARD DEL FILM -->

<script>
import { store } from "../store";

export default {
  name: "AppMain",
  props: {
    film: Object,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    generateFlagImageUrl(language) {
        /* API Bandiera con lingua. */
        return `https://www.unknown.nu/flags/images/${language}-100`
    },

    generateCoverImage(path) {
        if(path == null){
            return `https://picsum.photos/200/300`;
            
        }

      return `https://image.tmdb.org/t/p/w342/${path}`;
    },
}
};
</script>
<template lang="">
  <div class="card">
    <img :src="generateCoverImage(film.poster_path)" alt="" />
    <h1>{{ film.title }}</h1>
    <h2>{{ film.original_title }}</h2>
    <div>{{ film.vote_average }}</div> <!-- TODO: 2 DECIMALI -->
    <img :src="generateFlagImageUrl(film.original_language)" alt="">
    
  </div>
</template>
<style lang="scss" scoped>
.card {
  color: white;
  margin-bottom: 40px;
}
</style>
