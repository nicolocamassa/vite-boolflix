<script>
import axios from "axios";
import { store } from "../store";
import CardGen from "./CardGen.vue";
import AppHeader from "./AppHeader.vue";
import TvGen from "./TvGen.vue";

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
  components: {
    CardGen,
    AppHeader,
    TvGen
  }, methods:{

    /* AVVIO DELLA FUNZIONE TRAMITE PULSANTE */
    /* FIXME: LA QUERY DEVE RITORNARE ALLO STATO PRIMARIO QUANDO SI RICERCA NUOVAMENTE */
    searchClick() {
      if (this.store.search !== "") { /* SE SEARCH NON É VUOTO */
        this.store.endpoint += `&query=${this.store.search}`;
        this.store.endpoint_tv += `&query=${this.store.search}`; /* L'ELEMENTO CERCATO VIENE AGGIUNTO ALL'ENDPOINT */
        console.log(this.store.endpoint); /* TODO: DA ELIMINARE (VISUALIZZAZIONE ENDPOINT) */
        console.log(this.store.endpoint_tv);
      }

      /* CHIAMATA PER I FILM */
      axios.get(this.store.endpoint).then((response) => {
        this.store.films = response.data.results;
        console.log(this.store.films) /* TODO: DA ELIMINARE (RISULTATO FILM CERCATO) */
      });

      /* CHIAMATA PER LE SERIE TV */
      axios.get(this.store.endpoint_tv).then((response) => {
        this.store.tv_series = response.data.results;
        console.log(this.store.tv_series) /* TODO: DA ELIMINARE (RISULTATO FILM CERCATO) */
      });
    },
  }
};
</script>
<template lang="">

    <!-- RICERCA EFFETTUATA NELL'HEADER  -->
    <AppHeader @searchedFilm="searchClick" />

    <!-- GENERAZIONE DI TUTTE LE CARD RICERCATE -->
    <!-- TODO: SONO PIÙ PAGINE, FARE IN MODO DI SCORRERE TRA DI ESSE -->
    <CardGen v-for='(film, index) in store.films' :key="index" :film="film"/>
    <h1>Serie TV</h1>
    <TvGen v-for='(serie, index) in store.tv_series' :key="index" :serie="serie"/>

</template>
<style lang="scss" scoped>

</style>
