<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store";
import CardGen from "./components/CardGen.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    CardGen,
  },
  data() {
    return {
      store,
    };
  },
  methods: {},
};
</script>

<template>
  <div>
    <AppMain />

    <!-- TODO: 
      AGGIUNGERE CAST E GENERE DEI FILM [MILESTONE 5] !!!
      AGGIUNGERE FILTRO PER IL GENERE [MILESTONE 6] !!!

      FILM SUGGERITI NELLA HOME PAGE
      FARE IN MODO CHE SI POSSA PRENDERE I BACKDROPS E IL TRAILER NEL JUMBOTRON

      FIXME: 
      RISOLVERE LA SUDDIVISIONE TRA FILM E SERIE TV (TITOLO)
    -->
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
