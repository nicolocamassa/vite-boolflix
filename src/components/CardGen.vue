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
        return `https://flagcdn.com/16x12/${language}.png`
    }
}
};
</script>
<template lang="">
  <div class="card">
    <h1>{{ film.title }}</h1>
    <h2>{{ film.original_title }}</h2>
    <div>{{ film.original_language }}</div>
    <div>{{ film.vote_average }}</div> <!-- TODO: 2 DECIMALI -->
    <img :src="generateFlagImageUrl(film.original_language)" alt="">
    <!-- TODO: CERCARE API BANDIERE (LINGUA -> STATO -> BANDIERA [big data cloud]) o (LINGUA -> BANDIERA [non trovato])-->
  </div>
</template>
<style lang="scss" scoped>
.card {
  color: white;
  margin-bottom: 40px;
}
</style>
